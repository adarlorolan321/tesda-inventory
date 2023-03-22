import{i as d,c as o,a,b as c,w as r,s as m,d as u,t as v,e as n,r as p,o as h}from"./app-37b45d4a.js";function f(t){return new Promise(function(e,l){let s=!1,i=document.querySelector('script[src="'+t+'"]');if(!i)i=document.createElement("script"),i.type="text/javascript",i.async=!0,i.src=t,s=!0;else if(i.hasAttribute("data-loaded")){e(i);return}i.addEventListener("error",l),i.addEventListener("abort",l),i.addEventListener("load",function(){i.setAttribute("data-loaded",!0),e(i)}),s&&document.head.appendChild(i)})}const g={class:"layout-wrapper layout-content-navbar"},_={class:"layout-container"},b={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},w=n('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Vuexy</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),x={class:"menu-inner py-1"},k={class:"menu-item active"},y=a("i",{class:"menu-icon tf-icons ti ti-smart-home"},null,-1),L=a("div",{"data-i18n":"Page 1"},"Services",-1),P=n('<li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-building-community"></i><div data-i18n="Page 2">Venues</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-school"></i><div data-i18n="Page 2">Classes</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-address-book"></i><div data-i18n="Page 2">Enrolments</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-gift"></i><div data-i18n="Page 2">Trials</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-calendar"></i><div data-i18n="Page 2">Waitlist</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-wallet"></i><div data-i18n="Page 2">Payments</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-calendar-time"></i><div data-i18n="Page 2">Attendance</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-box"></i><div data-i18n="Page 2">Merchandise</div></a></li><li class="menu-item"><a href="page-2.html" class="menu-link"><i class="menu-icon tf-icons ti ti-building-store"></i><div data-i18n="Page 2">Organisations</div></a></li><li class="menu-item"><a href="javascript:void(0);" class="menu-link menu-toggle"><i class="menu-icon tf-icons ti ti-users"></i><div data-i18n="Users">Users</div></a><ul class="menu-sub"><li class="menu-item"><a href="app-access-roles.html" class="menu-link"><div data-i18n="Roles">Coach</div></a></li><li class="menu-item"><a href="app-access-roles.html" class="menu-link"><div data-i18n="Roles">Staff</div></a></li><li class="menu-item"><a href="app-access-roles.html" class="menu-link"><div data-i18n="Roles">Parents</div></a></li><li class="menu-item"><a href="app-access-roles.html" class="menu-link"><div data-i18n="Roles">Students</div></a></li></ul></li>',10),S={class:"layout-page"},j=n('<nav class="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar"><div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"><a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)"><i class="ti ti-menu-2 ti-sm"></i></a></div><div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse"><div class="navbar-nav align-items-center"><a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);"><i class="ti ti-sm"></i></a></div><ul class="navbar-nav flex-row align-items-center ms-auto"><li class="nav-item navbar-dropdown dropdown-user dropdown"><a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></a><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="#"><div class="d-flex"><div class="flex-shrink-0 me-3"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></div><div class="flex-grow-1"><span class="fw-semibold d-block">John Doe</span><small class="text-muted">Admin</small></div></div></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-user-check me-2 ti-sm"></i><span class="align-middle">My Profile</span></a></li><li><a class="dropdown-item" href="#"><i class="ti ti-settings me-2 ti-sm"></i><span class="align-middle">Settings</span></a></li><li><a class="dropdown-item" href="#"><span class="d-flex align-items-center align-middle"><i class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i><span class="flex-grow-1 align-middle">Billing</span><span class="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span></span></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-logout me-2 ti-sm"></i><span class="align-middle">Log Out</span></a></li></ul></li></ul></div></nav>',1),A={class:"content-wrapper"},V={class:"container-fluid flex-grow-1 container-p-y"},C={class:"content-footer footer bg-footer-theme"},M={class:"container-fluid"},E={class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"},B=a("a",{href:"https://pixinvent.com",target:"_blank",class:"fw-semibold"},"Pixinvent",-1),D=a("div",null,[a("a",{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/",target:"_blank",class:"footer-link me-4"},"Documentation")],-1),H=a("div",{class:"content-backdrop fade"},null,-1),N=a("div",{class:"layout-overlay layout-menu-toggle"},null,-1),R=a("div",{class:"drag-target"},null,-1),Z={__name:"AdminLayout",setup(t){return d(()=>{setTimeout(()=>{f("/assets/js/main.js")},1e3)}),(e,l)=>{const s=p("inertia-link");return h(),o("div",g,[a("div",_,[a("aside",b,[w,a("ul",x,[a("li",k,[c(s,{href:e.route("services.index"),class:"menu-link"},{default:r(()=>[y,L]),_:1},8,["href"])]),P])]),a("div",S,[j,a("div",A,[a("div",V,[m(e.$slots,"default")]),a("footer",C,[a("div",M,[a("div",E,[a("div",null,[u(" © "+v(new Date().getFullYear())+" , made with ❤️ by ",1),B]),D])])]),H])])]),N,R])}}},O=Z;export{O as A};
