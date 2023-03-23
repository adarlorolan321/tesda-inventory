import{q as x,c as i,a as e,F as p,h as v,u as w,x as y,e as k,t as u,d as f,O as L,o as n,n as l,b as h,w as g,f as S,r as j}from"./app-b5923dd1.js";function M(d){return new Promise(function(r,c){let a=!1,t=document.querySelector('script[src="'+d+'"]');if(!t)t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=d,a=!0;else if(t.hasAttribute("data-loaded")){r(t);return}t.addEventListener("error",c),t.addEventListener("abort",c),t.addEventListener("load",function(){t.setAttribute("data-loaded",!0),r(t)}),a&&document.head.appendChild(t)})}function V(){return{menus:[{label:"Staff",route:"user.coaches.index",icon:"ti ti-ball-volleyball"},{label:"Parents",route:"user.parents.index",icon:"ti ti-user"},{label:"Players",route:"players.index",icon:"ti ti-user"},{label:"Enrolments",route:"enrolments.index",icon:"ti ti-user"},{label:"Payments",route:"payments.index",icon:"ti ti-user"},{label:"Waitlist",route:"waitlists.index",icon:"ti ti-user"},{label:"Trials",route:"trials.index",icon:"ti ti-user"},{label:"Orders",route:"orders.index",icon:"ti ti-user"},{label:"Messages",route:"messages.index",icon:"ti ti-user"},{label:"Merchandise",route:"merchandises.index",icon:"ti ti-user"},{label:"Settings",route:"settings.*",icon:"ti ti-user",sub_menu:[{label:"Services",route:"settings.services.index",icon:"ti ti-smart-home"},{label:"Venues",route:"settings.venues.index",icon:"ti ti-home"}]}]}}const C={class:"layout-wrapper layout-content-navbar"},A={class:"layout-container"},E={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},P=f('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Vuexy</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),B={class:"menu-inner py-1"},F=["data-i18n"],N={href:"javascript:void(0);",class:"menu-link menu-toggle"},D=["data-i18n"],H={key:0,class:"menu-sub"},O=["data-i18n"],Z={class:"layout-page"},T=e("div",{class:"layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"},[e("a",{class:"nav-item nav-link px-0 me-xl-4",href:"javascript:void(0)"},[e("i",{class:"ti ti-menu-2 ti-sm"})])],-1),q=e("div",{class:"navbar-nav align-items-center"},[e("a",{class:"nav-link style-switcher-toggle hide-arrow",href:"javascript:void(0);"},[e("i",{class:"ti ti-sm"})])],-1),z=e("a",{class:"nav-link dropdown-toggle hide-arrow",href:"javascript:void(0);","data-bs-toggle":"dropdown"},[e("div",{class:"avatar avatar-online"},[e("img",{src:"/assets/img/avatars/1.png",alt:"",class:"h-auto rounded-circle"})])],-1),J=f('<li><a class="dropdown-item" href="#"><div class="d-flex"><div class="flex-shrink-0 me-3"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></div><div class="flex-grow-1"><span class="fw-semibold d-block">John Doe</span><small class="text-muted">Admin</small></div></div></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-user-check me-2 ti-sm"></i><span class="align-middle">My Profile</span></a></li><li><a class="dropdown-item" href="#"><i class="ti ti-settings me-2 ti-sm"></i><span class="align-middle">Settings</span></a></li><li><a class="dropdown-item" href="#"><span class="d-flex align-items-center align-middle"><i class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i><span class="flex-grow-1 align-middle">Billing</span><span class="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span></span></a></li><li><div class="dropdown-divider"></div></li>',6),W=e("i",{class:"ti ti-logout me-2 ti-sm"},null,-1),Y=e("span",{class:"align-middle"},"Log Out",-1),$=[W,Y],G={class:"content-wrapper"},I={class:"container-fluid flex-grow-1 container-p-y"},K={class:"content-footer footer bg-footer-theme"},Q={class:"container-fluid"},R={class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"},U=e("a",{href:"https://pixinvent.com",target:"_blank",class:"fw-semibold"},"Pixinvent",-1),X=e("div",null,[e("a",{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/",target:"_blank",class:"footer-link me-4"},"Documentation")],-1),ee=e("div",{class:"content-backdrop fade"},null,-1),te=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),se=e("div",{class:"drag-target"},null,-1),ae={__name:"AdminLayout",setup(d){const{menus:r}=V();x(()=>{setTimeout(()=>{M("/assets/js/main.js")},1e3)});const c=()=>{L.post(route("logout"))};return(a,t)=>{const m=j("inertia-link");return n(),i("div",C,[e("div",A,[e("aside",E,[P,e("ul",B,[(n(!0),i(p,null,v(w(r),(s,_)=>(n(),i(p,{key:"menu-"+_},[s.sub_menu?(n(),i("li",{key:1,class:l(["menu-item",{"active open":a.route().current(s.route)}])},[e("a",N,[e("i",{class:l(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},u(s.label),9,D)]),s.sub_menu?(n(),i("ul",H,[(n(!0),i(p,null,v(s.sub_menu,(o,b)=>(n(),i("li",{key:"sub-menu-"+b,class:l(["menu-item",{active:a.route().current(o.route)}])},[h(m,{href:a.route(o.route),class:l(["menu-link",{"menu-toggle":o.sub_menu}])},{default:g(()=>[e("i",{class:l(["menu-icon tf-icons",o.icon])},null,2),e("div",{"data-i18n":o.label},u(o.label),9,O)]),_:2},1032,["href","class"])],2))),128))])):S("",!0)],2)):(n(),i("li",{key:0,class:l(["menu-item",{active:a.route().current(s.route)}])},[h(m,{href:a.route(s.route),class:"menu-link"},{default:g(()=>[e("i",{class:l(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},u(s.label),9,F)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",Z,[e("nav",{class:"layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme",id:"layout-navbar"},[T,e("div",{class:"navbar-nav-right d-flex align-items-center",id:"navbar-collapse"},[q,e("ul",{class:"navbar-nav flex-row align-items-center ms-auto"},[e("li",{class:"nav-item navbar-dropdown dropdown-user dropdown"},[z,e("ul",{class:"dropdown-menu dropdown-menu-end"},[J,e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:c},$)])])])])])]),e("div",G,[e("div",I,[y(a.$slots,"default")]),e("footer",K,[e("div",Q,[e("div",R,[e("div",null,[k(" © "+u(new Date().getFullYear())+" , made with ❤️ by ",1),U]),X])])]),ee])])]),te,se])}}},ne=ae;export{ne as A};
