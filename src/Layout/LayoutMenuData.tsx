import { Award, CalendarDays, CircuitBoard, Codesandbox, FileText, LifeBuoy, LocateFixed, Mail, Map, MessageSquare, MonitorDot, PackagePlus, PictureInPicture2, PieChart, RadioTower, ScrollText, Share2, ShoppingBag, Table, Trophy, UserRound} from "lucide-react";

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
        id: 'chat',
        label: 'Chat',
        icon: <MessageSquare />,
        link: '/apps-chat',
        parentId: 2
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
            {
                id: 'blog',
                label: 'Blog',
                link: '/apps-ecommerce-blog',
                parentId: 'ecommerce'
            },
            {
                id: 'brand',
                label: 'Brand',
                link: '/apps-ecommerce-brand',
                parentId: 'ecommerce'
            },
            {
                id: 'cancel reason',
                label: 'Cancel Reason',
                link: '/apps-ecommerce-cancel-reason',
                parentId: 'ecommerce'
            },
            {
                id: 'category',
                label: 'Category',
                link: '/apps-ecommerce-category',
                parentId: 'ecommerce'
            },
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
                id: 'promotion',
                label: 'Promotion',
                link: '/apps-ecommerce-promotion',
                parentId: 'ecommerce'
            },
            {
                id: 'reviews',
                label: 'Reviews',
                link: '/apps-ecommerce-reviews',
                parentId: 'ecommerce'
            },
            {
                id: 'skin-type',
                label: 'Skin Type',
                link: '/apps-ecommerce-skin-type',
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
    {
        label: 'Components',
        isTitle: true,
    },
    {
        id: "uielement",
        label: 'UI Elements',
        link: "/#",
        icon: <LifeBuoy />,
        subItems: [
            {
                id: '1',
                label: 'Alerts',
                link: '/ui-alerts',
                parentId: "uielement"
            },
            {
                id: '2',
                label: 'Avatar',
                link: '/ui-avatar',
                parentId: "uielement"
            },
            {
                id: '3',
                label: 'Buttons',
                link: '/ui-buttons',
                parentId: "uielement"
            },
            {
                id: '4',
                label: 'Label',
                link: '/ui-label',
                parentId: "uielement"
            },
            {
                id: '5',
                label: 'Cards',
                link: '/ui-cards',
                parentId: "uielement"
            },
            {
                id: '6',
                label: 'Collapse',
                link: '/ui-collapse',
                parentId: "uielement"
            },
            {
                id: '7',
                label: 'Countdown',
                link: '/ui-countdown',
                parentId: "uielement"
            },
            {
                id: '8',
                label: 'Drawer',
                link: '/ui-drawer',
                parentId: "uielement"
            },
            {
                id: '9',
                label: 'Dropdown',
                link: '/ui-dropdown',
                parentId: "uielement"
            },
            {
                id: '10',
                label: 'Gallery',
                link: '/ui-gallery',
                parentId: "uielement"
            },
            {
                id: '11',
                label: 'Lists',
                link: '/ui-lists',
                parentId: "uielement"
            },
            {
                id: '12',
                label: 'Notification',
                link: '/ui-notification',
                parentId: "uielement"
            },
            {
                id: '13',
                label: 'Modal',
                link: '/ui-modal',
                parentId: "uielement"
            },
            {
                id: '14',
                label: 'Spinners',
                link: '/ui-spinners',
                parentId: "uielement"
            },
            {
                id: '15',
                label: 'Timeline',
                link: '/ui-timeline',
                parentId: "uielement"
            },
            {
                id: '16',
                label: 'Progress Bar',
                link: '/ui-progress-bar',
                parentId: "uielement"
            },
            {
                id: '17',
                label: 'Tooltip',
                link: '/ui-tooltip',
                parentId: "uielement"
            },
            {
                id: '18',
                label: 'Video',
                link: '/ui-video',
                parentId: "uielement"
            }
        ]
    },
    {
        id: 'plugin',
        label: 'Plugins',
        icon: <PackagePlus />,
        subItems: [
            {
                id: 'simplebar',
                label: 'Simplebar',
                link: '/plugins-simplebar',
                parentId: 'plugin'
            },
            {
                id: 'lightbox',
                label: 'Lightbox',
                link: '/plugins-lightbox',
                parentId: 'plugin'
            },
            {
                id: 'swiper',
                label: 'Swiper Slider',
                link: '/plugins-swiper-slider',
                parentId: 'plugin'
            },
            {
                id: 'scrollhint',
                label: 'Scroll Hint',
                link: '/plugins-scroll-hint',
                parentId: 'plugin'
            },
            {
                id: 'videoplayer',
                label: 'Video Player',
                link: '/plugins-video-player',
                parentId: 'plugin'
            },
        ]
    },
    {
        id: 'navigation',
        label: 'Navigation',
        icon: <LocateFixed />,
        subItems: [
            {
                id: 'navbar',
                label: 'Navbar',
                link: '/navigation-navbars',
                parentId: 'navigation'
            },
            {
                id: 'tabs',
                label: 'Tabs',
                link: '/navigation-tabs',
                parentId: 'navigation'
            },
            {
                id: 'breadcrumb',
                label: 'Breadcrumb',
                link: '/navigation-breadcrumb',
                parentId: 'navigation'
            },
            {
                id: 'pagination',
                label: 'Pagination',
                link: '/navigation-pagination',
                parentId: 'navigation'
            },
        ]
    },
    {
        id: "form",
        label: 'Forms',
        link: "/#",
        icon: <LifeBuoy />,
        subItems: [
            {
                id: 'basicform',
                label: 'Basic',
                link: '/forms-basic',
                parentId: "form"
            },
            {
                id: 'validation',
                label: 'Validation',
                link: '/forms-validation',
                parentId: "form"
            },
            {
                id: 'inputmask',
                label: 'Input Mask',
                link: '/forms-input-mask',
                parentId: "form"
            },
            {
                id: 'select',
                label: 'Select',
                link: '/forms-select',
                parentId: "form"
            },
            {
                id: 'checkbox-radio',
                label: 'Checkbox & Radio',
                link: '/forms-checkbox-radio',
                parentId: "form"
            },
            {
                id: 'switches',
                label: 'Switches',
                link: '/forms-switches',
                parentId: "form"
            },
            {
                id: 'wizard',
                label: 'Wizard',
                link: '/forms-wizard',
                parentId: "form"
            },
            {
                id: 'file-upload',
                label: 'File Upload',
                link: '/forms-file-upload',
                parentId: "form"
            },
            {
                id: 'datepicker',
                label: 'Date Picker',
                link: '/forms-datepicker',
                parentId: "form"
            },
            {
                id: 'timepicker',
                label: 'Time Picker',
                link: '/forms-timepicker',
                parentId: "form"
            },
            {
                id: 'colorpicker',
                label: 'Color Picker',
                link: '/forms-colorpicker',
                parentId: "form"
            },
            {
                id: 'multi-select',
                label: 'Multi Select',
                link: '/forms-multi-select',
                parentId: "form"
            },
            {
                id: 'input-spin',
                label: 'Input Spin',
                link: '/forms-input-spin',
                parentId: "form"
            },
            {
                id: 'clipboard',
                label: 'Clipboard',
                link: '/forms-clipboard',
                parentId: "form"
            },
            {
                id: 'editor',
                label: 'Editor',
                link: '/forms-editor-classic',
                parentId: "form",
            },
        ]
    },
    {
        id: 'tables',
        label: 'Tables',
        icon: <Table />,
        subItems: [
            {
                id: 'basictable',
                label: 'Basic Table',
                link: '/tables-basic',
                parentId: 'tables'
            },
            {
                id: 'datatable',
                label: 'Datatable',
                link: '/tables-datatable',
                parentId: 'tables'
            }
        ]
    },
    {
        id: "apexchart",
        label: 'Apexcharts',
        link: "/#",
        icon: <PieChart />,
        subItems: [
            {
                id: 'area',
                label: 'Area',
                link: '/charts-apex-area',
                parentId: "apexchart"
            },
            {
                id: 'bar',
                label: 'Bar',
                link: '/charts-apex-bar',
                parentId: "apexchart"
            },
            {
                id: 'boxplot',
                label: 'Boxplot',
                link: '/charts-apex-boxplot',
                parentId: "apexchart"
            },
            {
                id: 'bubble',
                label: 'Bubble',
                link: '/charts-apex-bubble',
                parentId: "apexchart"
            },
            {
                id: 'candlstick',
                label: 'Candlstick',
                link: '/charts-apex-candlstick',
                parentId: "apexchart"
            },
            {
                id: 'column',
                label: 'Column',
                link: '/charts-apex-column',
                parentId: "apexchart"
            },
            {
                id: 'funnel',
                label: 'Funnel',
                link: '/charts-apex-funnel',
                parentId: "apexchart"
            },
            {
                id: 'heatmap',
                label: 'Heatmap',
                link: '/charts-apex-heatmap',
                parentId: "apexchart"
            },
            {
                id: 'line',
                label: 'Line',
                link: '/charts-apex-line',
                parentId: "apexchart"
            },
            {
                id: 'mixed',
                label: 'Mixed',
                link: '/charts-apex-mixed',
                parentId: "apexchart"
            },
            {
                id: 'pie',
                label: 'Pie',
                link: '/charts-apex-pie',
                parentId: "apexchart"
            },
            {
                id: 'polar',
                label: 'Polar Area',
                link: '/charts-apex-polar',
                parentId: "apexchart"
            },
            {
                id: 'radar',
                label: 'Radar',
                link: '/charts-apex-radar',
                parentId: "apexchart"
            },
            {
                id: 'radialbar',
                label: 'Radialbar',
                link: '/charts-apex-radialbar',
                parentId: "apexchart"
            },
            {
                id: 'range-area',
                label: 'Range Area',
                link: '/charts-apex-range-area',
                parentId: "apexchart"
            },
            {
                id: 'scatter',
                label: 'Scatter',
                link: '/charts-apex-scatter',
                parentId: "apexchart"
            },
            {
                id: 'timelinechart',
                label: 'Timeline',
                link: '/charts-apex-timeline',
                parentId: "apexchart"
            },
            {
                id: 'treemap',
                label: 'Treemap',
                link: '/charts-apex-treemap',
                parentId: "apexchart"
            }
        ]
    },
    {
        id: "icons",
        label: 'Icons',
        link: "/#",
        icon: <Trophy />,
        subItems: [
            {
                id: 'remix',
                label: 'Remix',
                link: '/icons-remix',
                parentId: "icons"
            },
            {
                id: 'lucide',
                label: 'Lucide',
                link: '/icons-lucide',
                parentId: "icons"
            }
        ]
    },
    {
        id: "maps",
        label: 'Maps',
        link: "/#",
        icon: <Map />,
        subItems: [
            {
                id: 'google',
                label: 'Google Maps',
                link: '/maps-google',
                parentId: "maps"
            },
            {
                id: 'leaflet',
                label: 'Leaflet Map',
                link: '/maps-leaflet',
                parentId: "maps"
            }
        ]
    },
    {
        id: "multilevel",
        label: 'Multi Level',
        link: "/#",
        icon: <Share2 />,
        subItems: [
            {
                id: 'level1',
                label: 'Level 1.1',
                link: '/#',
                parentId: "multilevel"
            },
            {
                id: 'level2',
                label: 'Level 1.2',
                link: '/#',
                parentId: "multilevel",
                subItems: [
                    {
                        id: 'level21',
                        label: 'Level 2.1',
                        link: '/#',
                        parentId: 'level2'
                    },
                    {
                        id: 'level22',
                        label: 'Level 2.2',
                        link: '/#',
                        parentId: 'level2'
                    },
                ]
            }
        ]
    },

];

export { menuData };