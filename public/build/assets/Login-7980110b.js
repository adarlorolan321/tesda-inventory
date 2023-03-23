import{l as _,c as n,a as s,s as w,g as p,v as m,u as t,n as u,t as f,f as b,b as v,w as h,e as g,d as r,r as y,o as l}from"./app-b5923dd1.js";function x(){const i=_({email:null,password:null,remember:!1});return{form:i,login:async()=>{i.post(route("login"),{onSuccess:e=>{}})}}}const k={class:"container-xxl"},L={class:"authentication-wrapper authentication-basic container-p-y"},V={class:"authentication-inner py-4"},C={class:"card"},M={class:"card-body"},j=r('<div class="app-brand justify-content-center mb-4 mt-2"><a href="index.html" class="app-brand-link gap-2"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo text-body fw-bold ms-1">Vuexy</span></a></div><h4 class="mb-1 pt-2">Welcome to Vuexy! 👋</h4><p class="mb-4"> Please sign-in to your account and start the adventure </p>',3),N={class:"mb-3"},E=s("label",{for:"email",class:"form-label"},"Email or Username",-1),S={key:0,class:"invalid-feedback"},B={class:"mb-3 form-password-toggle"},Z={class:"d-flex justify-content-between"},F=s("label",{class:"form-label",for:"password"},"Password",-1),H=s("small",null,"Forgot Password?",-1),P={class:"input-group input-group-merge"},U=s("span",{class:"input-group-text cursor-pointer"},[s("i",{class:"ti ti-eye-off"})],-1),$={key:0,class:"invalid-feedback"},D=r('<div class="mb-3"><div class="form-check"><input class="form-check-input" type="checkbox" id="remember-me"><label class="form-check-label" for="remember-me"> Remember Me </label></div></div><div class="mb-3"><button class="btn btn-primary d-grid w-100" type="submit"> Sign in </button></div>',2),I={class:"text-center"},T=s("span",null,"New on our platform?",-1),z=s("span",null,"Create an account",-1),A=r('<div class="divider my-4"><div class="divider-text">or</div></div><div class="d-flex justify-content-center"><a href="javascript:;" class="btn btn-icon btn-label-facebook me-3"><i class="tf-icons fa-brands fa-facebook-f fs-5"></i></a><a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3"><i class="tf-icons fa-brands fa-google fs-5"></i></a><a href="javascript:;" class="btn btn-icon btn-label-twitter"><i class="tf-icons fa-brands fa-twitter fs-5"></i></a></div>',2),q={__name:"Login",setup(i){const{login:d,form:e}=x();return(R,a)=>{const c=y("inertia-link");return l(),n("div",k,[s("div",L,[s("div",V,[s("div",C,[s("div",M,[j,s("form",{onSubmit:a[4]||(a[4]=w(o=>t(d)(),["prevent"])),id:"formAuthentication",class:"mb-3 fv-plugins-bootstrap5 fv-plugins-framework"},[s("div",N,[E,p(s("input",{type:"text",class:u(["form-control",{"is-invalid":t(e).errors.email}]),id:"email","onUpdate:modelValue":a[0]||(a[0]=o=>t(e).email=o),name:"email",placeholder:"Enter your email or username",autofocus:"",onInput:a[1]||(a[1]=o=>t(e).clearErrors("email"))},null,34),[[m,t(e).email]]),t(e).errors.email?(l(),n("div",S,f(t(e).errors.email),1)):b("",!0)]),s("div",B,[s("div",Z,[F,v(c,{href:"/forgot-password"},{default:h(()=>[H]),_:1})]),s("div",P,[p(s("input",{type:"password",id:"password",class:u(["form-control",{"is-invalid":t(e).errors.password}]),name:"password","onUpdate:modelValue":a[2]||(a[2]=o=>t(e).password=o),placeholder:"············","aria-describedby":"password",onInput:a[3]||(a[3]=o=>t(e).clearErrors("email"))},null,34),[[m,t(e).password]]),U]),t(e).errors.password?(l(),n("div",$,f(t(e).errors.password),1)):b("",!0)]),D],32),s("p",I,[T,g("  "),v(c,null,{default:h(()=>[z]),_:1})]),A])])])])])}}};export{q as default};
