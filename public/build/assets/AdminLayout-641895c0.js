import{q as _,c as i,a as e,F as m,h as v,u as w,x,d as y,t as c,e as f,o as l,n,b as p,w as h,f as k,r as L}from"./app-94f6195e.js";function S(d){return new Promise(function(r,s){let u=!1,a=document.querySelector('script[src="'+d+'"]');if(!a)a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src=d,u=!0;else if(a.hasAttribute("data-loaded")){r(a);return}a.addEventListener("error",s),a.addEventListener("abort",s),a.addEventListener("load",function(){a.setAttribute("data-loaded",!0),r(a)}),u&&document.head.appendChild(a)})}function V(){return{menus:[{label:"Services",route:"services.index",icon:"ti ti-smart-home"},{label:"Venue",route:"venues.index",icon:"ti ti-home"},{label:"Coach/Staff",route:"user.coach",icon:"ti ti-ball-volleyball"},{label:"Parent",route:"user.parent",icon:"ti ti-user"}]}}const j={class:"layout-wrapper layout-content-navbar"},C={class:"layout-container"},A={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},M=f('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Vuexy</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),B={class:"menu-inner py-1"},E=["data-i18n"],F={href:"javascript:void(0);",class:"menu-link menu-toggle"},N=["data-i18n"],D={key:0,class:"menu-sub"},H=["data-i18n"],P={class:"layout-page"},Z=f('<nav class="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar"><div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"><a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)"><i class="ti ti-menu-2 ti-sm"></i></a></div><div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse"><div class="navbar-nav align-items-center"><a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);"><i class="ti ti-sm"></i></a></div><ul class="navbar-nav flex-row align-items-center ms-auto"><li class="nav-item navbar-dropdown dropdown-user dropdown"><a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></a><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="#"><div class="d-flex"><div class="flex-shrink-0 me-3"><div class="avatar avatar-online"><img src="/assets/img/avatars/1.png" alt class="h-auto rounded-circle"></div></div><div class="flex-grow-1"><span class="fw-semibold d-block">John Doe</span><small class="text-muted">Admin</small></div></div></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-user-check me-2 ti-sm"></i><span class="align-middle">My Profile</span></a></li><li><a class="dropdown-item" href="#"><i class="ti ti-settings me-2 ti-sm"></i><span class="align-middle">Settings</span></a></li><li><a class="dropdown-item" href="#"><span class="d-flex align-items-center align-middle"><i class="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i><span class="flex-grow-1 align-middle">Billing</span><span class="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span></span></a></li><li><div class="dropdown-divider"></div></li><li><a class="dropdown-item" href="#"><i class="ti ti-logout me-2 ti-sm"></i><span class="align-middle">Log Out</span></a></li></ul></li></ul></div></nav>',1),q={class:"content-wrapper"},T={class:"container-fluid flex-grow-1 container-p-y"},z={class:"content-footer footer bg-footer-theme"},J={class:"container-fluid"},O={class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"},Y=e("a",{href:"https://pixinvent.com",target:"_blank",class:"fw-semibold"},"Pixinvent",-1),$=e("div",null,[e("a",{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/",target:"_blank",class:"footer-link me-4"},"Documentation")],-1),G=e("div",{class:"content-backdrop fade"},null,-1),I=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),K=e("div",{class:"drag-target"},null,-1),Q={__name:"AdminLayout",setup(d){const{menus:r}=V();return _(()=>{setTimeout(()=>{S("/assets/js/main.js")},1e3)}),(s,u)=>{const a=L("inertia-link");return l(),i("div",j,[e("div",C,[e("aside",A,[M,e("ul",B,[(l(!0),i(m,null,v(w(r),(t,g)=>(l(),i(m,{key:"menu-"+g},[t.sub_menu?(l(),i("li",{key:1,class:n(["menu-item",{active:s.route().current(t.route)}])},[e("a",F,[e("i",{class:n(["menu-icon tf-icons",t.icon])},null,2),e("div",{"data-i18n":t.label},c(t.label),9,N)]),t.sub_menu?(l(),i("ul",D,[(l(!0),i(m,null,v(t.sub_menu,(o,b)=>(l(),i("li",{key:"sub-menu-"+b,class:"menu-item"},[p(a,{href:s.route(o.route),class:n(["menu-link",{"menu-toggle":o.sub_menu}])},{default:h(()=>[e("i",{class:n(["menu-icon tf-icons",o.icon])},null,2),e("div",{"data-i18n":o.label},c(o.label),9,H)]),_:2},1032,["href","class"])]))),128))])):k("",!0)],2)):(l(),i("li",{key:0,class:n(["menu-item",{active:s.route().current(t.route)}])},[p(a,{href:s.route(t.route),class:"menu-link"},{default:h(()=>[e("i",{class:n(["menu-icon tf-icons",t.icon])},null,2),e("div",{"data-i18n":t.label},c(t.label),9,E)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",P,[Z,e("div",q,[e("div",T,[x(s.$slots,"default")]),e("footer",z,[e("div",J,[e("div",O,[e("div",null,[y(" © "+c(new Date().getFullYear())+" , made with ❤️ by ",1),Y]),$])])]),G])])]),I,K])}}},U=Q;export{U as A};
