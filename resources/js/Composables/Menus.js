import { ref } from "vue";

export function useMenu() {
    const menus = [
        { label: 'Services', route: 'services.index', icon: 'ti ti-smart-home' },
        { label: 'Venue', route: 'venues.index', icon: 'ti ti-home' },
        { label: 'Coach/Staff', route: 'user.coach.index', icon: 'ti ti-ball-volleyball' },
        { label: 'Parent', route: 'user.parent.index', icon: 'ti ti-user' },
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