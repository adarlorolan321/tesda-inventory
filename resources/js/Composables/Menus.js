import { ref } from "vue";

export function useMenu() {
    const menus = [

        { label: "Dashboard", route: "dashboard", icon: "fas fa-dashboard", only: ["data", "params"], role:['Client','Admin']},
        { label: "Supplies", route: "user.supplies.index", icon: "fas fa-box", only: ["data", "params"], role:['Admin']},
        { label: "PPE", route: "user.ppes.index", icon: "fas fa-hard-hat", only: ["data", "params"], role:['Admin']},
        { label: "Semi Expendable", route: "user.semi_expandables.index", icon: "fas fa-recycle", only: ["data", "params"] ,role:['Admin']},
        { label: "Supplier", route: "user.suppliers.index", icon: "fas fa-truck", only: ["data", "params"], role:['Admin'] },
        { label: "Stock History", route: "user.supply_histories.index", icon: "fas fa-history", only: ["data", "params"], role:['Admin'] },
        { label: "Employees", route: "user.users.index", icon: "fas fa-users", only: ["data", "params"], role:['Admin'] },
       
    ];

    return {
        menus,
    };
}