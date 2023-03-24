import{A as o}from"./AdminLayout-4ff92b72.js";import{_ as n,o as c,c as d,a as s,b as a,w as i,n as l,k as m,r as u,g as r}from"./app-777231bb.js";const p={layout:o},f={class:"content-wrapper"},v={class:"container-xxl flex-grow-1 container-p-y"},g=m('<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">User Profile /</span> Security</h4><div class="row"><div class="col-12"><div class="card mb-4"><div class="user-profile-header-banner"><img src="/assets/img/pages/profile-banner.png" alt="Banner image" class="img-fluid rounded-top"></div><div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4"><div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto"><img src="/assets/img/avatars/14.png" alt="user image" class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img"></div><div class="flex-grow-1 mt-3 mt-sm-5"><div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4"><div class="user-profile-info"><h4>John Doe</h4><ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2"><li class="list-inline-item"><i class="ti ti-color-swatch"></i> UX Designer</li><li class="list-inline-item"><i class="ti ti-map-pin"></i> Vatican City</li><li class="list-inline-item"><i class="ti ti-calendar"></i> Joined April 2021</li></ul></div></div></div></div></div></div></div>',2),h={class:"row"},w={class:"col-md-12"},b={class:"nav nav-pills flex-column flex-sm-row mb-4"},_={class:"nav-item"},x=s("i",{class:"ti ti-user-check me-1 ti-xs"},null,-1),y={class:"nav-item"},P=s("i",{class:"ti ti-key me-1 ti-xs"},null,-1),k=s("div",{class:"col-md-12"},[s("div",{class:"card mb-4"},[s("h5",{class:"card-header"},"Change Password"),s("div",{class:"card-body"},[s("form",{id:"formAccountSettings",method:"POST",onsubmit:"return false"},[s("div",{class:"row"},[s("div",{class:"mb-3 col-md-6 form-password-toggle"},[s("label",{class:"form-label",for:"currentPassword"},"Current Password"),s("div",{class:"input-group input-group-merge"},[s("input",{class:"form-control",type:"password",name:"currentPassword",id:"currentPassword",placeholder:"············"}),s("span",{class:"input-group-text cursor-pointer"},[s("i",{class:"ti ti-eye-off"})])])])]),s("div",{class:"row"},[s("div",{class:"mb-3 col-md-6 form-password-toggle"},[s("label",{class:"form-label",for:"newPassword"},"New Password"),s("div",{class:"input-group input-group-merge"},[s("input",{class:"form-control",type:"password",id:"newPassword",name:"newPassword",placeholder:"············"}),s("span",{class:"input-group-text cursor-pointer"},[s("i",{class:"ti ti-eye-off"})])])]),s("div",{class:"mb-3 col-md-6 form-password-toggle"},[s("label",{class:"form-label",for:"confirmPassword"},"Confirm New Password"),s("div",{class:"input-group input-group-merge"},[s("input",{class:"form-control",type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"············"}),s("span",{class:"input-group-text cursor-pointer"},[s("i",{class:"ti ti-eye-off"})])])]),s("div",{class:"col-12 mb-4"},[s("h6",null,"Password Requirements:"),s("ul",{class:"ps-3 mb-0"},[s("li",{class:"mb-1"},"Minimum 8 characters long - the more, the better"),s("li",{class:"mb-1"},"At least one lowercase character"),s("li",null,"At least one number, symbol, or whitespace character")])]),s("div",null,[s("button",{type:"submit",class:"btn btn-primary me-2"},"Save changes"),s("button",{type:"reset",class:"btn btn-label-secondary"},"Cancel")])])])])])],-1);function C(e,A,N,S,V,j){const t=u("inertia-link");return c(),d("div",f,[s("div",v,[g,s("div",h,[s("div",w,[s("ul",b,[s("li",_,[a(t,{class:l(["nav-link",{active:e.route().current("user.index")}]),href:e.route("user.index")},{default:i(()=>[x,r(" Profile ")]),_:1},8,["href","class"])]),s("li",y,[a(t,{class:l(["nav-link",{active:e.route().current("user.teams")}]),href:e.route("user.teams")},{default:i(()=>[P,r(" Security ")]),_:1},8,["href","class"])])])])]),k])])}const T=n(p,[["render",C]]);export{T as default};
