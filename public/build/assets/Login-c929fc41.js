import{q as _,p as g,o as l,c as r,b as d,u as e,a as s,t as c,e as p,s as w,d as b,v as y,n as u,w as h,x,g as k,F as L,y as m,r as S,X as V}from"./app-7c4b654b.js";function C(){const i=_({email:null,password:null,remember:!1});return{form:i,login:async()=>{i.post(route("login"),{onSuccess:t=>{}})}}}const M={class:"container-xxl"},j={class:"authentication-wrapper authentication-basic container-p-y"},N={class:"authentication-inner py-4"},E={class:"card"},F={class:"card-body"},B=m('<div class="app-brand justify-content-center mb-4 mt-2"><a href="index.html" class="app-brand-link gap-2"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo text-body fw-bold ms-1">SportSaas</span></a></div><h4 class="mb-1 pt-2">Welcome to SportSaas! 👋</h4><p class="mb-4"> Please sign-in to your account and start the adventure </p>',3),Z={key:0,class:"alert alert-success"},$={class:"mb-3"},D=s("label",{for:"email",class:"form-label"},"Email or Username",-1),H={key:0,class:"invalid-feedback"},P={class:"mb-3 form-password-toggle"},U={class:"d-flex justify-content-between"},I=s("label",{class:"form-label",for:"password"},"Password",-1),T=s("small",null,"Forgot Password?",-1),q={class:"input-group input-group-merge"},z=["type"],A={key:0,class:"invalid-feedback"},R=m('<div class="mb-3"><div class="form-check"><input class="form-check-input" type="checkbox" id="remember-me"><label class="form-check-label" for="remember-me"> Remember Me </label></div></div><div class="mb-3"><button class="btn btn-primary d-grid w-100" type="submit"> Sign in </button></div>',2),W={class:"text-center"},X=s("span",null,"New on our platform?",-1),G=s("span",null,"Create an account",-1),J=m('<div class="divider my-4"><div class="divider-text">or</div></div><div class="d-flex justify-content-center"><a href="javascript:;" class="btn btn-icon btn-label-facebook me-3"><i class="tf-icons fa-brands fa-facebook-f fs-5"></i></a><a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3"><i class="tf-icons fa-brands fa-google fs-5"></i></a><a href="javascript:;" class="btn btn-icon btn-label-twitter"><i class="tf-icons fa-brands fa-twitter fs-5"></i></a></div>',2),Q={__name:"Login",props:{status:String},setup(i){const{login:f,form:t}=C(),n=g(!0);return(K,a)=>{const v=S("inertia-link");return l(),r(L,null,[d(e(V),{title:"Login"}),s("div",M,[s("div",j,[s("div",N,[s("div",E,[s("div",F,[B,i.status?(l(),r("div",Z,c(i.status),1)):p("",!0),s("form",{onSubmit:a[5]||(a[5]=w(o=>e(f)(),["prevent"])),id:"formAuthentication",class:"mb-3 fv-plugins-bootstrap5 fv-plugins-framework"},[s("div",$,[D,b(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(t).errors.email}]),id:"email","onUpdate:modelValue":a[0]||(a[0]=o=>e(t).email=o),name:"email",placeholder:"Enter your email or username",autofocus:"",onInput:a[1]||(a[1]=o=>e(t).clearErrors("email"))},null,34),[[y,e(t).email]]),e(t).errors.email?(l(),r("div",H,c(e(t).errors.email),1)):p("",!0)]),s("div",P,[s("div",U,[I,d(v,{href:"/forgot-password"},{default:h(()=>[T]),_:1})]),s("div",q,[b(s("input",{type:n.value?"password":"text",id:"password",class:u(["form-control",{"is-invalid":e(t).errors.password}]),name:"password","onUpdate:modelValue":a[2]||(a[2]=o=>e(t).password=o),placeholder:"············","aria-describedby":"password",onInput:a[3]||(a[3]=o=>e(t).clearErrors("password"))},null,42,z),[[x,e(t).password]]),s("span",{class:"input-group-text cursor-pointer",onClick:a[4]||(a[4]=o=>n.value=!n.value)},[s("i",{class:u([n.value?"ti ti-eye-off":"ti ti-eye"])},null,2)])]),e(t).errors.password?(l(),r("div",A,c(e(t).errors.password),1)):p("",!0)]),R],32),s("p",W,[X,k("  "),d(v,null,{default:h(()=>[G]),_:1})]),J])])])])])],64)}}};export{Q as default};
