import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "Common/BreadCrumb";
import Modal from "Common/Components/Modal";
import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";

// Redux actions
import {
  getAllQuizSets,
  createQuizSet,
  updateQuizSet,
  deleteQuizSet,
  setQuizSetAsDefault,
} from "../../slices/quizset/thunk";

import {
  getAllQuizQuestions,
  createQuizQuestion,
  updateQuizQuestion,
  deleteQuizQuestion,
  getQuizQuestionsBySetId,
  createQuizQuestionForSet,
  updateQuizQuestionForSet,
  deleteQuizQuestionForSet,
} from "slices/quizquestion/thunk";

import {
  getAllQuizOptions,
  createQuizOption,
  updateQuizOption,
  deleteQuizOption,
  getQuizOptionsByQuestionId,
  createQuizOptionByQuestionId,
  updateQuizOptionByQuestionId,
  deleteQuizOptionByQuestionId,
} from "slices/quizoption/thunk";

// Icon imports
import {
  MoreHorizontal,
  Eye,
  FileEdit,
  Trash2,
  Search,
  Plus,
  ChevronDown,
  Check,
} from "lucide-react";

// Types definitions based on the database schema
interface QuizSet {
  id: string;
  name: string;
  isDefault?: boolean;
}

interface QuizQuestion {
  id: string;
  setId: string;
  value: string;
}

interface QuizOption {
  id: string;
  questionId: string;
  value: string;
  score: number;
}

