// dashboard
import Analytics from "pages/Dashboards/Analytics";
import Ecommerce from "pages/Dashboards/Ecommerce";
import Email from "pages/Dashboards/Email";
import HRDashboard from "pages/Dashboards/HR";
import SocialMediaDashboard from "pages/Dashboards/SocialMedia";

// Chat
import Chat from "pages/Chat";

// Email
import Mailbox from "pages/Email";

// Calendar
import DefaultCalendar from "pages/Calendar/Default";
import MonthGrid from "pages/Calendar/MonthGrid";
import MultiMonthStack from "pages/Calendar/MultiMonthStack";

// Ecommerce
import ListView from "pages/Ecommerce/Products/ListView";
import GridView from "pages/Ecommerce/Products/GridView";
import Overview from "pages/Ecommerce/Products/Overview";
import AddNew from "pages/Ecommerce/Products/AddNew";
import ShoppingCart from "pages/Ecommerce/ShoppingCart";
import Checkout from "pages/Ecommerce/Checkout";
import Orders from "pages/Ecommerce/Orders";
import OrderOverview from "pages/Ecommerce/OrderOverview";
import Sellers from "pages/Ecommerce/Sellers";

// HR Management
import EmployeeList from "pages/HRManagement/EmployeeList";
import Holidays from "pages/HRManagement/Holidays";
import LeaveManageEmployee from "pages/HRManagement/Leaves Manage/LeaveManageEmployee";
import AddLeaveEmployee from "pages/HRManagement/Leaves Manage/AddLeaveEmployee";
import LeaveManageHR from "pages/HRManagement/Leaves Manage/LeaveManageHR";
import AddLeaveHR from "pages/HRManagement/Leaves Manage/AddLeaveHR";
import AttendanceHR from "pages/HRManagement/Attendance/AttendanceHR";
import MainAttendance from "pages/HRManagement/Attendance/MainAttendance";
import Departments from "pages/HRManagement/Departments";
import Estimates from "pages/HRManagement/Sales/Estimates";
import Payments from "pages/HRManagement/Sales/Payments";
import Expenses from "pages/HRManagement/Sales/Expenses";
import EmployeeSalary from "pages/HRManagement/Payroll/EmployeeSalary";
import Payslip from "pages/HRManagement/Payroll/Payslip";
import CreatePayslip from "pages/HRManagement/Payroll/CreatePayslip";

// Notes
import Notes from "pages/Notes";

// Social Media
import Friends from "pages/SocialMedia/Friends";
import Event from "pages/SocialMedia/Event";
import WatchVideo from "pages/SocialMedia/WatchVideo";
import Marketplace from "pages/SocialMedia/Marketplace";

// Invoices
import InvoiceListView from "pages/Invoices/ListView";
import InvoiceAddNew from "pages/Invoices/AddNew";
import InvoiceOverview from "pages/Invoices/Overview";

// Users
import UserListView from "pages/Users/ListView";
import UserGridView from "pages/Users/GridView";

// Ui element
import UiAlert from "pages/Components/UIElement/UiAlert";
import UiAvatar from "pages/Components/UIElement/UIAvatar";
import UiButtons from "pages/Components/UIElement/UiButtons";
import UIDrawer from "pages/Components/UIElement/Drawer";
import UiModal from "pages/Components/UIElement/Modal";
import UiLabel from "pages/Components/UIElement/UILabel";
import UiCards from "pages/Components/UIElement/UiCards";
import UiCollapse from "pages/Components/UIElement/UiCollapse";
import UiCountdown from "pages/Components/UIElement/UiCountdown";
import UiDropdown from "pages/Components/UIElement/UiDropdown";
import UiGallery from "pages/Components/UIElement/UiGallery";
import UiLists from "pages/Components/UIElement/UiLists";
import UiNotification from "pages/Components/UIElement/UiNotification";
import UiSpinners from "pages/Components/UIElement/UiSpinners";
import UITimeline from "pages/Components/UIElement/UiTimeline";
import UiProgressBar from "pages/Components/UIElement/UiProgressBar";
import UITooltip from "pages/Components/UIElement/UiTooltip";
import UiVideo from "pages/Components/UIElement/UiVideo";

