import{A as r}from"./AdminLayout-87275c4b.js";import{_ as l,b as u,d as m,f as t,i as s,t as _,e as n,k as o,n as c,F as d,l as f}from"./app-2ee86258.js";import"./logo-06b3879b.js";const h={layout:r,data(){return{route_name:this.getRoutName(route().current())}},methods:{getRoutName(e){switch(e){case"account.index":return"Account";case"account.security":return"Security"}}}},p={class:"fw-bold py-3 mb-4"},v=t("span",{class:"text-muted fw-light"},"Account Settings /",-1),x={class:"nav nav-pills flex-column flex-md-row mb-4"},y={class:"nav-item"},k=t("i",{class:"ti-xs ti ti-users me-1"},null,-1),g={class:"nav-item"},N=t("i",{class:"ti-xs ti ti-lock me-1"},null,-1);function w(e,A,b,S,i,B){const a=f("inertia-link");return u(),m(d,null,[t("h4",p,[v,s(_(i.route_name),1)]),t("ul",x,[t("li",y,[n(a,{class:c(["nav-link",{active:e.route().current("account.index")}]),href:e.route("account.index")},{default:o(()=>[k,s(" Account")]),_:1},8,["href","class"])]),t("li",g,[n(a,{class:c(["nav-link",{active:e.route().current("account.security")}]),href:e.route("account.security")},{default:o(()=>[N,s(" Security")]),_:1},8,["href","class"])])])],64)}const F=l(h,[["render",w]]);export{F as default};
