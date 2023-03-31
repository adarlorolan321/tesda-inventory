import { ref } from "vue";

export function useMenu() {
    const menus = [
        { label: "Supplies", route: "user.supplies.index", icon: "ti ti-users", only: ["data", "params"] },
       
    ];

    return {
        menus,
    };
}