// plugins
import PSimpleBar from "pages/Components/Plugins/Simplebar";
import PLightBox from "pages/Components/Plugins/Lightbox";
import SwiperSlider from "pages/Components/Plugins/SwiperSlider";
import ScrollHint from "pages/Components/Plugins/ScrollHint";
import VideoPlayer from "pages/Components/Plugins/VideoPlayer";

// navbar
import NavBars from "pages/Components/Navigation/Navbars";
import NavTabs from "pages/Components/Navigation/Tabs";
import NavigationBreadcrumb from "pages/Components/Navigation/NavigationBreadcrumb";
import Pagination from "pages/Components/Navigation/Pagination";

// forms
import FormsBasic from "pages/Components/Forms/Basic";
import FormValidation from "pages/Components/Forms/Validation";
import InputMask from "pages/Components/Forms/InputMask";
import FormSelect from "pages/Components/Forms/Select";
import CheckboxRadio from "pages/Components/Forms/CheckboxRadio";
import FormSwitches from "pages/Components/Forms/Switches";
import FormWizard from "pages/Components/Forms/Wizard/FormWizard";
import FileUpload from "pages/Components/Forms/FileUpload";
import FormDatePicker from "pages/Components/Forms/Datepicker";
import FormTimePicker from "pages/Components/Forms/Timepicker";
import FormColorPicker from "pages/Components/Forms/Colorpicker";
import FormMultiSelect from "pages/Components/Forms/MultiSelect";
import FormInputSpin from "pages/Components/Forms/InputSpin";
import FormClipboard from "pages/Components/Forms/Clipboard";
import EditorClassic from "pages/Components/Forms/Editor/EditorClassic";
import BasicTable from "pages/Components/Table/Basic";
import ReactDataTable from "pages/Components/Table/ReactTable";
import RemixIcon from "pages/Components/Icons/Remix";
import LucidIcon from "pages/Components/Icons/Lucide";
import MapsGoogle from "pages/Components/MapsGoogle";
import MapsLeaflet from "pages/Components/MapsLeaflet";

//Charts
import AreaCharts from "pages/ApexCharts/AreaCharts/index";
import BarCharts from "pages/ApexCharts/BarCharts";
import BoxplotCharts from "pages/ApexCharts/BoxplotCharts";
import BubbleCharts from "pages/ApexCharts/BubbleCharts";
import CandlstickCharts from "pages/ApexCharts/CandlstickCharts";
import ColumnCharts from "pages/ApexCharts/ColumnCharts";
import FunnelCharts from "pages/ApexCharts/FunnelCharts";
import HeatmapChart from "pages/ApexCharts/HeatmapChart";
import LineChart from "pages/ApexCharts/LineCharts";
import MixedChart from "pages/ApexCharts/MixedCharts/Index";
import PieChart from "pages/ApexCharts/PieCharts/Index";
import PolarAreaChart from "pages/ApexCharts/PolarAreaCharts/Index";
import RadarChart from "pages/ApexCharts/RadarCharts/Index";
import RadialbarChart from "pages/ApexCharts/RadialBarCharts/Index";
import RangeAreaChart from "pages/ApexCharts/RangeAreaCharts";
import Scatterchart from "pages/ApexCharts/ScatterCharts/Index";
import TimeLinechart from "pages/ApexCharts/TimeLineCharts/Index";
import Treemapchart from "pages/ApexCharts/TreemapCharts/Index";

// Landing
import OnePage from "pages/Components/Landing/Onepage";
import Product from "pages/Components/Landing/Product";

// auth
import Basic from "pages/AuthenticationInner/Login/Basic";
import LoginCover from "pages/AuthenticationInner/Login/LoginCover";
import LoginBoxed from "pages/AuthenticationInner/Login/LoginBoxed";
import LoginModern from "pages/AuthenticationInner/Login/LoginModern";

//Register
import BasicRegister from "pages/AuthenticationInner/Register/Basic";
import RegisterCover from "pages/AuthenticationInner/Register/RegisterCover";
import RegisterBoxed from "pages/AuthenticationInner/Register/RegisterBoxed";
import RegisterModern from "pages/AuthenticationInner/Register/RegisterModern";

