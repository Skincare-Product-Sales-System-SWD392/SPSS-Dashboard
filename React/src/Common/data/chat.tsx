
// Images
import logoSm from "assets/images/logo-sm.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar7 from "assets/images/users/avatar-7.png";
import avatar8 from "assets/images/users/avatar-8.png";
import avatar10 from "assets/images/users/avatar-10.png";

import user1 from "assets/images/users/user-1.jpg";
import user2 from "assets/images/users/user-2.jpg";
import user3 from "assets/images/users/user-3.jpg";
import user4 from "assets/images/users/user-4.jpg";

import img2 from "assets/images/small/img-2.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img6 from "assets/images/small/img-6.jpg";

const ContactList = [
    { id: 1, roomId: 1, img: user2, name: "Aurore Maggio", designation: "React Developer" },
    { id: 2, roomId: 2, name: "Mark Walton", designation: "UI / UX Designer" },
    { id: 3, roomId: 3, img: avatar5, name: "Daniel Miller", designation: "ASP.Net Developer" },
    { id: 4, roomId: 4, img: user3, name: "Jaqueline Hammes", designation: "Angular Developer" },
    { id: 5, roomId: 5, img: avatar8, name: "Andrea Pesina", designation: "Laravel Developer" },
    { id: 6, roomId: 6, img: avatar10, name: "Bernard Pereira", designation: "Web Designer" },
    { id: 7, roomId: 7, img: user4, name: "William Jones", designation: "Project Manager" },
    { id: 8, roomId: 8, img: avatar10, name: "Bernard Pereira", designation: "Web Designer" },
    { id: 9, roomId: 9, img: user4, name: "Mary Segura", designation: "NodeJS Developer" },
    { id: 11, roomId: 11, name: "Pearl Johnson", designation: "Team Leader" },
];

const RecentChats = [
    {
        id: 1,
        roomId: 1,
        name: "Marie Prohaska",
        img: avatar5,
        status: "online",
        message: "I will purchase it for support",
        timestamp: "2 min ago",
        designation: "Angular Developer"
    },
    {
        id: 2,
        roomId: 2,
        name: "Kara Miller",
        img: user1,
        status: "offline",
        message: "Hey, how's it going?",
        timestamp: "02:57 PM",
        designation: "React Developer"
    },
    {
        id: 3,
        roomId: 3,
        name: "Mark Walton",
        img: avatar5,
        status: "online",
        message: "Hey, how's it going?",
        timestamp: "Yesterday",
        designation: "NextJS Developer"
    },
    {
        id: 4,
        roomId: 4,
        name: "Aurore Maggio",
        img: user2,
        status: "offline",
        designation: "React Developer"
    },
    {
        id: 5,
        roomId: 5,
        name: "Mark Walton ",
        status: "online",
        designation: "UI / UX Designer"
    },
    {
        id: 6,
        roomId: 6,
        name: "Daniel Miller",
        img: avatar5,
        status: "offline",
        designation: "ASP.Net Developer"
    },
    {
        id: 7,
        roomId: 7,
        name: "Jaqueline Hammes",
        img: user3,
        status: "offline",
        designation: "Angular Developer"
    },
    {
        id: 8,
        roomId: 8,
        name: "Andrea Pesina",
        img: avatar8,
        status: "offline",
        designation: "Laravel Developer"
    },
    {
        id: 9,
        roomId: 9,
        name: "Bernard Pereira",
        img: avatar10,
        status: "online",
        designation: "Web Designer"
    },
    {
        id: 10,
        roomId: 10,
        name: "William Jones",
        img: user4,
        status: "offline",
        designation: "Project Manager"
    }
];

const RecentFind = [
    { id: 1, topic: "What is Tailwind CSS, and what is Utility-First CSS?" },
    { id: 2, topic: "How to install and set up Tailwind CSS in a project?" },
    { id: 3, topic: "How to customize the configuration file in Tailwind CSS?" },
    { id: 4, topic: "How to use responsive variants in Tailwind CSS?" },
    { id: 5, topic: "Why is Tailwind faster?" },
    { id: 6, topic: "What problem does Tailwind CSS solve?" },
    { id: 7, topic: "How to apply background image with linear gradient using Tailwind CSS ?" },
];

const Documents = [
    { id: 1, img: img2, title: "Preview-01.jpg", size: "1.2 MB" },
    { id: 2, title: "changelog.txt", size: "140.62 KB" },
    { id: 3, title: "tailwick-design.psd", size: "97.59 MB" },
    { id: 4, img: logoSm, title: "logo-design.png", size: "0.123 KB" },
    { id: 5, title: "pattern.svg", size: "0.802 MB" },
    { id: 6, img: img6, title: "profile-bg.jpg", size: "33.49 MB" },
    { id: 7, title: "tailwick-design.psd", size: "97.59 MB" },
    { id: 8, title: "tailwick.zip", size: "35.89 MB" },
    { id: 9, title: "tailwick-design.psd", size: "97.59 MB" },
];

const ChatUser = [
    {
        id: 1,
        roomId: 1,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 4, msg: "Images", attachments: [{ id: 1, img: img3 }, { id: 2, img: img2 }, { id: 3, img: img5 }], img: avatar7, isSender: false, },
            { id: 5, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 6, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
        ]

    },
    {
        id: 2,
        roomId: 2,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Images", attachments: [{ id: 1, img: img3 }, { id: 2, img: img2 }, { id: 3, img: img5 }], img: avatar7, isSender: false, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 5, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 6, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
        ]
    },
    {
        id: 3,
        roomId: 3,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 5, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
        ]
    },
    {
        id: 4,
        roomId: 4,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Images", attachments: [{ id: 1, img: img3 }, { id: 2, img: img2 }, { id: 3, img: img5 }], img: avatar7, isSender: false, },
            { id: 3, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 4, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 5, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
        ]
    },
    {
        id: 5,
        roomId: 5,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 5, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
        ]
    },
    {
        id: 6,
        roomId: 6,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 3, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
            { id: 4, msg: "Images", attachments: [{ id: 1, img: img3 }, { id: 2, img: img2 }, { id: 3, img: img5 }], img: avatar7, isSender: false, },
        ]
    },
    {
        id: 7,
        roomId: 7,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 5, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
            { id: 6, msg: "Images", attachments: [{ id: 1, img: img3 }, { id: 2, img: img2 }, { id: 3, img: img5 }], img: avatar7, isSender: false, },
        ]
    },
    {
        id: 8,
        roomId: 8,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 5, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
        ]
    },
    {
        id: 9,
        roomId: 9,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
            { id: 5, msg: "Images", attachments: [{ id: 1, img: img3 }, { id: 2, img: img2 }, { id: 3, img: img5 }], img: avatar7, isSender: false, },
        ]
    },
    {
        id: 10,
        roomId: 10,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Good morning, How are you? What about our next meeting?", img: avatar7, isSender: true, },
            { id: 3, msg: "Images", attachments: [{ id: 1, img: img3 }, { id: 2, img: img2 }, { id: 3, img: img5 }], img: avatar7, isSender: false, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 5, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
        ]
    },
    {
        id: 11,
        roomId: 11,
        usermessages: [
            { id: 1, msg: "Good morning 😊", img: avatar7, isSender: false },
            { id: 2, msg: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.", img: avatar7, isSender: true, },
            { id: 3, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: false, },
            { id: 4, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM", img: avatar7, isSender: true, },
        ]
    }
];

export { ContactList, RecentChats, RecentFind, Documents, ChatUser };