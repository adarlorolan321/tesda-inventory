import{l as s}from"./Crud-1399b45d.js";import{O as a}from"./app-5b526e47.js";function f(){return{validateEmail:s.debounce(e=>{a.get(route("user.validate","email"),{email:e},{onSuccess:r=>{console.log(r)}})},500),filterNonNumeric:e=>{console.log("sssss"),e=e||window.event;var r=e.which?e.which:e.keyCode;if(r>31&&(r<48||r>57)&&r!==46)e.preventDefault();else if(r==46||r==190)e.preventDefault();else return!0},validateForm:(e,r,i,o)=>{e.indexOf("required")>=0&&(!i||i=="")&&(r.errors[o]="This is a required field"),e.indexOf("number")>=0&&isNaN(i)&&(r.errors[o]=`The ${o} must be a number`)}}}export{f as u};
