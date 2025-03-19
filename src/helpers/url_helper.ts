import { ex } from "@fullcalendar/core/internal-common";

// REGISTER
export const POST_FAKE_REGISTER = "/auth/signup";

// LOGIN
export const POST_LOGIN = "/authentications/signin";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

// PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/user";

// Chat
export const GET_CHAT = "/get-chat";
export const ADD_CHAT = "/add-chat";
export const DELETE_CHAT = "/delete-chat";
export const BOOKMARK_CHAT = "/delete-chat";

// MailBox
export const GET_MAIL = "/get-mail";
export const DELETE_MAIL = "/delete-mail";
export const UNREAD_MAIL = "/unread-mail";
export const STARED_MAIL = "/stared-mail";
export const TRASH_MAIL = "/trash-mail";

// Calendar
export const GET_EVENT = "/get-event";
export const ADD_EVENT = "/add-event";
export const UPDATE_EVENT = "/edit-event";
export const DELETE_EVENT = "/delete-event";

// Category
export const GET_ALL_CATEGORIES = "/api/categories";
export const CREATE_CATEGORY = "/api/categories";
export const UPDATE_CATEGORY = "/api/categories";
export const DELETE_CATEGORY = "/api/categories";

// Ecommerce

// Promotion 
export const GET_ALL_PROMOTIONS = "/api/promotions";
export const CREATE_PROMOTION = "/api/promotions";
export const UPDATE_PROMOTION = "/api/promotions";
export const DELETE_PROMOTION = "/api/promotions";

// Variation
export const GET_ALL_VARIATIONS = "api/variations";
export const CREATE_VARIATION = "api/variations";
export const UPDATE_VARIATION = "api/variations";
export const DELETE_VARIATION = "api/variations";

// Variation Option
export const GET_ALL_VARIATION_OPTION = "api/variation-options"
export const CREATE_VARIATION_OPTION = "api/variation-options"
export const UPDATE_VARIATION_OPTION = "api/variation-options"
export const DELETE_VARIATION_OPTION = "api/variation-options"

// Product Status
export const GET_ALL_PRODUCT_STATUS = "api/product-statues"
export const CREATE_PRODUCT_STATUS = "api/product-statues"
export const UPDATE_PRODUCT_STATUS = "api/product-statues"
export const DELETE_PRODUCT_STATUES = "api/product-statues"

// Product Category
export const GET_ALL_PRODUCT_CATEGORIES = "api/product-categories";
export const CREATE_PRODUCT_CATEGORIES = "api/product-categories";
export const UPDATE_PRODUCT_CATEGORIES= "api/product-categories";
export const DELETE_PRODUCT_CATEGORIES = "api/product-categories";


// Blog
export const GET_ALL_BLOGS = "/api/blogs";
export const CREATE_BLOG = "/api/blogs";
export const UPDATE_BLOG = "/api/blogs";
export const DELETE_BLOG = "/api/blogs";
export const GET_BLOG_BY_ID = "/api/blogs"

// Payment Method
export const GET_ALL_PAYMENT_METHODS = "/api/payment-methods";
export const CREATE_PAYMENT_METHOD = "/api/payment-methods";
export const UPDATE_PAYMENT_METHOD = "/api/payment-methods";
export const DELETE_PAYMENT_METHOD = "/api/payment-methods";

// Migrate to Firebase
export const MIGRATE_TO_FIRE_BASE = "/migrateToFirebaseLinks"

// Skin Type
export const GET_ALL_SKIN_TYPES = "/api/skin-types";
export const CREATE_SKIN_TYPE = "/api/skin-types";
export const UPDATE_SKIN_TYPE = "/api/skin-types";
export const DELETE_SKIN_TYPE = "/api/skin-types";

// Cancel Reason
export const GET_ALL_CANCEL_REASONS = "/api/cancel-reasons";
export const CREATE_CANCEL_REASON = "/api/cancel-reasons";
export const UPDATE_CANCEL_REASON = "/api/cancel-reasons";
export const DELETE_CANCEL_REASON = "/api/cancel-reasons";

// Reply
export const CREATE_REPLY = "/api/replies"
export const DELETE_REPLY = "/api/replies"
export const UPDATE_REPLY = "/api/replies"

