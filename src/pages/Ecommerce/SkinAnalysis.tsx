import React, { useCallback, useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Search, Eye, BarChart3, Camera, ShoppingBag, Target, Shield, AlertTriangle, CheckCircle, XCircle, Grid, List, Star, Award, TrendingUp } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_CONFIG } from 'config/api';
import { analyzeToken } from 'helpers/tokenHelper';
import { useNavigate } from 'react-router-dom';
import styles from './SkinAnalysis.module.css';

// Types
interface SkinCondition {
  acneScore: number;
  wrinkleScore: number;
  darkCircleScore: number;
  darkSpotScore: number;
  healthScore: number;
  skinType: string;
}

interface SkinIssue {
  issueName: string;
  description: string;
  severity: number;
}

interface Product {
  productId: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  recommendationReason: string;
  priorityScore: number;
}

interface SkinAnalysisItem {
  id: string;
  imageUrl: string;
  skinCondition: SkinCondition;
  skinIssues: SkinIssue[];
  recommendedProducts: Product[];
  routineSteps: any[];
  skinCareAdvice: string[];
  createdTime: string;
}

interface ApiDataContent {
  items: SkinAnalysisItem[];
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

const getSeverityConfig = (severity: number) => {
  if (severity >= 8) return { class: styles.issueSeverityHigh, label: 'Cao' };
  if (severity >= 6) return { class: styles.issueSeverityMedium, label: 'TB' };
  if (severity >= 4) return { class: styles.issueSeverityMedium, label: 'Nhẹ' };
  return { class: styles.issueSeverityLow, label: 'Thấp' };
};

const getHealthScoreConfig = (score: number) => {
  if (score >= 80) return { color: '#10b981', status: 'Tuyệt vời', icon: CheckCircle, class: 'excellent' };
  if (score >= 60) return { color: '#f59e0b', status: 'Khá tốt', icon: AlertTriangle, class: 'good' };
  if (score >= 40) return { color: '#f97316', status: 'Cần cải thiện', icon: AlertTriangle, class: 'fair' };
  return { color: '#ef4444', status: 'Cần chú ý', icon: XCircle, class: 'poor' };
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

const SkinAnalysis = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [skinAnalysisData, setSkinAnalysisData] = useState<SkinAnalysisItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Fetch skin analysis data
  const fetchSkinAnalysis = useCallback(async (page: number, size: number) => {
    setLoading(true);
    try {
      const authUser = localStorage.getItem("authUser");
      const token = authUser ? JSON.parse(authUser).accessToken : null;
      
      if (token) {
        analyzeToken(token);
      }
      
      const response: AxiosApiResponse = await axios.get(
        `${API_CONFIG.BASE_URL}/skin-analysis/user/paged`,
        {
          params: {
            pageNumber: page,
            pageSize: size
          },
          headers: {
            'Authorization': token ? `Bearer ${token}` : undefined
          }
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
        setSkinAnalysisData(apiData.data.items);
        setTotalCount(apiData.data.totalCount);
        setTotalPages(apiData.data.totalPages);
        
        if (apiData.data.pageNumber !== currentPage) {
          setCurrentPage(apiData.data.pageNumber);
        }
        
        toast.success(`Tải thành công ${apiData.data.items.length} phân tích da`);
      } else {
        toast.error('Không thể tải dữ liệu phân tích da');
      }
    } catch (error: any) {
      console.error('Error fetching skin analysis:', error);
      
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
  }, [currentPage]);

  useEffect(() => {
    fetchSkinAnalysis(currentPage, pageSize);
  }, [currentPage, pageSize, fetchSkinAnalysis]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  // Navigate to skin analysis details page
  const handleViewDetails = (item: SkinAnalysisItem) => {
    // Use the actual ID from the API
    navigate(`/apps-ecommerce-skin-analysis-details?id=${item.id}`);
  };

  // Filter data based on search term
  const filteredData = skinAnalysisData.filter(item => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    // Search in skin type
    if (item.skinCondition?.skinType?.toLowerCase().includes(searchLower)) return true;
    
    // Search in skin issues
    if (item.skinIssues && item.skinIssues.some(issue => 
      issue.issueName?.toLowerCase().includes(searchLower) ||
      issue.description?.toLowerCase().includes(searchLower)
    )) return true;
    
    // Search in skin care advice
    if (item.skinCareAdvice && item.skinCareAdvice.some(advice => 
      advice?.toLowerCase().includes(searchLower)
    )) return true;
    
    // Search in recommended products
    if (item.recommendedProducts && item.recommendedProducts.some(product => 
      product.name?.toLowerCase().includes(searchLower) ||
      product.description?.toLowerCase().includes(searchLower) ||
      product.recommendationReason?.toLowerCase().includes(searchLower)
    )) return true;
    
    // Search in health score range
    const healthConfig = getHealthScoreConfig(item.skinCondition?.healthScore || 0);
    if (healthConfig.status.toLowerCase().includes(searchLower)) return true;
    
    return false;
  });

  return (
    <React.Fragment>
      <div className={styles.pageContainer}>
        <div className="container">
          <BreadCrumb title="Phân tích da" pageTitle="Dashboard" />
          
          {/* Header */}
          <div className={styles.headerCard}>
            <div className={styles.headerContent}>
              <h1 className={styles.pageTitle}>
                <BarChart3 size={32} />
                Phân tích da thông minh
              </h1>
              <p className={styles.pageSubtitle}>
                Khám phá tình trạng da với công nghệ AI và nhận gợi ý chăm sóc cá nhân hóa
              </p>
              
              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <Camera size={20} className="mb-2 text-white" />
                  <span className={styles.statNumber}>{totalCount}</span>
                  <span className={styles.statLabel}>Phân tích da</span>
                </div>
                <div className={styles.statCard}>
                  <ShoppingBag size={20} className="mb-2 text-white" />
                  <span className={styles.statNumber}>
                    {skinAnalysisData.reduce((sum, item) => sum + (item.recommendedProducts?.length || 0), 0)}
                  </span>
                  <span className={styles.statLabel}>Sản phẩm đề xuất</span>
                </div>
                <div className={styles.statCard}>
                  <Target size={20} className="mb-2 text-white" />
                  <span className={styles.statNumber}>
                    {skinAnalysisData.length > 0 ? 
                      Math.round(skinAnalysisData.reduce((sum, item) => sum + (item.skinCondition?.healthScore || 0), 0) / skinAnalysisData.length) 
                      : 0
                    }
                  </span>
                  <span className={styles.statLabel}>Điểm TB</span>
                </div>
                <div className={styles.statCard}>
                  <Shield size={20} className="mb-2 text-white" />
                  <span className={styles.statNumber}>
                    {skinAnalysisData.reduce((sum, item) => sum + (item.skinCareAdvice?.length || 0), 0)}
                  </span>
                  <span className={styles.statLabel}>Lời khuyên</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <div className={styles.controlsRow}>
                <h5 className={styles.cardTitle}>
                  <BarChart3 size={20} />
                  Danh sách phân tích da
                </h5>
                
                <div className={styles.controls}>
                  <div className={styles.searchInput}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm phân tích..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className={styles.searchIcon} size={16} />
                  </div>
                  
                  <select
                    className={styles.pageSize}
                    value={pageSize}
                    onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
                  >
                    <option value={5}>5 / trang</option>
                    <option value={10}>10 / trang</option>
                    <option value={20}>20 / trang</option>
                    <option value={50}>50 / trang</option>
                  </select>
                  
                  <div className={`btn-group ${styles.viewToggle}`}>
                    <button
                      className={`${styles.viewButton} ${viewMode === 'table' ? styles.active : ''}`}
                      onClick={() => setViewMode('table')}
                    >
                      <List size={16} />
                    </button>
                    <button
                      className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {loading ? (
              <div className={styles.loadingState}>
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Đang tải...</span>
                </div>
                <div>Đang tải dữ liệu phân tích...</div>
              </div>
            ) : filteredData.length === 0 ? (
              <div className={styles.emptyState}>
                <Camera className={styles.emptyIcon} size={64} />
                <h5>{searchTerm ? 'Không tìm thấy kết quả' : 'Chưa có dữ liệu phân tích da'}</h5>
                <p>{searchTerm ? `Không có kết quả nào cho "${searchTerm}"` : 'Dữ liệu phân tích da sẽ hiển thị tại đây'}</p>
              </div>
            ) : viewMode === 'table' ? (
              <div className={styles.tableContainer}>
                <table className={styles.analysisTable}>
                  <thead>
                    <tr>
                      <th>Ảnh</th>
                      <th>Loại da</th>
                      <th>Điểm số</th>
                      <th>Sức khỏe da</th>
                      <th>Vấn đề chính</th>
                      <th>Ngày tạo</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => {
                      const healthConfig = getHealthScoreConfig(item.skinCondition.healthScore);
                      return (
                        <tr key={item.id}>
                          <td className={styles.imageCell}>
                            <img 
                              src={item.imageUrl} 
                              alt="Skin Analysis" 
                              className={styles.analysisImage}
                            />
                          </td>
                          <td className={styles.skinTypeCell}>
                            <span className={styles.skinTypeTag}>
                              {item.skinCondition.skinType}
                            </span>
                          </td>
                          <td className={styles.scoresCell}>
                            <div className={styles.scoreGrid}>
                              <div className={styles.scoreItem}>
                                <span className={styles.scoreLabel}>Mụn:</span>
                                <span className={`${styles.scoreValue} ${styles.scoreAcne}`}>
                                  {item.skinCondition.acneScore}
                                </span>
                              </div>
                              <div className={styles.scoreItem}>
                                <span className={styles.scoreLabel}>Quầng thâm:</span>
                                <span className={`${styles.scoreValue} ${styles.scoreDarkCircle}`}>
                                  {item.skinCondition.darkCircleScore}
                                </span>
                              </div>
                              <div className={styles.scoreItem}>
                                <span className={styles.scoreLabel}>Nhăn:</span>
                                <span className={`${styles.scoreValue} ${styles.scoreWrinkle}`}>
                                  {item.skinCondition.wrinkleScore}
                                </span>
                              </div>
                              <div className={styles.scoreItem}>
                                <span className={styles.scoreLabel}>Nám:</span>
                                <span className={`${styles.scoreValue} ${styles.scoreDarkSpot}`}>
                                  {item.skinCondition.darkSpotScore}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className={styles.healthScoreCell}>
                            <div className={`${styles.healthScore} ${styles[healthConfig.class]}`}>
                              {item.skinCondition.healthScore}
                            </div>
                            <div className={styles.healthStatus}>{healthConfig.status}</div>
                          </td>
                          <td className={styles.issuesCell}>
                            <div className={styles.issuesList}>
                              {item.skinIssues && item.skinIssues.length > 0 ? (
                                <>
                                  {item.skinIssues.slice(0, 3).map((issue, idx) => {
                                    const severityConfig = getSeverityConfig(issue.severity);
                                    return (
                                      <span
                                        key={idx}
                                        className={`${styles.issueTag} ${severityConfig.class}`}
                                        title={issue.description}
                                      >
                                        {issue.issueName}
                                      </span>
                                    );
                                  })}
                                  {item.skinIssues.length > 3 && (
                                    <span className="text-muted small">+{item.skinIssues.length - 3}</span>
                                  )}
                                </>
                              ) : (
                                <span className="text-muted small italic">Không có vấn đề</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 dark:text-zink-200">
                            {formatDate(item.createdTime)}
                          </td>
                          <td className={styles.actionsCell}>
                            <button
                              onClick={() => handleViewDetails(item)}
                              className={styles.detailButton}
                            >
                              <Eye size={14} />
                              Chi tiết
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className={styles.gridView}>
                {filteredData.map((item, index) => {
                  const healthConfig = getHealthScoreConfig(item.skinCondition.healthScore);
                  return (
                    <div key={item.id} className={styles.gridCard}>
                      <img 
                        src={item.imageUrl} 
                        alt="Skin Analysis" 
                        className={styles.gridCardImage}
                      />
                      <div className={styles.gridCardContent}>
                        <div className={styles.gridCardHeader}>
                          <span className={styles.skinTypeTag}>
                            {item.skinCondition.skinType}
                          </span>
                          <div className={styles.gridHealthScore}>
                            <div className={`${styles.healthScore} ${styles[healthConfig.class]}`}>
                              {item.skinCondition.healthScore}
                            </div>
                            <div className={styles.healthStatus}>{healthConfig.status}</div>
                          </div>
                        </div>
                        
                        <div className="text-xs text-slate-500 dark:text-zink-400 mb-3 text-center">
                          {formatDate(item.createdTime)}
                        </div>
                        
                        <div className={styles.gridScores}>
                          <div className={styles.gridScoreItem}>
                            <div className={`${styles.gridScoreValue} text-danger`}>
                              {item.skinCondition.acneScore}
                            </div>
                            <div className={styles.gridScoreLabel}>Điểm mụn</div>
                          </div>
                          <div className={styles.gridScoreItem}>
                            <div className={`${styles.gridScoreValue} text-warning`}>
                              {item.skinCondition.darkCircleScore}
                            </div>
                            <div className={styles.gridScoreLabel}>Thâm quầng</div>
                          </div>
                        </div>
                        
                        <div className={styles.gridIssues}>
                          <div className={styles.gridIssuesTitle}>Vấn đề chính:</div>
                          <div className={styles.issuesList}>
                            {item.skinIssues && item.skinIssues.length > 0 ? (
                              <>
                                {item.skinIssues.slice(0, 2).map((issue, idx) => {
                                  const severityConfig = getSeverityConfig(issue.severity);
                                  return (
                                    <span
                                      key={idx}
                                      className={`${styles.issueTag} ${severityConfig.class}`}
                                    >
                                      {issue.issueName}
                                    </span>
                                  );
                                })}
                                {item.skinIssues.length > 2 && (
                                  <span className="text-muted small">+{item.skinIssues.length - 2}</span>
                                )}
                              </>
                            ) : (
                              <span className="text-muted small italic">Không có vấn đề</span>
                            )}
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleViewDetails(item)}
                          className={`${styles.detailButton} w-100 mt-3`}
                        >
                          <Eye size={14} />
                          Xem chi tiết phân tích
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {!loading && filteredData.length > 0 && !searchTerm && (
              <div className={styles.pagination}>
                <div className={styles.paginationInfo}>
                  {searchTerm ? 
                    `Tìm thấy ${filteredData.length} kết quả cho "${searchTerm}"` :
                    `Hiển thị ${(currentPage - 1) * pageSize + 1} - ${Math.min(currentPage * pageSize, totalCount)} của ${totalCount} kết quả`
                  }
                </div>
                <div className={styles.paginationControls}>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={styles.paginationButton}
                  >
                    ‹
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`${styles.paginationButton} ${page === currentPage ? styles.active : ''}`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={styles.paginationButton}
                  >
                    ›
                  </button>
                </div>
              </div>
            )}
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

export default SkinAnalysis; 