import { ref } from "vue";

export function useMenu() {
    const menus = [
        { label: "Staff", route: "user.coaches.index", icon: "ti ti-users", only: ["data", "params"] },
        { label: "Class", route: "classes.index", icon: "ti ti-users", only: ["data", "params"] },
        { label: "Parents", route: "user.parents.index", icon: "ti ti-user", only: ["data", "params"] },
        { label: "Players", route: "students.index", icon: "ti ti-ball-tennis", only: ["data", "params"] },
        { label: "Enrolments", route: "enrolments.index", icon: "ti ti-file-pencil", only: ["data", "params"] },
        { label: "Payments", route: "payments.index", icon: "ti ti-cash-banknote", only: ["data", "params"] },
        { label: "Waitlist", route: "waitlists.index", icon: "ti ti-clock", only: ["data", "params"] },
        { label: "Trials", route: "trials.index", icon: "ti ti-clipboard", only: ["data", "params"] },
        { label: "Orders", route: "orders.index", icon: "ti ti-shopping-cart", only: ["data", "params"] },
        { label: "Messages", route: "messages.index", icon: "ti ti-message-2", only: ["data", "params"] },
        { label: "Merchandise", route: "merchandises.index", icon: "ti ti-building-store", only: ["data", "params"] },

        {
            label: "Settings",
            route: "settings.*",
            icon: "ti ti-settings",
            sub_menu: [
                { label: "Services", route: "settings.services.index", icon: "ti ti-smart-home", only: ["data", "params"] },
                { label: "Venues", route: "settings.venues.index", icon: "ti ti-home", only: ["data", "params"] },
                // {
                //     label: "Embed Codes",
                //     route: "user.parent.index",
                //     icon: "ti ti-users",
                // },
                // {
                //     label: "Locations",
                //     route: "user.parent.index",
                //     icon: "ti ti-users",
                // },
                // {
                //     label: "Services",
                //     route: "user.parent.index",
                //     icon: "ti ti-users",
                // },
                // {
                //     label: "Coupons",
                //     route: "user.parent.index",
                //     icon: "ti ti-users",
                // },
            ],
        },
        // {
        //     label: 'User', route: 'users.*', icon: 'ti ti-users',
        //     sub_menu: [
        //         {label: 'Coach', route: 'user.coach', icon: 'ti ti-users'},
        //         {label: 'Staff', route: 'user.staff', icon: 'ti ti-users'},
        //         {label: 'Parent', route: 'user.parent', icon: 'ti ti-users'},
        //         {label: 'Student', route: 'user.student', icon: 'ti ti-users'},
        //     ]
        // },
    ];

    return {
        menus,
    };
}