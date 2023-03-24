import{p as b,q as g,o as i,c as n,a as s,g as p,t as d,u as t,y,d as m,z as _,n as l,e as c,b as k,w as x,k as L,r as C}from"./app-777231bb.js";const V={class:"container-xxl"},S={class:"authentication-wrapper authentication-basic container-p-y"},M={class:"authentication-inner py-4"},N={class:"card"},B={class:"card-body"},P=L('<div class="app-brand justify-content-center mb-4 mt-2"><a href="index.html" class="app-brand-link gap-2"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo text-body fw-bold ms-1">Sportsaas</span></a></div><h4 class="mb-1 pt-2">Reset Password 🔒</h4>',2),$={class:"mb-4"},Z={class:"fw-bold"},q={class:"mb-3 form-password-toggle"},D={class:"form-group mb-3"},E=s("label",{for:"name"},[p("New Password "),s("span",{class:"required"},"*")],-1),F={class:"input-group input-group-merge"},H=["type"],z={key:0,class:"custom-invalid-feedback"},I={key:1,class:"custom-invalid-feedback"},R={class:"mb-3 form-password-toggle"},U={class:"form-group mb-3"},j=s("label",{for:"name"},[p("Confirm Password "),s("span",{class:"required"},"*")],-1),T={class:"input-group input-group-merge"},X=["type"],A={key:0,class:"custom-invalid-feedback"},G=s("button",{type:"submit",class:"btn btn-primary d-grid w-100 mb-3"},"Set new password",-1),J={class:"text-center"},K=s("i",{class:"ti ti-chevron-left scaleX-n1-rtl"},null,-1),Q={__name:"ResetPassword",props:{email:String,token:String},setup(f){const u=f,o=b({token:u.token,email:u.email,password:"",password_confirmation:""}),w=()=>{o.post(route("password.update"),{onSuccess:()=>{},onFinish:()=>o.reset("password","password_confirmation")})},a=g({password:!0,password_confirmation:!0});return(v,e)=>{const h=C("inertia-link");return i(),n("div",V,[s("div",S,[s("div",M,[s("div",N,[s("div",B,[P,s("p",$,[p("for "),s("span",Z,d(t(o).email),1)]),s("form",{onSubmit:e[6]||(e[6]=y(r=>w(),["prevent"]))},[s("div",q,[s("div",D,[E,s("div",F,[m(s("input",{type:a.value.password?"password":"text",id:"password",class:l(["form-control",{"is-invalid":t(o).errors.password}]),"onUpdate:modelValue":e[0]||(e[0]=r=>t(o).password=r),onInput:e[1]||(e[1]=r=>t(o).clearErrors("password"))},null,42,H),[[_,t(o).password]]),s("span",{onClick:e[2]||(e[2]=r=>a.value.password=!a.value.password),class:"input-group-text cursor-pointer"},[s("i",{class:l(a.value.password?"ti ti-eye-off":"ti ti-eye")},null,2)])]),t(o).errors.password?(i(),n("div",z,d(t(o).errors.password),1)):c("",!0),t(o).errors.email?(i(),n("div",I,d(t(o).errors.email),1)):c("",!0)])]),s("div",R,[s("div",U,[j,s("div",T,[m(s("input",{type:a.value.password_confirmation?"password":"text",id:"password_confirmation",class:l(["form-control",{"is-invalid":t(o).errors.password_confirmation}]),"onUpdate:modelValue":e[3]||(e[3]=r=>t(o).password_confirmation=r),onInput:e[4]||(e[4]=r=>t(o).clearErrors("password_confirmation"))},null,42,X),[[_,t(o).password_confirmation]]),s("span",{onClick:e[5]||(e[5]=r=>a.value.password_confirmation=!a.value.password_confirmation),class:"input-group-text cursor-pointer"},[s("i",{class:l(a.value.password_confirmation?"ti ti-eye-off":"ti ti-eye")},null,2)])]),t(o).errors.password_confirmation?(i(),n("div",A,d(t(o).errors.password_confirmation),1)):c("",!0)])]),G,s("div",J,[k(h,{href:v.route("login")},{default:x(()=>[K,p(" Back to login ")]),_:1},8,["href"])])],32)])])])])])}}};export{Q as default};
