import {
    ProductsStatisticsData,
    ProductOrdersData,
    widgetsData,
    widgetsData2,
    EmployeePerformanceData, RecentPayrollData, UpcomingInterviewData, UpcomingScheduledData, activeFriendsData, storyData, MessageData, PopularEventsData, UpcomingBirthdayData, EmailPerformanceData
} from "./dashboard";

// Chat
import { ContactList, RecentChats, RecentFind, Documents, ChatUser } from "./chat";

// Email
import { MailList } from "./mailbox";

// Calendar
import { CalenderCategories, Events } from "./calendar";

// Ecommerce
import { ListViewData, OrderListData, SellersData, ProductGridViewData, ShoppingCartData, ProductReviewsData } from "./ecommerce";

// HR Management
import { DepartmentsListData, EmployeeListData, HolidaysData, AttendanceData, MainAttendanceData, LeaveManageEmployeeData, LeaveManageHRData, EmployeeSalaryData, EstimatesData, ExpensesData, PaymentsData } from "./hrmanagement";

// Notes
import { NotesData } from "./notes";

// Social Media
import { FriendsData, EventData } from "./socialMedia";

// Invoice
import { InvoiceList } from "./invoice";

// Users
import { UserListViewData, GridViewData } from "./users";

// table
import { basic, reactTableData } from "./table";

// pricing 
import { pricingData, cardData } from "./pages";

export {
    ProductsStatisticsData,
    ProductOrdersData,
    widgetsData,
    widgetsData2,
    EmailPerformanceData,

    // HR Dashborad
    EmployeePerformanceData,
    RecentPayrollData,
    UpcomingInterviewData,
    UpcomingScheduledData,

    // Social Media Dashborad
    activeFriendsData,
    storyData,
    MessageData,
    PopularEventsData,
    UpcomingBirthdayData,

    // Chat
    ContactList, RecentChats, RecentFind, Documents, ChatUser,

    // Email
    MailList,

    // Calendar
    CalenderCategories, Events,

    // Ecommerce
    ListViewData,
    OrderListData,
    SellersData,
    ProductGridViewData,
    ShoppingCartData,
    ProductReviewsData,

    // HR Management
    DepartmentsListData, EmployeeListData, HolidaysData, AttendanceData, MainAttendanceData, LeaveManageEmployeeData, LeaveManageHRData, EmployeeSalaryData, EstimatesData, ExpensesData, PaymentsData,

    // Notes
    NotesData,

    // Social Media
    FriendsData,
    EventData,

    // Invoice
    InvoiceList,

    // Users
    UserListViewData,
    GridViewData,

    // table
    basic,
    reactTableData,

    // pricing
    pricingData,
    cardData
};