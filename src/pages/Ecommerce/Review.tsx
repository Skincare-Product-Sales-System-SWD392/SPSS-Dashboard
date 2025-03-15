import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Button, Form, Input, Pagination, Modal, Rate, Select, Spin, Image, Avatar, Tooltip, Space, Typography, Divider, Upload, Breadcrumb, Empty } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, StarFilled, CommentOutlined } from "@ant-design/icons";
import { getAllReviews, addReview, updateReview, deleteReview } from "../../slices/review/thunk";
import { setSelectedReview, clearSelectedReview } from "../../slices/review/reducer";
import moment from "moment";
import BreadCrumb from "Common/BreadCrumb";
import { getFirebaseBackend } from "../../helpers/firebase_helper";
import { getAllProducts } from "../../slices/product/thunk";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createSelector } from "reselect";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";

const { Text, Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const Review = () => {
    const dispatch = useDispatch();
    const { reviews, loading, selectedReview } = useSelector((state: any) => state.review);
    
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMode, setModalMode] = useState("add"); // "add", "edit", "view"
    const [form] = Form.useForm();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileList, setFileList] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [uploading, setUploading] = useState(false);
    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isOverview, setIsOverview] = useState<boolean>(false);

    useEffect(() => {
        loadReviews();
        dispatch(getAllProducts({ page: 1, pageSize: 100 }) as any)
            .then((result: any) => {
                if (result?.payload?.data?.items) {
                    setProducts(result.payload.data.items);
                }
            });
    }, [dispatch]);

    const loadReviews = () => {
        dispatch(getAllReviews({ 
            page: currentPage, 
            pageSize: pageSize,
            search: searchText.trim() || undefined
        }) as any);
    };

    const handleSearch = () => {
        setCurrentPage(1);
        loadReviews();
    };

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const showAddModal = () => {
        dispatch(clearSelectedReview());
        setModalMode("add");
        form.resetFields();
        setIsModalOpen(true);
    };

    const showEditModal = (review: any) => {
        dispatch(setSelectedReview(review));
        setModalMode("edit");
        form.setFieldsValue({
            userName: review.userName,
            productId: review.productId,
            productName: review.productName,
            ratingValue: review.ratingValue,
            comment: review.comment,
            variationOptionValues: review.variationOptionValues,
        });
        setIsModalOpen(true);
    };

    const showViewModal = (review : any) => {
        dispatch(setSelectedReview(review));
        setModalMode("view");
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleUpload = async (options: any) => {
        const { file, onSuccess, onError } = options;
        
        try {
            setUploading(true);
            const firebase = getFirebaseBackend();
            const url = await firebase.uploadFile(file, "SPSS/Product-Image");
            
            setUploadedImages(prev => [...prev, url]);
            onSuccess("ok");
        } catch (error) {
            console.error("Error uploading:", error);
            onError({ error });
        } finally {
            setUploading(false);
        }
    };
    
    const handleMultipleUpload = async (fileList: any[]) => {
        try {
            setUploading(true);
            const files = fileList.map(file => file.originFileObj);
            const firebase = getFirebaseBackend();
            const urls = await firebase.uploadFiles(files);
            
            setUploadedImages(urls);
            form.setFieldsValue({ reviewImages: urls });
            return urls;
        } catch (error) {
            console.error("Error uploading multiple files:", error);
            throw error;
        } finally {
            setUploading(false);
        }
    };

    const handleFormSubmit = async () => {
        try {
            const values = await form.validateFields();
            
            if (fileList.length > 0) {
                const fileObjects = fileList.filter(file => file.originFileObj);
                if (fileObjects.length > 0) {
                    const imageUrls = await handleMultipleUpload(fileObjects);
                    values.reviewImages = imageUrls;
                }
            }
            
            if (modalMode === "add") {
                dispatch(addReview(values) as any).then(() => {
                    setIsModalOpen(false);
                    form.resetFields();
                    setFileList([]);
                    setUploadedImages([]);
                    loadReviews();
                });
            } else if (modalMode === "edit") {
                dispatch(updateReview({
                    id: selectedReview.id,
                    data: values
                }) as any).then(() => {
                    setIsModalOpen(false);
                    form.resetFields();
                    setFileList([]);
                    setUploadedImages([]);
                    loadReviews();
                });
            }
        } catch (error) {
            console.error("Form validation failed:", error);
        }
    };

    const handleDelete = (id: string) => {
        Modal.confirm({
            title: "Are you sure you want to delete this review?",
            content: "This action cannot be undone.",
            okText: "Yes, Delete",
            okType: "danger",
            cancelText: "Cancel",
            onOk: () => {
                dispatch(deleteReview(id) as any).then(() => {
                    loadReviews();
                });
            }
        });
    };

    const handlePreview = (image : any) => {
        setPreviewImage(image);
        setPreviewVisible(true);
    };

    const handleChange = ({ fileList: newFileList }: { fileList: any[] }) => {
        setFileList(newFileList);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const renderReviewCard = (review : any) => {
        return (
            <Card 
                key={review.id}
                className="mb-4 review-card"
                actions={[
                    <Tooltip title="View Details" key="view">
                        <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500" onClick={() => showViewModal(review)}>
                            <EyeOutlined />
                        </button>
                    </Tooltip>,
                    <Tooltip title="Edit" key="edit">
                        <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500" onClick={() => showEditModal(review)}>
                            <EditOutlined />
                        </button>
                    </Tooltip>,
                    <Tooltip title="Delete" key="delete">
                        <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500" onClick={() => handleDelete(review.id)}>
                            <DeleteOutlined />
                        </button>
                    </Tooltip>,
                ]}
            >
                <Row gutter={16} align="middle">
                    <Col xs={24} sm={4} md={3}>
                        <div className="flex flex-col items-center">
                            <Avatar 
                                src={review.avatarUrl} 
                                size={64}
                                className="mb-2"
                            />
                            <div className="text-center">
                                <span className="font-medium">{review.userName}</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={20} md={21}>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={16}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Product:</span>
                                        <span>{review.productName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Variation:</span>
                                        <span>{review.variationOptionValues?.join(", ") || "N/A"}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Rating:</span>
                                        <Rate disabled defaultValue={review.ratingValue} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-medium">Comment:</span>
                                        <p className="line-clamp-2">{review.comment}</p>
                                    </div>
                                    {review.lastUpdatedTime && (
                                        <span className="text-sm text-slate-500 dark:text-zink-200">
                                            {moment(review.lastUpdatedTime).format("YYYY-MM-DD HH:mm")}
                                        </span>
                                    )}
                                </div>
                            </Col>
                            <Col xs={24} md={8}>
                                <Row gutter={[8, 8]}>
                                    <Col span={24}>
                                        <Image 
                                            src={review.productImage || "https://via.placeholder.com/150"}
                                            alt={review.productName}
                                            className="max-h-[100px] object-contain"
                                            fallback="https://via.placeholder.com/150"
                                            preview={false}
                                        />
                                    </Col>
                                    {review.reviewImages && review.reviewImages.length > 0 && (
                                        <Col span={24}>
                                            <div className="flex gap-2">
                                                {review.reviewImages.slice(0, 3).map((image : any, index : any) => (
                                                    <Image 
                                                        key={index}
                                                        src={image}
                                                        alt={`Review image ${index + 1}`}
                                                        className="w-[50px] h-[50px] object-cover cursor-pointer"
                                                        preview={false}
                                                        onClick={() => handlePreview(image)}
                                                    />
                                                ))}
                                                {review.reviewImages.length > 3 && (
                                                    <button 
                                                        type="button" 
                                                        className="text-custom-500 hover:text-custom-600 focus:text-custom-600"
                                                        onClick={() => showViewModal(review)}
                                                    >
                                                        +{review.reviewImages.length - 3}
                                                    </button>
                                                )}
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                        
                        {review.reply && (
                            <div className="mt-4 p-3 bg-slate-100 dark:bg-zink-500 rounded-md">
                                <div className="flex gap-2">
                                    <CommentOutlined className="mt-1" />
                                    <div>
                                        <div className="font-medium">{review.reply.userName}</div>
                                        <p className="my-1">{review.reply.replyContent}</p>
                                        {review.reply.lastUpdatedTime && (
                                            <span className="text-xs text-slate-500 dark:text-zink-200">
                                                {moment(review.reply.lastUpdatedTime).format("YYYY-MM-DD HH:mm")}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Card>
        );
    };

    const renderModal = () => {
        return (
            isModalOpen && (
                <div className="fixed inset-0 z-[1005] flex items-center justify-center overflow-hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative w-full max-w-2xl max-h-full p-4 bg-white dark:bg-zink-700 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between p-4 border-b rounded-t border-slate-200 dark:border-zink-500">
                            <h5 className="text-16 font-medium">{modalMode === 'view' ? 'Review Details' : modalMode === 'edit' ? 'Edit Review' : 'Add Review'}</h5>
                            <button 
                                className="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500"
                                onClick={handleModalClose}
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            {modalMode === 'view' ? (
                                <div>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <Avatar src={selectedReview.avatarUrl} size={64} />
                                                <div>
                                                    <h5 className="text-16 mb-1 font-medium">{selectedReview.userName}</h5>
                                                    <p className="text-slate-500 dark:text-zink-200">
                                                        {selectedReview.lastUpdatedTime ? 
                                                            moment(selectedReview.lastUpdatedTime).format("YYYY-MM-DD HH:mm") : 
                                                            "N/A"}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={24}>
                                            <Card className="mb-4">
                                                <div className="flex flex-col gap-3">
                                                    <div>
                                                        <span className="font-medium">Product:</span>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Image 
                                                                src={selectedReview.productImage || "https://via.placeholder.com/150"}
                                                                alt={selectedReview.productName}
                                                                className="w-[50px] h-[50px] object-contain"
                                                                fallback="https://via.placeholder.com/150"
                                                                preview={false}
                                                            />
                                                            <span>{selectedReview.productName}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Variation:</span>
                                                        <div>{selectedReview.variationOptionValues?.join(", ") || "N/A"}</div>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Rating:</span>
                                                        <div><Rate disabled defaultValue={selectedReview.ratingValue} /></div>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Comment:</span>
                                                        <div>{selectedReview.comment}</div>
                                                    </div>
                                                    {selectedReview.reviewImages && selectedReview.reviewImages.length > 0 && (
                                                        <div>
                                                            <span className="font-medium">Images:</span>
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                {selectedReview.reviewImages.map((image: string, index: number) => (
                                                                    <Image 
                                                                        key={index}
                                                                        src={image}
                                                                        alt={`Review image ${index + 1}`}
                                                                        className="w-[80px] h-[80px] object-cover"
                                                                        preview={true}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Card>
                                        </Col>
                                        {selectedReview.reply && (
                                            <Col span={24}>
                                                <Card title="Reply" className="border-0 shadow-none bg-slate-50 dark:bg-zink-600">
                                                    <div className="flex flex-col gap-2">
                                                        <div>
                                                            <span className="font-medium">From:</span>
                                                            <div>{selectedReview.reply.userName}</div>
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Content:</span>
                                                            <div>{selectedReview.reply.replyContent}</div>
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Date:</span>
                                                            <div>{selectedReview.reply.lastUpdatedTime ? 
                                                                moment(selectedReview.reply.lastUpdatedTime).format("YYYY-MM-DD HH:mm") : 
                                                                "N/A"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        )}
                                    </Row>
                                </div>
                            ) : (
                                <Form
                                    form={form}
                                    layout="vertical"
                                    name="reviewForm"
                                >
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="userName"
                                                label={<span className="inline-block mb-2 text-base font-medium">User Name <span className="text-red-500 ml-1">*</span></span>}
                                                rules={[{ required: true, message: 'Please enter user name' }]}
                                            >
                                                <Input placeholder="Enter user name" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="productItemId"
                                                label={<span className="inline-block mb-2 text-base font-medium">Product <span className="text-red-500 ml-1">*</span></span>}
                                                rules={[{ required: true, message: 'Please select a product' }]}
                                            >
                                                <Select 
                                                    placeholder="Select a product" 
                                                    className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800"
                                                    showSearch
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        (option?.label?.toString().toLowerCase() ?? '').includes(input.toLowerCase())
                                                    }
                                                    options={products.map(product => ({
                                                        value: product.id,
                                                        label: product.name
                                                    }))}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    
                                    <Form.Item
                                        name="productName"
                                        label={<span className="inline-block mb-2 text-base font-medium">Product Name <span className="text-red-500 ml-1">*</span></span>}
                                        rules={[{ required: true, message: 'Please enter product name' }]}
                                    >
                                        <Input placeholder="Enter product name" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="ratingValue"
                                        label={<span className="inline-block mb-2 text-base font-medium">Rating <span className="text-red-500 ml-1">*</span></span>}
                                        rules={[{ required: true, message: 'Please select rating' }]}
                                    >
                                        <Rate />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="comment"
                                        label={<span className="inline-block mb-2 text-base font-medium">Comment <span className="text-red-500 ml-1">*</span></span>}
                                        rules={[{ required: true, message: 'Please enter comment' }]}
                                    >
                                        <Input.TextArea rows={4} placeholder="Enter comment" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="reviewImages"
                                        label={<span className="inline-block mb-2 text-base font-medium">Review Images</span>}
                                    >
                                        <Upload
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={handlePreview}
                                            onChange={handleChange}
                                            customRequest={handleUpload}
                                            multiple={true}
                                        >
                                            {fileList.length >= 8 ? null : (
                                                <div>
                                                    <PlusOutlined />
                                                    <div style={{ marginTop: 8 }}>Upload</div>
                                                </div>
                                            )}
                                        </Upload>
                                    </Form.Item>
                                </Form>
                            )}
                        </div>
                        <div className="flex items-center justify-end p-4 border-t gap-2 border-slate-200 dark:border-zink-500">
                            <button
                                type="button"
                                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10"
                                onClick={handleModalClose}
                            >
                                {modalMode === 'view' ? 'Close' : 'Cancel'}
                            </button>
                            {modalMode !== 'view' && (
                                <button
                                    type="button"
                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                    onClick={handleFormSubmit}
                                >
                                    {modalMode === 'add' ? 'Add' : 'Update'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )
        );
    };

    return (
        <div className="review-container">
            <BreadCrumb title="Customer Reviews" pageTitle="Ecommerce" />
            <div className="card" id="reviewListTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Search for reviews..."
                                    autoComplete="off"
                                    value={searchText}
                                    onChange={(e) => {
                                        setSearchText(e.target.value);
                                        setCurrentPage(1);
                                        loadReviews();
                                    }}
                                />
                                <SearchOutlined className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                        {/* <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
                            <Link
                                to="#!"
                                data-modal-target="addReviewModal"
                                type="button"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={showAddModal}
                            >
                                <PlusOutlined className="inline-block size-4 mr-1" /> Add Review
                            </Link>
                        </div> */}
                    </div>
                </div>
                
                <div className="!pt-1 card-body">
                    {loading ? (
                        <div className="flex items-center justify-center py-10">
                            <Spin size="large" />
                        </div>
                    ) : (
                        <>
                            {reviews?.data?.items?.length > 0 ? (
                                <div className="review-list">
                                    {reviews.data.items.map((review: any) => (
                                        <div key={review.id}>
                                            {renderReviewCard(review)}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="noresult">
                                    <div className="py-6 text-center">
                                        <SearchOutlined className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                                        <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                        <p className="mb-0 text-slate-500 dark:text-zink-200">
                                            We've searched all reviews. We did not find any reviews for your search.
                                        </p>
                                    </div>
                                </div>
                            )}
                            
                            {reviews?.data?.totalCount > 0 && (
                                <div className="flex justify-end gap-4 px-4 mt-4">
                                    <Pagination
                                        current={currentPage}
                                        pageSize={pageSize}
                                        total={reviews.data.totalCount}
                                        onChange={handlePageChange}
                                        showSizeChanger
                                        onShowSizeChange={handlePageChange}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            
            {isModalOpen && (
                <div className="fixed inset-0 z-[1005] flex items-center justify-center overflow-hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative w-full max-w-2xl max-h-full p-4 bg-white dark:bg-zink-700 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between p-4 border-b rounded-t border-slate-200 dark:border-zink-500">
                            <h5 className="text-16 font-medium">{modalMode === 'view' ? 'Review Details' : modalMode === 'edit' ? 'Edit Review' : 'Add Review'}</h5>
                            <button 
                                className="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500"
                                onClick={handleModalClose}
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            {modalMode === 'view' ? (
                                <div>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <Avatar src={selectedReview.avatarUrl} size={64} />
                                                <div>
                                                    <h5 className="text-16 mb-1 font-medium">{selectedReview.userName}</h5>
                                                    <p className="text-slate-500 dark:text-zink-200">
                                                        {selectedReview.lastUpdatedTime ? 
                                                            moment(selectedReview.lastUpdatedTime).format("YYYY-MM-DD HH:mm") : 
                                                            "N/A"}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={24}>
                                            <Card className="mb-4">
                                                <div className="flex flex-col gap-3">
                                                    <div>
                                                        <span className="font-medium">Product:</span>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Image 
                                                                src={selectedReview.productImage || "https://via.placeholder.com/150"}
                                                                alt={selectedReview.productName}
                                                                className="w-[50px] h-[50px] object-contain"
                                                                fallback="https://via.placeholder.com/150"
                                                                preview={false}
                                                            />
                                                            <span>{selectedReview.productName}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Variation:</span>
                                                        <div>{selectedReview.variationOptionValues?.join(", ") || "N/A"}</div>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Rating:</span>
                                                        <div><Rate disabled defaultValue={selectedReview.ratingValue} /></div>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Comment:</span>
                                                        <div>{selectedReview.comment}</div>
                                                    </div>
                                                    {selectedReview.reviewImages && selectedReview.reviewImages.length > 0 && (
                                                        <div>
                                                            <span className="font-medium">Images:</span>
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                {selectedReview.reviewImages.map((image: string, index: number) => (
                                                                    <Image 
                                                                        key={index}
                                                                        src={image}
                                                                        alt={`Review image ${index + 1}`}
                                                                        className="w-[80px] h-[80px] object-cover"
                                                                        preview={true}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Card>
                                        </Col>
                                        {selectedReview.reply && (
                                            <Col span={24}>
                                                <Card title="Reply" className="border-0 shadow-none bg-slate-50 dark:bg-zink-600">
                                                    <div className="flex flex-col gap-2">
                                                        <div>
                                                            <span className="font-medium">From:</span>
                                                            <div>{selectedReview.reply.userName}</div>
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Content:</span>
                                                            <div>{selectedReview.reply.replyContent}</div>
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Date:</span>
                                                            <div>{selectedReview.reply.lastUpdatedTime ? 
                                                                moment(selectedReview.reply.lastUpdatedTime).format("YYYY-MM-DD HH:mm") : 
                                                                "N/A"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        )}
                                    </Row>
                                </div>
                            ) : (
                                <Form
                                    form={form}
                                    layout="vertical"
                                    name="reviewForm"
                                >
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="userName"
                                                label={<span className="inline-block mb-2 text-base font-medium">User Name <span className="text-red-500 ml-1">*</span></span>}
                                                rules={[{ required: true, message: 'Please enter user name' }]}
                                            >
                                                <Input placeholder="Enter user name" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="productItemId"
                                                label={<span className="inline-block mb-2 text-base font-medium">Product <span className="text-red-500 ml-1">*</span></span>}
                                                rules={[{ required: true, message: 'Please select a product' }]}
                                            >
                                                <Select 
                                                    placeholder="Select a product" 
                                                    className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800"
                                                    showSearch
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        (option?.label?.toString().toLowerCase() ?? '').includes(input.toLowerCase())
                                                    }
                                                    options={products.map(product => ({
                                                        value: product.id,
                                                        label: product.name
                                                    }))}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    
                                    <Form.Item
                                        name="productName"
                                        label={<span className="inline-block mb-2 text-base font-medium">Product Name <span className="text-red-500 ml-1">*</span></span>}
                                        rules={[{ required: true, message: 'Please enter product name' }]}
                                    >
                                        <Input placeholder="Enter product name" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="ratingValue"
                                        label={<span className="inline-block mb-2 text-base font-medium">Rating <span className="text-red-500 ml-1">*</span></span>}
                                        rules={[{ required: true, message: 'Please select rating' }]}
                                    >
                                        <Rate />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="comment"
                                        label={<span className="inline-block mb-2 text-base font-medium">Comment <span className="text-red-500 ml-1">*</span></span>}
                                        rules={[{ required: true, message: 'Please enter comment' }]}
                                    >
                                        <Input.TextArea rows={4} placeholder="Enter comment" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="reviewImages"
                                        label={<span className="inline-block mb-2 text-base font-medium">Review Images</span>}
                                    >
                                        <Upload
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={handlePreview}
                                            onChange={handleChange}
                                            customRequest={handleUpload}
                                            multiple={true}
                                        >
                                            {fileList.length >= 8 ? null : (
                                                <div>
                                                    <PlusOutlined />
                                                    <div style={{ marginTop: 8 }}>Upload</div>
                                                </div>
                                            )}
                                        </Upload>
                                    </Form.Item>
                                </Form>
                            )}
                        </div>
                        <div className="flex items-center justify-end p-4 border-t gap-2 border-slate-200 dark:border-zink-500">
                            <button
                                type="button"
                                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10"
                                onClick={handleModalClose}
                            >
                                {modalMode === 'view' ? 'Close' : 'Cancel'}
                            </button>
                            {modalMode !== 'view' && (
                                <button
                                    type="button"
                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                    onClick={handleFormSubmit}
                                >
                                    {modalMode === 'add' ? 'Add' : 'Update'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
            {previewVisible && (
                <div className="fixed inset-0 z-[1005] flex items-center justify-center overflow-hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setPreviewVisible(false)}></div>
                    <div className="relative w-full max-w-md max-h-full p-4 bg-white dark:bg-zink-700 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between p-4 border-b rounded-t border-slate-200 dark:border-zink-500">
                            <h5 className="text-16 font-medium">Image Preview</h5>
                            <button 
                                className="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500"
                                onClick={() => setPreviewVisible(false)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4">
                            <img alt="Preview" style={{ width: '100%' }} src={previewImage} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Review;
