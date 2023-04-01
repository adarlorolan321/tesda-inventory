import{_ as b}from"./logo-06b3879b.js";import{l as y,o,c as n,b as e,F as m,r as v,u as w,t as r,a as _,f as h,x as k,p as x,O as S,g as j,n as i,d as L}from"./app-e0026ac4.js";function A(d){return new Promise(function(c,u){let s=!1,t=document.querySelector('script[src="'+d+'"]');if(!t)t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=d,s=!0;else if(t.hasAttribute("data-loaded")){c(t);return}t.addEventListener("error",u),t.addEventListener("abort",u),t.addEventListener("load",function(){t.setAttribute("data-loaded",!0),c(t)}),s&&document.head.appendChild(t)})}function C(){return{menus:[{label:"Dashboard",route:"classes.sessions.index",icon:"ti ti-dashboard",only:["data","params"]},{label:"Supplies",route:"user.supplies.index",icon:"ti ti-users",only:["data","params"]},{label:"Semi Expandable",route:"email_template.create",icon:"ti ti-users",only:["data","params"]},{label:"Supplier",route:"user.suppliers.index",icon:"ti ti-users",only:["data","params"]}]}}const E={class:"layout-wrapper layout-content-navbar"},$={class:"layout-container"},N={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},V=x('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><img width="60px" height="35px" src="'+b+'" alt=""><span class="app-brand-text demo menu-text fw-bold">Tesda</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),B={class:"menu-inner py-1"},M=["data-i18n"],O={href:"javascript:void(0);",class:"menu-link menu-toggle"},D=["data-i18n"],F={key:0,class:"menu-sub"},P=["data-i18n"],T={class:"layout-page"},q={class:"layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme",id:"layout-navbar"},z=e("div",{class:"layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"},[e("a",{class:"nav-item nav-link px-0 me-xl-4",href:"javascript:void(0)"},[e("i",{class:"ti ti-menu-2 ti-sm"})])],-1),H={class:"navbar-nav-right d-flex align-items-center",id:"navbar-collapse"},G=e("div",{class:"navbar-nav align-items-center"},[e("a",{class:"nav-link style-switcher-toggle hide-arrow",href:"javascript:void(0);"},[e("i",{class:"ti ti-sm"})])],-1),I={class:"navbar-nav flex-row align-items-center ms-auto"},J={class:"nav-item navbar-dropdown dropdown-user dropdown"},K={class:"nav-link dropdown-toggle hide-arrow",href:"javascript:void(0);","data-bs-toggle":"dropdown"},Q={class:"avatar avatar-online"},R=["src"],U={class:"dropdown-menu dropdown-menu-end"},W={class:"dropdown-item",href:"#"},X={class:"d-flex"},Y={class:"flex-shrink-0 me-3"},Z={class:"avatar avatar-online"},ee=["src"],se={class:"flex-grow-1"},te={class:"fw-semibold d-block"},ae={class:"text-muted"},oe=e("li",null,[e("div",{class:"dropdown-divider"})],-1),ne=e("i",{class:"ti ti-user-check me-2 ti-sm"},null,-1),ie=e("span",{class:"align-middle"},"My Profile",-1),le=e("li",null,[e("div",{class:"dropdown-divider"})],-1),re=e("i",{class:"ti ti-logout me-2 ti-sm"},null,-1),de=e("span",{class:"align-middle"},"Log Out",-1),ce=[re,de],ue={class:"content-wrapper"},pe={class:"container-fluid flex-grow-1 container-p-y"},me=e("div",{class:"content-backdrop fade"},null,-1),_e=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),he=e("div",{class:"drag-target"},null,-1),ve={__name:"AdminLayout",setup(d){const{menus:c}=C();y(()=>{setTimeout(()=>{A("/assets/js/main.js")},1e3)});const u=()=>{S.post(route("logout"))};return(s,t)=>{const p=j("inertia-link");return o(),n("div",E,[e("div",$,[e("aside",N,[V,e("ul",B,[(o(!0),n(m,null,v(w(c),(a,g)=>(o(),n(m,{key:"menu-"+g},[a.sub_menu?(o(),n("li",{key:1,class:i(["menu-item",{"active open":s.route().current(a.route)}])},[e("a",O,[e("i",{class:i(["menu-icon tf-icons",a.icon])},null,2),e("div",{"data-i18n":a.label},r(a.label),9,D)]),a.sub_menu?(o(),n("ul",F,[(o(!0),n(m,null,v(a.sub_menu,(l,f)=>(o(),n("li",{key:"sub-menu-"+f,class:i(["menu-item",{active:s.route().current(l.route)}])},[_(p,{href:s.route(l.route),class:i(["menu-link",{"menu-toggle":l.sub_menu}]),only:["data","params"]},{default:h(()=>[e("i",{class:i(["menu-icon tf-icons",l.icon])},null,2),e("div",{"data-i18n":l.label},r(l.label),9,P)]),_:2},1032,["href","class"])],2))),128))])):L("",!0)],2)):(o(),n("li",{key:0,class:i(["menu-item",{active:s.route().current(a.route)||s.route().current(a.route.replace(/[^.]*$/,"*"))}])},[_(p,{href:s.route(a.route),class:"menu-link",only:["data","params"]},{default:h(()=>[e("i",{class:i(["menu-icon tf-icons",a.icon])},null,2),e("div",{"data-i18n":a.label},r(a.label),9,M)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",T,[e("nav",q,[z,e("div",H,[G,e("ul",I,[e("li",J,[e("a",K,[e("div",Q,[e("img",{src:s.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,R)])]),e("ul",U,[e("li",null,[e("a",W,[e("div",X,[e("div",Y,[e("div",Z,[e("img",{src:s.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,ee)])]),e("div",se,[e("span",te,r(s.$page.props.auth.user.name),1),e("small",ae,r(s.$page.props.auth.user.role),1)])])])]),oe,e("li",null,[_(p,{class:"dropdown-item",href:"/user/profile"},{default:h(()=>[ne,ie]),_:1})]),le,e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:u},ce)])])])])])]),e("div",ue,[e("div",pe,[k(s.$slots,"default")]),me])])]),_e,he])}}},be=ve;export{be as A};
