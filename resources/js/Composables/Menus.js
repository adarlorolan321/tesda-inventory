import { ref } from "vue";

export function useMenu() {
    const menus = [
        { label: "Dashboard", route: "classes.sessions.index", icon: "ti ti-dashboard", only: ["data", "params"] },
        { label: "Office Supplies", route: "user.supplies.index", icon: "ti ti-users", only: ["data", "params"] },
        { label: "PPE's", route: "user.ppes.index", icon: "ti ti-users", only: ["data", "params"] },
        { label: "Semi Expandable", route: "email_template.create", icon: "ti ti-users", only: ["data", "params"] },
        { label: "Supplier", route: "user.suppliers.index", icon: "ti ti-users", only: ["data", "params"] },
       
    ];

    return {
        menus,
    };
}