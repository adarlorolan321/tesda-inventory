import{p as b,o as n,c as o,a as e,F as m,i as v,u as y,t as r,b as h,w as _,l as w,g as x,z as k,O as L,r as S,n as i,e as j}from"./app-ab2df9e9.js";function C(d){return new Promise(function(c,u){let t=!1,a=document.querySelector('script[src="'+d+'"]');if(!a)a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src=d,t=!0;else if(a.hasAttribute("data-loaded")){c(a);return}a.addEventListener("error",u),a.addEventListener("abort",u),a.addEventListener("load",function(){a.setAttribute("data-loaded",!0),c(a)}),t&&document.head.appendChild(a)})}function M(){return{menus:[{label:"Staff",route:"user.coaches.index",icon:"ti ti-users",only:["data","params"]},{label:"Class",route:"classes.index",icon:"ti ti-users",only:["data","params"]},{label:"Parents",route:"user.parents.index",icon:"ti ti-user",only:["data","params"]},{label:"Players",route:"students.index",icon:"ti ti-ball-tennis",only:["data","params"]},{label:"Enrolments",route:"enrolments.index",icon:"ti ti-file-pencil",only:["data","params"]},{label:"Payments",route:"payments.index",icon:"ti ti-cash-banknote",only:["data","params"]},{label:"Waitlist",route:"waitlists.index",icon:"ti ti-clock",only:["data","params"]},{label:"Trials",route:"trials.index",icon:"ti ti-clipboard",only:["data","params"]},{label:"Orders",route:"orders.index",icon:"ti ti-shopping-cart",only:["data","params"]},{label:"Messages",route:"messages.index",icon:"ti ti-message-2",only:["data","params"]},{label:"Merchandise",route:"merchandises.index",icon:"ti ti-building-store",only:["data","params"]},{label:"Settings",route:"settings.*",icon:"ti ti-settings",sub_menu:[{label:"Services",route:"settings.services.index",icon:"ti ti-smart-home",only:["data","params"]},{label:"Venues",route:"settings.venues.index",icon:"ti ti-home",only:["data","params"]}]}]}}const V={class:"layout-wrapper layout-content-navbar"},A={class:"layout-container"},E={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},P=k('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Sportsaas</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),$={class:"menu-inner py-1"},F=["data-i18n"],N={href:"javascript:void(0);",class:"menu-link menu-toggle"},B=["data-i18n"],H={key:0,class:"menu-sub"},O=["data-i18n"],Z={class:"layout-page"},D={class:"layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme",id:"layout-navbar"},T=e("div",{class:"layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"},[e("a",{class:"nav-item nav-link px-0 me-xl-4",href:"javascript:void(0)"},[e("i",{class:"ti ti-menu-2 ti-sm"})])],-1),z={class:"navbar-nav-right d-flex align-items-center",id:"navbar-collapse"},q=e("div",{class:"navbar-nav align-items-center"},[e("a",{class:"nav-link style-switcher-toggle hide-arrow",href:"javascript:void(0);"},[e("i",{class:"ti ti-sm"})])],-1),W={class:"navbar-nav flex-row align-items-center ms-auto"},Y={class:"nav-item navbar-dropdown dropdown-user dropdown"},G={class:"nav-link dropdown-toggle hide-arrow",href:"javascript:void(0);","data-bs-toggle":"dropdown"},I={class:"avatar avatar-online"},J=["src"],K={class:"dropdown-menu dropdown-menu-end"},Q={class:"dropdown-item",href:"#"},R={class:"d-flex"},U={class:"flex-shrink-0 me-3"},X={class:"avatar avatar-online"},ee=["src"],te={class:"flex-grow-1"},ae={class:"fw-semibold d-block"},se={class:"text-muted"},ne=e("li",null,[e("div",{class:"dropdown-divider"})],-1),oe=e("i",{class:"ti ti-user-check me-2 ti-sm"},null,-1),ie=e("span",{class:"align-middle"},"My Profile",-1),le=e("li",null,[e("div",{class:"dropdown-divider"})],-1),re=e("i",{class:"ti ti-logout me-2 ti-sm"},null,-1),de=e("span",{class:"align-middle"},"Log Out",-1),ce=[re,de],ue={class:"content-wrapper"},pe={class:"container-fluid flex-grow-1 container-p-y"},me={class:"content-footer footer bg-footer-theme"},he={class:"container-fluid"},_e={class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"},ve=e("a",{href:"https://pixinvent.com",target:"_blank",class:"fw-semibold"},"Pixinvent",-1),fe=e("div",null,[e("a",{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/",target:"_blank",class:"footer-link me-4"},"Documentation")],-1),ge=e("div",{class:"content-backdrop fade"},null,-1),be=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),ye=e("div",{class:"drag-target"},null,-1),we={__name:"AdminLayout",setup(d){const{menus:c}=M();b(()=>{setTimeout(()=>{C("/assets/js/main.js")},1e3)});const u=()=>{L.post(route("logout"))};return(t,a)=>{const p=S("inertia-link");return n(),o("div",V,[e("div",A,[e("aside",E,[P,e("ul",$,[(n(!0),o(m,null,v(y(c),(s,f)=>(n(),o(m,{key:"menu-"+f},[s.sub_menu?(n(),o("li",{key:1,class:i(["menu-item",{"active open":t.route().current(s.route)}])},[e("a",N,[e("i",{class:i(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},r(s.label),9,B)]),s.sub_menu?(n(),o("ul",H,[(n(!0),o(m,null,v(s.sub_menu,(l,g)=>(n(),o("li",{key:"sub-menu-"+g,class:i(["menu-item",{active:t.route().current(l.route)}])},[h(p,{href:t.route(l.route),class:i(["menu-link",{"menu-toggle":l.sub_menu}]),only:["data","params"]},{default:_(()=>[e("i",{class:i(["menu-icon tf-icons",l.icon])},null,2),e("div",{"data-i18n":l.label},r(l.label),9,O)]),_:2},1032,["href","class"])],2))),128))])):j("",!0)],2)):(n(),o("li",{key:0,class:i(["menu-item",{active:t.route().current(s.route)||t.route().current(s.route.replace(/[^.]*$/,"*"))}])},[h(p,{href:t.route(s.route),class:"menu-link",only:["data","params"]},{default:_(()=>[e("i",{class:i(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},r(s.label),9,F)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",Z,[e("nav",D,[T,e("div",z,[q,e("ul",W,[e("li",Y,[e("a",G,[e("div",I,[e("img",{src:t.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,J)])]),e("ul",K,[e("li",null,[e("a",Q,[e("div",R,[e("div",U,[e("div",X,[e("img",{src:t.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,ee)])]),e("div",te,[e("span",ae,r(t.$page.props.auth.user.name),1),e("small",se,r(t.$page.props.auth.user.role),1)])])])]),ne,e("li",null,[h(p,{class:"dropdown-item",href:"/user/profile"},{default:_(()=>[oe,ie]),_:1})]),le,e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:u},ce)])])])])])]),e("div",ue,[e("div",pe,[w(t.$slots,"default")]),e("footer",me,[e("div",he,[e("div",_e,[e("div",null,[x(" © "+r(new Date().getFullYear())+" , made with ❤️ by ",1),ve]),fe])])]),ge])])]),be,ye])}}},ke=we;export{ke as A};
