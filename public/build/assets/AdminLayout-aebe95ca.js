<<<<<<<< HEAD:public/build/assets/AdminLayout-c0429522.js
import{s as x,c as s,a as e,F as m,h as p,u as _,y as w,e as y,t as c,d as f,o as n,n as l,b as v,w as h,f as k,r as L}from"./app-a321dac8.js";function S(r){return new Promise(function(d,i){let u=!1,t=document.querySelector('script[src="'+r+'"]');if(!t)t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=r,u=!0;else if(t.hasAttribute("data-loaded")){d(t);return}t.addEventListener("error",i),t.addEventListener("abort",i),t.addEventListener("load",function(){t.setAttribute("data-loaded",!0),d(t)}),u&&document.head.appendChild(t)})}function C(){return{menus:[{label:"Services",route:"services.index",icon:"ti ti-smart-home"},{label:"Venue",route:"venues.index",icon:"ti ti-home"},{label:"Coach/Staff",route:"user.coach.index",icon:"ti ti-ball-volleyball"},{label:"Parent",route:"user.parent.index",icon:"ti ti-user"},{label:"Players",route:"user.parent.index",icon:"ti ti-user"},{label:"Staff",route:"user.parent.index",icon:"ti ti-user"},{label:"Enrolments",route:"user.parent.index",icon:"ti ti-user"},{label:"Payments",route:"user.parent.index",icon:"ti ti-user"},{label:"Waitlist",route:"user.parent.index",icon:"ti ti-user"},{label:"Trials",route:"user.parent.index",icon:"ti ti-user"},{label:"Orders",route:"user.parent.index",icon:"ti ti-user"},{label:"Messages",route:"user.parent.index",icon:"ti ti-user"},{label:"Merchandise",route:"user.parent.index",icon:"ti ti-user"},{label:"Settings",route:"user.parent.index",icon:"ti ti-user",sub_menu:[{label:"Organisation",route:"user.coach.index",icon:"ti ti-users"},{label:"Email Templates",route:"user.parent.index",icon:"ti ti-users"},{label:"Embed Codes",route:"user.parent.index",icon:"ti ti-users"},{label:"Locations",route:"user.parent.index",icon:"ti ti-users"},{label:"Services",route:"user.parent.index",icon:"ti ti-users"},{label:"Coupons",route:"user.parent.index",icon:"ti ti-users"}]}]}}const M={class:"layout-wrapper layout-content-navbar"},V={class:"layout-container"},j={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},E=f('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Vuexy</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),A={class:"menu-inner py-1"},P=["data-i18n"],B={href:"javascript:void(0);",class:"menu-link menu-toggle"},F=["data-i18n"],N={key:0,class:"menu-sub"},D=["data-i18n"],H={class:"layout-page"},T=f('<nav class="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar"><div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"><a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)"><i class="ti ti-menu-2 ti-sm"></i></a></div><div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse"><div class="navbar-nav align-items-center"><a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);"><i class="ti ti-sm"></i></a></div><ul class="navbar-nav flex-row align-items-center ms-auto"><li class="nav-item navbar-dropdown dropdown-user dropdown"><a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></a><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="#"><div class="d-flex"><div class="flex-shrink-0 me-3"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></div><div class="flex-grow-1"><span class="fw-semibold d-block">John Doe</span><small class="text-muted">Admin</small></div></div></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-user-check me-2 ti-sm"></i><span class="align-middle">My Profile</span></a></li><li><a class="dropdown-item" href="#"><i class="ti ti-settings me-2 ti-sm"></i><span class="align-middle">Settings</span></a></li><li><a class="dropdown-item" href="#"><span class="d-flex align-items-center align-middle"><i class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i><span class="flex-grow-1 align-middle">Billing</span><span class="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span></span></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-logout me-2 ti-sm"></i><span class="align-middle">Log Out</span></a></li></ul></li></ul></div></nav>',1),Z={class:"content-wrapper"},O={class:"container-fluid flex-grow-1 container-p-y"},q={class:"content-footer footer bg-footer-theme"},z={class:"container-fluid"},J={class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"},W=e("a",{href:"https://pixinvent.com",target:"_blank",class:"fw-semibold"},"Pixinvent",-1),Y=e("div",null,[e("a",{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/",target:"_blank",class:"footer-link me-4"},"Documentation")],-1),$=e("div",{class:"content-backdrop fade"},null,-1),G=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),I=e("div",{class:"drag-target"},null,-1),K={__name:"AdminLayout",setup(r){const{menus:d}=C();return x(()=>{setTimeout(()=>{S("/assets/js/main.js")},1e3)}),(i,u)=>{const t=L("inertia-link");return n(),s("div",M,[e("div",V,[e("aside",j,[E,e("ul",A,[(n(!0),s(m,null,p(_(d),(a,b)=>(n(),s(m,{key:"menu-"+b},[a.sub_menu?(n(),s("li",{key:1,class:l(["menu-item",{active:i.route().current(a.route)}])},[e("a",B,[e("i",{class:l(["menu-icon tf-icons",a.icon])},null,2),e("div",{"data-i18n":a.label},c(a.label),9,F)]),a.sub_menu?(n(),s("ul",N,[(n(!0),s(m,null,p(a.sub_menu,(o,g)=>(n(),s("li",{key:"sub-menu-"+g,class:"menu-item"},[v(t,{href:i.route(o.route),class:l(["menu-link",{"menu-toggle":o.sub_menu}])},{default:h(()=>[e("i",{class:l(["menu-icon tf-icons",o.icon])},null,2),e("div",{"data-i18n":o.label},c(o.label),9,D)]),_:2},1032,["href","class"])]))),128))])):k("",!0)],2)):(n(),s("li",{key:0,class:l(["menu-item",{active:i.route().current(a.route)}])},[v(t,{href:i.route(a.route),class:"menu-link"},{default:h(()=>[e("i",{class:l(["menu-icon tf-icons",a.icon])},null,2),e("div",{"data-i18n":a.label},c(a.label),9,P)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",H,[T,e("div",Z,[e("div",O,[w(i.$slots,"default")]),e("footer",q,[e("div",z,[e("div",J,[e("div",null,[y(" © "+c(new Date().getFullYear())+" , made with ❤️ by ",1),W]),Y])])]),$])])]),G,I])}}},R=K;export{R as A};
========
import{s as x,c as s,a as e,F as m,h as p,u as _,y as w,e as y,t as c,d as f,o as n,n as l,b as v,w as h,f as k,r as L}from"./app-9a4eb566.js";function S(r){return new Promise(function(d,i){let u=!1,t=document.querySelector('script[src="'+r+'"]');if(!t)t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=r,u=!0;else if(t.hasAttribute("data-loaded")){d(t);return}t.addEventListener("error",i),t.addEventListener("abort",i),t.addEventListener("load",function(){t.setAttribute("data-loaded",!0),d(t)}),u&&document.head.appendChild(t)})}function C(){return{menus:[{label:"Services",route:"services.index",icon:"ti ti-smart-home"},{label:"Venue",route:"venues.index",icon:"ti ti-home"},{label:"Coach/Staff",route:"user.coach.index",icon:"ti ti-ball-volleyball"},{label:"Parent",route:"user.parent.index",icon:"ti ti-user"},{label:"Players",route:"user.parent.index",icon:"ti ti-user"},{label:"Staff",route:"user.parent.index",icon:"ti ti-user"},{label:"Enrolments",route:"user.parent.index",icon:"ti ti-user"},{label:"Payments",route:"user.parent.index",icon:"ti ti-user"},{label:"Waitlist",route:"user.parent.index",icon:"ti ti-user"},{label:"Trials",route:"user.parent.index",icon:"ti ti-user"},{label:"Orders",route:"user.parent.index",icon:"ti ti-user"},{label:"Messages",route:"user.parent.index",icon:"ti ti-user"},{label:"Merchandise",route:"user.parent.index",icon:"ti ti-user"},{label:"Settings",route:"user.parent.index",icon:"ti ti-user",sub_menu:[{label:"Organisation",route:"user.coach.index",icon:"ti ti-users"},{label:"Email Templates",route:"user.parent.index",icon:"ti ti-users"},{label:"Embed Codes",route:"user.parent.index",icon:"ti ti-users"},{label:"Locations",route:"user.parent.index",icon:"ti ti-users"},{label:"Services",route:"user.parent.index",icon:"ti ti-users"},{label:"Coupons",route:"user.parent.index",icon:"ti ti-users"}]}]}}const M={class:"layout-wrapper layout-content-navbar"},V={class:"layout-container"},j={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},E=f('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Vuexy</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),A={class:"menu-inner py-1"},P=["data-i18n"],B={href:"javascript:void(0);",class:"menu-link menu-toggle"},F=["data-i18n"],N={key:0,class:"menu-sub"},D=["data-i18n"],H={class:"layout-page"},T=f('<nav class="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar"><div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"><a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)"><i class="ti ti-menu-2 ti-sm"></i></a></div><div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse"><div class="navbar-nav align-items-center"><a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);"><i class="ti ti-sm"></i></a></div><ul class="navbar-nav flex-row align-items-center ms-auto"><li class="nav-item navbar-dropdown dropdown-user dropdown"><a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></a><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="#"><div class="d-flex"><div class="flex-shrink-0 me-3"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></div><div class="flex-grow-1"><span class="fw-semibold d-block">John Doe</span><small class="text-muted">Admin</small></div></div></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-user-check me-2 ti-sm"></i><span class="align-middle">My Profile</span></a></li><li><a class="dropdown-item" href="#"><i class="ti ti-settings me-2 ti-sm"></i><span class="align-middle">Settings</span></a></li><li><a class="dropdown-item" href="#"><span class="d-flex align-items-center align-middle"><i class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i><span class="flex-grow-1 align-middle">Billing</span><span class="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span></span></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-logout me-2 ti-sm"></i><span class="align-middle">Log Out</span></a></li></ul></li></ul></div></nav>',1),Z={class:"content-wrapper"},O={class:"container-fluid flex-grow-1 container-p-y"},q={class:"content-footer footer bg-footer-theme"},z={class:"container-fluid"},J={class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"},W=e("a",{href:"https://pixinvent.com",target:"_blank",class:"fw-semibold"},"Pixinvent",-1),Y=e("div",null,[e("a",{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/",target:"_blank",class:"footer-link me-4"},"Documentation")],-1),$=e("div",{class:"content-backdrop fade"},null,-1),G=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),I=e("div",{class:"drag-target"},null,-1),K={__name:"AdminLayout",setup(r){const{menus:d}=C();return x(()=>{setTimeout(()=>{S("/assets/js/main.js")},1e3)}),(i,u)=>{const t=L("inertia-link");return n(),s("div",M,[e("div",V,[e("aside",j,[E,e("ul",A,[(n(!0),s(m,null,p(_(d),(a,b)=>(n(),s(m,{key:"menu-"+b},[a.sub_menu?(n(),s("li",{key:1,class:l(["menu-item",{active:i.route().current(a.route)}])},[e("a",B,[e("i",{class:l(["menu-icon tf-icons",a.icon])},null,2),e("div",{"data-i18n":a.label},c(a.label),9,F)]),a.sub_menu?(n(),s("ul",N,[(n(!0),s(m,null,p(a.sub_menu,(o,g)=>(n(),s("li",{key:"sub-menu-"+g,class:"menu-item"},[v(t,{href:i.route(o.route),class:l(["menu-link",{"menu-toggle":o.sub_menu}])},{default:h(()=>[e("i",{class:l(["menu-icon tf-icons",o.icon])},null,2),e("div",{"data-i18n":o.label},c(o.label),9,D)]),_:2},1032,["href","class"])]))),128))])):k("",!0)],2)):(n(),s("li",{key:0,class:l(["menu-item",{active:i.route().current(a.route)}])},[v(t,{href:i.route(a.route),class:"menu-link"},{default:h(()=>[e("i",{class:l(["menu-icon tf-icons",a.icon])},null,2),e("div",{"data-i18n":a.label},c(a.label),9,P)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",H,[T,e("div",Z,[e("div",O,[w(i.$slots,"default")]),e("footer",q,[e("div",z,[e("div",J,[e("div",null,[y(" © "+c(new Date().getFullYear())+" , made with ❤️ by ",1),W]),Y])])]),$])])]),G,I])}}},R=K;export{R as A};
>>>>>>>> 12f5e1006df4a2b6fc3f670ed5d2650a63e440df:public/build/assets/AdminLayout-aebe95ca.js