// EmailVerify
import BasicEmailVerify from "pages/AuthenticationInner/VerifyEmail/Basic";
import EmailCover from "pages/AuthenticationInner/VerifyEmail/EmailCover";
import EmailModern from "pages/AuthenticationInner/VerifyEmail/EmailModern";

// TwoSteps
import BasicTwoSteps from "pages/AuthenticationInner/TwoSteps/Basic";
import TwoStepsCover from "pages/AuthenticationInner/TwoSteps/TwoStepsCover";
import TwoStepsBoxed from "pages/AuthenticationInner/TwoSteps/TwoStepsBoxed";
import TwoStepsModern from "pages/AuthenticationInner/TwoSteps/TwoStepsModern";

// Logout
import BasicLogout from "pages/AuthenticationInner/Logout/Basic";
import LogoutCover from "pages/AuthenticationInner/Logout/LogoutCover";
import LogoutBoxed from "pages/AuthenticationInner/Logout/LogoutBoxed";
import LogoutModern from "pages/AuthenticationInner/Logout/LogoutModern";

// Reset Password
import BasicResetPassword from "pages/AuthenticationInner/ResetPassword/Basic";
import ResetPasswordCover from "pages/AuthenticationInner/ResetPassword/ResetPasswordCover";
import ResetPasswordBoxed from "pages/AuthenticationInner/ResetPassword/ResetPasswordBoxed";
import ResetPasswordModern from "pages/AuthenticationInner/ResetPassword/ResetPasswordModern";

