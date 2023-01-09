export const clientPages = [
    {
        icon: null,
        name: "My Application",
        path: "applications",
        id: 1
    },
    {
        icon: null,
        name: "Document Library",
        path: "document-library",
        id: 2
    },
    {
        icon: null,
        name: "Messages",
        path: "messages",
        id: 3
    },{
        icon: null,
        name: "Payment Information",
        path: "payments",
        id: 4
    },{
        icon: null,
        name: "Application Progress",
        path: "application-progress",
        id: 5
    }
]

export const adminPages = [
    {
        icon: null,
        name: "Home",
        path: "home",
        id: 1,
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
        icon: null,
        name: "Admin Utilies",
        path: "admin-utilities",
        id: 2,
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
        icon: null,
        name: "Policy Document",
        path: "policy-document",
        id: 3,
        children: [
            {
                name: "All Documents",
                path: "documents",
            }
        ]
    },
    {
        icon: null,
        name: "Messages",
        path: "messages",
        id: 4,
        children: [
            {
                name: "Send messages to Institution",
                path: "send",
            }
        ]
    },
    {
        icon: null,
        name: "Institutions",
        path: "institutions",
        id: 5,
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
        icon: null,
        name: "Fees",
        path: "fees",
        id: 6
    },
    {
        icon: null,
        name: "Registered Users",
        path: "registered-users",
        id: 7
    },
    {
        icon: null,
        name: "Financials",
        path: "financials",
        id: 8
    },
    {
        icon: null,
        name: "Settings",
        path: "settings",
        id: 9,
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