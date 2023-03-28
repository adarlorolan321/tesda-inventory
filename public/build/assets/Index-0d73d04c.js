import{J as q,o as n,c as i,b as C,u as t,a as e,t as d,e as l,d as h,v,n as m,g as _,F as f,i as g,X as j,w as x,h as I,j as A,r as T}from"./app-925c1457.js";import{u as U}from"./Crud-e789a402.js";import{u as $}from"./Validate-8677eb81.js";import{A as B}from"./AdminLayout-8c6e03cd.js";import"./lodash-ffe2fab8.js";import"./toastr-55c4eb94.js";const M={class:"card card-action"},H={class:"card-header"},O=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"PARENTS")],-1),Q={class:"card-action-element"},z={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},J={class:"offcanvas-header"},R={id:"offCanvasFormLabel",class:"offcanvas-title"},X={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},G={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},K={class:"form-group mb-3"},W=e("label",{for:"name"},[_("First Name "),e("span",{class:"required"},"*")],-1),Y={class:"invalid-feedback"},Z={class:"form-group mb-3"},D=e("label",{for:"name"},[_("Last Name "),e("span",{class:"required"},"*")],-1),tt={class:"invalid-feedback"},et={class:"form-group mb-3"},st=e("label",{for:"name"},[_("Email "),e("span",{class:"required"},"*")],-1),ot={class:"invalid-feedback"},at={class:"form-group mb-3"},nt=e("label",{for:"name"},"Phone",-1),it={class:"invalid-feedback"},rt=["disabled"],lt={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},dt=["disabled"],ct={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},_t={class:"card-body"},ut={class:"row justify-content-between"},mt={class:"col-auto"},pt={class:"d-flex align-items-center gap-2"},ht=e("div",{class:"w-auto"},"Show",-1),vt={class:"flex-1"},ft=["value"],bt=["value"],gt=e("div",{class:"w-auto"},"entries",-1),yt={class:"col-auto"},kt={class:"d-flex gap-2 align-items-center"},wt={class:"flex-1"},Ct={class:"input-group input-group-merge"},xt=e("span",{class:"input-group-text",id:"basic-addon-search31"},[e("i",{class:"ti ti-search"})],-1),Et=["value"],Pt={class:"table-responsive text-nowrap"},Nt={class:"table"},Ft={class:"table-light",style:{"min-width":"200px"}},St={key:0,class:"ti ti-arrow-up"},Vt={key:1,class:"ti ti-arrow-down"},Lt={key:0,class:"ti ti-arrow-up"},qt={key:1,class:"ti ti-arrow-down"},jt={key:0,class:"ti ti-arrow-up"},It={key:1,class:"ti ti-arrow-down"},At=e("th",{style:{width:"150px"}},"Actions",-1),Tt={class:"table-border-bottom-0"},Ut={key:0},$t=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Bt=[$t],Mt={class:"d-flex gap-2"},Ht=e("i",{class:"ti ti-eye"},null,-1),Ot=["onClick"],Qt=e("i",{class:"ti ti-pencil"},null,-1),zt=[Qt],Jt=["onClick"],Rt=e("i",{class:"ti ti-trash"},null,-1),Xt=[Rt],Gt={key:0,class:"card-footer py-3 border-top"},Kt={class:"row justify-content-between"},Wt={class:"col-auto"},Yt={class:"table_info"},Zt={class:"col-auto"},Dt={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},te={class:"pagination mb-0"},ee={class:"page-item"},se=["innerHTML"],oe={layout:B},ue=Object.assign(oe,{__name:"Index",setup(ae){q();const E={id:null,first_name:null,last_name:null,phone:null,email:null,status:!0,role:"Client",profile_photo:null},P="user.parents",{validateForm:p}=$();let{isLoadingComponents:ne,paginatedData:c,form:a,createPromise:y,updatePromise:k,deletePromise:N,handleCreate:w,serverQuery:r,handleServerQuery:u,handleEdit:F,formState:b}=U(E,P);return(S,o)=>{const V=T("inertia-link");return n(),i(f,null,[C(t(j),{title:"Parents"}),e("div",M,[e("div",H,[O,e("div",Q,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...s)=>t(w)&&t(w)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Parent "),e("div",z,[e("div",J,[e("h5",R,d(t(b)=="create"?"Add":"Update")+" Parent ",1),t(a).processing?l("",!0):(n(),i("button",X))]),e("div",G,[e("div",K,[W,h(e("input",{type:"text",id:"first_name",class:m(["form-control",{"is-invalid":t(a).errors.first_name}]),"onUpdate:modelValue":o[1]||(o[1]=s=>t(a).first_name=s),onInput:o[2]||(o[2]=s=>{t(a).clearErrors("first_name"),t(p)(["required"],t(a),s.target.value,"first_name")}),placeholder:"Enter First Name"},null,34),[[v,t(a).first_name]]),e("div",Y,d(t(a).errors.first_name),1)]),e("div",Z,[D,h(e("input",{type:"text",id:"last_name",class:m(["form-control",{"is-invalid":t(a).errors.last_name}]),"onUpdate:modelValue":o[3]||(o[3]=s=>t(a).last_name=s),onInput:o[4]||(o[4]=s=>{t(a).clearErrors("last_name"),t(p)(["required"],t(a),s.target.value,"last_name")}),placeholder:"Enter Last Name"},null,34),[[v,t(a).last_name]]),e("div",tt,d(t(a).errors.last_name),1)]),e("div",et,[st,h(e("input",{type:"text",id:"email",class:m(["form-control",{"is-invalid":t(a).errors.email}]),"onUpdate:modelValue":o[5]||(o[5]=s=>t(a).email=s),onInput:o[6]||(o[6]=s=>{t(a).clearErrors("email"),t(p)(["required","email"],t(a),s.target.value,"email")}),placeholder:"Enter Email"},null,34),[[v,t(a).email]]),e("div",ot,d(t(a).errors.email),1)]),e("div",at,[nt,h(e("input",{type:"text",id:"phone",class:m(["form-control",{"is-invalid":t(a).errors.phone}]),"onUpdate:modelValue":o[7]||(o[7]=s=>t(a).phone=s),onInput:o[8]||(o[8]=s=>{t(a).clearErrors("phone"),t(p)(["number"],t(a),s.target.value,"phone")}),placeholder:"Enter Phone"},null,34),[[v,t(a).phone]]),e("div",it,d(t(a).errors.phone),1)]),t(b)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[9]||(o[9]=(...s)=>t(y)&&t(y)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(n(),i("span",lt)):l("",!0),_(" Save ")],8,rt)):l("",!0),t(b)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[10]||(o[10]=(...s)=>t(k)&&t(k)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(n(),i("span",ct)):l("",!0),_(" Save changes ")],8,dt)):l("",!0)])])])]),e("div",_t,[e("div",ut,[e("div",mt,[e("div",pt,[ht,e("div",vt,[e("select",{class:"form-select",value:t(r).perPage,onInput:o[11]||(o[11]=s=>t(u)("perPage",s.target.value))},[(n(),i(f,null,g([5,10,25,50,100],s=>e("option",{value:String(s)},d(s),9,bt)),64))],40,ft)]),gt])]),e("div",yt,[e("div",kt,[e("div",wt,[e("div",Ct,[xt,e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(r).query,onInput:o[12]||(o[12]=s=>t(u)("query",s.target.value))},null,40,Et)])])])])])]),e("div",Pt,[e("table",Nt,[e("thead",Ft,[e("tr",null,[e("th",{class:"sortable",onClick:o[13]||(o[13]=s=>t(u)("sort","name"))},[_(" Name "),t(r).sort=="name"&&t(r).order=="desc"?(n(),i("i",St)):l("",!0),t(r).sort=="name"&&t(r).order=="asc"?(n(),i("i",Vt)):l("",!0)]),e("th",{class:"sortable",onClick:o[14]||(o[14]=s=>t(u)("sort","email"))},[_(" Email "),t(r).sort=="email"&&t(r).order=="desc"?(n(),i("i",Lt)):l("",!0),t(r).sort=="email"&&t(r).order=="asc"?(n(),i("i",qt)):l("",!0)]),e("th",{class:"sortable",onClick:o[15]||(o[15]=s=>t(u)("sort","phone"))},[_(" Phone "),t(r).sort=="phone"&&t(r).order=="desc"?(n(),i("i",jt)):l("",!0),t(r).sort=="phone"&&t(r).order=="asc"?(n(),i("i",It)):l("",!0)]),At])]),e("tbody",Tt,[t(c).data.length<=0?(n(),i("tr",Ut,Bt)):l("",!0),(n(!0),i(f,null,g(t(c).data,s=>(n(),i("tr",{key:s},[e("td",null,d(s.name),1),e("td",null,d(s.email),1),e("td",null,d(s.phone),1),e("td",null,[e("div",Mt,[C(V,{class:"btn btn-icon btn-label-info waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-info","data-bs-original-title":"View",href:S.route("user.parents.show",s.id)},{default:x(()=>[Ht]),_:2},1032,["href"]),e("a",{class:"btn btn-icon btn-label-primary waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-primary","data-bs-original-title":"Edit",onClick:L=>t(F)(s),href:"javascript:void(0);"},zt,8,Ot),e("a",{class:"btn btn-icon btn-label-danger waves-effect","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-custom-class":"tooltip-danger","data-bs-original-title":"Delete",href:"javascript:void(0);",onClick:L=>t(N)(s.id)},Xt,8,Jt)])])]))),128))])])]),t(c)&&t(c).meta.links?(n(),i("div",Gt,[e("div",Kt,[e("div",Wt,[e("div",Yt," Showing "+d(t(c).meta.from)+" to "+d(t(c).meta.to)+" of "+d(t(c).meta.total)+" entries ",1)]),e("div",Zt,[e("nav",Dt,[e("ul",te,[(n(!0),i(f,null,g(t(c).meta.links,s=>(n(),i("li",ee,[(n(),I(A(s.url?"inertia-link":"button"),{class:m(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:x(()=>[e("span",{innerHTML:s.label},null,8,se)]),_:2},1032,["class","href"]))]))),256))])])])])])):l("",!0)])],64)}}});export{ue as default};