// Create Password
import BasicCreatePassword from "pages/AuthenticationInner/CreatePassword/Basic";
import CreatePasswordModern from "pages/AuthenticationInner/CreatePassword/CreatePasswordModern";
import CreatePasswordCover from "pages/AuthenticationInner/CreatePassword/CreatePasswordCover";
import CreatePasswordBoxed from "pages/AuthenticationInner/CreatePassword/CreatePasswordBoxed";
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/LogOut";
import Pages404 from "pages/AuthenticationInner/Pages404";
import Register from "pages/Authentication/Register";
import UserProfile from "pages/Authentication/UserProfile";
import Account from "pages/Pages/Account";
import ComingSoon from "pages/AuthenticationInner/ComingSoon";
import Offline from "pages/AuthenticationInner/Offline";
import Maintenance from "pages/AuthenticationInner/Maintenance";
import Settings from "pages/Pages/Settings";
import Pricing from "pages/Pages/Pricing";
import Faqs from "pages/Pages/Faqs";
import ContactUs from "pages/Pages/ContactUs";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/", component: Ecommerce },
  { path: "/dashboard", component: Ecommerce },
  { path: "/dashboards-analytics", component: Analytics },
  { path: "/dashboards-email", component: Email },
  { path: "/dashboards-hr", component: HRDashboard },
  { path: "/dashboards-social", component: SocialMediaDashboard },

  // Ui Element
  { path: "/ui-alerts", component: UiAlert },
  { path: "/ui-avatar", component: UiAvatar },
  { path: "/ui-buttons", component: UiButtons },
  { path: "/ui-label", component: UiLabel },
  { path: "/ui-cards", component: UiCards },
  { path: "/ui-collapse", component: UiCollapse },
  { path: "/ui-countdown", component: UiCountdown },
  { path: "/ui-drawer", component: UIDrawer },
  { path: "/ui-dropdown", component: UiDropdown },
  { path: "/ui-gallery", component: UiGallery },
  { path: "/ui-lists", component: UiLists },
  { path: "/ui-notification", component: UiNotification },
  { path: "/ui-modal", component: UiModal },
  { path: "/ui-spinners", component: UiSpinners },
  { path: "/ui-timeline", component: UITimeline },
  { path: "/ui-progress-bar", component: UiProgressBar },
  { path: "/ui-tooltip", component: UITooltip },
  { path: "/ui-video", component: UiVideo },

  // plugins
  { path: "/plugins-simplebar", component: PSimpleBar },
  { path: "/plugins-lightbox", component: PLightBox },
  { path: "/plugins-swiper-slider", component: SwiperSlider },
  { path: "/plugins-scroll-hint", component: ScrollHint },
  { path: "/plugins-video-player", component: VideoPlayer },

  // navigation
  { path: "/navigation-navbars", component: NavBars },
  { path: "/navigation-tabs", component: NavTabs },
  { path: "/navigation-breadcrumb", component: NavigationBreadcrumb },
  { path: "/navigation-pagination", component: Pagination },

  // Forms
  { path: "/forms-basic", component: FormsBasic },
  { path: "/forms-validation", component: FormValidation },
  { path: "/forms-input-mask", component: InputMask },
  { path: "/forms-select", component: FormSelect },
  { path: "/forms-checkbox-radio", component: CheckboxRadio },
  { path: "/forms-switches", component: FormSwitches },
  { path: "/forms-wizard", component: FormWizard },
  { path: "/forms-file-upload", component: FileUpload },
  { path: "/forms-datepicker", component: FormDatePicker },
  { path: "/forms-timepicker", component: FormTimePicker },
  { path: "/forms-colorpicker", component: FormColorPicker },
  { path: "/forms-multi-select", component: FormMultiSelect },
  { path: "/forms-input-spin", component: FormInputSpin },
  { path: "/forms-clipboard", component: FormClipboard },
  { path: "/forms-editor-classic", component: EditorClassic },

  // Table
  { path: "/tables-basic", component: BasicTable },
  { path: "/tables-datatable", component: ReactDataTable },

  // Icons
  { path: "/icons-remix", component: RemixIcon },
  { path: "/icons-lucide", component: LucidIcon },

  // Map
  { path: "/maps-google", component: MapsGoogle },
  { path: "/maps-leaflet", component: MapsLeaflet },


  //Charts
  { path: "/charts-apex-area", component: AreaCharts },
  { path: "/charts-apex-bar", component: BarCharts },
  { path: "/charts-apex-boxplot", component: BoxplotCharts },
  { path: "/charts-apex-bubble", component: BubbleCharts },
  { path: "/charts-apex-candlstick", component: CandlstickCharts },
  { path: "/charts-apex-column", component: ColumnCharts },
  { path: "/charts-apex-funnel", component: FunnelCharts },
  { path: "/charts-apex-heatmap", component: HeatmapChart },
  { path: "/charts-apex-line", component: LineChart },
  { path: "/charts-apex-mixed", component: MixedChart },
  { path: "/charts-apex-pie", component: PieChart },
  { path: "/charts-apex-polar", component: PolarAreaChart },
  { path: "/charts-apex-radar", component: RadarChart },
  { path: "/charts-apex-radialbar", component: RadialbarChart },
  { path: "/charts-apex-range-area", component: RangeAreaChart },
  { path: "/charts-apex-scatter", component: Scatterchart },
  { path: "/charts-apex-timeline", component: TimeLinechart },
  { path: "/charts-apex-treemap", component: Treemapchart },

  // Chat
  { path: "/apps-chat", component: Chat },

  // Mailbox
  { path: "/apps-mailbox", component: Mailbox },

  // Calendar
  { path: "/apps-calendar", component: DefaultCalendar },
  { path: "/apps-calendar-month-grid", component: MonthGrid },
  { path: "/apps-calendar-multi-month-stack", component: MultiMonthStack },

  // Ecommerce
  { path: "/apps-ecommerce-product-list", component: ListView },
  { path: "/apps-ecommerce-product-grid", component: GridView },
  { path: "/apps-ecommerce-product-overview", component: Overview },
  { path: "/apps-ecommerce-product-create", component: AddNew },
  { path: "/apps-ecommerce-cart", component: ShoppingCart },
  { path: "/apps-ecommerce-checkout", component: Checkout },
  { path: "/apps-ecommerce-orders", component: Orders },
  { path: "/apps-ecommerce-order-overview", component: OrderOverview },
  { path: "/apps-ecommerce-sellers", component: Sellers },

  // HR Management
  { path: "/apps-hr-employee", component: EmployeeList },
  { path: "/apps-hr-holidays", component: Holidays },
  { path: "/apps-hr-leave-employee", component: LeaveManageEmployee },
  { path: "/apps-hr-create-leave-employee", component: AddLeaveEmployee },
  { path: "/apps-hr-leave", component: LeaveManageHR },
  { path: "/apps-hr-create-leave", component: AddLeaveHR },
  { path: "/apps-hr-attendance", component: AttendanceHR },
  { path: "/apps-hr-attendance-main", component: MainAttendance },
  { path: "/apps-hr-department", component: Departments },
  { path: "/apps-hr-sales-estimates", component: Estimates },
  { path: "/apps-hr-sales-payments", component: Payments },
  { path: "/apps-hr-sales-expenses", component: Expenses },
  { path: "/apps-hr-payroll-employee-salary", component: EmployeeSalary },
  { path: "/apps-hr-payroll-payslip", component: Payslip },
  { path: "/apps-hr-payroll-create-payslip", component: CreatePayslip },

  // Notes
  { path: "/apps-notes", component: Notes },

  // Social Media
  { path: "/apps-social-friends", component: Friends },
  { path: "/apps-social-event", component: Event },
  { path: "/apps-social-video", component: WatchVideo },
  { path: "/apps-social-marketplace", component: Marketplace },

  // Invoices
  { path: "/apps-invoice-list", component: InvoiceListView },
  { path: "/apps-invoice-add-new", component: InvoiceAddNew },
  { path: "/apps-invoice-overview", component: InvoiceOverview },

  // Users
  { path: "/apps-users-list", component: UserListView },
  { path: "/apps-users-grid", component: UserGridView },

  // pages
  { path: "/pages-account", component: Account },
  { path: "/pages-account-settings", component: Settings },
  { path: "/pages-pricing", component: Pricing },
  { path: "/pages-faqs", component: Faqs },
  { path: "/pages-contact-us", component: ContactUs },

  // profile
  { path: "/user-profile", component: UserProfile },
];