const SurveyQuestion = () => {
  const dispatch = useDispatch();

  // Selected items
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<{
    [key: string]: boolean;
  }>({});

  // Modals
  const [openSetDialog, setOpenSetDialog] = useState<boolean>(false);
  const [openQuestionDialog, setOpenQuestionDialog] = useState(false);
  const [openOptionDialog, setOpenOptionDialog] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData] = useState<{ type: string; id: string }>({
    type: "",
    id: "",
  });

  // Form states
  const [currentSet, setCurrentSet] = useState<Partial<QuizSet>>({ name: "" });
  const [currentQuestion, setCurrentQuestion] = useState<Partial<QuizQuestion>>(
    { value: "" }
  );
  const [currentOption, setCurrentOption] = useState<Partial<QuizOption>>({
    value: "",
    score: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Pagination
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });

  // Add this local state to keep a backup of the questions
  const [localQuestions, setLocalQuestions] = useState<QuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Update the selector to correctly access the quizQuestions array
  const { quizSets, quizQuestions, quizOptions, loading, error } = useSelector(
    (state: any) => {
      console.log("Full Redux state:", state);
      console.log("Quiz Question state:", state.quizQuestion);

      return {
        quizSets: state.QuizSet?.quizSets?.data?.items || [],
        quizQuestions: state.quizQuestion?.quizQuestions || [], // This might be the issue
        quizOptions: state.quizOption?.quizOptions || [],
        loading:
          state.QuizSet?.loading ||
          state.quizQuestion?.loading ||
          state.quizOption?.loading,
        error:
          state.QuizSet?.error ||
          state.quizQuestion?.error ||
          state.quizOption?.error,
      };
    }
  );

  // Fetch quiz sets on component mount
  useEffect(() => {
    dispatch(getAllQuizSets(pagination) as any);
  }, [dispatch, pagination]);

  // Fetch quiz questions when a set is selected
  useEffect(() => {
    if (selectedSet) {
      console.log("Selected set ID:", selectedSet);
      // Reset expanded questions and selected question when changing sets
      setExpandedQuestions({});
      setSelectedQuestion(null);

      // Clear the current questions before fetching new ones
      setLocalQuestions([]);

      // Add a console log to track the API call
      console.log("Fetching questions for set ID:", selectedSet);

      // Dispatch the action to fetch questions for the selected set
      dispatch(getQuizQuestionsBySetId(selectedSet) as any)
        .then((response: any) => {
          console.log("API response for questions:", response);

          // Store the questions in local state as a backup
          if (response && response.payload && response.payload.data) {
            console.log(
              "Setting local questions from payload.data:",
              response.payload.data
            );
            setLocalQuestions(response.payload.data);
          } else if (response && response.data) {
            console.log("Setting local questions from data:", response.data);
            setLocalQuestions(response.data);
          } else if (Array.isArray(response)) {
            console.log(
              "Setting local questions from array response:",
              response
            );
            setLocalQuestions(response);
          } else {
            console.error("Unexpected response format:", response);
            setLocalQuestions([]);
          }
        })
        .catch((error: any) => {
          console.error("Error fetching questions:", error);
          setLocalQuestions([]);
        });
    }
  }, [selectedSet, dispatch]);

  // Fetch quiz options when a question is selected
  useEffect(() => {
    if (selectedQuestion) {
      dispatch(getQuizOptionsByQuestionId(selectedQuestion) as any);
    }
  }, [selectedQuestion, dispatch]);

  // Toggle question expansion
  const toggleQuestionExpand = (questionId: string) => {
    // Close all other questions first
    const newExpandedState: { [key: string]: boolean } = {};

    // Toggle the clicked question
    setExpandedQuestions((prev) => {
      const newState = { ...newExpandedState };
      newState[questionId] = !prev[questionId];
      return newState;
    });

    if (!expandedQuestions[questionId]) {
      setSelectedQuestion(questionId);
      // Fetch options for this question
      dispatch(getQuizOptionsByQuestionId(questionId) as any);
    } else {
      setSelectedQuestion(null);
    }

    // Prevent scrolling to top
    setTimeout(() => {
      const element = document.getElementById(`question-${questionId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 100);
  };

  // Delete modal handlers
  const deleteToggle = () => setDeleteModal(!deleteModal);

  const onClickDelete = (type: string, id: string) => {
    setDeleteData({ type, id });
    setDeleteModal(true);
  };

  // Also add this helper function to make the code more DRY
  const updateLocalQuestionsFromResponse = (response : any) => {
    if (response && response.payload && response.payload.data) {
      setLocalQuestions(response.payload.data);
    } else if (response && response.data) {
      setLocalQuestions(response.data);
    } else if (Array.isArray(response)) {
      setLocalQuestions(response);
    } else {
      console.error("Unexpected response format:", response);
    }
  };

  const handleDelete = () => {
    if (deleteData.type === "set" && deleteData.id) {
      dispatch(deleteQuizSet(deleteData.id) as any).then(() => {
        dispatch(getAllQuizSets(pagination) as any);
      });
    } else if (deleteData.type === "question" && deleteData.id) {
      if (!selectedSet) {
        toast.error("Missing set ID");
        setDeleteModal(false);
        return;
      }

      setIsLoading(true); // Show loading state

      dispatch(
        deleteQuizQuestionForSet({
          setId: selectedSet,
          questionId: deleteData.id,
        }) as any
      )
        .then(() => {
          // After deleting, fetch fresh data
          return dispatch(getQuizQuestionsBySetId(selectedSet) as any);
        })
        .then((response: any) => {
          // Update local questions with the response data
          if (response && response.payload && response.payload.data) {
            setLocalQuestions(response.payload.data);
          } else if (response && response.data) {
            setLocalQuestions(response.data);
          } else if (Array.isArray(response)) {
            setLocalQuestions(response);
          }
          setIsLoading(false);
        })
        .catch((error: any) => {
          console.error("Error deleting question:", error);
          toast.error("Failed to delete question. Please try again.");
          setIsLoading(false);
        });
    } else if (deleteData.type === "option" && deleteData.id) {
      if (!selectedQuestion) {
        toast.error("Missing question ID");
        setDeleteModal(false);
        return;
      }

      dispatch(
        deleteQuizOptionByQuestionId({
          questionId: selectedQuestion,
          optionId: deleteData.id,
        }) as any
      ).then(() => {
        if (selectedQuestion) {
          dispatch(getQuizOptionsByQuestionId(selectedQuestion) as any);
        }
      });
    }
    setDeleteModal(false);
  };

  // Set management handlers with Redux
  const handleAddSet = () => {
    const newSet = {
      name: currentSet.name || "New Quiz Set",
      isDefault: currentSet.isDefault || false,
    };

    dispatch(createQuizSet(newSet) as any);
    setOpenSetDialog(false);
    setCurrentSet({ name: "", isDefault: false });
  };

  const handleEditSet = () => {
    if (!currentSet.id) return;

    const updatedSet = {
      id: currentSet.id,
      data: {
        name: currentSet.name,
        isDefault: currentSet.isDefault,
      },
    };

    dispatch(updateQuizSet(updatedSet) as any);
    setOpenSetDialog(false);
    setCurrentSet({ name: "", isDefault: false });
    setIsEditing(false);
  };

  // Question management handlers (still using local state for now)
  const handleAddQuestion = () => {
    if (!selectedSet) {
      toast.error("Please select a quiz set first");
      return;
    }

    const newQuestion = {
      value: currentQuestion.value || "New Question",
    };

    setIsLoading(true);

    dispatch(
      createQuizQuestionForSet({
        setId: selectedSet,
        data: newQuestion,
      }) as any
    )
      .then((response: any) => {
        return dispatch(getQuizQuestionsBySetId(selectedSet) as any);
      })
      .then((response: any) => {
        // Update local questions with the response data
        if (response && response.payload && response.payload.data) {
          setLocalQuestions(response.payload.data);
        } else if (response && response.data) {
          setLocalQuestions(response.data);
        } else if (Array.isArray(response)) {
          setLocalQuestions(response);
        }
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error handling question:", error);
        toast.error("Failed to add question. Please try again.");
        setIsLoading(false);
      });

    setOpenQuestionDialog(false);
    setCurrentQuestion({ value: "" });
  };

  const handleEditQuestion = () => {
    if (!currentQuestion.id || !selectedSet) {
      toast.error("Missing question ID or set ID");
      return;
    }

    const updatedQuestion = {
      value: currentQuestion.value,
    };

    setIsLoading(true); // Show loading state while operation completes

    dispatch(
      updateQuizQuestionForSet({
        setId: selectedSet,
        questionId: currentQuestion.id,
        data: updatedQuestion,
      }) as any
    )
      .then(() => {
        // Directly refresh questions from the API to ensure we have latest data
        return dispatch(getQuizQuestionsBySetId(selectedSet) as any);
      })
      .then((response: any) => {
        // Update local questions with the response data
        if (response && response.payload && response.payload.data) {
          setLocalQuestions(response.payload.data);
        } else if (response && response.data) {
          setLocalQuestions(response.data);
        } else if (Array.isArray(response)) {
          setLocalQuestions(response);
        }
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error updating question:", error);
        toast.error("Failed to update question. Please try again.");
        setIsLoading(false);
      });

    setOpenQuestionDialog(false);
    setCurrentQuestion({ value: "" });
    setIsEditing(false);
  };
  // Option management handlers
  const handleAddOption = () => {
    if (!selectedQuestion) {
      toast.error("Please select a question first");
      return;
    }

    const newOption = {
      value: currentOption.value || "New Option",
      score: currentOption.score || 0,
    };

    dispatch(
      createQuizOptionByQuestionId({
        questionId: selectedQuestion,
        data: newOption,
      }) as any
    ).then(() => {
      if (selectedQuestion) {
        dispatch(getQuizOptionsByQuestionId(selectedQuestion) as any);
      }
    });
    setOpenOptionDialog(false);
    setCurrentOption({ value: "", score: 0 });
  };

  const handleEditOption = () => {
    if (!currentOption.id || !selectedQuestion) {
      toast.error("Missing option ID or question ID");
      return;
    }

    const updatedOption = {
      value: currentOption.value,
      score: currentOption.score,
    };

    dispatch(
      updateQuizOptionByQuestionId({
        questionId: selectedQuestion,
        optionId: currentOption.id,
        data: updatedOption,
      }) as any
    ).then(() => {
      if (selectedQuestion) {
        dispatch(getQuizOptionsByQuestionId(selectedQuestion) as any);
      }
    });
    setOpenOptionDialog(false);
    setCurrentOption({ value: "", score: 0 });
    setIsEditing(false);
  };

  // Set dialog toggle
  const toggleSetDialog = useCallback(() => {
    if (openSetDialog) {
      setOpenSetDialog(false);
      setCurrentSet({ name: "", isDefault: false });
      setIsEditing(false);
    } else {
      setOpenSetDialog(true);
    }
  }, [openSetDialog]);

  // Question dialog toggle
  const toggleQuestionDialog = useCallback(() => {
    if (openQuestionDialog) {
      setOpenQuestionDialog(false);
      setCurrentQuestion({ value: "" });
      setIsEditing(false);
    } else {
      setOpenQuestionDialog(true);
    }
  }, [openQuestionDialog]);

  // Option dialog toggle
  const toggleOptionDialog = useCallback(() => {
    if (openOptionDialog) {
      setOpenOptionDialog(false);
      setCurrentOption({ value: "", score: 0 });
      setIsEditing(false);
    } else {
      setOpenOptionDialog(true);
    }
  }, [openOptionDialog]);

  // Add handler for setting a quiz set as default
  const handleSetDefault = (setId: string) => {
    dispatch(setQuizSetAsDefault(setId) as any).then(() => {
      // Refresh the quiz sets after setting default
      dispatch(getAllQuizSets(pagination) as any);
    });
  };

  // Table columns for quiz sets
  const setColumns = [
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <button
          type="button"
          className="text-left flex items-center gap-2 w-full"
          onClick={() => {
            const newSetId = cell.row.original.id;
            console.log("Clicking set with ID:", newSetId);

            // Set loading state
            setIsLoading(true);

            // Clear current questions and set the new selected set
            setLocalQuestions([]);
            setSelectedSet(newSetId);

            // Manually fetch questions for this set
            fetch(`/api/quiz-sets/${newSetId}/questions`)
              .then((response) => response.json())
              .then((data) => {
                console.log("Direct fetch response:", data);
                // Handle different response formats
                if (Array.isArray(data)) {
                  setLocalQuestions(data);
                } else if (data && data.data && Array.isArray(data.data)) {
                  setLocalQuestions(data.data);
                } else if (data && data.items && Array.isArray(data.items)) {
                  setLocalQuestions(data.items);
                } else {
                  console.error("Unexpected data format:", data);
                  setLocalQuestions([]);
                }
                setIsLoading(false);
              })
              .catch((error) => {
                console.error("Error fetching questions:", error);
                setLocalQuestions([]);
                setIsLoading(false);
              });
          }}
        >
          {cell.getValue()}
        </button>
      ),
    },
    {
      header: "Default",
      accessorKey: "isDefault",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <div className="flex items-center">
          {cell.getValue() ? (
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:text-green-300">
              <Check className="size-3.5 me-1" />
              Default
            </span>
          ) : (
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500/30"
              onClick={() => {
                handleSetDefault(cell.row.original.id);
                // Refresh the quiz sets after setting default
                setTimeout(() => {
                  dispatch(getAllQuizSets(pagination) as any);
                }, 500);
              }}
            >
              Set as Default
            </button>
          )}
        </div>
      ),
    },
    {
      header: "Action",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <div className="flex gap-2">
          <div className="dropdown relative">
            <button
              type="button"
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
              onClick={(e) => {
                e.currentTarget.nextElementSibling?.classList.toggle("hidden");
              }}
            >
              <MoreHorizontal className="size-3" />
            </button>
            <ul className="absolute z-50 hidden p-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600 right-0">
              <li>
                <button
                  className="flex items-center gap-2 w-full p-2 text-sm font-medium text-slate-600 rounded hover:bg-slate-100 dark:text-zink-100 dark:hover:bg-zink-500"
                  onClick={() => {
                    setIsEditing(true);
                    setCurrentSet({
                      id: cell.row.original.id,
                      name: cell.row.original.name,
                      isDefault: cell.row.original.isDefault,
                    });
                    setOpenSetDialog(true);
                  }}
                >
                  <FileEdit className="size-3" /> Edit
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 w-full p-2 text-sm font-medium text-slate-600 rounded hover:bg-slate-100 dark:text-zink-100 dark:hover:bg-zink-500"
                  onClick={() => onClickDelete("set", cell.row.original.id)}
                >
                  <Trash2 className="size-3" /> Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  // Inside your component, add this validation schema
  const quizSetSchema = Yup.object().shape({
    name: Yup.string().required("Quiz set name is required"),
    isDefault: Yup.boolean(),
  });

  // Add this for form handling
  const formik = useFormik({
    initialValues: {
      name: currentSet.name || "",
      isDefault: currentSet.isDefault || false,
    },
    validationSchema: quizSetSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (isEditing && currentSet.id) {
        const updatedSet = {
          id: currentSet.id,
          data: {
            name: values.name,
            isDefault: values.isDefault === true,
          },
        };
        dispatch(updateQuizSet(updatedSet) as any).then(() => {
          // Refresh the quiz sets after update
          dispatch(getAllQuizSets(pagination) as any);
        });
      } else {
        const newSet = {
          name: values.name,
          isDefault: values.isDefault === true,
        };
        dispatch(createQuizSet(newSet) as any).then(() => {
          // Refresh the quiz sets after creation
          dispatch(getAllQuizSets(pagination) as any);
        });
      }
      setOpenSetDialog(false);
      setCurrentSet({ name: "", isDefault: false });
      setIsEditing(false);
      formik.resetForm();
    },
  });

  // Add this debugging in your render to see what's available
  console.log("Component quizQuestions:", quizQuestions);
  console.log("Component localQuestions:", localQuestions);

  // Add a function to render options for a selected question
  const renderOptions = () => {
    if (!selectedQuestion) return null;

    return (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <h6 className="text-15">Options for Selected Question</h6>
          <button
            type="button"
            className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            onClick={() => {
              setIsEditing(false);
              setCurrentOption({ value: "", score: 0 });
              setOpenOptionDialog(true);
            }}
          >
            <Plus className="inline-block size-4 ltr:mr-1 rtl:ml-1" />{" "}
            <span className="align-middle">Add Option</span>
          </button>
        </div>

        {loading ? (
          <div className="py-3 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : quizOptions && quizOptions.length > 0 ? (
          <div className="space-y-2">
            {quizOptions.map((option: QuizOption) => (
              <div
                key={option.id}
                className="flex justify-between items-center p-3 border rounded-md dark:border-zink-500"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium">{option.value}</span>
                  <span className="text-sm text-slate-500 dark:text-zink-200">
                    Score: {option.score}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                    onClick={() => {
                      setIsEditing(true);
                      setCurrentOption({
                        id: option.id,
                        value: option.value,
                        score: option.score,
                      });
                      setOpenOptionDialog(true);
                    }}
                  >
                    <FileEdit className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                    onClick={() => onClickDelete("option", option.id)}
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-3 text-center">
            <p className="text-slate-500 dark:text-zink-200">
              No options found for this question.
            </p>
          </div>
        )}
      </div>
    );
  };

  // Add this useEffect to log when selectedSet changes
  useEffect(() => {
    console.log("selectedSet changed to:", selectedSet);
  }, [selectedSet]);

  // Add this useEffect to log when localQuestions changes
  useEffect(() => {
    console.log("localQuestions changed:", localQuestions);
  }, [localQuestions]);

  return (
    <React.Fragment>
      <div className="page-content">
        <BreadCrumb title="Quiz Manager" pageTitle="Ecommerce" />
        <ToastContainer closeButton={false} />

        {/* Quiz Sets Table */}
        <div className="card" id="sets-container">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-16">Quiz Sets</h5>
              <button
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={() => {
                  console.log("Opening quiz set dialog"); // Debug log
                  setIsEditing(false);
                  setCurrentSet({ name: "", isDefault: false });
                  setOpenSetDialog(true);
                }}
              >
                <Plus className="inline-block size-4 ltr:mr-1 rtl:ml-1" />{" "}
                <span className="align-middle">Add Quiz Set</span>
              </button>
            </div>
          </div>

          <div className="!pt-1 card-body">
            {loading ? (
              <div className="py-6 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : quizSets && quizSets.length > 0 ? (
              <TableContainer
                columns={setColumns}
                data={quizSets}
                customPageSize={pagination.pageSize}
                divclassName="overflow-x-auto"
                tableclassName="w-full whitespace-nowrap"
                theadclassName="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
                thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
                tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                isPagination={true}
                onPageChange={(page) =>
                  setPagination((prev) => ({ ...prev, page }))
                }
              />
            ) : (
              <div className="noresult">
                <div className="py-6 text-center">
                  <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                  <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                  <p className="mb-0 text-slate-500 dark:text-zink-200">
                    No quiz sets found. Create one to get started.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Questions Section */}
        {selectedSet && (
          <div className="card mt-4" id="questions-container">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-16">Questions</h5>
                <button
                  type="button"
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                  onClick={() => {
                    setIsEditing(false);
                    setCurrentQuestion({ value: "" });
                    setOpenQuestionDialog(true);
                  }}
                >
                  <Plus className="inline-block size-4 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Add Question</span>
                </button>
              </div>
            </div>

            <div className="!pt-1 card-body">
              {isLoading ? (
                <div className="py-6 text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : localQuestions && localQuestions.length > 0 ? (
                <div className="space-y-4">
                  {localQuestions.map((question: QuizQuestion) => (
                    <div
                      key={question.id}
                      id={`question-${question.id}`}
                      className="border rounded-md dark:border-zink-500"
                    >
                      <div
                        className="flex items-center justify-between p-4 cursor-pointer"
                        onClick={() => toggleQuestionExpand(question.id)}
                      >
                        <h6 className="text-15">{question.value}</h6>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsEditing(true);
                              setCurrentQuestion({
                                id: question.id,
                                value: question.value,
                              });
                              setOpenQuestionDialog(true);
                            }}
                          >
                            <FileEdit className="size-3.5" />
                          </button>
                          <button
                            type="button"
                            className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              onClickDelete("question", question.id);
                            }}
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                          <ChevronDown
                            className={`size-4 transition-transform ${
                              expandedQuestions[question.id] ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {expandedQuestions[question.id] && (
                        <div className="p-4 border-t dark:border-zink-500">
                          {selectedQuestion === question.id && renderOptions()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-slate-500 dark:text-zink-200">
                    No questions found for this quiz set.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Question Modal */}
        <Modal
          show={openQuestionDialog}
          onHide={toggleQuestionDialog}
          modal-center="true"
          className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
          dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
        >
          <Modal.Header
            className="flex items-center justify-between p-4 border-b dark:border-zink-500"
            closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
          >
            <Modal.Title className="text-16">
              {isEditing ? "Edit Question" : "Add Question"}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
            <form
              action="#!"
              onSubmit={(e) => {
                e.preventDefault();
                isEditing ? handleEditQuestion() : handleAddQuestion();
                return false;
              }}
            >
              <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                <div className="xl:col-span-12">
                  <label
                    htmlFor="questionInput"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Question <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="questionInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Enter question"
                    rows={3}
                    value={currentQuestion.value}
                    onChange={(e) =>
                      setCurrentQuestion({
                        ...currentQuestion,
                        value: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                  onClick={toggleQuestionDialog}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        {/* Option Modal */}
        <Modal
          show={openOptionDialog}
          onHide={toggleOptionDialog}
          modal-center="true"
          className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
          dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
        >
          <Modal.Header
            className="flex items-center justify-between p-4 border-b dark:border-zink-500"
            closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
          >
            <Modal.Title className="text-16">
              {isEditing ? "Edit Option" : "Add Option"}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
            <form
              action="#!"
              onSubmit={(e) => {
                e.preventDefault();
                isEditing ? handleEditOption() : handleAddOption();
                return false;
              }}
            >
              <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                <div className="xl:col-span-12">
                  <label
                    htmlFor="optionInput"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Option Text <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="optionInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Enter option text"
                    value={currentOption.value}
                    onChange={(e) =>
                      setCurrentOption({
                        ...currentOption,
                        value: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="xl:col-span-12">
                  <label
                    htmlFor="scoreInput"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Score <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    id="scoreInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Enter score (non-negative number)"
                    min="0"
                    value={currentOption.score}
                    onChange={(e) =>
                      setCurrentOption({
                        ...currentOption,
                        score: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                  onClick={toggleOptionDialog}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        {/* Delete Modal */}
        <DeleteModal
          show={deleteModal}
          onHide={deleteToggle}
          onDelete={handleDelete}
        />

        {openSetDialog && (
          <Modal
            show={openSetDialog}
            onHide={() => {
              setOpenSetDialog(false);
              formik.resetForm();
            }}
            modal-center="true"
            className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
            dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
          >
            <Modal.Header
              className="flex items-center justify-between p-4 border-b dark:border-zink-500"
              closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
            >
              <Modal.Title className="text-16">
                {isEditing ? "Edit Quiz Set" : "Add Quiz Set"}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="p-4">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Quiz Set Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input w-full border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500"
                    placeholder="Enter quiz set name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 mt-1">
                      {formik.errors.name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isDefault"
                      name="isDefault"
                      className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                      checked={formik.values.isDefault === true}
                      onChange={(e) => {
                        // Explicitly set the boolean value
                        formik.setFieldValue("isDefault", e.target.checked);
                      }}
                    />
                    <label
                      htmlFor="isDefault"
                      className="ms-2 text-sm align-middle"
                    >
                      Set as default quiz
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                    onClick={() => {
                      setOpenSetDialog(false);
                      formik.resetForm();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                  >
                    {isEditing ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </React.Fragment>
  );
};

export default SurveyQuestion;
