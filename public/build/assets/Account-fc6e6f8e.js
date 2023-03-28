import{A as t}from"./AdminLayout-9b906b59.js";import o from"./Navigation-e2933bda.js";import{_ as s,o as c,c as l,b as n,a as e,r as i}from"./app-55ebbbf9.js";const r={layout:t,components:{Navigation:o}},d={class:"container-xxl flex-grow-1 container-p-y"},m=e("div",{class:"row"},[e("div",{class:"col-md-12"},[e("div",{class:"card mb-4"},[e("h5",{class:"card-header"},"Profile Details"),e("div",{class:"card-body"},[e("div",{class:"d-flex align-items-start align-items-sm-center gap-4"},[e("img",{src:"/assets/img/avatars/14.png",alt:"user-avatar",class:"d-block w-px-100 h-px-100 rounded",id:"uploadedAvatar"}),e("div",{class:"button-wrapper"},[e("label",{for:"upload",class:"btn btn-primary me-2 mb-3",tabindex:"0"},[e("span",{class:"d-none d-sm-block"},"Upload new photo"),e("i",{class:"ti ti-upload d-block d-sm-none"}),e("input",{type:"file",id:"upload",class:"account-file-input",hidden:"",accept:"image/png, image/jpeg"})]),e("button",{type:"button",class:"btn btn-label-secondary account-image-reset mb-3"},[e("i",{class:"ti ti-refresh-dot d-block d-sm-none"}),e("span",{class:"d-none d-sm-block"},"Reset")]),e("div",{class:"text-muted"},"Allowed JPG, GIF or PNG. Max size of 800K")])])]),e("hr",{class:"my-0"}),e("div",{class:"card-body"},[e("form",{id:"formAccountSettings",method:"POST",onsubmit:"return false"},[e("div",{class:"row"},[e("div",{class:"mb-3 col-md-6"},[e("label",{for:"firstName",class:"form-label"},"First Name"),e("input",{class:"form-control",type:"text",id:"firstName",name:"firstName",value:"John",autofocus:""})]),e("div",{class:"mb-3 col-md-6"},[e("label",{for:"lastName",class:"form-label"},"Last Name"),e("input",{class:"form-control",type:"text",name:"lastName",id:"lastName",value:"Doe"})]),e("div",{class:"mb-3 col-md-6"},[e("label",{for:"email",class:"form-label"},"E-mail"),e("input",{class:"form-control",type:"text",id:"email",name:"email",value:"john.doe@example.com",placeholder:"john.doe@example.com"})]),e("div",{class:"mb-3 col-md-6"},[e("label",{class:"form-label",for:"phoneNumber"},"Phone Number"),e("div",{class:"input-group input-group-merge"},[e("span",{class:"input-group-text"},"US (+1)"),e("input",{type:"text",id:"phoneNumber",name:"phoneNumber",class:"form-control",placeholder:"202 555 0111"})])]),e("div",{class:"mb-3 col-md-6"},[e("label",{for:"language",class:"form-label"},"Role"),e("select",{id:"language",class:"select2 form-select"},[e("option",{value:""},"Select Role"),e("option",{value:"fr",selected:""},"Admin"),e("option",{value:"en"},"Coach"),e("option",{value:"en"},"Staff"),e("option",{value:"de"},"Student"),e("option",{value:"pt"},"Coach"),e("option",{value:"pt"},"Parent")])]),e("div",{class:"mb-3 col-md-6"},[e("label",{for:"currency",class:"form-label"},"Status"),e("select",{id:"currency",class:"select2 form-select"},[e("option",{value:""},"Select Status"),e("option",{value:"usd",selected:""},"Active"),e("option",{value:"euro"},"InActive")])])]),e("div",{class:"mt-2"},[e("button",{type:"submit",class:"btn btn-primary me-2"},"Save changes"),e("button",{type:"reset",class:"btn btn-label-secondary"},"Cancel")])])])]),e("div",{class:"card"},[e("h5",{class:"card-header"},"Delete Account"),e("div",{class:"card-body"},[e("div",{class:"mb-3 col-12 mb-0"},[e("div",{class:"alert alert-warning"},[e("h5",{class:"alert-heading mb-1"},"Are you sure you want to delete your account?"),e("p",{class:"mb-0"},"Once you delete your account, there is no going back. Please be certain.")])]),e("form",{id:"formAccountDeactivation",onsubmit:"return false"},[e("div",{class:"form-check mb-4"},[e("input",{class:"form-check-input",type:"checkbox",name:"accountActivation",id:"accountActivation"}),e("label",{class:"form-check-label",for:"accountActivation"},"I confirm my account deactivation")]),e("button",{type:"submit",class:"btn btn-danger deactivate-account"},"Deactivate Account")])])])])],-1);function u(p,b,v,f,h,g){const a=i("Navigation");return c(),l("div",d,[n(a),m])}const A=s(r,[["render",u]]);export{A as default};
