import{l as n}from"./lodash-2b88457b.js";import{O as a}from"./app-ab2df9e9.js";function h(){const o=n.debounce(e=>{a.get(route("user.validate","email"),{email:e},{onSuccess:r=>{console.log(r)}})},500),t=e=>{console.log("sssss"),e=e||window.event;var r=e.which?e.which:e.keyCode;if(r>31&&(r<48||r>57)&&r!==46)e.preventDefault();else if(r==46||r==190)e.preventDefault();else return!0},f=n.debounce((e,r,i,s,{option_key:c,option_value:m})=>{if(e.indexOf("required")>=0&&(!i||i=="")){r.setError(s,"This is a required field");return}if(e.indexOf("min")>=0,!(e.indexOf("nullable")>=0&&(!i||i==""))){if(e.indexOf("number")>=0&&isNaN(i)){r.setError(s,`The ${s} must be a number`);return}if(e.indexOf("email")>=0){const d=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if((i||i!="")&&!d.test(i)){r.setError(s,"Invalid email address");return}}}},500);return{validateEmail:o,filterNonNumeric:t,validateForm:f}}export{h as u};