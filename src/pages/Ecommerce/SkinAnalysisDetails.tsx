import React, { useCallback, useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { 
  Award, 
  Shield, 
  ShoppingBag, 
  AlertTriangle, 
  CheckCircle, 
  Star, 
  Eye, 
  ArrowLeft,
  Camera,
  BarChart3,
  Target,
  TrendingUp,
  Download,
  Printer
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_CONFIG } from 'config/api';
import { analyzeToken } from 'helpers/tokenHelper';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

interface ApiResponse {
  success: boolean;
  data: SkinAnalysisItem;
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
  if (severity >= 8) return { 
    class: 'bg-red-100 text-red-500 border-red-200 dark:bg-red-500/20 dark:border-red-500/20', 
    label: 'Cao', 
    color: '#ef4444' 
  };
  if (severity >= 6) return { 
    class: 'bg-orange-100 text-orange-500 border-orange-200 dark:bg-orange-500/20 dark:border-orange-500/20', 
    label: 'Trung bình', 
    color: '#f97316' 
  };
  if (severity >= 4) return { 
    class: 'bg-yellow-100 text-yellow-500 border-yellow-200 dark:bg-yellow-500/20 dark:border-yellow-500/20', 
    label: 'Nhẹ', 
    color: '#f59e0b' 
  };
  return { 
    class: 'bg-green-100 text-green-500 border-green-200 dark:bg-green-500/20 dark:border-green-500/20', 
    label: 'Thấp', 
    color: '#10b981' 
  };
};

const getHealthScoreConfig = (score: number) => {
  if (score >= 80) return { color: '#10b981', status: 'Tuyệt vời', icon: CheckCircle, class: 'excellent', bgClass: 'bg-green-100 dark:bg-green-500/20' };
  if (score >= 60) return { color: '#f59e0b', status: 'Khá tốt', icon: AlertTriangle, class: 'good', bgClass: 'bg-yellow-100 dark:bg-yellow-500/20' };
  if (score >= 40) return { color: '#f97316', status: 'Cần cải thiện', icon: AlertTriangle, class: 'fair', bgClass: 'bg-orange-100 dark:bg-orange-500/20' };
  return { color: '#ef4444', status: 'Cần chú ý', icon: AlertTriangle, class: 'poor', bgClass: 'bg-red-100 dark:bg-red-500/20' };
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const SkinAnalysisDetails = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const id = searchParams.get("id");
  
  const [loading, setLoading] = useState(false);
  const [skinAnalysisItem, setSkinAnalysisItem] = useState<SkinAnalysisItem | null>(null);

  // Fetch skin analysis details by ID
  const fetchSkinAnalysisData = useCallback(async () => {
    if (!id) {
      navigate('/apps-ecommerce-skin-analysis');
      return;
    }
    
    setLoading(true);
    try {
      const authUser = localStorage.getItem("authUser");
      const token = authUser ? JSON.parse(authUser).accessToken : null;
      
      if (token) {
        analyzeToken(token);
      }
      
      const response: AxiosApiResponse = await axios.get(
        `${API_CONFIG.BASE_URL}/skin-analysis/${id}`,
        {
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
      } else {
        throw new Error("Unexpected response structure");
      }
      
      if (apiData.success && apiData.data) {
        setSkinAnalysisItem(apiData.data);
        toast.success('Tải thành công chi tiết phân tích da');
      } else {
        toast.error('Không thể tải dữ liệu phân tích da');
        navigate('/apps-ecommerce-skin-analysis');
      }
    } catch (error: any) {
      console.error('Error fetching skin analysis:', error);
      
      if (error.response?.status === 401) {
        toast.error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại');
      } else if (error.response?.status === 403) {
        toast.error('Không có quyền truy cập');
      } else if (error.response?.status === 404) {
        toast.error('Không tìm thấy dữ liệu phân tích da');
      } else {
        toast.error('Có lỗi xảy ra khi tải dữ liệu');
      }
      navigate('/apps-ecommerce-skin-analysis');
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchSkinAnalysisData();
  }, [fetchSkinAnalysisData]);

  if (loading || !skinAnalysisItem) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-custom-500"></div>
      </div>
    );
  }

  const healthConfig = getHealthScoreConfig(skinAnalysisItem.skinCondition.healthScore);

  return (
    <React.Fragment>
      <BreadCrumb title="Chi tiết phân tích da" pageTitle="Ecommerce" />

      {/* Header with back button and summary */}
      <div className="flex justify-between items-center mb-4">
        <Link
          to="/apps-ecommerce-skin-analysis"
          className="py-2 px-4 text-sm font-medium rounded-md flex items-center gap-2
                            bg-blue-500 text-white
                            hover:bg-blue-600 transition-colors duration-200
                            shadow-sm"
        >
          <ArrowLeft className="text-16" size={16} />
          <span>Quay lại danh sách phân tích</span>
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-zink-200">
          <div className="flex items-center gap-1">
            <AlertTriangle size={16} className="text-orange-500" />
            <span>{skinAnalysisItem.skinIssues.length} vấn đề</span>
          </div>
          <div className="flex items-center gap-1">
            <ShoppingBag size={16} className="text-blue-500" />
            <span>{skinAnalysisItem.recommendedProducts.length} sản phẩm</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield size={16} className="text-green-500" />
            <span>{skinAnalysisItem.skinCareAdvice.length} lời khuyên</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-12 2xl:grid-cols-12">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 2xl:col-span-3">
          {/* Skin Analysis Image Card */}
          <div className="card">
            <div className="card-body text-center">
              <div className="flex items-center justify-center size-12 bg-purple-100 rounded-md dark:bg-purple-500/20 ltr:float-right rtl:float-left">
                <Camera className="text-purple-500 fill-purple-200 dark:fill-purple-500/30" />
              </div>
              <h6 className="mb-4 text-15">Ảnh phân tích da</h6>
              <div className="clear-both"></div>
              
              <div className="mb-4">
                <img
                  src={skinAnalysisItem.imageUrl}
                  alt="Skin Analysis"
                  className="w-full h-48 object-cover rounded-lg shadow-sm border"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-zink-200">Loại da:</span>
                  <span className="font-medium">{skinAnalysisItem.skinCondition.skinType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-zink-200">Tình trạng:</span>
                  <span className={`px-2 py-1 rounded-md text-sm font-medium ${healthConfig.bgClass}`} style={{ color: healthConfig.color }}>
                    {healthConfig.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-zink-200">Ngày phân tích:</span>
                  <span className="font-medium text-sm">{formatDate(skinAnalysisItem.createdTime)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Health Score Card */}
          <div className="card mt-5">
            <div className="card-body text-center">
              <div className="flex items-center justify-center size-12 bg-emerald-100 rounded-md dark:bg-emerald-500/20 ltr:float-right rtl:float-left">
                <Target className="text-emerald-500 fill-emerald-200 dark:fill-emerald-500/30" />
              </div>
              <h6 className="mb-4 text-15">Điểm sức khỏe da</h6>
              <div className="clear-both"></div>
              
              <div className="mb-4" style={{ width: '120px', height: '120px', margin: '0 auto' }}>
                <CircularProgressbar
                  value={skinAnalysisItem.skinCondition.healthScore}
                  text={`${skinAnalysisItem.skinCondition.healthScore}`}
                  styles={buildStyles({
                    textSize: '18px',
                    pathColor: healthConfig.color,
                    textColor: healthConfig.color,
                    trailColor: '#e2e8f0',
                  })}
                />
              </div>
              
              <h5 className="mb-2" style={{ color: healthConfig.color }}>
                {healthConfig.status}
              </h5>
              <p className="text-slate-500 dark:text-zink-200 text-sm">
                Điểm tổng thể đánh giá tình trạng da của bạn
              </p>
            </div>
          </div>

          {/* Score Breakdown Card */}
          <div className="card mt-5">
            <div className="card-body">
              <div className="flex items-center justify-center size-12 bg-amber-100 rounded-md dark:bg-amber-500/20 ltr:float-right rtl:float-left">
                <BarChart3 className="text-amber-500 fill-amber-200 dark:fill-amber-500/30" />
              </div>
              <h6 className="mb-4 text-15">Chi tiết điểm số</h6>
              <div className="clear-both"></div>
              
              <div className="space-y-3">
                {[
                  { label: 'Điểm mụn', value: skinAnalysisItem.skinCondition.acneScore, color: '#ef4444' },
                  { label: 'Điểm nhăn', value: skinAnalysisItem.skinCondition.wrinkleScore, color: '#3b82f6' },
                  { label: 'Điểm quầng thâm', value: skinAnalysisItem.skinCondition.darkCircleScore, color: '#f59e0b' },
                  { label: 'Điểm nám', value: skinAnalysisItem.skinCondition.darkSpotScore, color: '#6b7280' }
                ].map(({ label, value, color }, idx) => (
                  <div key={idx} className="p-3 border rounded-lg dark:border-zink-500">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600 dark:text-zink-200 text-sm font-medium">{label}</span>
                      <span className="font-bold text-lg min-w-[2rem] text-right" style={{ color }}>{value}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-zink-600 overflow-hidden">
                      <div
                        className="h-2 rounded-full transition-all duration-300 ease-out"
                        style={{
                          width: `${Math.min((value / 10) * 100, 100)}%`,
                          backgroundColor: color
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 dark:text-zink-400 mt-1">
                      <span>0</span>
                      <span>10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6 2xl:col-span-6">
          {/* Skin Issues Card */}
          <div className="card">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-orange-500" size={24} />
                <h6 className="text-15 mb-0">Các vấn đề về da ({skinAnalysisItem.skinIssues.length})</h6>
              </div>

              {skinAnalysisItem.skinIssues.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skinAnalysisItem.skinIssues.map((issue, idx) => {
                    const severityConfig = getSeverityConfig(issue.severity);
                    return (
                      <div key={idx} className="p-4 border rounded-lg dark:border-zink-500">
                        <div className="flex justify-between items-start mb-3">
                          <h6 className="font-semibold text-slate-700 dark:text-zink-200">{issue.issueName}</h6>
                          <span className={`px-2 py-1 text-xs font-medium rounded border ${severityConfig.class}`}>
                            {issue.severity}/10 - {severityConfig.label}
                          </span>
                        </div>
                        <p className="text-slate-500 dark:text-zink-200 text-sm">{issue.description}</p>
                        
                        {/* Severity Progress Bar */}
                        <div className="mt-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Mức độ nghiêm trọng</span>
                            <span>{issue.severity}/10</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-zink-600">
                            <div
                              className="h-2 rounded-full transition-all duration-300"
                              style={{
                                width: `${(issue.severity / 10) * 100}%`,
                                backgroundColor: severityConfig.color
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
                  <h5 className="text-green-600 font-medium mb-2">Tuyệt vời!</h5>
                  <p className="text-slate-500 dark:text-zink-200">Không phát hiện vấn đề nào về da</p>
                </div>
              )}
            </div>
          </div>

          {/* Skin Care Advice Card */}
          <div className="card mt-5">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-green-500" size={24} />
                <h6 className="text-15 mb-0">Lời khuyên chăm sóc da ({skinAnalysisItem.skinCareAdvice.length})</h6>
              </div>

              {skinAnalysisItem.skinCareAdvice.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {skinAnalysisItem.skinCareAdvice.map((advice, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle className="text-green-500" size={18} />
                      </div>
                      <span className="text-slate-700 dark:text-zink-200 text-sm leading-relaxed">{advice}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Shield className="mx-auto text-slate-400 mb-3" size={48} />
                  <p className="text-slate-500 dark:text-zink-200">Không có lời khuyên chăm sóc da</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Recommended Products */}
        <div className="lg:col-span-3 2xl:col-span-3">
          <div className="card">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="text-blue-500" size={24} />
                <h6 className="text-15 mb-0">Sản phẩm đề xuất</h6>
              </div>
              
              <div className="space-y-4">
                {skinAnalysisItem.recommendedProducts.map((product, idx) => (
                  <div key={idx} className="border rounded-lg p-4 dark:border-zink-500">
                    <div className="flex gap-3 mb-3">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h6 className="font-semibold text-sm mb-1 truncate">{product.name}</h6>
                        <div className="text-lg font-bold text-blue-500 mb-1">
                          {formatCurrency(product.price)}
                        </div>
                        {product.priorityScore > 0 && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-md dark:bg-yellow-500/20 dark:text-yellow-400">
                            <Star size={12} />
                            Ưu tiên: {product.priorityScore}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-slate-500 dark:text-zink-200 text-sm mb-3">
                      {product.recommendationReason}
                    </p>
                    
                    <button className="w-full py-2 px-3 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors">
                      Xem sản phẩm
                    </button>
                  </div>
                ))}
              </div>
              
              {skinAnalysisItem.recommendedProducts.length === 0 && (
                <div className="text-center py-8">
                  <ShoppingBag className="mx-auto text-slate-400 mb-3" size={48} />
                  <p className="text-slate-500 dark:text-zink-200">Không có sản phẩm được đề xuất</p>
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

export default SkinAnalysisDetails; 