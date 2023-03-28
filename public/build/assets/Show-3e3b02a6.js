import{d,c as R,_ as U}from"./SessionTab-a45e104c.js";import W from"./EditClass-eae5ba3b.js";import{J as p,k as E,r as X,o as l,c,b as u,u as t,X as q,w as F,a as s,g as o,t as a,n as r,F as _,i as h,l as G,h as L,e as P}from"./app-e0a0b5b3.js";import{A as O}from"./AdminLayout-9ad909cb.js";import"./Crud-8325cf1e.js";import"./lodash-26345dfe.js";import"./toastr-6c405d9e.js";import"./Validate-5ac512ba.js";import"./InputFormat-d34120ad.js";import"./GlobalFunction-bdf3a992.js";const H={class:""},I={class:"fw-bold py-3 mb-4"},K={class:"text-muted fw-light"},Q={class:"row"},Z={class:"col-xl-3 col-lg-4 col-md-4 order-1 order-md-0"},ss={class:"card mb-4"},ts={class:"card-body"},es={class:"user-avatar-section"},as={class:"d-flex align-items-center flex-column"},ls={class:"user-info text-center"},os={class:"mb-2"},cs={class:"badge bg-label-secondary mt-1"},is=s("p",{class:"mt-4 small text-uppercase text-muted"}," Details ",-1),ns={class:"info-container"},ds=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Date:")],-1),rs={class:"pb-2"},_s=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Time:")],-1),ms={class:"pb-2"},ps=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Status:")],-1),us={class:"pb-2"},hs=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Days:")],-1),bs={class:"pb-2"},fs={class:"badge bg-label-info me-1 mb-1"},vs=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Repeat:")],-1),gs={class:"pb-2"},ws=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Capacity:")],-1),ks={class:"pb-2"},ys=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Price:")],-1),xs={class:"pb-2"},Cs={key:0},Ds={key:1,class:"badge bg-label-success"},js=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Venue:")],-1),Ys={class:"pb-2"},As=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Coach:")],-1),$s={class:"pb-2"},Ms=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Additional Coach:")],-1),Ts={class:"pb-2"},Ns={class:"badge bg-label-info me-1 mb-1"},Ss=s("td",{class:"pb-2"},[s("span",{class:"fw-semibold me-2"},"Tags:")],-1),Vs={class:"pb-2"},Bs={class:"badge bg-label-warning me-1 mb-1"},Es={class:"col-xl-9 col-lg-8 col-md-8 order-0 order-md-1"},Fs={class:"nav nav-pills flex-column flex-md-row mb-4"},Ls={class:"nav-item"},Ps=["href"],Os=s("i",{class:"ti ti-calendar-event ti-xs me-1"},null,-1),zs=s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-clipboard ti-xs me-1"}),o("Enrolments")])],-1),Js=s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-hourglass-empty ti-xs me-1"}),o("Waitlist")])],-1),Rs=s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-report-medical ti-xs me-1"}),o("Trials")])],-1),Us=s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-book ti-xs me-1"}),o("Documents")])],-1),Ws=s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-mail ti-xs me-1"}),o("Confirmation Email")])],-1),Xs=s("li",{class:"nav-item"},[s("a",{class:"nav-link",href:"javascript:void(0);"},[s("i",{class:"ti ti-code ti-xs me-1"}),o("Embedded Code")])],-1),qs={class:"nav-item"},Gs=["href"],Hs=s("i",{class:"ti ti-pencil ti-xs me-1"},null,-1),Is={components:{AdminLayout:O}},Ks=Object.assign(Is,{__name:"ClassLayout",setup(z){d.extend(R),p();const e=E(()=>p().props.classModel),m=E(()=>p().props.title);return(i,Zs)=>{const J=X("inertia-link");return l(),c(_,null,[u(t(q),{title:"Profile"}),u(O,null,{default:F(()=>{var b,f,v,g,w,k,y,x,C,D,j,Y,A,$,M,T,N,S,V,B;return[s("div",H,[s("h4",I,[s("span",K,[u(J,{href:"/classes"},{default:F(()=>[o(" Class")]),_:1}),o(" / Details / "+a((b=t(e))==null?void 0:b.name)+" /",1)]),o(" "+a(t(m)?"/"+t(m):""),1)]),s("div",Q,[s("div",Z,[s("div",ss,[s("div",ts,[s("div",es,[s("div",as,[s("div",ls,[s("h4",os,a((f=t(e))==null?void 0:f.name),1),s("span",cs,a((v=t(e))==null?void 0:v.role),1)])])]),is,s("div",ns,[s("table",null,[s("tr",null,[ds,s("td",rs,[s("span",null,a(t(e).start_date?t(d)(t(e).start_date).format("DD/MM/YYYY"):"")+" "+a(t(e).end_date?" - "+t(d)(t(e).end_date).format("DD/MM/YYYY"):""),1)])]),s("tr",null,[_s,s("td",ms,[s("span",null,a(t(e).start_time?t(d)(`2000-01-01T${t(e).start_time}`).format("hh:mm A"):"")+" "+a(t(e).start_time?" - "+t(d)(`2000-01-01T${t(e).end_time}`).format("hh:mm A"):""),1)])]),s("tr",null,[ps,s("td",us,[s("span",{class:r(["badge",{"bg-label-success":((g=t(e))==null?void 0:g.status)=="Active","bg-label-warning":((w=t(e))==null?void 0:w.status)=="Closed","bg-label-danger":((k=t(e))==null?void 0:k.status)=="Archive"}])},a(t(e).status),3)])]),s("tr",null,[hs,s("td",bs,[(l(!0),c(_,null,h((y=t(e))==null?void 0:y.days,n=>(l(),c("span",fs,a(n),1))),256))])]),s("tr",null,[vs,s("td",gs,[s("span",{class:r(["badge",{"bg-label-success":((x=t(e))==null?void 0:x.repeat)==1,"bg-label-danger":((C=t(e))==null?void 0:C.repeat)==0}])},a((D=t(e))!=null&&D.repeat?"Yes":"No"),3)])]),s("tr",null,[ws,s("td",ks,[s("span",null,a(((j=t(e))==null?void 0:j.capacity)>0?(Y=t(e))==null?void 0:Y.capacity:"-"),1)])]),s("tr",null,[ys,s("td",xs,[((A=t(e))==null?void 0:A.price)>0?(l(),c("span",Cs,a(($=t(e))==null?void 0:$.price),1)):(l(),c("span",Ds,"Free"))])]),s("tr",null,[js,s("td",Ys,[s("span",null,a((M=t(e))!=null&&M.venue?(T=t(e))==null?void 0:T.venue.name:"-"),1)])]),s("tr",null,[As,s("td",$s,[s("span",null,a((N=t(e))!=null&&N.coach?(S=t(e))==null?void 0:S.coach.name:"-"),1)])]),s("tr",null,[Ms,s("td",Ts,[(l(!0),c(_,null,h((V=t(e))==null?void 0:V.additional_coach_name,n=>(l(),c("span",Ns,a(n),1))),256))])]),s("tr",null,[Ss,s("td",Vs,[(l(!0),c(_,null,h((B=t(e))==null?void 0:B.tags,n=>(l(),c("span",Bs,a(n),1))),256))])])])])])])]),s("div",Es,[s("ul",Fs,[s("li",Ls,[s("a",{class:r(["nav-link",{active:i.route().current("classes.sessions-tab")}]),href:i.route("classes.sessions-tab",t(e).id)},[Os,o("Sessions")],10,Ps)]),zs,Js,Rs,Us,Ws,Xs,s("li",qs,[s("a",{class:r(["nav-link",{active:i.route().current("classes.update-tab")}]),href:i.route("classes.update-tab",t(e).id)},[Hs,o("Update")],10,Gs)])]),G(i.$slots,"default")])])])]}),_:3})],64)}}}),Qs={layout:Ks},rt=Object.assign(Qs,{__name:"Show",setup(z){return(e,m)=>(l(),c("div",null,[e.route().current("classes.sessions-tab")?(l(),L(U,{key:0})):P("",!0),e.route().current("classes.update-tab")?(l(),L(W,{key:1})):P("",!0)]))}});export{rt as default};
