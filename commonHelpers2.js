import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";const i=(o,e)=>new Promise((t,r)=>{setTimeout(()=>{o==="fulfilled"?(s.show({backgroundColor:"rgb(44, 201, 13)",message:`✅ Fulfilled promise in ${e} ms`}),t()):(s.show({backgroundColor:"red",message:`❌ Rejected promise in ${e} ms`}),r())},e)});document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const e=o.target,t=e.querySelector('input[name="delay"]').value,r=e.querySelector('input[name="state"]:checked').value;i(r,t)});
//# sourceMappingURL=commonHelpers2.js.map
