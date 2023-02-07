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
    {
        icon: MdOutlinePolicy,
        name: "Policy Document",
        path: "policy-document",
        id: 4,
        children: [
            {
                name: "All Documents",
                path: "documents",
            }
        ]
    },
    {
        icon: TbMessages,
        name: "Messages",
        path: "messages",
        id: 5,
        children: [
            {
                name: "Send messages to Institution",
                path: "send",
            }
        ]
    },
    {
        icon: TbBuildingBank,
        name: "Institutions",
        path: "institutions",
        id: 6,
        children: [
            {
                name: "All Institution",
                path: "all",
            },
            {
                name: "Existing Institution",
                path: "existing",
            },
            {
                name: "New Institution",
                path: "new",
            },
            {
                name: "Renewal-All Institutions",
                path: "all-renewal",
            },
            {
                name: "Renewal-Existing Institutions",
                path: "existing-renewal",
            },
            {
                name: "Renewal-New Institutions",
                path: "new-renewal",
            },
            {
                name: "All Licensed Institutions",
                path: "all-licensed",
            },
            {
                name: "Licensed Institutions Sent to",
                path: "licensed-sent-to",
            },
        ]
    },
    {
        icon: RiBankCardFill,
        name: "Fees",
        path: "fees",
        id: 7
    },
    {
        icon: TbUserPlus,
        name: "Registered Users",
        path: "registered-users",
        id: 8
    },
    {
        icon: MdOutlineDocumentScanner,
        name: "Financials",
        path: "financials",
        id: 9
    },
    {
        icon: MdOutlineSettingsSuggest,
        name: "Settings",
        path: "settings",
        id: 10,
        children: [
            {
                name: "Manager Fiscal Years",
                path: "fiscal-years",
            },
            {
                name: "Form Notifications",
                path: "notifications",
            },
            {
                name: "Carousel Photos",
                path: "photos",
            }
        ]
    },
]