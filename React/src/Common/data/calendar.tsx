var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

const Events = [
    {
        id: "1",
        title: 'All Day Event',
        start: new Date().setDate(new Date().getDate() + 1),
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] text-purple-500 !bg-purple-100 dark:!bg-purple-500/20'
    },
    {
        id: "2",
        title: 'Long Event',
        start: new Date(y, m, d - 5),
        end: new Date(y, m, d - 2),
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] text-sky-500 !bg-sky-100 dark:!bg-sky-500/20'
    },
    {
        id: "3",
        title: 'Repeating Event',
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false,
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] text-yellow-500 !bg-yellow-100 dark:!bg-yellow-500/20'
    },
    {
        id: "4",
        title: 'Repeating Event',
        start: new Date(y, m, d + 4, 16, 0),
        allDay: false,
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] transition-all text-custom-500 !bg-custom-100 dark:!bg-custom-500/20'
    },
    {
        id: "5",
        title: 'Meeting',
        start: new Date(y, m, d, 10, 30),
        allDay: false,
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] text-green-500 !bg-green-100 dark:!bg-green-500/20'
    },
    {
        id: "6",
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false,
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] text-purple-500 !bg-purple-100 dark:!bg-purple-500/20'
    },
    {
        id: "7",
        title: 'Birthday Party',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false,
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] text-sky-500 !bg-sky-100 dark:!bg-sky-500/20'
    },
    {
        id: "8",
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29), url: 'http://google.com/',
        className: 'border-none rounded-md py-1.5 px-3 w-[100%] text-custom-500 !bg-custom-100 dark:!bg-custom-500/20'
    }
];

const CalenderCategories = [
    {
        id: "1",
        title: "My Event 1",
        dataClass: "border-none rounded-md py-1.5 px-3 w-[100%] transition-all text-custom-500 !bg-custom-100 dark:!bg-custom-500/20",
        className: "external-event fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event dark:focus:text-white dark:active:text-white active:text-white focus:ring active:ring btn dark:hover:text-white text-custom-500 bg-custom-100 hover:text-white hover:bg-custom-600 focus:bg-custom-600 focus:ring-custom-100 active:bg-custom-600 active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:focus:bg-custom-500 dark:active:bg-custom-500 dark:ring-custom-400/20"
    },
    {
        id: "2",
        title: "My Event 2",
        dataClass: "border-none rounded-md py-1.5 px-3 w-[100%] text-green-500 !bg-green-100 dark:!bg-green-500/20",
        className: "external-event fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event dark:focus:text-white dark:active:text-white active:text-white focus:ring active:ring btn text-green-500 bg-green-100 hover:text-white hover:bg-green-600 focus:bg-green-600 focus:ring-green-100 active:bg-green-600 active:ring-green-100 dark:bg-green-500/20 dark:text-green-4000"
    },
    {
        id: "3",
        title: "My Event 3",
        dataClass: "border-none rounded-md py-1.5 px-3 w-[100%] text-yellow-500 !bg-yellow-100 dark:!bg-yellow-500/20",
        className: "external-event fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event dark:focus:text-white dark:active:text-white active:text-white focus:ring active:ring btn dark:hover:text-white text-yellow-500 bg-yellow-100 hover:text-white hover:bg-yellow-600 focus:bg-yellow-600 focus:ring-yellow-100 active:bg-yellow-600 active:ring-yellow-100 dark:bg-yellow-500/20 dark:text-yellow-500 dark:hover:bg-yellow-500 dark:focus:bg-yellow-500 dark:active:bg-yellow-500 dark:ring-yellow-400/20"
    },
    {
        id: "4",
        title: "My Event 4",
        dataClass: "border-none rounded-md py-1.5 px-3 w-[100%] text-sky-500 !bg-sky-100 dark:!bg-sky-500/20",
        className: "external-event fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event dark:focus:text-white dark:active:text-white active:text-white focus:ring active:ring btn dark:hover:text-white text-sky-500 bg-sky-100 hover:text-white hover:bg-sky-600 focus:bg-sky-600 focus:ring-sky-100 active:bg-sky-600 active:ring-sky-100 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:focus:bg-sky-500 dark:active:bg-sky-500 dark:ring-sky-400/20"
    },
    {
        id: "5",
        title: "My Event 5",
        dataClass: "border-none rounded-md py-1.5 px-3 w-[100%] text-purple-500 !bg-purple-100 dark:!bg-purple-500/20",
        className: "external-event fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event dark:focus:text-white dark:active:text-white active:text-white focus:ring active:ring btn dark:hover:text-white text-purple-500 bg-purple-100 hover:text-white hover:bg-purple-600 focus:bg-purple-600 focus:ring-purple-100 active:bg-purple-600 active:ring-purple-100 dark:bg-purple-500/20 dark:text-purple-500 dark:hover:bg-purple-500 dark:focus:bg-purple-500 dark:active:bg-purple-500 dark:ring-purple-400/20"
    },
];

export { CalenderCategories, Events };