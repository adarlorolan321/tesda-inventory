import{l as n}from"./lodash-abe34ea5.js";import{O as a}from"./app-1af38eaa.js";function u(){const o=n.debounce(e=>{a.get(route("user.validate","email"),{email:e},{onSuccess:r=>{console.log(r)}})},500),t=e=>{console.log("sssss"),e=e||window.event;var r=e.which?e.which:e.keyCode;if(r>31&&(r<48||r>57)&&r!==46)e.preventDefault();else if(r==46||r==190)e.preventDefault();else return!0},f=n.debounce((e,r,s,i)=>{if(e.indexOf("required")>=0&&(!s||s==""||s=="<p><br></p>")){r.setError(i,"This is a required field");return}if(!(e.indexOf("nullable")>=0&&(!s||s==""))){if(e.indexOf("number")>=0&&isNaN(s)){r.setError(i,`The ${i} must be a number`);return}if(e.indexOf("email")>=0){const d=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if((s||s!="")&&!d.test(s)){r.setError(i,"Invalid email address");return}}}},500);return{validateEmail:o,filterNonNumeric:t,validateForm:f}}export{u};
