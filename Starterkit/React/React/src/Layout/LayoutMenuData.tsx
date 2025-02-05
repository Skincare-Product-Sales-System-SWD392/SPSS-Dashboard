import { Award, CalendarDays, CircuitBoard, Codesandbox, FileText, LifeBuoy, LocateFixed, Mail, Map, MessageSquare, MonitorDot, PackagePlus, PictureInPicture2, PieChart, RadioTower, ScrollText, Share2, ShoppingBag, Table, Trophy, UserRound } from "lucide-react";

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
                id: 'analyticsdashboard',
                label: 'Analytics',
                link: '#',
                parentId: "dashboard"
            },
            {
                id: 'ecommercedashboard',
                label: 'Ecommerce',
                link: '#',
                parentId: "dashboard"
            },
            {
                id: 'emaildashboard',
                label: 'Email',
                link: '#',
                parentId: "dashboard"
            },
            {
                id: 'hrdashboard',
                label: 'HR',
                link: '#',
                parentId: "dashboard"
            },
            {
                id: 'socialdashboard',
                label: 'Social',
                link: '#',
                parentId: "dashboard"
            },
        ]
    },
    {
        id: "landing",
        label: 'Landing Page',
        link: "/#",
        icon: <PictureInPicture2 />,
        subItems: [
            {
                id: 'onepage',
                label: 'One Page',
                link: '#',
                parentId: "landing"
            },
            {
                id: 'productlanding',
                label: 'Product',
                link: '#',
                parentId: "landing"
            }
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
        link: '#',
        parentId: 2
    },
    {
        id: 'email',
        label: 'Email',
        icon: <Mail />,
        link: '#',
        parentId: 2
    },
    {
        id: 'calendar',
        label: 'Calendar',
        link: "/#",
        icon: <CalendarDays />,
        subItems: [
            {
                id: 'default',
                label: 'Default',
                link: '#',
                parentId: 'calendar'
            },
            {
                id: 'monthgrid',
                label: 'Month Grid',
                link: '#',
                parentId: 'calendar'
            },
            {
                id: 'multimonth',
                label: 'Multi Month Stack',
                link: '#',
                parentId: 'calendar'
            }
        ]
    },
    {
        id: "ecommerce",
        label: 'Ecommerce',
        link: "/#",
        icon: <ShoppingBag />,
        subItems: [
            {
                id: 'product',
                label: 'Products',
                parentId: 'ecommerce',
                subItems: [
                    {
                        id: 'listview',
                        label: 'List View',
                        link: '#',
                        parentId: 'product'
                    },
                    {
                        id: 'gridview',
                        label: 'Grid View',
                        link: '#',
                        parentId: 'product'
                    },
                    {
                        id: 'overview',
                        label: 'Overview',
                        link: '#',
                        parentId: 'product'
                    },
                    {
                        id: 'addnew',
                        label: 'Add New',
                        link: '#',
                        parentId: 'product'
                    },
                ]
            },
            {
                id: 'shoppingcart',
                label: 'Shopping Cart',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'checkout',
                label: 'Checkout',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'order',
                label: 'Orders',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'orderoverview',
                label: 'Order Overview',
                link: '#',
                parentId: 'ecommerce'
            },
            {
                id: 'sellers',
                label: 'Sellers',
                link: '#',
                parentId: 'ecommerce'
            },
        ]
    },
    {
        id: "hr-management",
        label: 'HR Management',
        icon: <CircuitBoard />,
        parentId: "hrmanagement",
        link: "/#",
        subItems: [
            {
                id: 'employeelist',
                label: 'Employee List',
                link: '#',
                parentId: 'hrmanagement'
            },
            {
                id: 'holiday',
                label: 'Holidays',
                link: '#',
                parentId: 'hrmanagement'
            },
            {
                id: 'leavesmanage',
                label: 'Leaves Manage',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'byemployee',
                        label: 'By Employee',
                        link: '#',
                        parentId: 'leavesmanage'
                    },
                    {
                        id: 'addleaveemployee',
                        label: 'Add Leave (Employee)',
                        link: '#',
                        parentId: 'leavesmanage'
                    },
                    {
                        id: 'byhr',
                        label: 'By HR',
                        link: '#',
                        parentId: 'leavesmanage'
                    },
                    {
                        id: 'addleavehr',
                        label: 'Add Leave (HR)',
                        link: '#',
                        parentId: 'leavesmanage'
                    },
                ]
            },
            {
                id: 'attendance',
                label: 'Attendance',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'attendancehr',
                        label: 'Attendance (HR)',
                        link: '#',
                        parentId: 'attendance'
                    },
                    {
                        id: 'mainattendance',
                        label: 'Main Attendance',
                        link: '#',
                        parentId: 'attendance'
                    },
                ]
            },
            {
                id: 'department',
                label: 'Department',
                link: '#',
                parentId: 'hrmanagement'
            },
            {
                id: 'sale',
                label: 'Sales',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'estimates',
                        label: 'Estimates',
                        link: '#',
                        parentId: 'sale'
                    },
                    {
                        id: 'payments',
                        label: 'Payments',
                        link: '#',
                        parentId: 'sale'
                    },
                    {
                        id: 'expenses',
                        label: 'Expenses',
                        link: '#',
                        parentId: 'sale'
                    },
                ]
            },
            {
                id: 'payroll',
                label: 'Payroll',
                parentId: 'hrmanagement',
                subItems: [
                    {
                        id: 'employeesalary',
                        label: 'Employee Salary',
                        link: '#',
                        parentId: 'payroll'
                    },
                    {
                        id: 'payslip',
                        label: 'Payslip',
                        link: '#',
                        parentId: 'payroll'
                    },
                    {
                        id: 'createpayslip',
                        label: 'Create Payslip',
                        link: '#',
                        parentId: 'payroll'
                    },
                ]
            },
        ],
    },
    {
        id: 'notes',
        label: 'Notes',
        icon: <ScrollText />,
        link: '#',
        parentId: 2
    },
    {
        id: 'social',
        label: 'Social',
        icon: <RadioTower />,
        subItems: [
            {
                id: 'friends',
                label: 'Friends',
                link: '#',
                parentId: 'social'
            },
            {
                id: 'event',
                label: 'Event',
                link: '#',
                parentId: 'social'
            },
            {
                id: 'watchvideo',
                label: 'Watch Video',
                link: '#',
                parentId: 'social'
            },
            {
                id: 'marketplace',
                label: 'Marketplace',
                link: '#',
                parentId: 'social'
            }
        ]
    },
    {
        id: 'invoice',
        label: 'Invoices',
        icon: <FileText />,
        parentId: 2,
        subItems: [
            {
                id: 'invoicelistview',
                label: 'Listview',
                link: '#',
                parentId: 'invoice'
            },
            {
                id: 'invoiceaddnew',
                label: 'Add New',
                link: '#',
                parentId: 'invoice'
            },
            {
                id: 'invoiceoverview',
                label: 'Overview',
                link: '#',
                parentId: 'invoice'
            }
        ]
    },
    {
        id: 'users',
        label: 'Users',
        icon: <UserRound />,
        parentId: 2,
        subItems: [
            {
                id: 'userlistview',
                label: 'List view',
                link: '#',
                parentId: 'users'
            },
            {
                id: 'usergridview',
                label: 'Grid View',
                link: '#',
                parentId: 'users'
            }
        ]
    },
    {
        label: 'Pages',
        isTitle: true,
    },
    {
        id: 'authentication',
        label: 'Authentication',
        icon: <Award />,
        parentId: 2,
        subItems: [
            {
                id: 'login',
                label: 'Login',
                parentId: 'social',
                subItems: [
                    {
                        id: 'basic',
                        label: 'Basic',
                        link: '#',
                        parentId: 'login'
                    },
                    {
                        id: 'cover',
                        label: 'Cover',
                        link: '#',
                        parentId: 'login'
                    },
                    {
                        id: 'boxed',
                        label: 'Boxed',
                        link: '#',
                        parentId: 'login'
                    },
                    {
                        id: 'modern',
                        label: 'Modern',
                        link: '#',
                        parentId: 'login'
                    },
                ]
            },
            {
                id: 'register',
                label: 'Register',
                parentId: 'social',
                subItems: [
                    {
                        id: 'registerbasic',
                        label: 'Basic',
                        link: '#',
                        parentId: 'register'
                    },
                    {
                        id: 'registercover',
                        label: 'Cover',
                        link: '#',
                        parentId: 'register'
                    },
                    {
                        id: 'registerboxed',
                        label: 'Boxed',
                        link: '#',
                        parentId: 'register'
                    },
                    {
                        id: 'registermodern',
                        label: 'Modern',
                        link: '#',
                        parentId: 'register'
                    },
                ]
            },
            {
                id: 'verifyemail',
                label: 'Verify Email',
                parentId: 'social',
                subItems: [
                    {
                        id: 'verifyemailbasic',
                        label: 'Basic',
                        link: '#',
                        parentId: 'verifyemail'
                    },
                    {
                        id: 'verifyemailcover',
                        label: 'Cover',
                        link: '#',
                        parentId: 'verifyemail'
                    },
                    {
                        id: 'verifyemailmodern',
                        label: 'Modern',
                        link: '#',
                        parentId: 'verifyemail'
                    },
                ]
            },
            {
                id: 'twostep',
                label: 'Two Steps',
                parentId: 'social',
                subItems: [
                    {
                        id: 'twostepbasic',
                        label: 'Basic',
                        link: '#',
                        parentId: 'twostep'
                    },
                    {
                        id: 'twostepcover',
                        label: 'Cover',
                        link: '#',
                        parentId: 'twostep'
                    },
                    {
                        id: 'twostepboxed',
                        label: 'Boxed',
                        link: '#',
                        parentId: 'twostep'
                    },
                    {
                        id: 'twostepmodern',
                        label: 'Modern',
                        link: '#',
                        parentId: 'twostep'
                    },
                ]
            },
            {
                id: 'logout',
                label: 'Logout',
                parentId: 'social',
                subItems: [
                    {
                        id: 'logoutbasic',
                        label: 'Basic',
                        link: '#',
                        parentId: 'logout'
                    },
                    {
                        id: 'logoutcover',
                        label: 'Cover',
                        link: '#',
                        parentId: 'logout'
                    },
                    {
                        id: 'logoutboxed',
                        label: 'Boxed',
                        link: '#',
                        parentId: 'logout'
                    },
                    {
                        id: 'logoutmodern',
                        label: 'Modern',
                        link: '#',
                        parentId: 'logout'
                    },
                ]
            },
            {
                id: 'resetpw',
                label: 'Reset Password',
                parentId: 'social',
                subItems: [
                    {
                        id: 'resetpwbasic',
                        label: 'Basic',
                        link: '#',
                        parentId: 'resetpw'
                    },
                    {
                        id: 'resetpwcover',
                        label: 'Cover',
                        link: '#',
                        parentId: 'resetpw'
                    },
                    {
                        id: 'resetpwboxed',
                        label: 'Boxed',
                        link: '#',
                        parentId: 'resetpw'
                    },
                    {
                        id: 'resetpwmodern',
                        label: 'Modern',
                        link: '#',
                        parentId: 'resetpw'
                    },
                ]
            },
            {
                id: 'createpw',
                label: 'Create Password',
                parentId: 'social',
                subItems: [
                    {
                        id: 'createpwbasic',
                        label: 'Basic',
                        link: '#',
                        parentId: 'createpw'
                    },
                    {
                        id: 'createpwcover',
                        label: 'Cover',
                        link: '#',
                        parentId: 'createpw'
                    },
                    {
                        id: 'createpwboxed',
                        label: 'Boxed',
                        link: '#',
                        parentId: 'createpw'
                    },
                    {
                        id: 'createpwmodern',
                        label: 'Modern',
                        link: '#',
                        parentId: 'createpw'
                    },
                ]
            }
        ]
    },
    {
        id: 'pages',
        label: 'Pages',
        icon: <Codesandbox />,
        parentId: 2,
        subItems: [
            {
                id: 'account',
                label: 'Account',
                link: '#',
                parentId: 'pages'
            },
            {
                id: 'setting',
                label: 'Settings',
                link: '#',
                parentId: 'pages'
            },
            {
                id: 'pricing',
                label: 'Pricing',
                link: '#',
                parentId: 'pages'
            },
            {
                id: 'faq',
                label: 'FAQs',
                link: '#',
                parentId: 'pages'
            },
            {
                id: 'contactus',
                label: 'Contact US',
                link: '#',
                parentId: 'pages'
            },
            {
                id: 'comingsoon',
                label: 'Coming Soon',
                link: '#',
                parentId: 'pages'
            },
            {
                id: 'errorpage',
                label: 'Error Pages',
                parentId: 'pages',
                subItems: [
                    {
                        id: '404',
                        label: '404',
                        link: '#',
                        parentId: 'errorpage'
                    },
                    {
                        id: 'offline',
                        label: 'Offline',
                        link: '#',
                        parentId: 'errorpage'
                    }
                ]
            },
            {
                id: 'maintenance',
                label: 'Maintenance',
                link: '#',
                parentId: 'pages'
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
                link: '#',
                parentId: "uielement"
            },
            {
                id: '2',
                label: 'Avatar',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '3',
                label: 'Buttons',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '4',
                label: 'Label',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '5',
                label: 'Cards',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '6',
                label: 'Collapse',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '7',
                label: 'Countdown',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '8',
                label: 'Drawer',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '9',
                label: 'Dropdown',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '10',
                label: 'Gallery',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '11',
                label: 'Lists',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '12',
                label: 'Notification',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '13',
                label: 'Modal',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '14',
                label: 'Spinners',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '15',
                label: 'Timeline',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '16',
                label: 'Progress Bar',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '17',
                label: 'Tooltip',
                link: '#',
                parentId: "uielement"
            },
            {
                id: '18',
                label: 'Video',
                link: '#',
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
                link: '#',
                parentId: 'plugin'
            },
            {
                id: 'lightbox',
                label: 'Lightbox',
                link: '#',
                parentId: 'plugin'
            },
            {
                id: 'swiper',
                label: 'Swiper Slider',
                link: '#',
                parentId: 'plugin'
            },
            {
                id: 'scrollhint',
                label: 'Scroll Hint',
                link: '#',
                parentId: 'plugin'
            },
            {
                id: 'videoplayer',
                label: 'Video Player',
                link: '#',
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
                link: '#',
                parentId: 'navigation'
            },
            {
                id: 'tabs',
                label: 'Tabs',
                link: '#',
                parentId: 'navigation'
            },
            {
                id: 'breadcrumb',
                label: 'Breadcrumb',
                link: '#',
                parentId: 'navigation'
            },
            {
                id: 'pagination',
                label: 'Pagination',
                link: '#',
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
                link: '#',
                parentId: "form"
            },
            {
                id: 'validation',
                label: 'Validation',
                link: '#',
                parentId: "form"
            },
            {
                id: 'inputmask',
                label: 'Input Mask',
                link: '#',
                parentId: "form"
            },
            {
                id: 'select',
                label: 'Select',
                link: '#',
                parentId: "form"
            },
            {
                id: 'checkbox-radio',
                label: 'Checkbox & Radio',
                link: '#',
                parentId: "form"
            },
            {
                id: 'switches',
                label: 'Switches',
                link: '#',
                parentId: "form"
            },
            {
                id: 'wizard',
                label: 'Wizard',
                link: '#',
                parentId: "form"
            },
            {
                id: 'file-upload',
                label: 'File Upload',
                link: '#',
                parentId: "form"
            },
            {
                id: 'datepicker',
                label: 'Date Picker',
                link: '#',
                parentId: "form"
            },
            {
                id: 'timepicker',
                label: 'Time Picker',
                link: '#',
                parentId: "form"
            },
            {
                id: 'colorpicker',
                label: 'Color Picker',
                link: '#',
                parentId: "form"
            },
            {
                id: 'multi-select',
                label: 'Multi Select',
                link: '#',
                parentId: "form"
            },
            {
                id: 'input-spin',
                label: 'Input Spin',
                link: '#',
                parentId: "form"
            },
            {
                id: 'clipboard',
                label: 'Clipboard',
                link: '#',
                parentId: "form"
            },
            {
                id: 'editor',
                label: 'Editor',
                link: '#',
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
                link: '#',
                parentId: 'tables'
            },
            {
                id: 'datatable',
                label: 'Datatable',
                link: '#',
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
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'bar',
                label: 'Bar',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'boxplot',
                label: 'Boxplot',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'bubble',
                label: 'Bubble',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'candlstick',
                label: 'Candlstick',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'column',
                label: 'Column',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'funnel',
                label: 'Funnel',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'heatmap',
                label: 'Heatmap',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'line',
                label: 'Line',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'mixed',
                label: 'Mixed',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'pie',
                label: 'Pie',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'polar',
                label: 'Polar Area',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'radar',
                label: 'Radar',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'radialbar',
                label: 'Radialbar',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'range-area',
                label: 'Range Area',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'scatter',
                label: 'Scatter',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'timelinechart',
                label: 'Timeline',
                link: '#',
                parentId: "apexchart"
            },
            {
                id: 'treemap',
                label: 'Treemap',
                link: '#',
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
                link: '#',
                parentId: "icons"
            },
            {
                id: 'lucide',
                label: 'Lucide',
                link: '#',
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
                link: '#',
                parentId: "maps"
            },
            {
                id: 'leaflet',
                label: 'Leaflet Map',
                link: '#',
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