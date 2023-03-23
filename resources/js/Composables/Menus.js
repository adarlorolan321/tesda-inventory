import { ref } from "vue";

export function useMenu() {
    const menus = [
        {
            label: "Staff",
            route: "user.coaches.index",
            icon: "ti ti-ball-volleyball",
        },
        { label: "Parent", route: "user.parents.index", icon: "ti ti-user" },
        { label: "Players", route: "players.index", icon: "ti ti-user" },
        { label: "Enrolments", route: "enrolments.index", icon: "ti ti-user" },
        { label: "Payments", route: "payments.index", icon: "ti ti-user" },
        { label: "Waitlist", route: "waitlists.index", icon: "ti ti-user" },
        { label: "Trials", route: "trials.index", icon: "ti ti-user" },
        { label: "Orders", route: "orders.index", icon: "ti ti-user" },
        { label: "Messages", route: "messages.index", icon: "ti ti-user" },
        { label: "Merchandise", route: "merchandises.index",  icon: "ti ti-user", },

        {
            label: "Settings",
            route: "settings.*",
            icon: "ti ti-user",
            sub_menu: [
                { label: "Services",route: "settings.services.index", icon: "ti ti-smart-home",},
                { label: "Venue", route: "settings.venues.index", icon: "ti ti-home" },
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
