import{J as u,l as x,o as g,c as w,b as v,u as t,X as y,w as k,a as s,g as l,t as a,n as P,m as j,F as A}from"./app-7c4b654b.js";import{A as f}from"./AdminLayout-dd0324ec.js";const V={class:"container-xxl flex-grow-1 container-p-y"},B={class:"fw-bold py-3 mb-4"},E=s("span",{class:"text-muted fw-light"},"Parent / View /",-1),N={class:"row"},S={class:"col-xl-4 col-lg-5 col-md-5 order-1 order-md-0"},C={class:"card mb-4"},D={class:"card-body"},F={class:"user-avatar-section"},L={class:"d-flex align-items-center flex-column"},U=["src"],z={class:"user-info text-center"},I={class:"mb-2"},J={class:"badge bg-label-secondary mt-1"},O=s("p",{class:"mt-4 small text-uppercase text-muted"}," Details ",-1),R={class:"info-container"},T={class:"list-unstyled"},X={class:"mb-2 pt-1"},$=s("span",{class:"fw-semibold me-1"},"Email:",-1),q={class:"mb-2 pt-1"},G=s("span",{class:"fw-semibold me-1"},"Status:",-1),H={class:"mb-2 pt-1"},K=s("span",{class:"fw-semibold me-1"},"Role:",-1),M={class:"mb-2 pt-1"},Q=s("span",{class:"fw-semibold me-1"},"Phone:",-1),W={class:"col-xl-8 col-lg-7 col-md-7 order-0 order-md-1"},Y=s("ul",{class:"nav nav-pills flex-column flex-md-row mb-4"},[s("li",{class:"nav-item"},[s("a",{class:"nav-link active",href:"javascript:void(0);"},[s("i",{class:"ti ti-user-check ti-xs me-1"}),l("Players")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),l("Payments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-cash-banknote ti-xs me-1"}),l("Enrolments")])]),s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-pencil ti-xs me-1"}),l("Update")])])],-1),Z={components:{AdminLayout:f}},ls=Object.assign(Z,{__name:"ParentLayout",setup(ss){u();const e=x(()=>u().props.parent);return(b,ts)=>(g(),w(A,null,[v(t(y),{title:"Profile"}),v(f,null,{default:k(()=>{var o,i,c,n,d,r,_,m,h,p;return[s("div",V,[s("h4",B,[E,l(" "+a((o=t(e))==null?void 0:o.first_name),1)]),s("div",N,[s("div",S,[s("div",C,[s("div",D,[s("div",F,[s("div",L,[s("img",{class:"img-fluid rounded mb-3 pt-1 mt-4",src:(i=t(e))==null?void 0:i.profile_photo_url,height:"100",width:"100",alt:"User avatar"},null,8,U),s("div",z,[s("h4",I,a((c=t(e))==null?void 0:c.name),1),s("span",J,a((n=t(e))==null?void 0:n.role),1)])])]),O,s("div",R,[s("ul",T,[s("li",X,[$,s("span",null,a((d=t(e))==null?void 0:d.email),1)]),s("li",q,[G,s("span",{class:P(["badge",{"bg-label-success":((r=t(e))==null?void 0:r.status)==1,"bg-label-danger":((_=t(e))==null?void 0:_.status)==0}])},a(((m=t(e))==null?void 0:m.status)==1?"Active":"In-Active"),3)]),s("li",H,[K,s("span",null,a((h=t(e))==null?void 0:h.role),1)]),s("li",M,[Q,s("span",null,a((p=t(e))==null?void 0:p.phone),1)])])])])])]),s("div",W,[Y,j(b.$slots,"default")])])])]}),_:3})],64))}});export{ls as _};
