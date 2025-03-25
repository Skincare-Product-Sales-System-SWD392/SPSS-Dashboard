import React, { useEffect, useRef, useState, useCallback } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import moment from "moment";
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ChevronDown, Truck, CreditCard, CircleDollarSign, Download, Printer, AlertCircle, CheckCircle, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Images
import delivery1 from "assets/images/brand/delivery-1.png";
import logoSm from "assets/images/logo-sm.png";

// icons
import { Link as RouterLink } from "react-router-dom";

// Redux
import { getOrderById, changeOrderStatus } from "slices/order/thunk";
import { getAllPaymentMethods } from "helpers/fakebackend_helper";

// Status component
const Status = ({ status }: { status: string }) => {
    switch (status) {
        case "Delivered":
            return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">{status}</span>);
        case "Shipping":
            return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20">{status}</span>);
        case "Pending":
            return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">{status}</span>);
        case "Cancelled":
            return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-red-100 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/20">{status}</span>);
        case "Awaiting Payment":
            return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">{status}</span>);
        case "Return":
            return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">{status}</span>);
        default:
            return (<span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">{status}</span>);
    }
};

// Update the ORDER_STATUSES constant with more detailed styling info
const ORDER_STATUSES = [
    { 
        value: "Processing", 
        label: "Processing", 
        color: "yellow",
        bgClass: "bg-yellow-100 dark:bg-yellow-500/20",
        textClass: "text-yellow-500"
    },
    { 
        value: "Delivering", 
        label: "Delivering", 
        color: "purple",
        bgClass: "bg-purple-100 dark:bg-purple-500/20",
        textClass: "text-purple-500"
    },
    { 
        value: "Delivered", 
        label: "Delivered", 
        color: "green",
        bgClass: "bg-green-100 dark:bg-green-500/20",
        textClass: "text-green-500"
    },
    { 
        value: "Cancelled", 
        label: "Cancelled", 
        color: "red",
        bgClass: "bg-red-100 dark:bg-red-500/20",
        textClass: "text-red-500"
    },
    { 
        value: "Awaiting Payment", 
        label: "Awaiting Payment", 
        color: "sky",
        bgClass: "bg-sky-100 dark:bg-sky-500/20",
        textClass: "text-sky-500"
    }
];

const OrderOverview = () => {
    // Use search params to get the order ID
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    
    const dispatch = useDispatch<any>();
    const invoiceRef = useRef<HTMLDivElement>(null);
    const [showInvoice, setShowInvoice] = useState<boolean>(false);

    // Add state for payment methods
    const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
    
    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    // Format date
    const formatDate = (dateString: string) => {
        return moment(dateString).format('DD MMM, YYYY');
    };

    // Get order details from redux store
    const orderSelector = createSelector(
        (state: any) => state.order,
        (order) => ({
            currentOrder: order?.currentOrder || null,
            loading: order?.loading || false,
            error: order?.error || null,
        })
    );

    const { currentOrder, loading } = useSelector(orderSelector);

    // Fetch order details when component mounts
    useEffect(() => {
        if (id) {
            dispatch(getOrderById(id));
        }
    }, [dispatch, id]);

    // Add function to fetch payment methods
    const fetchPaymentMethods = useCallback(async () => {
        try {
            const response = await getAllPaymentMethods({ 
                pageNumber: 1,
                pageSize: 10 
            });
            if (response.data.items) {
                setPaymentMethods(response.data.items);
            }
        } catch (error) {
            console.error("Failed to fetch payment methods:", error);
        }
    }, []);
    
    // Call fetchPaymentMethods in useEffect
    useEffect(() => {
        fetchPaymentMethods();
    }, [fetchPaymentMethods]);
    
    // Function to get payment method name by ID
    const getPaymentMethodName = (paymentMethodId: string) => {
        const method = paymentMethods.find(m => m.id === paymentMethodId);
        return method ? method.paymentType : "Cash on Delivery";
    };

    // Calculate estimated delivery date (7 days from order date)
    const estimatedDeliveryDate = currentOrder?.createdTime 
        ? moment(currentOrder.createdTime).add(7, 'days').format('DD MMM, YYYY')
        : 'N/A';

    // Add a function to generate random invoice ID
    const generateInvoiceId = () => {
        // Use order ID as base if available, otherwise generate random
        const baseId = currentOrder?.id?.substring(0, 6) || '';
        const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
        const timestamp = new Date().getTime().toString().substring(9, 13);
        return `INV-${baseId}${randomPart}-${timestamp}`;
    };

    // Store the invoice ID in state so it remains consistent
    const [invoiceId] = useState(generateInvoiceId());

    // Create a reusable invoice template function with larger text and better spacing
    const createInvoiceTemplate = () => {
        // Calculate subtotal
        const subtotal = currentOrder.orderDetails.reduce((sum: number, item: any) => 
            sum + (item.price * item.quantity), 0);
        
        // Get payment method name
        const paymentMethodName = getPaymentMethodName(currentOrder.paymentMethodId);
        
        return `
            <div style="padding: 30px; font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; border: 1px solid #eee; font-size: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                    <div>
                        <h1 style="margin: 0; color: #333; font-size: 28px;">Invoice</h1>
                        <h2>Invoice Number: ${invoiceId}</h2>
                        <p style="margin: 10px 0; font-size: 18px;">Date: ${formatDate(currentOrder.createdTime)}</p>
                    </div>
                    <div>
                        <img src="${logoSm}" alt="Logo" style="height: 60px;" />
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                    <div style="width: 48%;">
                        <h2 style="margin: 0 0 15px 0; border-bottom: 2px solid #eee; padding-bottom: 10px; font-size: 22px;">Billing Address:</h2>
                        <p style="margin: 8px 0; font-size: 18px;"><strong>${currentOrder.address?.customerName || "N/A"}</strong></p>
                        <p style="margin: 8px 0; font-size: 18px;">${currentOrder.address?.addressLine1 || "N/A"}${currentOrder.address?.addressLine2 ? `, ${currentOrder.address.addressLine2}` : ""}</p>
                        <p style="margin: 8px 0; font-size: 18px;">${currentOrder.address?.city || ""}${currentOrder.address?.city ? ", " : ""}${currentOrder.address?.province || ""}${currentOrder.address?.province ? ", " : ""}${currentOrder.address?.countryName || ""}</p>
                        <p style="margin: 8px 0; font-size: 18px;">Phone: ${currentOrder.address?.phoneNumber || "N/A"}</p>
                    </div>
                    <div style="width: 48%;">
                        <h2 style="margin: 0 0 15px 0; border-bottom: 2px solid #eee; padding-bottom: 10px; font-size: 22px;">Order Information:</h2>
                        <p style="margin: 8px 0; font-size: 18px;">Order #: ${currentOrder.id.substring(0, 8)}</p>
                        <p style="margin: 8px 0; font-size: 18px;">Order Date: ${formatDate(currentOrder.createdTime)}</p>
                        <p style="margin: 8px 0; font-size: 18px;">Status: ${currentOrder.status}</p>
                    </div>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <thead>
                        <tr style="background-color: #f8f8f8;">
                            <th style="padding: 15px; text-align: left; border-bottom: 2px solid #ddd; font-size: 18px;">Product</th>
                            <th style="padding: 15px; text-align: right; border-bottom: 2px solid #ddd; font-size: 18px;">Price</th>
                            <th style="padding: 15px; text-align: center; border-bottom: 2px solid #ddd; font-size: 18px;">Quantity</th>
                            <th style="padding: 15px; text-align: right; border-bottom: 2px solid #ddd; font-size: 18px;">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${currentOrder.orderDetails.map((item: any) => `
                            <tr>
                                <td style="padding: 15px; border-bottom: 1px solid #eee;">
                                    <div style="display: flex; align-items: center;">
                                        <div style="margin-right: 15px;">
                                            <img src="${item.productImage}" alt="" style="height: 60px; width: 60px; object-fit: contain;" />
                                        </div>
                                        <div>
                                            <p style="margin: 0; font-weight: bold; font-size: 18px;">${item.productName}</p>
                                            <p style="margin: 5px 0 0 0; color: #666; font-size: 16px;">${item.variationOptionValues ? item.variationOptionValues.join(", ") : ""}</p>
                                        </div>
                                    </div>
                                </td>
                                <td style="padding: 15px; text-align: right; border-bottom: 1px solid #eee; font-size: 18px;">${formatCurrency(item.price)}</td>
                                <td style="padding: 15px; text-align: center; border-bottom: 1px solid #eee; font-size: 18px;">${item.quantity}</td>
                                <td style="padding: 15px; text-align: right; border-bottom: 1px solid #eee; font-size: 18px;">${formatCurrency(item.price * item.quantity)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <div style="display: flex; justify-content: flex-end;">
                    <table style="width: 350px; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; text-align: right; font-size: 18px;">Subtotal:</td>
                            <td style="padding: 10px; text-align: right; font-size: 18px;">${formatCurrency(subtotal)}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; text-align: right; font-size: 18px;">Discount:</td>
                            <td style="padding: 10px; text-align: right; font-size: 18px;">${formatCurrency(0)}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; text-align: right; font-size: 18px;">Shipping:</td>
                            <td style="padding: 10px; text-align: right; font-size: 18px;">${formatCurrency(0)}</td>
                        </tr>
                        <tr style="font-weight: bold;">
                            <td style="padding: 10px; text-align: right; border-top: 2px solid #eee; font-size: 20px;">Total:</td>
                            <td style="padding: 10px; text-align: right; border-top: 2px solid #eee; font-size: 20px;">${formatCurrency(currentOrder.orderTotal)}</td>
                        </tr>
                    </table>
                </div>
                
                <div style="margin-top: 40px;">
                    <h2 style="margin: 0 0 15px 0; border-bottom: 2px solid #eee; padding-bottom: 10px; font-size: 22px;">Payment Method:</h2>
                    <p style="margin: 8px 0; font-size: 18px;">Payment Method: ${paymentMethodName}</p>
                    <p style="margin: 8px 0; font-size: 18px;">Customer: ${currentOrder.address?.customerName || "N/A"}</p>
                </div>
                
                <div style="margin-top: 40px; border-top: 2px solid #eee; padding-top: 20px;">
                    <p style="color: #666; font-size: 16px; margin: 0; line-height: 1.5;">
                        <strong>NOTES:</strong> All accounts are to be paid within 7 days from receipt of invoice. 
                        To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days 
                        the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.
                    </p>
                </div>
            </div>
        `;
    };

    // Fix the handlePrint implementation to use the same template as PDF
    const handlePrint = useReactToPrint({
        contentRef: invoiceRef,
        documentTitle: `Invoice-${currentOrder?.id?.substring(0, 8) || 'Order'}`,
        onBeforePrint: () => {
            console.log("Preparing content for printing...");
            // Create the invoice template and set it to the print div
            if (invoiceRef.current) {
                invoiceRef.current.innerHTML = createInvoiceTemplate();
            }
            setShowInvoice(true);
            
            // Add a delay to ensure the invoice is visible before printing
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 500);
            });
        },
        onAfterPrint: () => {
            console.log('Print completed successfully');
            setShowInvoice(false);
        },
        onPrintError: (error) => {
            console.error('Print failed:', error);
            setShowInvoice(false);
        },
        pageStyle: `
            @page {
                size: auto;
                margin: 10mm;
            }
            @media print {
                html, body {
                    height: 100%;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: hidden;
                }
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            }
        `,
    });

    // Fix the issue with PDF generation
    const generatePDF = () => {
        if (invoiceRef.current) {
            const invoiceContent = createInvoiceTemplate();
            
            // Create a temporary div to render the invoice
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = invoiceContent;
            document.body.appendChild(tempDiv);
            
            // Use html2canvas with higher scale for better quality
            html2canvas(tempDiv, {
                scale: 2, // Increase scale for better quality
                useCORS: true,
                logging: false,
                width: 900, // Set fixed width
                height: 1200, // Set appropriate height
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                
                // Create PDF with larger dimensions
                const pdf = new jsPDF('p', 'pt', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                
                // Calculate ratio to fit the image properly
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                
                // Center the image on the page
                const x = (pdfWidth - imgWidth * ratio) / 2;
                const y = 20; // Add some top margin
                
                pdf.addImage(imgData, 'PNG', x, y, imgWidth * ratio, imgHeight * ratio);
                pdf.save(`invoice-${currentOrder.id.substring(0, 8)}.pdf`);
                
                // Remove the temporary div
                document.body.removeChild(tempDiv);
            });
        }
    };

    // Add these state variables
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

    // Add this function to handle status button click
    const handleStatusButtonClick = (status: string) => {
        setSelectedStatus(status);
        setShowStatusModal(true);
    };

    // Add state for MUI notifications
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');

    // Update the handleStatusChange function to use MUI notifications
    const handleStatusChange = async () => {
        if (!selectedStatus || !currentOrder || selectedStatus === currentOrder.status) {
            setShowStatusModal(false);
            return;
        }
        
        try {
            // Show loading toast
            const loadingToast = toast.loading('Updating order status...');
            
            await dispatch(changeOrderStatus({ 
                id: currentOrder.id, 
                status: selectedStatus 
            })).unwrap();
            
            // Fetch updated order details immediately after status change
            await dispatch(getOrderById(currentOrder.id));
            
            // Dismiss loading toast
            toast.dismiss(loadingToast);
            
            // Show success with MUI Snackbar
            setSnackbarMessage(`Order status updated to ${selectedStatus}`);
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            
            setShowStatusModal(false);
        } catch (error) {
            // Show error with MUI Snackbar
            setSnackbarMessage("Failed to update order status");
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            setShowStatusModal(false);
        }
    };
    
    // Add function to handle Snackbar close
    const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    // Update the payment method display in the Payment Info section
    const getPaymentMethodDisplay = (paymentMethodId: string) => {
        const method = paymentMethods.find(m => m.id === paymentMethodId);
        if (!method) return null;

        return (
            <div className="flex items-center gap-3">
                <div className="size-8 flex items-center justify-center rounded-md bg-white border">
                    <img 
                        src={method.imageUrl} 
                        alt={method.paymentType} 
                        className="h-6 w-6 object-contain"
                    />
                </div>
                <span className="font-medium">{method.paymentType}</span>
            </div>
        );
    };

    // Add this function to format phone numbers consistently
    const formatPhoneNumber = (phone: string) => {
        if (!phone) return '';
        // Format as XXXX XXX XXX
        return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    };

    // Update the status dropdown styling
    const StatusDropdown = ({ currentStatus, onStatusChange }: { currentStatus: string, onStatusChange: (status: string) => void }) => {
        return (
            <div className="flex items-center gap-3">
                <div className="relative inline-block min-w-[180px]">
                    <select
                        value={currentStatus}
                        onChange={(e) => onStatusChange(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md shadow-sm appearance-none cursor-pointer
                                  dark:bg-zink-700 dark:border-zink-500 
                                  focus:outline-none focus:ring-2 focus:ring-custom-500/20 focus:border-custom-500
                                  disabled:bg-slate-100 disabled:cursor-not-allowed"
                    >
                        {ORDER_STATUSES.map((status) => {
                            const isCurrentStatus = status.value === currentStatus;
                            return (
                                <option 
                                    key={status.value} 
                                    value={status.value}
                                    disabled={isCurrentStatus}
                                    className={`py-2 ${status.textClass} ${isCurrentStatus ? 'font-medium' : ''}`}
                                >
                                    {status.label}
                                </option>
                            );
                        })}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <ChevronDown className="size-4 text-slate-500 dark:text-zink-200" />
                    </div>
                </div>
                
                {/* Status Badge */}
                {ORDER_STATUSES.map(status => (
                    status.value === currentStatus && (
                        <span 
                            key={status.value}
                            className={`px-2.5 py-0.5 text-xs inline-block font-medium rounded border
                                      ${status.bgClass} ${status.textClass}
                                      border-${status.color}-200 dark:border-${status.color}-500/20`}
                        >
                            {status.label}
                        </span>
                    )
                ))}
            </div>
        );
    };

    // Add this useEffect to ensure toast notifications work properly
    useEffect(() => {
        // Create a container for toast notifications if it doesn't exist
        if (!document.getElementById('toast-container')) {
            const toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.className = 'fixed top-4 right-4 z-50';
            document.body.appendChild(toastContainer);
        }
        
        // Clean up on component unmount
        return () => {
            const container = document.getElementById('toast-container');
            if (container && container.childNodes.length === 0) {
                document.body.removeChild(container);
            }
        };
    }, []);

    if (loading || !currentOrder) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-custom-500"></div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <BreadCrumb title='Order Overview' pageTitle='Ecommerce' />

            {/* Add Back to Orders button */}
            <div className="flex justify-between items-center mb-4">
                <Link 
                    to="/apps-ecommerce-orders"
                    className="py-2 px-4 text-sm font-medium rounded-md flex items-center gap-2
                            bg-blue-500 text-white
                            hover:bg-blue-600 transition-colors duration-200
                            shadow-sm"
                >
                    <i className="ri-arrow-left-line text-16"></i>
                    <span>Back to Orders</span>
                </Link>
            </div>

            {/* Invoice template for printing - make it visible but hidden until print */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white ${showInvoice ? 'block z-50' : 'hidden -z-10'}`}>
                <div ref={invoiceRef} className="p-8 bg-white print-only">
                    {/* The invoice template will be inserted here dynamically */}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-12 2xl:grid-cols-12">
                <div className="lg:col-span-3 2xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center justify-center size-12 bg-purple-100 rounded-md dark:bg-purple-500/20 ltr:float-right rtl:float-left">
                                <Truck className="text-purple-500 fill-purple-200 dark:fill-purple-500/30" />
                            </div>
                            <h6 className="mb-4 text-15">Shipping Details</h6>

                            <h6 className="mb-1">{currentOrder.address?.customerName || "N/A"}</h6>
                            <p className="mb-1 text-slate-500 dark:text-zink-200">
                                {currentOrder.address?.addressLine1 || "N/A"}
                                {currentOrder.address?.addressLine2 ? `, ${currentOrder.address.addressLine2}` : ""}
                            </p>
                            <p className="text-slate-500 dark:text-zink-200">
                                {currentOrder.address?.city || ""}{currentOrder.address?.city ? ", " : ""}
                                {currentOrder.address?.province || ""}{currentOrder.address?.province ? ", " : ""}
                                {currentOrder.address?.countryName || ""}
                            </p>
                            
                            {currentOrder.address?.phoneNumber && (
                                <p className="mt-2 text-slate-500 dark:text-zink-200">
                                    <span className="font-medium text-slate-800 dark:text-zink-50">Phone:</span> {formatPhoneNumber(currentOrder.address?.phoneNumber)}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center justify-center size-12 bg-green-100 rounded-md dark:bg-green-500/20 ltr:float-right rtl:float-left">
                                <CreditCard className="text-green-500 fill-green-200 dark:fill-green-500/30" />
                            </div>
                            <h6 className="mb-4 text-15">Billing Details</h6>

                            <h6 className="mb-1">{currentOrder.address?.customerName || "N/A"}</h6>
                            <p className="mb-1 text-slate-500 dark:text-zink-200">
                                {currentOrder.address?.addressLine1 || "N/A"}
                                {currentOrder.address?.addressLine2 ? `, ${currentOrder.address.addressLine2}` : ""}
                            </p>
                            <p className="text-slate-500 dark:text-zink-200">
                                {currentOrder.address?.city || ""}{currentOrder.address?.city ? ", " : ""}
                                {currentOrder.address?.province || ""}{currentOrder.address?.province ? ", " : ""}
                                {currentOrder.address?.countryName || ""}
                            </p>
                            
                            {currentOrder.address?.phoneNumber && (
                                <p className="mt-2 text-slate-500 dark:text-zink-200">
                                    <span className="font-medium text-slate-800 dark:text-zink-50">Phone:</span> {formatPhoneNumber(currentOrder.address?.phoneNumber)}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center justify-center size-12 bg-sky-100 rounded-md dark:bg-sky-500/20 ltr:float-right rtl:float-left">
                                <CircleDollarSign className="text-sky-500 fill-sky-200 dark:fill-sky-500/30" />
                            </div>
                            <h6 className="mb-4 text-15">Payment Info</h6>

                            <div className="overflow-x-auto">
                                <table className="w-full table-fixed">
                                    <tbody>
                                        <tr>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent w-1/3">Payment Method</td>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent w-[5%] text-center">:</td>
                                            <td className="px-4 first:pl-0 last:pr-0 py-2 border-y border-transparent w-2/3">
                                                {getPaymentMethodDisplay(currentOrder.paymentMethodId)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent">Order Date</td>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent text-center">:</td>
                                            <td className="px-4 first:pl-0 last:pr-0 py-2 border-y border-transparent">{formatDate(currentOrder.createdTime)}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent">Delivery Date</td>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent text-center">:</td>
                                            <td className="px-4 first:pl-0 last:pr-0 py-2 border-y border-transparent">{estimatedDeliveryDate}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent">Status</td>
                                            <td className="px-2 first:pl-0 last:pr-0 py-2 border-y border-transparent text-center">:</td>
                                            <td className="px-4 first:pl-0 last:pr-0 py-2 border-y border-transparent">
                                                {ORDER_STATUSES.map(status => (
                                                    status.value === currentOrder.status && (
                                                        <span 
                                                            key={status.value}
                                                            className={`px-2.5 py-0.5 text-xs inline-block font-medium rounded border
                                                                      ${status.bgClass} ${status.textClass}
                                                                      border-${status.color}-200 dark:border-${status.color}-500/20`}
                                                        >
                                                            {status.label}
                                                        </span>
                                                    )
                                                ))}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 2xl:col-span-6">
                    <div className="card" ref={invoiceRef}>
                        <div className="card-body">
                            <div className="flex items-center gap-3">
                                <h6 className="text-15 grow">Order #{currentOrder.id.substring(0, 8)}</h6>
                                <div className="shrink-0 flex gap-2">
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            console.log("Invoice button clicked");
                                            generatePDF();
                                        }} 
                                        className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                    >
                                        <Download className="inline-block size-4 ltr:mr-1 rtl:ml-1" />
                                        <span className="align-middle">Invoice</span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="ltr:text-left rtl:text-right text-sm text-slate-500 dark:text-zink-200 uppercase">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold border-b border-slate-200 dark:border-zink-500">Product</th>
                                            <th className="px-6 py-3 font-semibold border-b border-slate-200 dark:border-zink-500">Price</th>
                                            <th className="px-6 py-3 font-semibold border-b border-slate-200 dark:border-zink-500">Quantity</th>
                                            <th className="px-6 py-3 font-semibold border-b border-slate-200 dark:border-zink-500">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrder.orderDetails && currentOrder.orderDetails.map((item: any, index: number) => (
                                            <tr key={index} className="border-b border-slate-200 dark:border-zink-500">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-12 bg-slate-100 rounded-md shrink-0 dark:bg-zink-600">
                                                            <img src={item.productImage} alt="" className="h-12 mx-auto" />
                                                        </div>
                                                        <div className="grow">
                                                            <h6 className="mb-1 text-15">{item.productName}</h6>
                                                            <p className="text-slate-500 dark:text-zink-200">
                                                                {item.variationOptionValues && item.variationOptionValues.join(", ")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">{formatCurrency(item.price)}</td>
                                                <td className="px-6 py-4">{item.quantity}</td>
                                                <td className="px-6 py-4">{formatCurrency(item.price * item.quantity)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3} className="px-6 py-3 text-right">Sub Total :</td>
                                            <td className="px-6 py-3">{formatCurrency(currentOrder.orderTotal)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="px-6 py-3 text-right">Discount :</td>
                                            <td className="px-6 py-3">{formatCurrency(0)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="px-6 py-3 text-right">Shipping Charge :</td>
                                            <td className="px-6 py-3">{formatCurrency(0)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="px-6 py-3 text-right">Tax :</td>
                                            <td className="px-6 py-3">{formatCurrency(0)}</td>
                                        </tr>
                                        <tr className="font-semibold">
                                            <td colSpan={3} className="px-6 py-3 text-right">Total Amount :</td>
                                            <td className="px-6 py-3">{formatCurrency(currentOrder.orderTotal)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Order Status</h6>
                            <div>
                                <div className="relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden done">
                                    <div className="flex gap-4">
                                        <div className="grow">
                                            <h6 className="mb-2 text-slate-500 text-15 dark:text-slate-400">Order Placed</h6>
                                            <p className="text-gray-400 dark:text-zink-200">Your order has been successfully submitted.</p>
                                        </div>
                                        <p className="text-sm text-gray-400 dark:text-zink-200 shrink-0">{formatDate(currentOrder.createdTime)}</p>
                                    </div>
                                </div>
                                
                                {(currentOrder.status === "Awaiting Payment" || currentOrder.status === "Pending" || currentOrder.status === "Shipping" || currentOrder.status === "Delivered") && (
                                    <div className={`relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden ${currentOrder.status === "Awaiting Payment" ? "active" : "done"}`}>
                                        <div className="flex gap-4">
                                            <div className="grow">
                                                <h6 className="mb-2 text-sky-500 text-15 dark:text-sky-400">Awaiting Payment</h6>
                                                <p className="text-gray-400 dark:text-zink-200">Waiting for payment confirmation.</p>
                                            </div>
                                            <p className="text-sm text-gray-400 dark:text-zink-200 shrink-0">{moment(currentOrder.createdTime).add(1, 'days').format('DD MMM, YYYY')}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {(currentOrder.status === "Pending" || currentOrder.status === "Shipping" || currentOrder.status === "Delivered") && (
                                    <div className={`relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden ${currentOrder.status === "Pending" ? "active" : "done"}`}>
                                        <div className="flex gap-4">
                                            <div className="grow">
                                                <h6 className="mb-2 text-yellow-500 text-15 dark:text-yellow-400">Order Processing</h6>
                                                <p className="text-gray-400 dark:text-zink-200">Your order is being processed and prepared for shipping.</p>
                                            </div>
                                            <p className="text-sm text-gray-400 dark:text-zink-200 shrink-0">{moment(currentOrder.createdTime).add(2, 'days').format('DD MMM, YYYY')}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {(currentOrder.status === "Shipping" || currentOrder.status === "Delivered") && (
                                    <div className={`relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden ${currentOrder.status === "Shipping" ? "active" : "done"}`}>
                                        <div className="flex gap-4">
                                            <div className="grow">
                                                <h6 className="mb-2 text-purple-500 text-15 dark:text-purple-400">Order Shipped</h6>
                                                <p className="text-gray-400 dark:text-zink-200">Your order has been shipped and is on its way to you.</p>
                                            </div>
                                            <p className="text-sm text-gray-400 dark:text-zink-200 shrink-0">{moment(currentOrder.createdTime).add(4, 'days').format('DD MMM, YYYY')}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {currentOrder.status === "Delivered" && (
                                    <div className={`relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden active`}>
                                        <div className="flex gap-4">
                                            <div className="grow">
                                                <h6 className="mb-2 text-green-500 text-15 dark:text-green-400">Order Delivered</h6>
                                                <p className="text-gray-400 dark:text-zink-200">The order has been successfully delivered to the customer.</p>
                                            </div>
                                            <p className="text-sm text-gray-400 dark:text-zink-200 shrink-0">{estimatedDeliveryDate}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {currentOrder.status === "Cancelled" && (
                                    <div className={`relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden active`}>
                                        <div className="flex gap-4">
                                            <div className="grow">
                                                <h6 className="mb-2 text-red-500 text-15 dark:text-red-400">Order Cancelled</h6>
                                                <p className="text-gray-400 dark:text-zink-200">The order has been cancelled.</p>
                                            </div>
                                            <p className="text-sm text-gray-400 dark:text-zink-200 shrink-0">{moment(currentOrder.updatedTime || currentOrder.createdTime).format('DD MMM, YYYY')}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {currentOrder.status === "Return" && (
                                    <div className={`relative ltr:pl-6 rtl:pr-6 before:absolute ltr:before:border-l rtl:before:border-r ltr:before:left-[0.1875rem] rtl:before:right-[0.1875rem] before:border-slate-200 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-white after:border after:border-slate-200 after:rounded-full ltr:after:left-0 rtl:after:right-0 after:top-1.5 pb-4 last:before:hidden active`}>
                                        <div className="flex gap-4">
                                            <div className="grow">
                                                <h6 className="mb-2 text-slate-500 text-15 dark:text-slate-400">Order Returned</h6>
                                                <p className="text-gray-400 dark:text-zink-200">The order has been returned by the customer.</p>
                                            </div>
                                            <p className="text-sm text-gray-400 dark:text-zink-200 shrink-0">{moment(currentOrder.updatedTime || currentOrder.createdTime).format('DD MMM, YYYY')}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 2xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Customer Details</h6>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zink-600">
                                    <span className="text-slate-500 dark:text-zink-200 text-16 font-medium">
                                        {currentOrder.address?.customerName?.charAt(0) || "U"}
                                    </span>
                                </div>
                                <div>
                                    <h6 className="mb-1 text-15">{currentOrder.address?.customerName || "Unknown User"}</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Customer</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                {currentOrder.address?.email && (
                                    <div className="flex gap-3">
                                        <div className="text-slate-500 dark:text-zink-200 size-5 shrink-0">
                                            <i className="ri-mail-line text-16"></i>
                                        </div>
                                        <div className="grow">
                                            <p className="font-medium text-slate-800 dark:text-zink-50">{currentOrder.address.email}</p>
                                            <p className="text-slate-500 dark:text-zink-200">Email</p>
                                        </div>
                                    </div>
                                )}
                                {currentOrder.address?.phoneNumber && (
                                    <div className="flex gap-3">
                                        <div className="text-slate-500 dark:text-zink-200 size-5 shrink-0">
                                            <i className="ri-phone-line text-16"></i>
                                        </div>
                                        <div className="grow">
                                            <p className="font-medium text-slate-800 dark:text-zink-50">{formatPhoneNumber(currentOrder.address?.phoneNumber || '')}</p>
                                            <p className="text-slate-500 dark:text-zink-200">Phone Number</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Change Order Status</h6>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500 dark:text-zink-200">Current Status:</span>
                                    <div>
                                        {ORDER_STATUSES.map(status => (
                                            status.value === currentOrder.status && (
                                                <span 
                                                    key={status.value}
                                                    className={`px-2.5 py-0.5 text-xs inline-block font-medium rounded border
                                                                  ${status.bgClass} ${status.textClass}
                                                                  border-${status.color}-200 dark:border-${status.color}-500/20`}
                                                >
                                                    {status.label}
                                                </span>
                                            )
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2">
                                    {ORDER_STATUSES.map(status => (
                                        <button
                                            key={status.value}
                                            type="button"
                                            disabled={status.value === currentOrder.status}
                                            onClick={() => handleStatusButtonClick(status.value)}
                                            className={`px-3 py-2 text-sm rounded-md border transition-all
                                                                  ${status.value === currentOrder.status 
                                                                    ? `${status.bgClass} ${status.textClass} border-${status.color}-200 dark:border-${status.color}-500/20 cursor-not-allowed` 
                                                                    : 'bg-white dark:bg-zink-700 border-slate-200 dark:border-zink-500 hover:bg-slate-50 dark:hover:bg-zink-600'}`}
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <span className={`size-2 rounded-full ${status.bgClass}`}></span>
                                                <span className={status.value === currentOrder.status ? status.textClass : ''}>
                                                    {status.label}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Change Confirmation Modal with your font styling */}
            <Dialog 
                open={showStatusModal}
                onClose={() => setShowStatusModal(false)}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    style: {
                        fontFamily: 'inherit', // Use your app's font
                        borderRadius: '8px'
                    }
                }}
            >
                <DialogTitle sx={{ 
                    fontFamily: 'inherit', 
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    padding: '16px 24px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                }}>
                    Confirm Status Change
                    <IconButton
                        aria-label="close"
                        onClick={() => setShowStatusModal(false)}
                        sx={{ 
                            position: 'absolute', 
                            right: 8, 
                            top: 8,
                            color: 'rgba(0, 0, 0, 0.54)'
                        }}
                    >
                        <X className="size-4" />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ padding: '24px' }}>
                    <div className="text-center mb-4">
                        <div className="mb-4 inline-flex items-center justify-center size-12 rounded-full bg-slate-100 dark:bg-zink-600">
                            <AlertCircle className="size-6 text-slate-500 dark:text-zink-200" />
                        </div>
                        <h5 className="mb-1 text-lg font-medium">Change Order Status</h5>
                        <p className="text-slate-500 dark:text-zink-200">
                            Are you sure you want to change the order status from 
                            <span className="font-medium"> {currentOrder?.status}</span> to 
                            <span className="font-medium"> {selectedStatus}</span>?
                        </p>
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                        {selectedStatus && ORDER_STATUSES.map(status => (
                            status.value === selectedStatus && (
                                <div key={status.value} className="w-full">
                                    <div className={`p-3 rounded-md ${status.bgClass} border border-${status.color}-200 dark:border-${status.color}-500/20`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`size-8 flex items-center justify-center rounded-full bg-white dark:bg-zink-700 ${status.textClass}`}>
                                                <CheckCircle className="size-5" />
                                            </div>
                                            <div>
                                                <h6 className={`mb-1 ${status.textClass} font-medium`}>{status.label}</h6>
                                                <p className="text-sm text-slate-500 dark:text-zink-200">
                                                    {status.value === "Processing" && "Order is being processed"}
                                                    {status.value === "Delivering" && "Order is out for delivery"}
                                                    {status.value === "Delivered" && "Order has been delivered"}
                                                    {status.value === "Cancelled" && "Order has been cancelled"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </DialogContent>
                <DialogActions sx={{ 
                    padding: '16px 24px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                }}>
                    <Button
                        variant="outlined"
                        onClick={() => setShowStatusModal(false)}
                        sx={{ 
                            fontFamily: 'inherit',
                            textTransform: 'none',
                            fontWeight: 500,
                            borderRadius: '6px'
                        }}
                        className="py-2 px-4 text-sm font-medium border rounded-md bg-white border-slate-200 text-slate-500 
                                  dark:bg-zink-700 dark:border-zink-500 dark:text-zink-200 
                                  hover:bg-slate-100 dark:hover:bg-zink-600"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleStatusChange}
                        sx={{ 
                            fontFamily: 'inherit',
                            textTransform: 'none',
                            fontWeight: 500,
                            borderRadius: '6px',
                            backgroundColor: 'var(--custom-500, #4b93ff)',
                            '&:hover': {
                                backgroundColor: 'var(--custom-600, #3a84ff)'
                            }
                        }}
                        className="py-2 px-4 text-sm font-medium border rounded-md text-white 
                                  bg-custom-500 border-custom-500 
                                  hover:bg-custom-600 hover:border-custom-600"
                    >
                        Yes, Change Status
                    </Button>
                </DialogActions>
            </Dialog>
            
            {/* MUI Snackbar for notifications */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert 
                    onClose={handleSnackbarClose} 
                    severity={snackbarSeverity} 
                    sx={{ 
                        width: '100%',
                        fontFamily: 'inherit',
                        '& .MuiAlert-icon': {
                            fontSize: '1.25rem'
                        },
                        '& .MuiAlert-message': {
                            fontSize: '0.875rem',
                            fontWeight: 500
                        }
                    }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

export default OrderOverview;