var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return null==e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)?0:1}function o(e){e.preventDefault();let t=document.getElementById("url").value;Client.checkForURL(t)?r("/addData",{url:t}).then((e=>{document.getElementById("polarity").innerHTML=e.score_tag,document.getElementById("agreement").innerHTML=e.agreement,document.getElementById("subjectivity").innerHTML=e.subjectivity,document.getElementById("confidence").innerHTML=e.confidence,document.getElementById("irony").innerHTML=e.irony})):alert("Please insert a valid url")}e.r(t),e.d(t,{checkForURL:()=>n,handleSubmit:()=>o});const r=async(e="",t={})=>{console.log(t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log(e),e}catch(e){console.log("error",e)}};console.log(n),Client=t})();