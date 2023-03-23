import{J as $,c as n,a as s,u as e,t as d,f as l,g as p,v as h,n as m,e as _,F as f,h as b,o as i,b as C,w as x,r as V}from"./app-ea3047b7.js";import{u as I}from"./Crud-2fc11598.js";import{A as j}from"./AdminLayout-4b3c78af.js";const A={class:"card card-action"},T={class:"card-header"},q=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"PARENTS")],-1),U={class:"card-action-element"},B={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},M={class:"offcanvas-header"},H={id:"offCanvasFormLabel",class:"offcanvas-title"},O={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Q={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},z={class:"form-group mb-3"},J=s("label",{for:"name"},[_("First Name "),s("span",{class:"required"},"*")],-1),R={class:"invalid-feedback"},G={class:"form-group mb-3"},K=s("label",{for:"name"},[_("Last Name "),s("span",{class:"required"},"*")],-1),W={class:"invalid-feedback"},X={class:"form-group mb-3"},Y=s("label",{for:"name"},[_("Email "),s("span",{class:"required"},"*")],-1),Z={class:"invalid-feedback"},D={class:"form-group mb-3"},ss=s("label",{for:"name"},"Phone",-1),es={class:"invalid-feedback"},ts=["disabled"],os={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},as=["disabled"],ns={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},is={class:"card-body"},rs={class:"row justify-content-between"},ls={class:"col-auto"},ds={class:"d-flex align-items-center gap-2"},cs=s("div",{class:"w-auto"},"Show",-1),_s={class:"flex-1"},us=["value"],ms=["value"],ps=s("div",{class:"w-auto"},"entries",-1),hs={class:"col-auto"},vs={class:"d-flex gap-2 align-items-center"},fs=s("div",{class:"w-auto"},"Search:",-1),bs={class:"flex-1"},gs=["value"],ys={class:"table-responsive text-nowrap"},ks={class:"table"},ws={class:"table-light"},Cs={key:0,class:"ti ti-arrow-up"},xs={key:1,class:"ti ti-arrow-down"},Es={key:0,class:"ti ti-arrow-up"},Ns={key:1,class:"ti ti-arrow-down"},Ps={key:0,class:"ti ti-arrow-up"},Ss={key:1,class:"ti ti-arrow-down"},Fs=s("th",null,"Actions",-1),Ls={class:"table-border-bottom-0"},$s={key:0},Vs=s("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Is=[Vs],js={class:"d-flex gap-2"},As=s("i",{class:"ti ti-eye"},null,-1),Ts=["onClick"],qs=s("i",{class:"ti ti-pencil"},null,-1),Us=[qs],Bs=["onClick"],Ms=s("i",{class:"ti ti-trash"},null,-1),Hs=[Ms],Os={key:0,class:"card-footer py-3 border-top"},Qs={class:"row justify-content-between"},zs={class:"col-auto"},Js={class:"table_info"},Rs={class:"col-auto"},Gs={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ks={class:"pagination mb-0"},Ws={class:"page-item"},Xs=["innerHTML"],Ys={layout:j},oe=Object.assign(Ys,{__name:"Index",setup(Zs){$();const E={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:"Client",profile_photo:null},N="user.parents";let{isLoadingComponents:Ds,paginatedData:c,form:a,createPromise:g,updatePromise:y,deletePromise:P,handleCreate:k,serverQuery:r,handleServerQuery:u,handleEdit:S,formState:v}=I(E,N);return(F,o)=>{const w=V("inertia-link");return i(),n("div",A,[s("div",T,[q,s("div",U,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>e(k)&&e(k)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Parent "),s("div",B,[s("div",M,[s("h5",H,d(e(v)=="create"?"Add":"Update")+" Parent ",1),e(a).processing?l("",!0):(i(),n("button",O))]),s("div",Q,[s("div",z,[J,p(s("input",{type:"text",id:"first_name",class:m(["form-control",{"is-invalid":e(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).first_name=t),onInput:o[2]||(o[2]=t=>e(a).clearErrors("first_name")),placeholder:"Enter First Name"},null,34),[[h,e(a).first_name]]),s("div",R,d(e(a).errors.first_name),1)]),s("div",G,[K,p(s("input",{type:"text",id:"last_name",class:m(["form-control",{"is-invalid":e(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).last_name=t),onInput:o[4]||(o[4]=t=>e(a).clearErrors("last_name")),placeholder:"Enter Last Name"},null,34),[[h,e(a).last_name]]),s("div",W,d(e(a).errors.last_name),1)]),s("div",X,[Y,p(s("input",{type:"text",id:"email",class:m(["form-control",{"is-invalid":e(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).email=t),onInput:o[6]||(o[6]=t=>e(a).clearErrors("email")),placeholder:"Enter Email"},null,34),[[h,e(a).email]]),s("div",Z,d(e(a).errors.email),1)]),s("div",D,[ss,p(s("input",{type:"text",id:"phone",class:m(["form-control",{"is-invalid":e(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=t=>e(a).phone=t),onInput:o[8]||(o[8]=t=>e(a).clearErrors("phone")),placeholder:"Enter Phone"},null,34),[[h,e(a).phone]]),s("div",es,d(e(a).errors.phone),1)]),e(v)=="create"?(i(),n("button",{key:0,class:"btn btn-primary",onClick:o[9]||(o[9]=(...t)=>e(g)&&e(g)(...t)),disabled:e(a).processing},[e(a).processing?(i(),n("span",os)):l("",!0),_(" Save ")],8,ts)):l("",!0),e(v)=="update"?(i(),n("button",{key:1,class:"btn btn-primary",onClick:o[10]||(o[10]=(...t)=>e(y)&&e(y)(...t)),disabled:e(a).processing},[e(a).processing?(i(),n("span",ns)):l("",!0),_(" Save changes ")],8,as)):l("",!0)])])])]),s("div",is,[s("div",rs,[s("div",ls,[s("div",ds,[cs,s("div",_s,[s("select",{class:"form-select",value:e(r).perPage,onInput:o[11]||(o[11]=t=>e(u)("perPage",t.target.value))},[(i(),n(f,null,b([5,10,25,50,100],t=>s("option",{value:String(t)},d(t),9,ms)),64))],40,us)]),ps])]),s("div",hs,[s("div",vs,[fs,s("div",bs,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(r).query,onInput:o[12]||(o[12]=t=>e(u)("query",t.target.value))},null,40,gs)])])])])]),s("div",ys,[s("table",ks,[s("thead",ws,[s("tr",null,[s("th",{class:"sortable",onClick:o[13]||(o[13]=t=>e(u)("sort","name"))},[_(" Name "),e(r).sort=="name"&&e(r).order=="desc"?(i(),n("i",Cs)):l("",!0),e(r).sort=="name"&&e(r).order=="asc"?(i(),n("i",xs)):l("",!0)]),s("th",{class:"sortable",onClick:o[14]||(o[14]=t=>e(u)("sort","email"))},[_(" Email "),e(r).sort=="email"&&e(r).order=="desc"?(i(),n("i",Es)):l("",!0),e(r).sort=="email"&&e(r).order=="asc"?(i(),n("i",Ns)):l("",!0)]),s("th",{class:"sortable",onClick:o[15]||(o[15]=t=>e(u)("sort","phone"))},[_(" Phone "),e(r).sort=="phone"&&e(r).order=="desc"?(i(),n("i",Ps)):l("",!0),e(r).sort=="phone"&&e(r).order=="asc"?(i(),n("i",Ss)):l("",!0)]),Fs])]),s("tbody",Ls,[e(c).data.length<=0?(i(),n("tr",$s,Is)):l("",!0),(i(!0),n(f,null,b(e(c).data,t=>(i(),n("tr",{key:t},[s("td",null,d(t.name),1),s("td",null,d(t.email),1),s("td",null,d(t.phone),1),s("td",null,[s("div",js,[C(w,{class:"btn btn-icon btn-label-info waves-effect",href:F.route("user.parents.show",t.id)},{default:x(()=>[As]),_:2},1032,["href"]),s("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:L=>e(S)(t),href:"javascript:void(0);"},Us,8,Ts),s("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:L=>e(P)(t.id)},Hs,8,Bs)])])]))),128))])])]),e(c)&&e(c).meta.links?(i(),n("div",Os,[s("div",Qs,[s("div",zs,[s("div",Js," Showing "+d(e(c).meta.from)+" to "+d(e(c).meta.to)+" of "+d(e(c).meta.total)+" entries ",1)]),s("div",Rs,[s("nav",Gs,[s("ul",Ks,[(i(!0),n(f,null,b(e(c).meta.links,t=>(i(),n("li",Ws,[C(w,{class:m(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:x(()=>[s("span",{innerHTML:t.label},null,8,Xs)]),_:2},1032,["class","href"])]))),256))])])])])])):l("",!0)])}}});export{oe as default};
