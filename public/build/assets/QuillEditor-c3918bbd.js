import{_ as u,o as c,c as r,d as l,A as e,a as s,F as d,z as b}from"./app-1a00f368.js";const q={props:{modelValue:{default:null},defaultValue:{default:null}},data:function(){return{isLoading:!0,editor:null,loadedValue:null}},mounted:function(){this.setContent(),this.isLoading=!0,setTimeout(()=>{this.initialize(),this.isLoading=!1},1e3)},methods:{initialize:function(){var t=this;t.editor=new Quill(this.$refs.quillEditor,{bounds:this.$refs.quillEditor,modules:{formula:!0,toolbar:this.$refs.quillEditorToolbar},theme:"snow"}),t.editor.on("text-change",function(a,n,i){var o=t.$refs.quillEditor.querySelector(".ql-editor").innerHTML;t.$emit("update:modelValue",o)})},setContent:function(){this.loadedValue=this.defaultValue,console.log("not loading")}}},f={ref:"quillEditorToolbar"},p=b('<span class="ql-formats"><select class="ql-font"></select><select class="ql-size"></select></span><span class="ql-formats"><button class="ql-bold"></button><button class="ql-italic"></button><button class="ql-underline"></button><button class="ql-strike"></button></span><span class="ql-formats"><select class="ql-color"></select><select class="ql-background"></select></span><span class="ql-formats"><button class="ql-script" value="sub"></button><button class="ql-script" value="super"></button></span><span class="ql-formats"><button class="ql-header" value="1"></button><button class="ql-header" value="2"></button><button class="ql-blockquote"></button><button class="ql-code-block"></button></span><span class="ql-formats"><button class="ql-clean"></button></span>',6),h=[p],_={ref:"quillEditor"},m=["innerHTML"],g={class:"loading-quill"};function v(t,a,n,i,o,L){return c(),r(d,null,[l(s("div",f,h,512),[[e,!t.isLoading]]),l(s("div",_,[s("p",{innerHTML:t.loadedValue},null,8,m)],512),[[e,!t.isLoading]]),l(s("div",g,"Loading",512),[[e,t.isLoading]])],64)}const V=u(q,[["render",v]]);export{V as Q};
