import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2, Star, Send, X } from "lucide-react";
import { toast } from "react-hot-toast";

// Components
import BreadCrumb from "../../Common/BreadCrumb";
import DeleteModal from "../../Common/DeleteModal";
import Modal from "../../Common/Components/Modal";
import Alert from "Common/Components/Alert";

// Redux
import { getAllReviews, deleteReview } from "../../slices/review/thunk";
import { createReply, updateReply, deleteReply } from "../../slices/reply/thunk";
import { resetReplyState, setReplyEditing } from "../../slices/reply/reducer";

// Types
interface Review {
  id: string;
  userName: string;
  avatarUrl: string;
  productImage: string;
  productId: string;
  productName: string;
  reviewImages: string[];
  variationOptionValues: string[];
  ratingValue: number;
  comment: string;
  lastUpdatedTime: string;
  reply?: {
    id: string;
    avatarUrl: string;
    userName: string;
    replyContent: string;
    lastUpdatedTime: string;
  };
  isEditble: boolean;
}

const Review = () => {
  const dispatch = useDispatch<any>();
  
  // State
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [reviewToDelete, setReviewToDelete] = useState<string | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [replyContent, setReplyContent] = useState<string>("");
  const [replyToEdit, setReplyToEdit] = useState<string | null>(null);
  const [editedReplyContent, setEditedReplyContent] = useState<string>("");
  const [deleteReplyId, setDeleteReplyId] = useState<string | null>(null);
  const [deleteReplyModalOpen, setDeleteReplyModalOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | "warning" | "info">("success");

  // Redux selectors with console logs
  const reviewState = useSelector((state: any) => {
    console.log("Full Redux state:", state);
    console.log("Review state:", state.Review);
    return state.Review || { reviews: null, loading: false };
  });

  const { reviews, loading } = reviewState;
  console.log("Reviews from state:", reviews);

  // No need for data?.data - directly use reviews.data
  const reviewsData = reviews?.data;
  console.log("Reviews data:", reviewsData);

  const { success: replySuccess, isEditing } = useSelector((state: any) => state.Reply || { success: false, isEditing: false });

  // Fetch reviews on mount and when pagination changes
  useEffect(() => {
    dispatch(getAllReviews({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  // Reset form after reply success
  useEffect(() => {
    if (replySuccess) {
      setReplyContent("");
      setEditedReplyContent("");
      setReplyToEdit(null);
      dispatch(resetReplyState());
      dispatch(getAllReviews({ page, pageSize }));
      
      // Close the modal after successful reply actions
      setViewModalOpen(false);
      setSelectedReview(null);
    }
  }, [replySuccess, dispatch, page, pageSize]);

  // Set filtered reviews when reviews data changes
  useEffect(() => {
    if (reviewsData && reviewsData.items) {
      setFilteredReviews(reviewsData.items);
    }
  }, [reviewsData]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  // Handlers
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Search functionality: Filters reviews based on user input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    
    if (reviewsData && reviewsData.items) {
      const keysToSearch = ['userName', 'productName', 'comment'];
      const filteredData = reviewsData.items.filter((item: Review) => {
        // Check main fields (userName, productName, comment)
        const mainFieldsMatch = keysToSearch.some((key) => {
          const value = (item as any)[key]?.toString().toLowerCase() || '';
          return value.includes(searchTerm.toLowerCase());
        });
        
        // Check variation option values (like "75ml")
        const variationMatch = item.variationOptionValues.some(option => 
          option.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        return mainFieldsMatch || variationMatch;
      });
      
      setFilteredReviews(filteredData);
    }
  };

  const handleProductClick = (productId: string) => {
    window.location.href = `/apps-ecommerce-product-overview?id=${productId}`;
  };

  const handleDeleteClick = (reviewId: string) => {
    setReviewToDelete(reviewId);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (reviewToDelete) {
      // Immediately remove the review from the filtered list
      setFilteredReviews(prevReviews => 
        prevReviews.filter(review => review.id !== reviewToDelete)
      );
      
      // Also update the original data in reviewsData to maintain consistency
      if (reviewsData && reviewsData.items) {
        const updatedItems = reviewsData.items.filter((item: Review) => item.id !== reviewToDelete);
        // Create a shallow copy of reviewsData with updated items
        const updatedReviewsData = {
          ...reviewsData,
          items: updatedItems,
          totalCount: reviewsData.totalCount - 1
        };
        
        // Update the Redux store with the modified data
        dispatch({
          type: 'Review/getAllReviewsSuccess',
          payload: { data: updatedReviewsData }
        });
      }
      
      // Close the modal immediately for better UX
      setDeleteModalOpen(false);
      
      // Then perform the actual API call
      dispatch(deleteReview(reviewToDelete))
        .then(() => {
          setReviewToDelete(null);
          showAlert("Review deleted successfully", "success");
          toast.success("Review deleted successfully");
        })
        .catch((error: any) => {
          showAlert("Failed to delete review", "error");
          toast.error("Failed to delete review");
          console.error("Delete error:", error);
          // Refresh to restore the original state in case of error
          dispatch(getAllReviews({ page, pageSize }));
        });
    }
  };

  const handleViewClick = (review: Review) => {
    setSelectedReview(review);
    setViewModalOpen(true);
    
    // Reset reply state when opening modal
    setReplyContent("");
    setReplyToEdit(null);
    setEditedReplyContent("");
    dispatch(resetReplyState());
  };

  const handleReplySubmit = () => {
    if (selectedReview && replyContent.trim()) {
      dispatch(createReply({
        reviewId: selectedReview.id,
        replyContent: replyContent.trim()
      }))
      .then(() => {
        showAlert("Reply submitted successfully", "success");
      })
      .catch(() => {
        showAlert("Failed to submit reply", "error");
      });
      toast.success("Reply submitted successfully!");
    }
  };

  const handleEditReply = (replyId: string, content: string) => {
    setReplyToEdit(replyId);
    setEditedReplyContent(content);
    dispatch(setReplyEditing(true));
  };

  const handleUpdateReply = () => {
    if (replyToEdit && editedReplyContent.trim() && selectedReview) {
      // First update UI immediately
      if (selectedReview.reply && selectedReview.reply.id === replyToEdit) {
        // Create updated reply
        const updatedReply = {
          ...selectedReview.reply,
          replyContent: editedReplyContent.trim()
        };
        
        // Create updated review with new reply
        const updatedReview = {
          ...selectedReview,
          reply: updatedReply
        };
        
        // Update selected review
        setSelectedReview(updatedReview);
        
        // Update filtered reviews
        setFilteredReviews(prevReviews => 
          prevReviews.map(review => 
            review.id === updatedReview.id ? updatedReview : review
          )
        );
        
        // Update Redux store
        if (reviewsData && reviewsData.items) {
          const updatedItems = reviewsData.items.map((item: Review) => 
            item.id === updatedReview.id ? updatedReview : item
          );
          
          dispatch({
            type: 'Review/getAllReviewsSuccess',
            payload: { data: { ...reviewsData, items: updatedItems } }
          });
        }
      }
      
      // Reset edit state
      setReplyToEdit(null);
      setEditedReplyContent("");
      dispatch(setReplyEditing(false));
      
      // Then call API
      dispatch(updateReply({
        id: replyToEdit,
        data: { replyContent: editedReplyContent.trim() }
      }))
        .then(() => {
          showAlert("Reply updated successfully", "success");
          toast.success("Reply updated successfully!");
          // Refresh data from API to ensure consistency
          dispatch(getAllReviews({ page, pageSize }));
        })
        .catch((error: any) => {
          showAlert("Failed to update reply", "error");
          toast.error("Failed to update reply");
          console.error("Update reply error:", error);
          // Refresh to restore the original state in case of error
          dispatch(getAllReviews({ page, pageSize }));
        });
    }
  };

  const handleCancelEditReply = () => {
    setReplyToEdit(null);
    setEditedReplyContent("");
    dispatch(setReplyEditing(false));
  };

  const handleDeleteReplyClick = (replyId: string) => {
    setDeleteReplyId(replyId);
    // First close the view modal to prevent modal layering issues
    setViewModalOpen(false);
    // Then open the delete reply modal
    setTimeout(() => {
      setDeleteReplyModalOpen(true);
    }, 100);
  };

  const handleDeleteReplyConfirm = () => {
    if (deleteReplyId && selectedReview) {
      // Immediately update the UI by removing the reply
      if (selectedReview.reply && selectedReview.reply.id === deleteReplyId) {
        // Create a new selectedReview object without the reply
        const updatedReview = {
          ...selectedReview,
          reply: undefined
        };
        setSelectedReview(updatedReview);
        
        // Also update the review in filteredReviews
        setFilteredReviews(prevReviews => 
          prevReviews.map(review => 
            review.id === updatedReview.id ? updatedReview : review
          )
        );
        
        // Update the original data in reviewsData to maintain consistency
        if (reviewsData && reviewsData.items) {
          const updatedItems = reviewsData.items.map((item: Review) => 
            item.id === updatedReview.id ? updatedReview : item
          );
          
          // Create a shallow copy of reviewsData with updated items
          const updatedReviewsData = {
            ...reviewsData,
            items: updatedItems
          };
          
          // Update the Redux store with the modified data
          dispatch({
            type: 'Review/getAllReviewsSuccess',
            payload: { data: updatedReviewsData }
          });
        }
      }
      
      // Close the modal immediately for better UX
      setDeleteReplyModalOpen(false);
      
      // Then perform the actual API call
      dispatch(deleteReply(deleteReplyId))
        .then(() => {
          setDeleteReplyId(null);
          showAlert("Reply deleted successfully", "success");
          toast.success("Reply deleted successfully");
        })
        .catch((error: any) => {
          showAlert("Failed to delete reply", "error");
          toast.error("Failed to delete reply");
          console.error("Delete reply error:", error);
          // Refresh to restore the original state in case of error
          dispatch(getAllReviews({ page, pageSize }));
        });
    }
  };

  // Function to show alert
  const showAlert = (message: string, type: "success" | "error" | "warning" | "info" = "success") => {
    setAlertMessage(message);
    setAlertType(type);
    
    // Auto-hide alert after 5 seconds
    setTimeout(() => {
      setAlertMessage(null);
    }, 5000);
  };

  // Render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`size-4 ${index < rating ? "fill-yellow-500 text-yellow-500" : "text-slate-300"}`} 
      />
    ));
  };

  // Pagination component
  const Pagination = () => {
    const totalPages = reviewsData?.totalPages || 1;
    
    return (
      <div className="flex flex-col items-center gap-4 mt-5 md:flex-row">
        <div className="text-slate-500 dark:text-zink-200">
          Showing <span className="font-semibold">{((page - 1) * pageSize) + 1}</span> to{" "}
          <span className="font-semibold">
            {Math.min(page * pageSize, reviewsData?.totalCount || 0)}
          </span>{" "}
          of <span className="font-semibold">{reviewsData?.totalCount || 0}</span> results
        </div>
        <ul className="flex flex-wrap items-center gap-2 pagination grow justify-end">
          <li>
            <Link
              to="#"
              className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:ring focus:ring-custom-500/20 dark:focus:ring-custom-500/20 active:bg-custom-50 dark:active:bg-custom-500/10 active:text-custom-500 dark:active:text-custom-500 active:border-custom-500 dark:active:border-custom-500 ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                if (page > 1) handlePageChange(page - 1);
              }}
            >
              Previous
            </Link>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <Link
                to="#"
                className={`inline-flex items-center justify-center size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 hover:text-custom-500 dark:hover:text-custom-500 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:ring focus:ring-custom-500/20 dark:focus:ring-custom-500/20 active:bg-custom-50 dark:active:bg-custom-500/10 active:text-custom-500 dark:active:text-custom-500 active:border-custom-500 dark:active:border-custom-500 ${page === index + 1 ? "bg-custom-50 dark:bg-custom-500/10 text-custom-500 dark:text-custom-500 border-custom-500 dark:border-custom-500" : "bg-white dark:bg-zink-700 text-slate-500 dark:text-zink-200"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
              >
                {index + 1}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="#"
              className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:ring focus:ring-custom-500/20 dark:focus:ring-custom-500/20 active:bg-custom-50 dark:active:bg-custom-500/10 active:text-custom-500 dark:active:text-custom-500 active:border-custom-500 dark:active:border-custom-500 ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                if (page < totalPages) handlePageChange(page + 1);
              }}
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <BreadCrumb title="Reviews" pageTitle="Ecommerce" />
        
        {/* Alert Message */}
        {alertMessage && (
          <div className="mb-4">
            {alertType === "success" && (
              <Alert className="px-4 py-3 text-sm text-green-500 border border-transparent rounded-md bg-green-50 dark:bg-green-400/20">
                <Alert.Bold>Success!</Alert.Bold> {alertMessage}
              </Alert>
            )}
            {alertType === "error" && (
              <Alert className="px-4 py-3 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                <Alert.Bold>Error!</Alert.Bold> {alertMessage}
              </Alert>
            )}
            {alertType === "warning" && (
              <Alert className="px-4 py-3 text-sm text-orange-500 border border-transparent rounded-md bg-orange-50 dark:bg-orange-400/20">
                <Alert.Bold>Warning!</Alert.Bold> {alertMessage}
              </Alert>
            )}
            {alertType === "info" && (
              <Alert className="px-4 py-3 text-sm border border-transparent rounded-md text-sky-500 bg-sky-50 dark:bg-sky-400/20">
                <Alert.Bold>Info!</Alert.Bold> {alertMessage}
              </Alert>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-12">
          <div className="md:col-span-12">
            <div className="card">
              <div className="card-body">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <h5 className="mb-1">Customer Reviews</h5>
                    <p className="text-slate-500 dark:text-zink-200">Manage all customer product reviews</p>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                      <div className="relative w-full sm:w-64">
                        <input
                          type="text"
                          className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                          placeholder="Search for reviews..."
                          autoComplete="off"
                          value={search}
                          onChange={handleSearch}
                        />
                        <i className="ri-search-line search-icon text-lg absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200"></i>
                      </div>
                      <div className="w-full sm:w-auto">
                        <select
                          className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                          data-choices
                          data-choices-search-false
                          value={pageSize}
                          onChange={(e) => setPageSize(parseInt(e.target.value))}
                        >
                          <option value="10">10 per page</option>
                          <option value="25">25 per page</option>
                          <option value="50">50 per page</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reviews List */}
            <div className="card mt-4">
              <div className="card-body">
                {loading ? (
                  <div className="flex justify-center py-10">
                    <div className="animate-spin size-6 border-2 border-slate-200 dark:border-zink-500 rounded-full border-t-custom-500 dark:border-t-custom-500"></div>
                  </div>
                ) : reviewsData && reviewsData.items && reviewsData.items.length > 0 ? (
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Customer
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Product
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Comment
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredReviews.length > 0 ? (
                          filteredReviews.map((review, index) => (
                            <tr key={review.id} className="border-t border-slate-200 dark:border-zink-500">
                              <td className="px-6 py-4">
                                <div className="flex items-start gap-3">
                                  <img 
                                    src={review.avatarUrl} 
                                    alt={review.userName} 
                                    className="size-10 rounded-full object-cover"
                                  />
                                  <div>
                                    <h6 className="text-sm font-medium">{review.userName}</h6>
                                    <div className="flex items-center mt-1">
                                      {renderStars(review.ratingValue)}
                                      <span className="ml-2 text-xs text-slate-500 dark:text-zink-200">
                                        {formatDate(review.lastUpdatedTime)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2 p-2 mb-2 border rounded-md border-slate-200 dark:border-zink-500 cursor-pointer hover:bg-slate-50 dark:hover:bg-zink-600"
                                     onClick={() => handleProductClick(review.productId)}>
                                  <img 
                                    src={review.productImage} 
                                    alt={review.productName} 
                                    className="size-12 rounded-md object-cover"
                                  />
                                  <div className="grow">
                                    <h6 className="text-sm font-medium">{review.productName}</h6>
                                    <div className="flex items-center mt-1">
                                      {review.variationOptionValues.map((option, idx) => (
                                        <span key={idx} className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-zink-600 text-slate-500 dark:text-zink-200">
                                          {option}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-sm text-slate-500 dark:text-zink-200">{review.comment}</p>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-2">
                                  <button 
                                    type="button" 
                                    className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md text-slate-500 hover:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10"
                                    onClick={() => handleViewClick(review)}
                                  >
                                    <Eye className="size-4" />
                                  </button>
                                  {review.isEditble && (
                                    <button 
                                      type="button" 
                                      className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md text-slate-500 hover:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10"
                                      onClick={() => handleViewClick(review)}
                                    >
                                      <Pencil className="size-4" />
                                    </button>
                                  )}
                                  <button 
                                    type="button" 
                                    className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-500/10"
                                    onClick={() => handleDeleteClick(review.id)}
                                  >
                                    <Trash2 className="size-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="py-4 text-center">
                              No reviews found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                    {/* Pagination - only show if we have unfiltered results */}
                    {search === "" && reviewsData.items.length > 0 && (
                      <div className="flex flex-col items-center mt-5 md:flex-row">
                        <div className="mb-4 md:mb-0">
                          <p className="text-slate-500 dark:text-zink-200">
                            Showing {reviewsData.pageNumber > 1 ? (reviewsData.pageNumber - 1) * reviewsData.pageSize + 1 : 1} to {Math.min(reviewsData.pageNumber * reviewsData.pageSize, reviewsData.totalCount)} of {reviewsData.totalCount} results
                          </p>
                        </div>
                        <div className="ml-auto">
                          <nav aria-label="Page navigation">
                            <ul className="flex flex-wrap items-center gap-2">
                              <li>
                                <button 
                                  className={`size-8 flex items-center justify-center rounded-md border border-slate-200 dark:border-zink-500 ${reviewsData.pageNumber === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-custom-500 hover:text-white hover:border-custom-500 dark:hover:bg-custom-500 dark:hover:border-custom-500'}`}
                                  onClick={() => reviewsData.pageNumber > 1 && handlePageChange(reviewsData.pageNumber - 1)}
                                  disabled={reviewsData.pageNumber === 1}
                                >
                                  <i className="ri-arrow-left-s-line text-lg"></i>
                                </button>
                              </li>
                              {Array.from({ length: reviewsData.totalPages }, (_, i) => i + 1).map((page) => (
                                <li key={page}>
                                  <button 
                                    className={`size-8 flex items-center justify-center rounded-md border ${reviewsData.pageNumber === page ? 'bg-custom-500 text-white border-custom-500 dark:bg-custom-500 dark:border-custom-500' : 'border-slate-200 dark:border-zink-500 hover:bg-custom-500 hover:text-white hover:border-custom-500 dark:hover:bg-custom-500 dark:hover:border-custom-500'}`}
                                    onClick={() => handlePageChange(page)}
                                  >
                                    {page}
                                  </button>
                                </li>
                              ))}
                              <li>
                                <button 
                                  className={`size-8 flex items-center justify-center rounded-md border border-slate-200 dark:border-zink-500 ${reviewsData.pageNumber === reviewsData.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-custom-500 hover:text-white hover:border-custom-500 dark:hover:bg-custom-500 dark:hover:border-custom-500'}`}
                                  onClick={() => reviewsData.pageNumber < reviewsData.totalPages && handlePageChange(reviewsData.pageNumber + 1)}
                                  disabled={reviewsData.pageNumber === reviewsData.totalPages}
                                >
                                  <i className="ri-arrow-right-s-line text-lg"></i>
                                </button>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex justify-center py-10">
                    <p className="text-slate-500 dark:text-zink-200">No reviews found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteModal
        show={deleteModalOpen}
        onHide={() => setDeleteModalOpen(false)}
        onDelete={handleDeleteConfirm}
      />

      {/* Delete Reply Modal */}
      <DeleteModal
        show={deleteReplyModalOpen}
        onHide={() => setDeleteReplyModalOpen(false)}
        onDelete={handleDeleteReplyConfirm}
      />

      {/* View/Edit Modal */}
      <Modal show={viewModalOpen} onHide={() => {
        setViewModalOpen(false);
        setSelectedReview(null);
        setReplyContent("");
        setReplyToEdit(null);
        setEditedReplyContent("");
        dispatch(resetReplyState());
      }} id="reviewDetailModal" modal-center="true"
        className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
        dialogClassName="w-screen md:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
        <Modal.Header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500">
          <Modal.Title className="text-16">Review Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
          {selectedReview && (
            <>
              <div className="flex items-start gap-3 mb-4">
                <img 
                  src={selectedReview.avatarUrl} 
                  alt={selectedReview.userName} 
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-15">{selectedReview.userName}</h5>
                  <div className="flex items-center mt-1">
                    {renderStars(selectedReview.ratingValue)}
                    <span className="ml-2 text-sm text-slate-500 dark:text-zink-200">
                      {formatDate(selectedReview.lastUpdatedTime)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 p-2 mb-3 border rounded-md border-slate-200 dark:border-zink-500 cursor-pointer hover:bg-slate-50 dark:hover:bg-zink-600"
                     onClick={() => handleProductClick(selectedReview.productId)}>
                  <img 
                    src={selectedReview.productImage} 
                    alt={selectedReview.productName} 
                    className="size-12 rounded-md object-cover"
                  />
                  <div className="grow">
                    <h6 className="text-sm font-medium">{selectedReview.productName}</h6>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedReview.variationOptionValues.map((option, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-zink-600 text-slate-500 dark:text-zink-200">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="inline-block mb-2 text-sm font-medium">Review Comment</label>
                  <div className="p-3 border rounded-md border-slate-200 dark:border-zink-500 bg-slate-50 dark:bg-zink-600">
                    <p className="text-slate-500 dark:text-zink-200">{selectedReview.comment}</p>
                  </div>
                </div>
                
                {selectedReview.reviewImages.length > 0 && (
                  <div className="mb-3">
                    <label className="inline-block mb-2 text-sm font-medium">Review Images</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedReview.reviewImages.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img} 
                          alt={`Review image ${idx + 1}`} 
                          className="size-20 rounded-md object-cover cursor-pointer hover:opacity-80"
                          onClick={() => window.open(img, '_blank')}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Reply section */}
                <div className="mt-5">
                  <h6 className="mb-3 text-sm font-medium">Reply to Review</h6>
                  
                  {selectedReview.reply && selectedReview.reply.replyContent && (
                    <div className="p-3 mb-4 border rounded-md border-slate-200 dark:border-zink-500">
                      <div className="flex items-start gap-3">
                        <img 
                          src={selectedReview.reply.avatarUrl} 
                          alt={selectedReview.reply.userName} 
                          className="size-8 rounded-full object-cover"
                        />
                        <div className="grow">
                          <div className="flex items-center justify-between">
                            <div>
                              <h6 className="text-sm font-medium">{selectedReview.reply.userName}</h6>
                              <span className="text-xs text-slate-500 dark:text-zink-200">
                                {formatDate(selectedReview.reply.lastUpdatedTime)}
                              </span>
                            </div>
                            <div className="flex gap-1">
                              <button 
                                type="button" 
                                className="flex items-center justify-center size-6 transition-all duration-200 ease-linear rounded-md text-slate-500 hover:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10"
                                onClick={() => handleEditReply(selectedReview.reply!.id, selectedReview.reply!.replyContent)}
                              >
                                <Pencil className="size-3" />
                              </button>
                              <button 
                                type="button" 
                                className="flex items-center justify-center size-6 transition-all duration-200 ease-linear rounded-md text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-500/10"
                                onClick={() => handleDeleteReplyClick(selectedReview.reply!.id)}
                              >
                                <Trash2 className="size-3" />
                              </button>
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-slate-500 dark:text-zink-200">
                            {selectedReview.reply.replyContent}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {isEditing && replyToEdit ? (
                    <div className="mb-4">
                      <textarea
                        className="w-full p-3 border rounded-md border-slate-200 dark:border-zink-500 focus:border-custom-500 dark:focus:border-custom-500 focus:outline-none dark:bg-zink-700"
                        rows={3}
                        placeholder="Edit your reply..."
                        value={editedReplyContent}
                        onChange={(e) => setEditedReplyContent(e.target.value)}
                      ></textarea>
                      <div className="flex justify-end gap-2 mt-2">
                        <button
                          type="button"
                          className="px-3 py-2 text-sm font-medium transition-all duration-200 ease-linear border rounded-md border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:bg-slate-100 dark:hover:bg-zink-600"
                          onClick={handleCancelEditReply}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="px-3 py-2 text-sm font-medium transition-all duration-200 ease-linear text-white rounded-md bg-custom-500 hover:bg-custom-600 focus:ring focus:ring-custom-200 dark:focus:ring-custom-500/30"
                          onClick={handleUpdateReply}
                        >
                          Update Reply
                        </button>
                      </div>
                    </div>
                  ) : !selectedReview.reply && (
                    <div>
                      <textarea
                        className="w-full p-3 border rounded-md border-slate-200 dark:border-zink-500 focus:border-custom-500 dark:focus:border-custom-500 focus:outline-none dark:bg-zink-700"
                        rows={3}
                        placeholder="Write a reply to this review..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <button
                          type="button"
                          className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 ease-linear text-white rounded-md bg-custom-500 hover:bg-custom-600 focus:ring focus:ring-custom-200 dark:focus:ring-custom-500/30"
                          onClick={handleReplySubmit}
                          disabled={!replyContent.trim()}
                        >
                          <Send className="size-4" />
                          Send Reply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-end p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
          <button
            type="button"
            className="px-3 py-2 text-sm font-medium transition-all duration-200 ease-linear border rounded-md border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:bg-slate-100 dark:hover:bg-zink-600"
            onClick={() => {
              setViewModalOpen(false);
              setSelectedReview(null);
              setReplyContent("");
              setReplyToEdit(null);
              setEditedReplyContent("");
              dispatch(resetReplyState());
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Review;