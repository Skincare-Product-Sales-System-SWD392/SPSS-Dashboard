// dashboard
import Ecommerce from "pages/Dashboards/Ecommerce";

// Chat
import Chat from "pages/Chat";

// Ecommerce
import ListView from "pages/Ecommerce/Products/ListView";
import Overview from "pages/Ecommerce/Products/Overview";
import AddNew from "pages/Ecommerce/Products/AddNew";
import Checkout from "pages/Ecommerce/Checkout";
import Orders from "pages/Ecommerce/Orders";
import OrderOverview from "pages/Ecommerce/OrderOverview";
import Voucher from "pages/Ecommerce/Voucher";
import CancelReason from "pages/Ecommerce/CancelReason";
import PaymentMethod from "pages/Ecommerce/PaymentMethod";
import SurveyQuestion from "pages/Ecommerce/SurveyQuestion";
import Blog from "pages/Ecommerce/Blog";
import Review from "pages/Ecommerce/Review";
import Variation from "pages/Ecommerce/Variation";

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
import Login from "pages/Authentication/Login";
// import Logout from "pages/Authentication/LogOut";

// import Register from "pages/Authentication/Register";
import UserProfile from "pages/Authentication/UserProfile";

import VariationOption from "pages/Ecommerce/VariationOption";
import Account from "pages/Ecommerce/Account";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/dashboard", component: Ecommerce },

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

  // Ecommerce
  { path: "/apps-ecommerce-product-list", component: ListView },
  { path: "/apps-ecommerce-product-overview", component: Overview },
  { path: "/apps-ecommerce-product-create", component: AddNew },
  { path: "/apps-ecommerce-checkout", component: Checkout },
  { path: "/apps-ecommerce-orders", component: Orders },
  { path: "/apps-ecommerce-voucher", component: Voucher },
  { path: "/apps-ecommerce-cancel-reason", component: CancelReason },
  { path: "/apps-ecommerce-payment-method", component: PaymentMethod },
  { path: "/apps-ecommerce-survey-question", component: SurveyQuestion },
  { path: "/apps-ecommerce-blog", component: Blog },
  { path: "/apps-ecommerce-reviews", component: Review },
  { path: "/apps-ecommerce-order-overview", component: OrderOverview },
  { path: "/apps-ecommerce-variation", component: Variation },
  { path: "/apps-ecommerce-variation-option", component: VariationOption },
  { path: "/apps-ecommerce-account", component: Account },

  // profile
  { path: "/user-profile", component: UserProfile },
];

const publicRoutes = [
  // Move login to the top and add it as the root path
  { path: "/", component: Login },
  { path: "/login", component: Login },

  // authentication
  // { path: "/logout", component: Logout },
  // { path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };
