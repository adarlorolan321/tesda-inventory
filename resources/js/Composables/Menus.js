import { ref } from "vue";

export function useMenu() {
    const menus = [

        { label: "Dashboard", route: "dashboard", icon: "ti ti-dashboard", only: ["data", "params"], role:['Client','Admin']},
        { label: "Supplies", route: "user.supplies.index", icon: "ti ti-users", only: ["data", "params"], role:['Admin']},
        { label: "PPE", route: "user.ppes.index", icon: "ti ti-users", only: ["data", "params"], role:['Admin']},
        { label: "Semi Expandable", route: "user.semi_expandables.index", icon: "ti ti-users", only: ["data", "params"] ,role:['Admin']},
        { label: "Supplier", route: "user.suppliers.index", icon: "ti ti-users", only: ["data", "params"], role:['Admin'] },
       
    ];

    return {
        menus,
    };
}