import{A as r}from"./AdminLayout-39630ad4.js";import{_ as u,o as l,c as _,a as t,g as s,t as m,b as n,w as o,n as c,F as d,r as h}from"./app-a9bce4c1.js";const f={layout:r,data(){return{route_name:this.getRoutName(route().current())}},methods:{getRoutName(e){switch(e){case"account.index":return"Account";case"account.security":return"Security"}}}},p={class:"fw-bold py-3 mb-4"},v=t("span",{class:"text-muted fw-light"},"Account Settings /",-1),x={class:"nav nav-pills flex-column flex-md-row mb-4"},y={class:"nav-item"},g=t("i",{class:"ti-xs ti ti-users me-1"},null,-1),k={class:"nav-item"},w=t("i",{class:"ti-xs ti ti-lock me-1"},null,-1);function N(e,A,b,S,i,B){const a=h("inertia-link");return l(),_(d,null,[t("h4",p,[v,s(m(i.route_name),1)]),t("ul",x,[t("li",y,[n(a,{class:c(["nav-link",{active:e.route().current("account.index")}]),href:e.route("account.index")},{default:o(()=>[g,s(" Account")]),_:1},8,["href","class"])]),t("li",k,[n(a,{class:c(["nav-link",{active:e.route().current("account.security")}]),href:e.route("account.security")},{default:o(()=>[w,s(" Security")]),_:1},8,["href","class"])])])],64)}const $=u(f,[["render",N]]);export{$ as default};
