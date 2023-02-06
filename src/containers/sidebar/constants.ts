import {RxDashboard} from 'react-icons/rx'
import {RiAdminLine, RiHome3Line, RiBankCardFill} from 'react-icons/ri'
import {MdOutlinePolicy, MdOutlineSettingsSuggest, MdOutlineDocumentScanner} from 'react-icons/md'
import {TbMessages, TbBuildingBank, TbUserPlus} from 'react-icons/tb'

export const clientPages = [
    {
        name: "My Application",
        path: "applications",
        id: 1
    },
    {
        name: "Document Library",
        path: "document-library",
        id: 2
    },
    {
        name: "Messages",
        path: "messages",
        id: 3
    },{
        name: "Payment Information",
        path: "payments",
        id: 4
    },{
        name: "Application Progress",
        path: "application-progress",
        id: 5
    }
]

export const adminPages = [
     {
        icon: RiHome3Line,
        name: "Home",
        path: "home",
        id: 1,
    },
    {
        icon: RxDashboard,
        name: "Application",
        path: "application",
        id: 2,
        children: [
            {
                name: "All Application",
                path: "all",
            },
            {
                name: "All Application - USSD Only",
                path: "all-ussd",
            },
            {
                name: "USSD Applications",
                path: "ussd",
            },
            {
                name: "All Application - Renewal",
                path: "all-renewal",
            },
            {
                name: "Pending Approval - Renewal",
                path: "pending-renewal",
            },
            {
                name: "Approved Applications",
                path: "approved",
            },
            {
                name: "Declined Applications",
                path: "declined",
            },
            {
                name: "Paid Applications",
                path: "paid",
            },
            {
                name: "Unpaid Applications",
                path: "unpaid",
            }
        ]
    },
    {
        icon: RiAdminLine,
        name: "Admin Utilies",
        path: "admin-utilities",
        id: 3,
        children: [
            {
                name: "Create & Access Accounts",
                path: "accounts",
            },
            {
                name: "Super Admins",
                path: "super-admins",
            },
            {
                name: "Admins",
                path: "admins",
            },
            {
                name: "Standard Users",
                path: "standard-users",
            },
            {
                name: "Guest Users",
                path: "guest-users",
            },
            {
                name: "Active Users",
                path: "active-users",
            },
            {
                name: "Inactive Users",
                path: "inactive-users",
            },
        ]
    },
]