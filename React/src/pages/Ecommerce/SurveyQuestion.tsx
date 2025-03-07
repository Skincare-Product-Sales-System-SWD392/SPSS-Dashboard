import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from "Common/BreadCrumb";
import Modal from "Common/Components/Modal";
import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Icon imports
import {
  MoreHorizontal, Eye, FileEdit, Trash2, Search, Plus, ChevronDown, Check
} from 'lucide-react';

// Types definitions based on the database schema
interface QuizSet {
  quizSetId: string;
  name: string;
  isDefault?: boolean;
}

interface QuizQuestion {
  quizQuestionId: string;
  setId: string;
  value: string;
}

interface QuizOption {
  quizOptionId: string;
  questionId: string;
  value: string;
  score: number;
}

const SurveyQuestion = () => {
  // State for quiz sets, questions, and options
  const [quizSets, setQuizSets] = useState<QuizSet[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizOptions, setQuizOptions] = useState<QuizOption[]>([]);
  
  // Selected items
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<{ [key: string]: boolean }>({});
  
  // Modals
  const [openSetDialog, setOpenSetDialog] = useState(false);
  const [openQuestionDialog, setOpenQuestionDialog] = useState(false);
  const [openOptionDialog, setOpenOptionDialog] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData] = useState<{type: string, id: string}>({type: '', id: ''});

  // Form states
  const [currentSet, setCurrentSet] = useState<Partial<QuizSet>>({ name: '' });
  const [currentQuestion, setCurrentQuestion] = useState<Partial<QuizQuestion>>({ value: '' });
  const [currentOption, setCurrentOption] = useState<Partial<QuizOption>>({ value: '', score: 0 });
  const [isEditing, setIsEditing] = useState(false);

  // Hardcoded mock data
  const mockQuizSets: QuizSet[] = [
    { quizSetId: "set-1", name: "Skin Type Assessment", isDefault: true },
    { quizSetId: "set-2", name: "Product Recommendation Quiz", isDefault: false }
  ];

  const mockQuizQuestions: QuizQuestion[] = [
    { quizQuestionId: "q-1", setId: "set-1", value: "How would you describe your skin's oiliness during the day?" },
    { quizQuestionId: "q-2", setId: "set-1", value: "How does your skin feel after cleansing?" },
    { quizQuestionId: "q-3", setId: "set-1", value: "Do you experience breakouts regularly?" },
    { quizQuestionId: "q-4", setId: "set-2", value: "What skincare concerns do you want to address?" }
  ];

  const mockQuizOptions: QuizOption[] = [
    { quizOptionId: "opt-1", questionId: "q-1", value: "Very oily all over", score: 10 },
    { quizOptionId: "opt-2", questionId: "q-1", value: "Oily in T-zone, normal elsewhere", score: 7 },
    { quizOptionId: "opt-3", questionId: "q-1", value: "Balanced, neither oily nor dry", score: 5 },
    { quizOptionId: "opt-4", questionId: "q-1", value: "Slightly dry", score: 3 },
    { quizOptionId: "opt-5", questionId: "q-1", value: "Very dry", score: 1 },
    
    { quizOptionId: "opt-6", questionId: "q-2", value: "Tight and dry", score: 1 },
    { quizOptionId: "opt-7", questionId: "q-2", value: "Slightly tight", score: 3 },
    { quizOptionId: "opt-8", questionId: "q-2", value: "Normal, no tightness", score: 5 },
    { quizOptionId: "opt-9", questionId: "q-2", value: "Still feels somewhat oily", score: 8 },
    
    { quizOptionId: "opt-10", questionId: "q-3", value: "Yes, frequently", score: 9 },
    { quizOptionId: "opt-11", questionId: "q-3", value: "Sometimes", score: 6 },
    { quizOptionId: "opt-12", questionId: "q-3", value: "Rarely", score: 3 },
    { quizOptionId: "opt-13", questionId: "q-3", value: "Never", score: 1 }
  ];

  // Fetch quiz sets on component mount
  useEffect(() => {
    setQuizSets(mockQuizSets);
  }, []);

  // Fetch quiz questions when a set is selected
  useEffect(() => {
    if (selectedSet) {
      const filteredQuestions = mockQuizQuestions.filter(q => q.setId === selectedSet);
      setQuizQuestions(filteredQuestions);
    } else {
      setQuizQuestions([]);
    }
  }, [selectedSet]);

  // Fetch quiz options when a question is selected
  useEffect(() => {
    if (selectedQuestion) {
      const filteredOptions = mockQuizOptions.filter(o => o.questionId === selectedQuestion);
      setQuizOptions(filteredOptions);
    } else {
      setQuizOptions([]);
    }
  }, [selectedQuestion]);

  // Toggle question expansion
  const toggleQuestionExpand = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
    
    if (!expandedQuestions[questionId]) {
      setSelectedQuestion(questionId);
    } else {
      setSelectedQuestion(null);
    }
  };

  // Delete modal handlers
  const deleteToggle = () => setDeleteModal(!deleteModal);
  
  const onClickDelete = (type: string, id: string) => {
    setDeleteData({ type, id });
    setDeleteModal(true);
  };

  const handleDelete = () => {
    if (deleteData.type === 'set') {
      setQuizSets(quizSets.filter(set => set.quizSetId !== deleteData.id));
      if (selectedSet === deleteData.id) {
        setSelectedSet(null);
        setQuizQuestions([]);
      }
    } else if (deleteData.type === 'question') {
      setQuizQuestions(quizQuestions.filter(question => question.quizQuestionId !== deleteData.id));
      if (selectedQuestion === deleteData.id) {
        setSelectedQuestion(null);
        setQuizOptions([]);
      }
    } else if (deleteData.type === 'option') {
      setQuizOptions(quizOptions.filter(option => option.quizOptionId !== deleteData.id));
    }
    setDeleteModal(false);
  };

  // Set management handlers with mock implementation
  const handleAddSet = () => {
    const newSet: QuizSet = {
      quizSetId: `set-${Date.now()}`,
      name: currentSet.name || 'New Quiz Set',
      isDefault: currentSet.isDefault || false
    };
    
    // If this set is marked as default, make sure no other set is default
    if (newSet.isDefault) {
      setQuizSets(quizSets.map(set => ({ ...set, isDefault: false })));
    }
    
    setQuizSets([...quizSets, newSet]);
    setOpenSetDialog(false);
    setCurrentSet({ name: '', isDefault: false });
  };

  const handleEditSet = () => {
    // If this set is being set as default, update all other sets
    if (currentSet.isDefault) {
      setQuizSets(quizSets.map(set => 
        set.quizSetId === currentSet.quizSetId 
          ? { ...set, name: currentSet.name || set.name, isDefault: true } 
          : { ...set, isDefault: false }
      ));
    } else {
      setQuizSets(quizSets.map(set => 
        set.quizSetId === currentSet.quizSetId 
          ? { ...set, name: currentSet.name || set.name, isDefault: currentSet.isDefault } 
          : set
      ));
    }
    
    setOpenSetDialog(false);
    setCurrentSet({ name: '', isDefault: false });
    setIsEditing(false);
  };

  // Question management handlers with mock implementation
  const handleAddQuestion = () => {
    const newQuestion: QuizQuestion = {
      quizQuestionId: `q-${Date.now()}`,
      setId: selectedSet || '',
      value: currentQuestion.value || 'New Question'
    };
    
    setQuizQuestions([...quizQuestions, newQuestion]);
    setOpenQuestionDialog(false);
    setCurrentQuestion({ value: '' });
  };

  const handleEditQuestion = () => {
    setQuizQuestions(quizQuestions.map(question => 
      question.quizQuestionId === currentQuestion.quizQuestionId 
        ? { ...question, value: currentQuestion.value || question.value } 
        : question
    ));
    setOpenQuestionDialog(false);
    setCurrentQuestion({ value: '' });
    setIsEditing(false);
  };

  // Option management handlers with mock implementation
  const handleAddOption = () => {
    const newOption: QuizOption = {
      quizOptionId: `opt-${Date.now()}`,
      questionId: selectedQuestion || '',
      value: currentOption.value || 'New Option',
      score: currentOption.score || 0
    };
    
    setQuizOptions([...quizOptions, newOption]);
    setOpenOptionDialog(false);
    setCurrentOption({ value: '', score: 0 });
  };

  const handleEditOption = () => {
    setQuizOptions(quizOptions.map(option => 
      option.quizOptionId === currentOption.quizOptionId 
        ? { 
            ...option, 
            value: currentOption.value || option.value,
            score: currentOption.score !== undefined ? currentOption.score : option.score 
          } 
        : option
    ));
    setOpenOptionDialog(false);
    setCurrentOption({ value: '', score: 0 });
    setIsEditing(false);
  };

  // Set dialog toggle
  const toggleSetDialog = useCallback(() => {
    if (openSetDialog) {
      setOpenSetDialog(false);
      setCurrentSet({ name: '' });
      setIsEditing(false);
    } else {
      setOpenSetDialog(true);
    }
  }, [openSetDialog]);

  // Question dialog toggle
  const toggleQuestionDialog = useCallback(() => {
    if (openQuestionDialog) {
      setOpenQuestionDialog(false);
      setCurrentQuestion({ value: '' });
      setIsEditing(false);
    } else {
      setOpenQuestionDialog(true);
    }
  }, [openQuestionDialog]);

  // Option dialog toggle
  const toggleOptionDialog = useCallback(() => {
    if (openOptionDialog) {
      setOpenOptionDialog(false);
      setCurrentOption({ value: '', score: 0 });
      setIsEditing(false);
    } else {
      setOpenOptionDialog(true);
    }
  }, [openOptionDialog]);

  // Add handler for setting a quiz set as default
  const handleSetDefault = (setId: string) => {
    // Update all quiz sets, setting only the selected one as default
    setQuizSets(quizSets.map(set => ({
      ...set,
      isDefault: set.quizSetId === setId
    })));
    
    // Show success toast notification
    toast.success("Quiz set has been set as default successfully!");
    
    // Call API to update isDefault (commented for now)
    // axios.put(`/api/quiz-sets/${setId}/default`, { isDefault: true })
    //   .then(() => toast.success("Quiz set has been set as default successfully!"))
    //   .catch(error => toast.error("Failed to set quiz set as default"));
  };

  // Table columns for quiz sets
  const setColumns = [
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <Link
          to="#"
          className="flex items-center gap-2"
          onClick={() => setSelectedSet(cell.row.original.quizSetId)}
        >
          {cell.getValue()}
        </Link>
      ),
    },
    {
      header: "Default",
      accessorKey: "isDefault",
      enableColumnFilter: false,
      enableSorting: false,
      Header: () => (
        <div className="relative pr-4">
          <span className="absolute right-[120px]">Default</span>
        </div>
      ),
      cell: (cell: any) => (
        <div className="relative flex items-center">
          <div className="absolute right-[150px]">
            {cell.row.original.isDefault ? (
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
                <Check className="w-3 h-3 mr-1" />
                Default
              </span>
            ) : (
              <button
                type="button"
                className="py-1 px-2.5 text-custom-500 bg-white btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500 text-xs"
                onClick={() => handleSetDefault(cell.row.original.quizSetId)}
              >
                Set as Default
              </button>
            )}
          </div>
        </div>
      ),
    },
    {
      header: "Actions",
      enableColumnFilter: false,
      enableSorting: false,
      Header: () => (
        <div className="relative pr-4">
          <span className="absolute right-[120px]">Actions</span>
        </div>
      ),
      cell: (cell: any) => (
        <div className="relative flex items-center gap-2">
          <div className="absolute right-[158px] flex items-center gap-2">
            <button 
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400"
              onClick={() => {
                setIsEditing(true);
                setCurrentSet(cell.row.original);
                setOpenSetDialog(true);
              }}
            >
              <FileEdit className="size-3" />
            </button>
            <button 
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400"
              onClick={() => onClickDelete('set', cell.row.original.quizSetId)}
            >
              <Trash2 className="size-3" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <React.Fragment>
      <ToastContainer />
      <BreadCrumb title="Survey Questions" pageTitle="Survey Questions" />
      <DeleteModal 
        show={deleteModal} 
        onHide={deleteToggle}
        onDelete={handleDelete}
      />

      {/* Quiz Sets Section */}
      <div className="card" id="quizSetsTable">
        <div className="card-body">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
            <div className="xl:col-span-10">
              <h5 className="text-16">Quiz Manager</h5>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2">
              <button
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentSet({ name: '' });
                  setOpenSetDialog(true);
                }}
              >
                <Plus className="inline-block size-4 ltr:mr-1 rtl:ml-1" />{" "}
                <span className="align-middle">Add Quiz Set</span>
              </button>
            </div>
          </div>
        </div>

        <div className="!pt-1 card-body">
          <h5 className="mb-3">Quiz Sets</h5>
          {quizSets && quizSets.length > 0 ? (
            <TableContainer
              columns={setColumns}
              data={quizSets}
              customPageSize={10}
              divclassName="overflow-x-auto"
              tableclassName="w-full whitespace-nowrap"
              theadclassName="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
              thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
              tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
              isPagination={true}
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

      {/* Questions Section - Only visible if a quiz set is selected */}
      {selectedSet && (
        <div className="card mt-4" id="quizQuestionsSection">
          <div className="card-body">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
              <div className="xl:col-span-10">
                <h5 className="text-16">Questions</h5>
              </div>
              <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2">
                <button
                  type="button"
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                  onClick={() => {
                    setIsEditing(false);
                    setCurrentQuestion({ value: '' });
                    setOpenQuestionDialog(true);
                  }}
                >
                  <Plus className="inline-block size-4 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Add Question</span>
                </button>
              </div>
            </div>
          </div>

          <div className="!pt-1 card-body">
            {quizQuestions.length > 0 ? (
              <div className="space-y-3">
                {quizQuestions.map((question) => (
                  <div key={question.quizQuestionId} className="border rounded-md overflow-hidden">
                    <div 
                      className={`flex justify-between items-center p-3 cursor-pointer ${expandedQuestions[question.quizQuestionId] ? 'bg-slate-50 dark:bg-zink-600' : 'bg-white dark:bg-zink-700'}`}
                      onClick={() => toggleQuestionExpand(question.quizQuestionId)}
                    >
                      <span className="font-medium">{question.value}</span>
                      <div className="flex items-center gap-2">
                        <button 
                          className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsEditing(true);
                            setCurrentQuestion(question);
                            setOpenQuestionDialog(true);
                          }}
                        >
                          <FileEdit className="size-3" />
                        </button>
                        <button 
                          className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            onClickDelete('question', question.quizQuestionId);
                          }}
                        >
                          <Trash2 className="size-3" />
                        </button>
                        <ChevronDown className={`size-5 transition-transform duration-300 ${expandedQuestions[question.quizQuestionId] ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                    
                    {expandedQuestions[question.quizQuestionId] && (
                      <div className="p-3 border-t">
                        <div className="flex justify-between items-center mb-3">
                          <h6 className="text-sm font-medium">Answer Options</h6>
                          <button
                            type="button"
                            className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 py-1 px-2 text-xs"
                            onClick={() => {
                              setIsEditing(false);
                              setCurrentOption({ value: '', score: 0 });
                              setOpenOptionDialog(true);
                            }}
                          >
                            <Plus className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                            <span className="align-middle">Add Option</span>
                          </button>
                        </div>
                        
                        {quizOptions.length > 0 ? (
                          <div className="overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                              <thead className="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600">
                                <tr>
                                  <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Option Text</th>
                                  <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500 text-center">Score</th>
                                  <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500 text-right">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {quizOptions.map((option) => (
                                  <tr key={option.quizOptionId}>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">{option.value}</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500 text-center">{option.score}</td>
                                    <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500 text-right">
                                      <div className="flex gap-2 justify-end">
                                        <button 
                                          className="flex items-center justify-center size-[26px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400"
                                          onClick={() => {
                                            setIsEditing(true);
                                            setCurrentOption(option);
                                            setOpenOptionDialog(true);
                                          }}
                                        >
                                          <FileEdit className="size-3" />
                                        </button>
                                        <button 
                                          className="flex items-center justify-center size-[26px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400"
                                          onClick={() => onClickDelete('option', option.quizOptionId)}
                                        >
                                          <Trash2 className="size-3" />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="py-4 text-center border rounded-md">
                            <p className="text-slate-500 dark:text-zink-200">No options for this question. Add some options.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center">
                <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                <h5 className="mt-2 mb-1">No Questions Found</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  No questions in this quiz set. Add a question to get started.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modals */}
      {/* Quiz Set Modal */}
      <Modal
        show={openSetDialog}
        onHide={toggleSetDialog}
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

        <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
          <form action="#!" onSubmit={(e) => {
            e.preventDefault();
            isEditing ? handleEditSet() : handleAddSet();
            return false;
          }}>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="xl:col-span-12">
                <label htmlFor="nameInput" className="inline-block mb-2 text-base font-medium">
                  Quiz Set Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="nameInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter quiz set name"
                  value={currentSet.name}
                  onChange={(e) => setCurrentSet({ ...currentSet, name: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button 
                type="button" 
                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" 
                onClick={toggleSetDialog}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                {isEditing ? "Update" : "Add Quiz Set"}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

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
          <form action="#!" onSubmit={(e) => {
            e.preventDefault();
            isEditing ? handleEditQuestion() : handleAddQuestion();
            return false;
          }}>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="xl:col-span-12">
                <label htmlFor="questionInput" className="inline-block mb-2 text-base font-medium">
                  Question Text <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="questionInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter question text"
                  value={currentQuestion.value}
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, value: e.target.value })}
                  rows={3}
                />
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
                {isEditing ? "Update" : "Add Question"}
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
          <form action="#!" onSubmit={(e) => {
            e.preventDefault();
            isEditing ? handleEditOption() : handleAddOption();
            return false;
          }}>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="xl:col-span-12">
                <label htmlFor="optionInput" className="inline-block mb-2 text-base font-medium">
                  Option Text <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="optionInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter option text"
                  value={currentOption.value}
                  onChange={(e) => setCurrentOption({ ...currentOption, value: e.target.value })}
                />
              </div>
              <div className="xl:col-span-12">
                <label htmlFor="scoreInput" className="inline-block mb-2 text-base font-medium">
                  Score <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  id="scoreInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter score"
                  value={currentOption.score}
                  onChange={(e) => setCurrentOption({ ...currentOption, score: parseInt(e.target.value) || 0 })}
                  min="0"
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
                {isEditing ? "Update" : "Add Option"}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default SurveyQuestion;