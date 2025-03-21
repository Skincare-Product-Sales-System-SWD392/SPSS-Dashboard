import { MonitorDot, ShoppingBag } from "lucide-react";

const menuData: any = [
    {
        label: 'menu',
        isTitle: true,
    },
    {
        id: "dashboard",
        label: 'Dashboards',
        link: "/#",
        icon: <MonitorDot />,
        subItems: [
            {
                id: 'ecommercedashboard',
                label: 'Ecommerce',
                link: '/dashboard',
                parentId: "dashboard"
            },
        ]
    },
    {
        label: 'Apps',
        isTitle: true,
    },
    {
        id: "ecommerce",
        label: 'Ecommerce',
        link: "/#",
        icon: <ShoppingBag />,
        subItems: [
            {
                id: 'account',
                label: 'Account',
                link: '/apps-ecommerce-account',
                parentId: 'ecommerce'
            },
            // {
            //     id: 'blog',
            //     label: 'Blog',
            //     link: '/apps-ecommerce-blog',
            //     parentId: 'ecommerce'
            // },
            // {
            //     id: 'cancel reason',
            //     label: 'Cancel Reason',
            //     link: '/apps-ecommerce-cancel-reason',
            //     parentId: 'ecommerce'
            // },
            // {
            //     id: 'category',
            //     label: 'Category',
            //     link: '/apps-ecommerce-category',
            //     parentId: 'ecommerce'
            // },
            {
                id: 'order',
                label: 'Order',
                link: '/apps-ecommerce-orders',
                parentId: 'ecommerce'
            },
            {
                id: 'payment-method',
                label: 'Payment Method',
                link: '/apps-ecommerce-payment-method',
                parentId: 'ecommerce'
            },
            {
                id: 'product',
                label: 'Products',
                parentId: 'ecommerce',
                link: "/apps-ecommerce-product-list",
            },
            {
                id: 'reviews',
                label: 'Reviews',
                link: '/apps-ecommerce-reviews',
                parentId: 'ecommerce'
            },
            {
                id: 'survey-question',
                label: 'Survey Question',
                link: '/apps-ecommerce-survey-question',
                parentId: 'ecommerce'
            },
            {
                id: 'variation',
                label: 'Variation',
                link: '/apps-ecommerce-variation',
                parentId: 'ecommerce'
            },
            {
                id: 'variation-option',
                label: 'Variation Option',
                link : '/apps-ecommerce-variation-option',
                parentId: 'ecommerce'
            },
            {
                id: 'voucher',
                label: 'Voucher',
                link: '/apps-ecommerce-voucher',
                parentId: 'ecommerce'
            },
        ]
    },
];

export { menuData };