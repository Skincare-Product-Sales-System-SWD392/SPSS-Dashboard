import React, { useCallback, useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { 
  Search, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  DollarSign, 
  User, 
  Calendar,
  Filter,
  RefreshCw,
  AlertTriangle,
  Grid,
  List
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_CONFIG } from 'config/api';
import { analyzeToken } from 'helpers/tokenHelper';

// Types
interface Transaction {
  id: string;
  userId: string;
  userName: string;
  transactionType: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  qrImageUrl: string;
  bankInformation: string;
  description: string;
  createdTime: string;
  lastUpdatedTime: string;
  approvedTime: string | null;
}

interface ApiDataContent {
  items: Transaction[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

interface ApiResponse {
  success: boolean;
  data: ApiDataContent;
  message: string;
  errors: any;
}

interface AxiosApiResponse {
  data?: ApiResponse;
  success?: boolean;
  [key: string]: any;
}

const formatCurrency = (amount: number) => {
  if (!amount && amount !== 0) return '';
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'Pending':
      return { 
        class: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/20 dark:border-yellow-500/20', 
        label: 'Chờ duyệt', 
        icon: Clock,
        color: '#f59e0b'
      };
    case 'Approved':
      return { 
        class: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-500/20 dark:border-green-500/20', 
        label: 'Đã duyệt', 
        icon: CheckCircle,
        color: '#10b981'
      };
    case 'Rejected':
      return { 
        class: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-500/20 dark:border-red-500/20', 
        label: 'Đã từ chối', 
        icon: XCircle,
        color: '#ef4444'
      };
    default:
      return { 
        class: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-500/20 dark:border-gray-500/20', 
        label: status, 
        icon: AlertTriangle,
        color: '#6b7280'
      };
  }
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const TransactionManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [transactionData, setTransactionData] = useState<Transaction[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  
  // Filter states
  const [filters, setFilters] = useState({
    status: '',
    fromDate: '',
    toDate: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Fetch transaction data
  const fetchTransactions = useCallback(async (page: number, size: number, searchFilters?: any) => {
    setLoading(true);
    try {
      const authUser = localStorage.getItem("authUser");
      const token = authUser ? JSON.parse(authUser).accessToken : null;
      
      if (token) {
        analyzeToken(token);
      }
      
      // Build query parameters
      const params: any = {
        pageNumber: page,
        pageSize: size
      };
      
      // Add search filters if provided
      const activeFilters = searchFilters || filters;
      if (activeFilters.status) {
        params.status = activeFilters.status;
      }
      if (activeFilters.fromDate) {
        params.fromDate = activeFilters.fromDate;
      }
      if (activeFilters.toDate) {
        params.toDate = activeFilters.toDate;
      }
      
      // Ensure token is set in axios defaults
      if (token && !axios.defaults.headers.common["Authorization"]) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      
      // Updated endpoint based on your API structure
      const response: AxiosApiResponse = await axios.get(
        `${API_CONFIG.BASE_URL}/skin-analysis/transactions/all`,
        {
          params
        }
      );
      
      let apiData: ApiResponse;
      
      if (response.data && response.data.success !== undefined) {
        apiData = response.data;
      } else if (response.success !== undefined) {
        apiData = response as any;
      } else if (response.items && response.totalCount !== undefined) {
        apiData = {
          success: true,
          data: response as any,
          message: "Operation completed successfully",
          errors: null
        };
      } else {
        throw new Error("Unexpected response structure");
      }
      
      if (apiData.success && apiData.data && apiData.data.items) {
        setTransactionData(apiData.data.items);
        setTotalCount(apiData.data.totalCount);
        setTotalPages(apiData.data.totalPages);
        
        if (apiData.data.pageNumber !== currentPage) {
          setCurrentPage(apiData.data.pageNumber);
        }
        
        toast.success(`Tải thành công ${apiData.data.items.length} giao dịch`);
      } else {
        toast.error('Không thể tải dữ liệu giao dịch');
      }
    } catch (error: any) {
      console.error('Error fetching transactions:', error);
      
      if (error.response?.status === 401) {
        toast.error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại');
      } else if (error.response?.status === 403) {
        toast.error('Không có quyền truy cập');
      } else {
        toast.error('Có lỗi xảy ra khi tải dữ liệu');
      }
    } finally {
      setLoading(false);
    }
  }, [currentPage, filters]);

  // Handle transaction status update
  const updateTransactionStatus = async (transactionId: string, status: 'Approved' | 'Rejected') => {
    try {
      const authUser = localStorage.getItem("authUser");
      const token = authUser ? JSON.parse(authUser).accessToken : null;
      
      if (token) {
        analyzeToken(token);
      }
      
      // Ensure token is set in axios defaults
      if (token && !axios.defaults.headers.common["Authorization"]) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/skin-analysis/approve-and-analyze`,
        {
          transactionId,
          status
        }
      );
      
      if (response.data?.success) {
        toast.success(`Giao dịch đã được ${status === 'Approved' ? 'duyệt' : 'từ chối'} thành công`);
        // Refresh the data
        fetchTransactions(currentPage, pageSize);
      } else {
        toast.error('Có lỗi xảy ra khi cập nhật trạng thái giao dịch');
      }
    } catch (error: any) {
      console.error('Error updating transaction status:', error);
      
      if (error.response?.status === 401) {
        toast.error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại');
      } else if (error.response?.status === 403) {
        toast.error('Không có quyền thực hiện hành động này');
      } else {
        toast.error('Có lỗi xảy ra khi cập nhật trạng thái giao dịch');
      }
    }
  };

  useEffect(() => {
    fetchTransactions(currentPage, pageSize);
  }, [currentPage, pageSize, fetchTransactions]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  // Handle filter changes
  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  // Apply filters
  const applyFilters = () => {
    setCurrentPage(1);
    fetchTransactions(1, pageSize, filters);
  };

  // Clear filters
  const clearFilters = () => {
    const clearedFilters = {
      status: '',
      fromDate: '',
      toDate: ''
    };
    setFilters(clearedFilters);
    setCurrentPage(1);
    fetchTransactions(1, pageSize, clearedFilters);
  };

  // Filter data based on search term
  const filteredData = transactionData.filter(item => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    // Search in user name
    if (item.userName?.toLowerCase().includes(searchLower)) return true;
    
    // Search in transaction ID
    if (item.id?.toLowerCase().includes(searchLower)) return true;
    
    // Search in transaction type
    if (item.transactionType?.toLowerCase().includes(searchLower)) return true;
    
    // Search in description
    if (item.description?.toLowerCase().includes(searchLower)) return true;
    
    // Search in status
    const statusConfig = getStatusConfig(item.status);
    if (statusConfig.label.toLowerCase().includes(searchLower)) return true;
    
    return false;
  });

  const pendingCount = transactionData.filter(t => t.status === 'Pending').length;
  const approvedCount = transactionData.filter(t => t.status === 'Approved').length;
  const rejectedCount = transactionData.filter(t => t.status === 'Rejected').length;
  const totalAmount = transactionData.reduce((sum, t) => sum + t.amount, 0);

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <BreadCrumb title="Quản lý giao dịch" pageTitle="Ecommerce" />
          
          {/* Header Stats */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h4 className="card-title mb-2 text-white">
                        <DollarSign size={24} className="inline-block mr-2" />
                        Quản lý giao dịch thanh toán
                      </h4>
                      <p className="card-text opacity-90">
                        Quản lý và duyệt các giao dịch thanh toán cho dịch vụ phân tích da
                      </p>
                    </div>
                    <div className="col-md-4">
                      <div className="row text-center">
                        <div className="col-6">
                          <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-2">
                            <div className="text-2xl font-bold">{totalCount}</div>
                            <div className="text-sm opacity-90">Tổng giao dịch</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-2">
                            <div className="text-2xl font-bold">{formatCurrency(totalAmount)}</div>
                            <div className="text-sm opacity-90">Tổng giá trị</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <div className="d-flex align-items-center">
                        <Clock size={20} className="mr-2 text-yellow-300" />
                        <div>
                          <div className="font-semibold">{pendingCount}</div>
                          <div className="text-sm opacity-90">Chờ duyệt</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center">
                        <CheckCircle size={20} className="mr-2 text-green-300" />
                        <div>
                          <div className="font-semibold">{approvedCount}</div>
                          <div className="text-sm opacity-90">Đã duyệt</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center">
                        <XCircle size={20} className="mr-2 text-red-300" />
                        <div>
                          <div className="font-semibold">{rejectedCount}</div>
                          <div className="text-sm opacity-90">Đã từ chối</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <button
                        className="btn btn-light btn-sm"
                        onClick={() => fetchTransactions(currentPage, pageSize)}
                      >
                        <RefreshCw size={16} className="mr-1" />
                        Làm mới
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h5 className="card-title mb-0">
                    <DollarSign size={20} className="inline-block mr-2" />
                    Danh sách giao dịch
                  </h5>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-2 justify-content-end">
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm giao dịch..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ paddingLeft: '2.5rem' }}
                      />
                      <Search className="position-absolute top-50 start-0 translate-middle-y ms-3" size={16} />
                    </div>
                    
                    <button
                      className={`btn btn-outline-primary ${showFilters ? 'active' : ''}`}
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter size={16} />
                    </button>
                    
                    <select
                      className="form-select"
                      value={pageSize}
                      onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
                      style={{ width: 'auto' }}
                    >
                      <option value={10}>10 / trang</option>
                      <option value={20}>20 / trang</option>
                      <option value={50}>50 / trang</option>
                    </select>
                    
                    <div className="btn-group">
                      <button
                        className={`btn btn-outline-secondary ${viewMode === 'table' ? 'active' : ''}`}
                        onClick={() => setViewMode('table')}
                      >
                        <List size={16} />
                      </button>
                      <button
                        className={`btn btn-outline-secondary ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters Panel */}
              {showFilters && (
                <div className="mt-3 p-3 border rounded bg-light">
                  <div className="row g-3">
                    <div className="col-md-3">
                      <label className="form-label">Trạng thái</label>
                      <select
                        className="form-select"
                        value={filters.status}
                        onChange={(e) => handleFilterChange('status', e.target.value)}
                      >
                        <option value="">Tất cả</option>
                        <option value="Pending">Chờ duyệt</option>
                        <option value="Approved">Đã duyệt</option>
                        <option value="Rejected">Đã từ chối</option>
                      </select>
                    </div>
                    
                    <div className="col-md-3">
                      <label className="form-label">Từ ngày</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        value={filters.fromDate}
                        onChange={(e) => handleFilterChange('fromDate', e.target.value)}
                      />
                    </div>
                    
                    <div className="col-md-3">
                      <label className="form-label">Đến ngày</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        value={filters.toDate}
                        onChange={(e) => handleFilterChange('toDate', e.target.value)}
                      />
                    </div>
                    
                    <div className="col-md-3 d-flex align-items-end gap-2">
                      <button
                        className="btn btn-primary flex-fill"
                        onClick={applyFilters}
                      >
                        Áp dụng
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={clearFilters}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="card-body">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Đang tải...</span>
                  </div>
                  <div>Đang tải dữ liệu giao dịch...</div>
                </div>
              ) : filteredData.length === 0 ? (
                <div className="text-center py-5">
                  <DollarSign className="text-muted mb-3" size={64} />
                  <h5>{searchTerm ? 'Không tìm thấy kết quả' : 'Chưa có giao dịch nào'}</h5>
                  <p className="text-muted">
                    {searchTerm ? `Không có kết quả nào cho "${searchTerm}"` : 'Dữ liệu giao dịch sẽ hiển thị tại đây'}
                  </p>
                </div>
              ) : viewMode === 'table' ? (
                <div className="table-responsive">
                  <table className="table table-striped table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Mã GD</th>
                        <th>Người dùng</th>
                        <th>Loại GD</th>
                        <th>Số tiền</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((transaction) => {
                        const statusConfig = getStatusConfig(transaction.status);
                        const StatusIcon = statusConfig.icon;
                        
                        return (
                          <tr key={transaction.id}>
                            <td>
                              <div className="fw-medium text-primary">
                                {transaction.id.substring(0, 8)}...
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <User size={16} className="text-muted me-2" />
                                <div>
                                  <div className="fw-medium">{transaction.userName}</div>
                                  <div className="text-muted small">{transaction.userId.substring(0, 8)}...</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-info">{transaction.transactionType}</span>
                            </td>
                            <td>
                              <div className="fw-bold text-success">
                                {formatCurrency(transaction.amount)}
                              </div>
                            </td>
                            <td>
                              <span className={`badge border ${statusConfig.class}`}>
                                <StatusIcon size={14} className="me-1" />
                                {statusConfig.label}
                              </span>
                            </td>
                            <td>
                              <div className="text-muted">
                                {formatDate(transaction.createdTime)}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex gap-1">
                                {transaction.status === 'Pending' && (
                                  <>
                                    <button
                                      className="btn btn-success btn-sm"
                                      onClick={() => updateTransactionStatus(transaction.id, 'Approved')}
                                      title="Duyệt giao dịch"
                                    >
                                      <CheckCircle size={14} />
                                    </button>
                                    <button
                                      className="btn btn-danger btn-sm"
                                      onClick={() => updateTransactionStatus(transaction.id, 'Rejected')}
                                      title="Từ chối giao dịch"
                                    >
                                      <XCircle size={14} />
                                    </button>
                                  </>
                                )}
                                <button
                                  className="btn btn-outline-primary btn-sm"
                                  title="Xem chi tiết"
                                >
                                  <Eye size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="row g-4">
                  {filteredData.map((transaction) => {
                    const statusConfig = getStatusConfig(transaction.status);
                    const StatusIcon = statusConfig.icon;
                    
                    return (
                      <div key={transaction.id} className="col-lg-4 col-md-6">
                        <div className="card h-100 border">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div>
                                <h6 className="card-title text-primary mb-1">
                                  {transaction.id.substring(0, 12)}...
                                </h6>
                                <span className="badge bg-info">{transaction.transactionType}</span>
                              </div>
                              <span className={`badge border ${statusConfig.class}`}>
                                <StatusIcon size={14} className="me-1" />
                                {statusConfig.label}
                              </span>
                            </div>
                            
                            <div className="mb-3">
                              <div className="d-flex align-items-center mb-2">
                                <User size={16} className="text-muted me-2" />
                                <span className="fw-medium">{transaction.userName}</span>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <DollarSign size={16} className="text-success me-2" />
                                <span className="fw-bold text-success">
                                  {formatCurrency(transaction.amount)}
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <Calendar size={16} className="text-muted me-2" />
                                <span className="text-muted small">
                                  {formatDate(transaction.createdTime)}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-muted small mb-3">
                              {transaction.description}
                            </p>
                            
                            <div className="d-flex gap-2">
                              {transaction.status === 'Pending' && (
                                <>
                                  <button
                                    className="btn btn-success btn-sm flex-fill"
                                    onClick={() => updateTransactionStatus(transaction.id, 'Approved')}
                                  >
                                    <CheckCircle size={14} className="me-1" />
                                    Duyệt
                                  </button>
                                  <button
                                    className="btn btn-danger btn-sm flex-fill"
                                    onClick={() => updateTransactionStatus(transaction.id, 'Rejected')}
                                  >
                                    <XCircle size={14} className="me-1" />
                                    Từ chối
                                  </button>
                                </>
                              )}
                              <button className="btn btn-outline-primary btn-sm">
                                <Eye size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {!loading && filteredData.length > 0 && !searchTerm && (
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div className="text-muted">
                    Hiển thị {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, totalCount)} của {totalCount} kết quả
                  </div>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          ‹
                        </button>
                      </li>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                        return (
                          <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </button>
                          </li>
                        );
                      })}
                      
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          ›
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  );
};

export default TransactionManagement; 