const publicRoutes = [
  // Landing
  { path: "/onepage-landing", component: OnePage },
  { path: "/product-landing", component: Product },

  // auth
  { path: "/auth-login-basic", component: Basic },
  { path: "/auth-login-cover", component: LoginCover },
  { path: "/auth-login-boxed", component: LoginBoxed },
  { path: "/auth-login-modern", component: LoginModern },

  // Register
  { path: "/auth-register-basic", component: BasicRegister },
  { path: "/auth-register-cover", component: RegisterCover },
  { path: "/auth-register-boxed", component: RegisterBoxed },
  { path: "/auth-register-modern", component: RegisterModern },

  // Verify Email
  { path: "/auth-verify-email-basic", component: BasicEmailVerify },
  { path: "/auth-verify-email-cover", component: EmailCover },
  { path: "/auth-verify-email-modern", component: EmailModern },

  // two steps
  { path: "/auth-two-steps-basic", component: BasicTwoSteps },
  { path: "/auth-two-steps-cover", component: TwoStepsCover },
  { path: "/auth-two-steps-boxed", component: TwoStepsBoxed },
  { path: "/auth-two-steps-modern", component: TwoStepsModern },

  // logout
  { path: "/auth-logout-basic", component: BasicLogout },
  { path: "/auth-logout-cover", component: LogoutCover },
  { path: "/auth-logout-boxed", component: LogoutBoxed },
  { path: "/auth-logout-modern", component: LogoutModern },

  //Reset Password
  { path: "/auth-reset-password-basic", component: BasicResetPassword },
  { path: "/auth-reset-password-cover", component: ResetPasswordCover },
  { path: "/auth-reset-password-boxed", component: ResetPasswordBoxed },
  { path: "/auth-reset-password-modern", component: ResetPasswordModern },

  //Create Password
  { path: "/auth-create-password-basic", component: BasicCreatePassword },
  { path: "/auth-create-password-cover", component: CreatePasswordCover },
  { path: "/auth-create-password-boxed", component: CreatePasswordBoxed },
  { path: "/auth-create-password-modern", component: CreatePasswordModern },

  // coming soon
  { path: "/pages-coming-soon", component: ComingSoon },

  // Error
  { path: "/pages-offline", component: Offline },
  { path: "/pages-404", component: Pages404 },

  // Maintenance
  { path: "/pages-maintenance", component: Maintenance },


  // authentication
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },

]

export { authProtectedRoutes, publicRoutes };
