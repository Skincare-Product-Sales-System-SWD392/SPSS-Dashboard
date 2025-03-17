import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// login
import LoginReducer from "./auth/login/reducer";

// register
import RegisterReducer from "./auth/register/reducer";

// userProfile
import ProfileReducer from "./auth/profile/reducer";

// Chat
import ChatReducer from "./chat/reducer";

// MailBox
import MailboxReducer from "./mailbox/reducer";

// Calendar
import CalendarReducer from "./calendar/reducer";

// Ecommerce
// import EcommerceReducer from "./ecommerce/reducer";
import CountryReducer from "./country/reducer";
import VoucherReducer from "./voucher/reducer";
import SkinTypeReducer from "./skintype/reducer";
import BrandReducer from "./brand/reducer";
import CancelReasonReducer from "./cancelreason/reducer";
import PaymentMethodReducer from "./paymentmethod/reducer";
import BlogReducer from "./blog/reducer";
import ProductReducer from "./product/reducer";
import ReviewReducer from "./review/reducer";
import OrderReducer from "./order/reducer";
import VariationReducer from "./variation/reducer";
import QuizSetReducer from "./quizset/reducer";
import QuizQuestionReducer from "./quizquestion/reducer";
import QuizOptionReducer from "./quizoption/reducer";
import ProductCategoryReducer from "./productcategory/reducer";
import VariationOptionReducer from "./variationoption/reducer";

// HR Managment
import HRManagmentReducer from "./hrManagement/reducer";

// Notes
import NotesReducer from "./notes/reducer";



// Invoice
import InvoiceReducer from "./invoice/reducer"

// Users
import UsersReducer from "./users/reducer";

import promotionReducer from "./promotion/reducer";
import CategoryReducer from "./category/reducer";

const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    Register: RegisterReducer,
    Profile: ProfileReducer,
    Chat: ChatReducer,
    Mailbox: MailboxReducer,
    Calendar: CalendarReducer,
    // Ecommerce: EcommerceReducer,
    HRManagment: HRManagmentReducer,
    Notes: NotesReducer,
    Invoice: InvoiceReducer,
    Users: UsersReducer,
    Promotion: promotionReducer,
    Category: CategoryReducer,
    Country: CountryReducer,
    Voucher: VoucherReducer,
    SkinType: SkinTypeReducer,
    Brand: BrandReducer,
    cancelReason: CancelReasonReducer,
    paymentMethod: PaymentMethodReducer,
    blog: BlogReducer,
    product: ProductReducer,
    review: ReviewReducer,
    order: OrderReducer,
    Variation: VariationReducer,
    VariationOption: VariationOptionReducer,
    QuizSet: QuizSetReducer,
    quizQuestion: QuizQuestionReducer,
    quizOption: QuizOptionReducer,
    ProductCategory: ProductCategoryReducer
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;