import { ref } from "vue";

export function useMenu() {
    const menus = [
        {
            label: "Services",
            route: "services.index",
            icon: "ti ti-smart-home",
        },
        { label: "Venue", route: "venues.index", icon: "ti ti-home" },
        {
            label: "Coach/Staff",
            route: "user.coach.index",
            icon: "ti ti-ball-volleyball",
        },
        { label: "Parent", route: "user.parent.index", icon: "ti ti-user" },
        { label: "Players", route: "user.parent.index", icon: "ti ti-user" },
        { label: "Staff", route: "user.parent.index", icon: "ti ti-user" },
        { label: "Enrolments", route: "user.parent.index", icon: "ti ti-user" },
        { label: "Payments", route: "user.parent.index", icon: "ti ti-user" },
        { label: "Waitlist", route: "user.parent.index", icon: "ti ti-user" },

        { label: "Trials", route: "user.parent.index", icon: "ti ti-user" },
        { label: "Orders", route: "user.parent.index", icon: "ti ti-user" },
        { label: "Messages", route: "user.parent.index", icon: "ti ti-user" },
        {
            label: "Merchandise",
            route: "user.parent.index",
            icon: "ti ti-user",
        },
      
        {
            label: "Settings",
            route: "user.parent.index",
            icon: "ti ti-user",
            sub_menu: [
                { label: "Organisation", route: "user.coach.index", icon: "ti ti-users" },
                { label: "Email Templates", route: "user.parent.index", icon: "ti ti-users" },
                {
                    label: "Embed Codes",
                    route: "user.parent.index",
                    icon: "ti ti-users",
                },
                {
                    label: "Locations",
                    route: "user.parent.index",
                    icon: "ti ti-users",
                },
                {
                    label: "Services",
                    route: "user.parent.index",
                    icon: "ti ti-users",
                },
                {
                    label: "Coupons",
                    route: "user.parent.index",
                    icon: "ti ti-users",
                },
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