// Products
// List View
export const GET_ALL_PRODUCTS = "/api/products";
export const GET_PRODUCT_BY_ID = "/api/products";
export const CREATE_PRODUCT = "/api/products";
export const UPDATE_PRODUCT = "/api/products";
export const DELETE_PRODUCT = "/api/products";


// Country
export const GET_ALL_COUNTRIES = "/api/countries";

// Brand
export const GET_ALL_BRANDS = "/api/brands";
export const CREATE_BRAND = "/api/brands";
export const UPDATE_BRAND = "/api/brands";
export const DELETE_BRAND = "/api/brands";

// Voucher
export const GET_ALL_VOUCHERS = "/api/voucher";
export const CREATE_VOUCHER = "/api/voucher";
export const UPDATE_VOUCHER = "/api/voucher";
export const DELETE_VOUCHER = "/api/voucher";

// Users
export const GET_ALL_USERS = "/api/user";
export const CREATE_USER = "/api/user";
export const UPDATE_USER = "/api/user";
export const DELETE_USER = "/api/user";

// Role
export const GET_ALL_ROLES = "/api/roles";
export const CREATE_ROLE = "/api/roles";
export const DELETE_ROLE ="/api/roles";
export const UPDATE_ROLE = "/api/roles"

// Orders
export const GET_ALL_ORDERS = "/api/orders";
export const CREATE_ORDERS = "/api/orders";
export const UPDATE_ORDERS = "/api/orders";
export const DELETE_ORDERS = "/api/orders";
export const GET_ORDER_BY_ID = "/api/orders";

// Quiz Sets
export const GET_ALL_QUIZ_SETS = "/api/quiz-sets";
export const CREATE_QUIZ_SETS = "/api/quiz-sets";
export const UPDATE_QUIZ_SETS = "/api/quiz-sets";
export const DELETE_QUIZ_SETS = "/api/quiz-sets";
export const SET_QUIZ_SETS_DEFAULT = "/api/quiz-sets";

// Quiz Questions
export const GET_ALL_QUIZ_QUESTIONS = "/api/quiz-questions";
export const CREATE_QUIZ_QUESTIONS = "/api/quiz-questions";
export const UPDATE_QUIZ_QUESTIONS = "/api/quiz-questions";
export const DELETE_QUIZ_QUESTIONS = "/api/quiz-questions";
export const GET_QUIZ_QUESTION_BY_QUIZ_SET_ID = "/api/quiz-questions"
export const CREATE_QUIZ_QUESTION_BY_QUIZ_SET_ID = "/api/quiz-questions"
export const UPDATE_QUIZ_QUESTION_BY_QUIZ_SET_ID = "/api/quiz-questions"
export const DELETE_QUIZ_QUESTION_BY_QUIZ_SET_ID = "/api/quiz-questions"

// Quiz Options
export const GET_ALL_QUIZ_OPTIONS = "/api/quiz-options";
export const CREATE_QUIZ_OPTIONS = "/api/quiz-options";
export const UPDATE_QUIZ_OPTIONS = "/api/quiz-options";
export const DELETE_QUIZ_OPTIONS = "/api/quiz-options";
export const GET_QUIZ_OPTION_BY_QUIZ_QUESTION_ID = "/api/quiz-options"
export const CREATE_QUIZ_OPTION_BY_QUIZ_QUESTION_ID = "/api/quiz-options"
export const UPDATE_QUIZ_OPTION_BY_QUIZ_QUESTION_ID = "/api/quiz-options"
export const DELETE_QUIZ_OPTION_BY_QUIZ_QUESTION_ID = "/api/quiz-options"


// Sellers
export const GET_SELLERS = "/get-sellers";
export const ADD_SELLERS = "/add-sellers";
export const UPDATE_SELLERS = "/edit-sellers";
export const DELETE_SELLERS = "/delete-sellers";

// Overview
export const GET_ALL_REVIEWS = "/api/reviews";
export const ADD_REVIEW = "/api/review";
export const UPDATE_REVIEW = "/api/review";
export const DELETE_REVIEW = "/api/review";











































