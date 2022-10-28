function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}var e={};t(e,"Treeselect",(function(){return ue}),(function(t){return ue=t}));var s={};t(s,"TreeselectInput",(function(){return G}),(function(t){return G=t}));const i={arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',arrowDown:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',attention:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',partialCheck:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'},l=(t,e)=>{if(e.innerHTML="","string"==typeof t)e.innerHTML=t;else{const s=t.cloneNode(!0);e.appendChild(s)}},n=t=>{const e=t?Object.assign({},t):{};return Object.keys(i).forEach((t=>{e[t]||(e[t]=i[t])})),e};var o,a,c,r,h,d,u,p,m,f,v,w,g,b,E,k,y,L,C,_,x,S,T,O,A,B,H,P,N=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},M=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};class G{focus(){setTimeout((()=>N(this,c,"f").focus()),0)}blur(){this.isOpened&&N(this,o,"m",v).call(this),this.clearSearch(),N(this,c,"f").blur()}updateValue(t){this.value=t,N(this,o,"m",u).call(this),N(this,o,"m",f).call(this)}removeItem(t){this.value=this.value.filter((e=>e.id!==t)),N(this,o,"m",P).call(this),N(this,o,"m",u).call(this),N(this,o,"m",f).call(this)}clear(){this.value=[],N(this,o,"m",P).call(this),N(this,o,"m",u).call(this),this.clearSearch()}openClose(){N(this,o,"m",v).call(this)}clearSearch(){this.searchText="",this.searchCallback(""),N(this,o,"m",f).call(this)}constructor({value:t,showTags:e,tagsCountText:s,clearable:i,isAlwaysOpened:l,searchable:n,placeholder:u,disabled:p,isSingleSelect:m,id:f,iconElements:v,inputCallback:g,searchCallback:E,openCallback:k,closeCallback:y,keydownCallback:L,focusCallback:C,blurCallback:x}){o.add(this),a.set(this,void 0),c.set(this,void 0),r.set(this,void 0),h.set(this,void 0),this.value=t,this.showTags=e,this.tagsCountText=s,this.searchable=n,this.placeholder=u,this.clearable=i,this.isAlwaysOpened=l,this.disabled=p,this.isSingleSelect=m,this.id=f,this.iconElements=v,this.isOpened=!1,this.searchText="",M(this,a,N(this,o,"m",b).call(this),"f"),M(this,c,N(this,o,"m",_).call(this),"f"),M(this,r,N(this,o,"m",T).call(this),"f"),M(this,h,null,"f"),this.inputCallback=g,this.searchCallback=E,this.openCallback=k,this.closeCallback=y,this.keydownCallback=L,this.focusCallback=C,this.blurCallback=x,this.srcElement=N(this,o,"m",w).call(this,N(this,a,"f"),N(this,c,"f"),N(this,r,"f")),N(this,o,"m",d).call(this)}}a=new WeakMap,c=new WeakMap,r=new WeakMap,h=new WeakMap,o=new WeakSet,d=function(){N(this,o,"m",u).call(this),N(this,o,"m",f).call(this),N(this,o,"m",p).call(this)},u=function(){N(this,a,"f").innerHTML="",this.showTags?N(this,a,"f").append(...N(this,o,"m",E).call(this)):N(this,a,"f").appendChild(N(this,o,"m",C).call(this)),N(this,a,"f").appendChild(N(this,c,"f"))},p=function(){const t=[];N(this,r,"f").innerHTML="",this.clearable&&t.push(N(this,o,"m",O).call(this)),this.isAlwaysOpened||t.push(N(this,o,"m",B).call(this,this.isOpened)),t.length&&N(this,r,"f").append(...t)},m=function(){if(!this.isAlwaysOpened&&N(this,h,"f")){const t=this.isOpened?this.iconElements.arrowUp:this.iconElements.arrowDown;l(t,N(this,h,"f"))}},f=function(){var t;(null===(t=this.value)||void 0===t?void 0:t.length)?(N(this,c,"f").removeAttribute("placeholder"),this.srcElement.classList.remove("treeselect-input--value-not-selected")):(N(this,c,"f").setAttribute("placeholder",this.placeholder),this.srcElement.classList.add("treeselect-input--value-not-selected")),this.searchable?this.srcElement.classList.remove("treeselect-input--unsearchable"):this.srcElement.classList.add("treeselect-input--unsearchable"),this.isSingleSelect?this.srcElement.classList.add("treeselect-input--is-single-select"):this.srcElement.classList.remove("treeselect-input--is-single-select"),N(this,c,"f").value=this.searchText},v=function(){this.isOpened=!this.isOpened,N(this,o,"m",m).call(this),this.isOpened?this.openCallback():this.closeCallback()},w=function(t,e,s){const i=document.createElement("div");return i.classList.add("treeselect-input"),i.setAttribute("tabindex","-1"),i.addEventListener("mousedown",(t=>N(this,o,"m",g).call(this,t))),i.addEventListener("focus",(()=>this.focusCallback()),!0),i.addEventListener("blur",(()=>this.blurCallback()),!0),t.appendChild(e),i.append(t,s),i},g=function(t){t.preventDefault(),t.stopPropagation(),this.isOpened||N(this,o,"m",v).call(this),this.focus()},b=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__tags"),t},E=function(){return this.value.map((t=>{const e=document.createElement("div");e.classList.add("treeselect-input__tags-element"),e.setAttribute("tabindex","-1"),e.setAttribute("tag-id",t.id.toString()),e.setAttribute("title",t.name);const s=N(this,o,"m",y).call(this,t.name),i=N(this,o,"m",L).call(this);return e.addEventListener("mousedown",(e=>N(this,o,"m",k).call(this,e,t.id))),e.append(s,i),e}))},k=function(t,e){t.preventDefault(),t.stopPropagation(),this.removeItem(e),this.focus()},y=function(t){const e=document.createElement("span");return e.classList.add("treeselect-input__tags-name"),e.innerHTML=t,e},L=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__tags-cross"),l(this.iconElements.cross,t),t},C=function(){const t=document.createElement("span");if(t.classList.add("treeselect-input__tags-count"),!this.value.length)return t.innerHTML="",t.setAttribute("title",""),t;const e=1===this.value.length?this.value[0].name:`${this.value.length} ${this.tagsCountText}`;return t.innerHTML=e,t.setAttribute("title",e),t},_=function(){const t=document.createElement("input");return t.classList.add("treeselect-input__edit"),t.setAttribute("id",this.id),this.disabled&&t.setAttribute("tabindex","-1"),t.addEventListener("keydown",(t=>N(this,o,"m",x).call(this,t))),t.addEventListener("input",(e=>N(this,o,"m",S).call(this,e,t))),t},x=function(t){t.stopPropagation(),"Backspace"!==t.key||this.searchText.length||!this.value.length||this.showTags||this.clear(),"Backspace"===t.key&&!this.searchText.length&&this.value.length&&this.removeItem(this.value[this.value.length-1].id),"Space"!==t.code||this.searchText&&this.searchable||N(this,o,"m",v).call(this),"Enter"===t.key&&t.preventDefault(),this.keydownCallback(t.key),"Tab"!==t.key&&this.focus()},S=function(t,e){t.stopPropagation();const s=this.searchText,i=e.value.trim();if(0!==s.length||0!==i.length){if(this.searchable){const e=t.target.value;this.searchCallback(e),this.isOpened||N(this,o,"m",v).call(this)}else e.value="";this.searchText=e.value}else e.value=""},T=function(){const t=document.createElement("div");return t.classList.add("treeselect-input__operators"),t},O=function(){const t=document.createElement("span");return t.classList.add("treeselect-input__clear"),t.setAttribute("tabindex","-1"),l(this.iconElements.clear,t),t.addEventListener("mousedown",(t=>N(this,o,"m",A).call(this,t))),t},A=function(t){t.preventDefault(),t.stopPropagation(),(this.searchText.length||this.value.length)&&this.clear(),this.focus()},B=function(t){M(this,h,document.createElement("span"),"f"),N(this,h,"f").classList.add("treeselect-input__arrow");const e=t?this.iconElements.arrowUp:this.iconElements.arrowDown;return l(e,N(this,h,"f")),N(this,h,"f").addEventListener("mousedown",(t=>N(this,o,"m",H).call(this,t))),N(this,h,"f")},H=function(t){t.stopPropagation(),t.preventDefault(),this.focus(),N(this,o,"m",v).call(this)},P=function(){this.inputCallback(this.value)};var W={};t(W,"TreeselectList",(function(){return Mt}),(function(t){return Mt=t}));const V=(t,e,s="",i=0)=>t.reduce(((t,l)=>{var n;const o=!!(null===(n=l.children)||void 0===n?void 0:n.length),a=i>=e&&o,c=i>e;if(t.push({id:l.value,name:l.name,childOf:s,isGroup:o,checked:!1,isPartialChecked:!1,level:i,isClosed:a,hidden:c}),o){const s=V(l.children,e,l.value,i+1);t.push(...s)}return t}),[]),j=({id:t,checked:e},s)=>{s.forEach((i=>{i.childOf===t&&(i.checked=null==e||e,i.isPartialChecked=!1,i.isGroup&&j(i,s))}))},q=(t,e)=>{const s=e.find((e=>e.id===t)),i=e.filter((t=>t.childOf===(null==s?void 0:s.id)));if(!s)return;const l=i.every((t=>t.checked)),n=i.some((t=>t.isPartialChecked||t.checked))&&!l,o=!l&&!n;l&&(s.checked=!0,s.isPartialChecked=!1),n&&(s.checked=!1,s.isPartialChecked=!0),o&&(s.checked=!1,s.isPartialChecked=!1),s.childOf&&q(s.childOf,e)},D=({id:t,isGroup:e,childOf:s,checked:i},l)=>{e&&j({id:t,checked:i},l),s&&q(s,l)},I=(t,e)=>e.reduce(((s,i)=>(i.childOf===t&&(s.push(i),i.isGroup&&s.push(...I(i.id,e))),s)),[]),$=(t,e)=>e.reduce(((s,i)=>(i.id===t&&(s.push(i),i.childOf&&s.push(...$(i.childOf,e))),s)),[]),R=t=>{const{onlyGroupsIds:e,allItems:s}=t.reduce(((t,e)=>e.checked?(e.isGroup&&t.onlyGroupsIds.push(e.id),t.allItems.push(e),t):t),{onlyGroupsIds:[],allItems:[]});return s.filter((t=>!e.some((e=>e===t.childOf))))},z=(t,{id:e,isClosed:s})=>{t.filter((t=>t.childOf===e)).forEach((e=>{e.hidden=null!=s&&s,e.isGroup&&!e.isClosed&&z(t,{id:e.id,isClosed:s})}))},U=(t,e)=>{const s=((t,e)=>t.reduce(((s,i)=>{if(i.name.toLowerCase().includes(e.toLowerCase())){if(s.push(i),i.isGroup){const e=I(i.id,t);s.push(...e)}if(i.childOf){const e=$(i.childOf,t);s.push(...e)}}return s}),[]))(t,e);t.forEach((e=>{s.some((t=>t.id===e.id))?(e.isGroup&&(e.isClosed=!1,z(t,e)),e.hidden=!1):e.hidden=!0}))},Y=(t,e)=>{(t=>{t.forEach((t=>{t.checked=!1,t.isPartialChecked=!1}))})(e);e.filter((e=>t.some((t=>t===e.id)))).forEach((t=>{t.checked=!0,t.isPartialChecked=!1,D(t,e)}))};var F,J,K,X,Q,Z,tt,et,st,it,lt,nt,ot,at,ct,rt,ht,dt,ut,pt,mt,ft,vt,wt,gt,bt,Et,kt,yt=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},Lt=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};let Ct=[];const _t=(t,e,s)=>{t.forEach((i=>{const l=e.querySelector(`[input-id="${i.id}"]`),n=Pt(l);l.checked=i.checked,xt(i,n),St(i,n),Tt(i,n,s),Ot(i,n),Bt(i,n,t),At(i,l,s)})),Ht(t,e)},xt=(t,e)=>{t.checked?e.classList.add("treeselect-list__item--checked"):e.classList.remove("treeselect-list__item--checked"),Array.isArray(Ct)&&Ct[0]===t.id?e.classList.add("treeselect-list__item--single-selected"):e.classList.remove("treeselect-list__item--single-selected")},St=(t,e)=>{t.isPartialChecked?e.classList.add("treeselect-list__item--partial-checked"):e.classList.remove("treeselect-list__item--partial-checked")},Tt=(t,e,s)=>{if(t.isGroup){const i=e.querySelector(".treeselect-list__item-icon"),n=t.isClosed?s.arrowRight:s.arrowDown;l(n,i),t.isClosed?e.classList.add("treeselect-list__item--closed"):e.classList.remove("treeselect-list__item--closed")}},Ot=(t,e)=>{t.hidden?e.classList.add("treeselect-list__item--hidden"):e.classList.remove("treeselect-list__item--hidden")},At=(t,e,s)=>{const i=e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");t.checked?l(s.check,i):t.isPartialChecked?l(s.partialCheck,i):i.innerHTML=""},Bt=(t,e,s)=>{if(0===t.level){const i=s.some((e=>e.isGroup&&e.level===t.level)),l=!t.isGroup&&i?"20px":"5px";e.style.paddingLeft=t.isGroup?"0":l}else e.style.paddingLeft=t.isGroup?20*t.level+"px":20*t.level+20+"px";e.setAttribute("level",t.level.toString()),e.setAttribute("group",t.isGroup.toString())},Ht=(t,e)=>{const s=t.some((t=>!t.hidden)),i=e.querySelector(".treeselect-list__empty");s?i.classList.add("treeselect-list__empty--hidden"):i.classList.remove("treeselect-list__empty--hidden")},Pt=t=>t.parentNode.parentNode,Nt=(t,e)=>e.find((e=>e.id.toString()===t));class Mt{updateValue(t){var e,s,i,l;this.value=t,Ct=this.isSingleSelect?this.value:[],e=t,s=this.flattedOptions,i=this.srcElement,l=this.iconElements,Y(e,s),_t(s,i,l),yt(this,F,"m",Et).call(this)}updateSearchValue(t){if(t===this.searchText)return;const e=""===this.searchText&&""!==t;this.searchText=t,e&&(this.flattedOptionsBeforeSearch=JSON.parse(JSON.stringify(this.flattedOptions))),""===this.searchText&&(this.flattedOptions=this.flattedOptionsBeforeSearch.map((t=>{const e=this.flattedOptions.find((e=>e.id===t.id));return e.isClosed=t.isClosed,e.hidden=t.hidden,e})),this.flattedOptionsBeforeSearch=[]),this.searchText&&U(this.flattedOptions,t),_t(this.flattedOptions,this.srcElement,this.iconElements),this.focusFirstListElement()}callKeyAction(t){Lt(this,K,!1,"f");const e=this.srcElement.querySelector(".treeselect-list__item--focused");"Enter"===t&&e&&e.dispatchEvent(new Event("mousedown")),"ArrowLeft"!==t&&"ArrowRight"!==t||yt(this,F,"m",X).call(this,e,t),"ArrowDown"!==t&&"ArrowUp"!==t||yt(this,F,"m",Q).call(this,e,t)}focusFirstListElement(){const t="treeselect-list__item--focused",e=this.srcElement.querySelector(`.${t}`),s=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Pt(t)).display));if(!s.length)return;e&&e.classList.remove(t);Pt(s[0]).classList.add(t)}constructor({options:t,value:e,openLevel:s,listSlotHtmlComponent:i,emptyText:l,isSingleSelect:n,iconElements:o,showCount:a,disabledBranchNode:c,inputCallback:r,arrowClickCallback:h,mouseupCallback:d}){F.add(this),J.set(this,null),K.set(this,!0),this.options=t,this.value=e,this.openLevel=null!=s?s:0,this.listSlotHtmlComponent=null!=i?i:null,this.emptyText=null!=l?l:"No results found...",this.isSingleSelect=null!=n&&n,this.showCount=null!=a&&a,this.disabledBranchNode=null!=c&&c,this.iconElements=o,this.searchText="",this.flattedOptions=V(this.options,this.openLevel),this.flattedOptionsBeforeSearch=this.flattedOptions,this.selectedNodes={nodes:[],groupedNodes:[]},this.srcElement=yt(this,F,"m",Z).call(this),this.inputCallback=r,this.arrowClickCallback=h,this.mouseupCallback=d,this.updateValue(this.value),(t=>{const{duplications:e}=t.reduce(((t,e)=>(t.allItems.some((t=>t.toString()===e.id.toString()))&&t.duplications.push(e.id),t.allItems.push(e.id),t)),{duplications:[],allItems:[]});e.length&&console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`)})(this.flattedOptions)}}J=new WeakMap,K=new WeakMap,F=new WeakSet,X=function(t,e){if(!t)return;const s=t.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"),i=Nt(s,this.flattedOptions),l=t.querySelector(".treeselect-list__item-icon");"ArrowLeft"===e&&!i.isClosed&&i.isGroup&&l.dispatchEvent(new Event("mousedown")),"ArrowRight"===e&&i.isClosed&&i.isGroup&&l.dispatchEvent(new Event("mousedown"))},Q=function(t,e){var s;const i=Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter((t=>"none"!==window.getComputedStyle(Pt(t)).display));if(i.length)if(t){const t=i.findIndex((t=>Pt(t).classList.contains("treeselect-list__item--focused")));Pt(i[t]).classList.remove("treeselect-list__item--focused");const l="ArrowDown"===e?t+1:t-1,n="ArrowDown"===e?0:i.length-1,o=null!==(s=i[l])&&void 0!==s?s:i[n],a=!i[l],c=Pt(o);c.classList.add("treeselect-list__item--focused");const r=this.srcElement.getBoundingClientRect(),h=c.getBoundingClientRect();if(a&&"ArrowDown"===e)return void this.srcElement.scroll(0,0);if(a&&"ArrowUp"===e)return void this.srcElement.scroll(0,this.srcElement.scrollHeight);if(r.y+r.height<h.y+h.height)return void this.srcElement.scroll(0,this.srcElement.scrollTop+h.height);if(r.y>h.y)return void this.srcElement.scroll(0,this.srcElement.scrollTop-h.height)}else{Pt(i[0]).classList.add("treeselect-list__item--focused")}},Z=function(){const t=yt(this,F,"m",tt).call(this),e=yt(this,F,"m",it).call(this,this.options);t.append(...e);const s=yt(this,F,"m",lt).call(this);s&&t.append(s);const i=yt(this,F,"m",nt).call(this);return t.append(i),t},tt=function(){const t=document.createElement("div");return t.classList.add("treeselect-list"),this.isSingleSelect&&t.classList.add("treeselect-list--single-select"),this.disabledBranchNode&&t.classList.add("treeselect-list--disabled-branch-node"),t.addEventListener("mouseout",(t=>yt(this,F,"m",et).call(this,t))),t.addEventListener("mousemove",(()=>yt(this,F,"m",st).call(this))),t.addEventListener("mouseup",(()=>this.mouseupCallback()),!0),t},et=function(t){t.stopPropagation(),yt(this,J,"f")&&yt(this,K,"f")&&yt(this,J,"f").classList.add("treeselect-list__item--focused")},st=function(){Lt(this,K,!0,"f")},it=function t(e){return e.reduce(((e,s)=>{var i;if(null===(i=s.children)||void 0===i?void 0:i.length){const i=yt(this,F,"m",ot).call(this,s),l=yt(this,F,"m",t).call(this,s.children);return i.append(...l),e.push(i),e}const l=yt(this,F,"m",at).call(this,s,!1);return e.push(l),e}),[])},lt=function(){if(!this.listSlotHtmlComponent)return null;const t=document.createElement("div");return t.classList.add("treeselect-list__slot"),t.appendChild(this.listSlotHtmlComponent),t},nt=function(){const t=document.createElement("div");t.classList.add("treeselect-list__empty"),t.setAttribute("title",this.emptyText);const e=document.createElement("span");e.classList.add("treeselect-list__empty-icon"),l(this.iconElements.attention,e);const s=document.createElement("span");return s.classList.add("treeselect-list__empty-text"),s.innerHTML=this.emptyText,t.append(e,s),t},ot=function(t){const e=document.createElement("div");e.setAttribute("group-container-id",t.value.toString()),e.classList.add("treeselect-list__group-container");const s=yt(this,F,"m",at).call(this,t,!0);return e.appendChild(s),e},at=function(t,e){const s=yt(this,F,"m",ct).call(this,t);if(e){const t=yt(this,F,"m",ut).call(this);s.appendChild(t),s.classList.add("treeselect-list__item--group")}const i=yt(this,F,"m",mt).call(this,t),l=yt(this,F,"m",ft).call(this,t,e);return s.append(i,l),s},ct=function(t){const e=document.createElement("div");return e.setAttribute("tabindex","-1"),e.setAttribute("title",t.name),e.classList.add("treeselect-list__item"),e.addEventListener("mouseover",(()=>yt(this,F,"m",rt).call(this,e)),!0),e.addEventListener("mouseout",(()=>yt(this,F,"m",ht).call(this,e)),!0),e.addEventListener("mousedown",(e=>yt(this,F,"m",dt).call(this,e,t))),e},rt=function(t){yt(this,K,"f")&&yt(this,F,"m",bt).call(this,!0,t)},ht=function(t){yt(this,K,"f")&&(yt(this,F,"m",bt).call(this,!1,t),Lt(this,J,t,"f"))},dt=function(t,e){t.preventDefault(),t.stopPropagation();const s=t.target.querySelector(".treeselect-list__item-checkbox");s.checked=!s.checked,yt(this,F,"m",wt).call(this,s,e)},ut=function(){const t=document.createElement("span");return t.setAttribute("tabindex","-1"),t.classList.add("treeselect-list__item-icon"),l(this.iconElements.arrowDown,t),t.addEventListener("mousedown",(t=>yt(this,F,"m",pt).call(this,t))),t},pt=function(t){t.preventDefault(),t.stopPropagation(),yt(this,F,"m",gt).call(this,t)},mt=function(t){const e=document.createElement("div");e.classList.add("treeselect-list__item-checkbox-container");const s=document.createElement("span");s.classList.add("treeselect-list__item-checkbox-icon"),s.innerHTML="";const i=document.createElement("input");return i.setAttribute("tabindex","-1"),i.setAttribute("type","checkbox"),i.setAttribute("input-id",t.value.toString()),i.classList.add("treeselect-list__item-checkbox"),e.append(s,i),e},ft=function(t,e){const s=document.createElement("label");if(s.innerHTML=t.name,s.classList.add("treeselect-list__item-label"),e&&this.showCount){const e=yt(this,F,"m",vt).call(this,t);s.appendChild(e)}return s},vt=function(t){const e=document.createElement("span"),s=this.flattedOptions.filter((e=>e.childOf===t.value));return e.innerHTML=`(${s.length})`,e.classList.add("treeselect-list__item-label-counter"),e},wt=function(t,e){const s=this.flattedOptions.find((t=>t.id===e.value));if(s)if((null==s?void 0:s.isGroup)&&this.disabledBranchNode){const e=Pt(t).querySelector(".treeselect-list__item-icon");null==e||e.dispatchEvent(new Event("mousedown"))}else{if(this.isSingleSelect){const[t]=Ct;if(s.id===t)return;Ct=[s.id],Y([s.id],this.flattedOptions)}else s.checked=t.checked,s.isPartialChecked=!1,D(s,this.flattedOptions);_t(this.flattedOptions,this.srcElement,this.iconElements),yt(this,F,"m",kt).call(this)}},gt=function(t){var e,s,i;const l=null===(s=null===(e=t.target)||void 0===e?void 0:e.parentNode)||void 0===s?void 0:s.querySelector("[input-id]"),n=null!==(i=null==l?void 0:l.getAttribute("input-id"))&&void 0!==i?i:null,o=Nt(n,this.flattedOptions);o&&(o.isClosed=!o.isClosed,z(this.flattedOptions,o),_t(this.flattedOptions,this.srcElement,this.iconElements),this.arrowClickCallback())},bt=function(t,e){const s="treeselect-list__item--focused";if(t){const t=Array.from(this.srcElement.querySelectorAll(`.${s}`));t.length&&t.forEach((t=>t.classList.remove(s))),e.classList.add(s)}else e.classList.remove(s)},Et=function(){var t;this.selectedNodes={nodes:(t=this.flattedOptions,t.filter((t=>t.checked&&!t.isGroup))),groupedNodes:R(this.flattedOptions)}},kt=function(){yt(this,F,"m",Et).call(this),this.inputCallback(this.selectedNodes),this.value=this.selectedNodes.nodes.map((t=>t.id))};var Gt,Wt,Vt,jt,qt,Dt,It,$t,Rt,zt,Ut,Yt,Ft,Jt,Kt,Xt,Qt,Zt,te,ee,se,ie,le,ne,oe,ae,ce=function(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)},re=function(t,e,s,i,l){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!l)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!l:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?l.call(t,s):l?l.value=s:e.set(t,s),s};const he=t=>t.map((t=>t.id)),de=t=>t?Array.isArray(t)?t:[t]:[];class ue{mount(){var t;this.destroy();const{container:e,list:s,input:i}=ce(this,Gt,"m",Rt).call(this);this.srcElement=e,re(this,Wt,s,"f"),re(this,Vt,i,"f"),re(this,qt,this.scrollWindowHandler.bind(this),"f"),re(this,Dt,this.scrollWindowHandler.bind(this),"f"),re(this,It,this.focusWindowHandler.bind(this),"f"),re(this,$t,this.blurWindowHandler.bind(this),"f"),this.alwaysOpen&&(null===(t=ce(this,Vt,"f"))||void 0===t||t.openClose()),this.disabled?this.srcElement.classList.add("treeselect--disabled"):this.srcElement.classList.remove("treeselect--disabled")}updateValue(t){var e;const s=ce(this,Wt,"f");if(s){const i=de(t);s.updateValue(i);const{groupedNodes:l,nodes:n}=s.selectedNodes,o=this.grouped?l:n;null===(e=ce(this,Vt,"f"))||void 0===e||e.updateValue(o)}}destroy(){this.srcElement&&(ce(this,Gt,"m",Zt).call(this),this.srcElement.innerHTML="",this.srcElement=null,ce(this,Gt,"m",ie).call(this,!0))}focus(){ce(this,Vt,"f")&&ce(this,Vt,"f").focus()}toggleOpenClose(){ce(this,Vt,"f")&&(ce(this,Vt,"f").openClose(),ce(this,Vt,"f").focus())}scrollWindowHandler(){this.updateListPosition()}focusWindowHandler(t){var e,s,i;(null===(e=this.srcElement)||void 0===e?void 0:e.contains(t.target))||(null===(s=ce(this,Wt,"f"))||void 0===s?void 0:s.srcElement.contains(t.target))||(null===(i=ce(this,Vt,"f"))||void 0===i||i.blur(),ce(this,Gt,"m",ie).call(this,!1),ce(this,Gt,"m",ee).call(this,!1))}blurWindowHandler(){var t;null===(t=ce(this,Vt,"f"))||void 0===t||t.blur(),ce(this,Gt,"m",ie).call(this,!1),ce(this,Gt,"m",ee).call(this,!1)}updateListPosition(){var t;const e=this.srcElement,s=null===(t=ce(this,Wt,"f"))||void 0===t?void 0:t.srcElement;if(!e||!s)return;const{x:i,y:l,height:n,width:o}=e.getBoundingClientRect();s.style.transform="";const{y:a,height:c}=s.getBoundingClientRect(),r=window.innerHeight-l-n;let h=l>r&&l>=c&&r<c;"auto"!==this.direction&&(h="top"===this.direction),this.appendToBody&&(s.style.transform=h?`translateY(${l-a-c}px)`:`translateY(${l+n-a}px)`,s.style.width=`${o}px`,s.style.left=`${i+window.scrollX}px`);const d=h?"top":"bottom";s.getAttribute("direction")!==d&&(s.setAttribute("direction",d),ce(this,Gt,"m",te).call(this,h,this.appendToBody))}constructor({parentHtmlContainer:t,value:e,options:s,openLevel:i,appendToBody:l,alwaysOpen:o,showTags:a,tagsCountText:c,clearable:r,searchable:h,placeholder:d,grouped:u,isGroupedValue:p,listSlotHtmlComponent:m,disabled:f,emptyText:v,staticList:w,id:g,isSingleSelect:b,showCount:E,disabledBranchNode:k,direction:y,iconElements:L,inputCallback:C,openCallback:_,closeCallback:x}){Gt.add(this),Wt.set(this,null),Vt.set(this,null),jt.set(this,null),qt.set(this,null),Dt.set(this,null),It.set(this,null),$t.set(this,null),(({parentHtmlContainer:t,staticList:e,appendToBody:s,isSingleSelect:i,value:l,direction:n})=>{t||console.error("Validation: parentHtmlContainer prop is required!"),e&&s&&console.error("Validation: You should set staticList to false if you use appendToBody!"),i&&Array.isArray(l)&&console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"),i||Array.isArray(l)||console.error("Validation: you should pass an array as a value!"),n&&"auto"!==n&&"bottom"!==n&&"top"!==n&&console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!")})({parentHtmlContainer:t,value:e,staticList:w,appendToBody:l,isSingleSelect:b}),this.parentHtmlContainer=t,this.value=de(e),this.options=null!=s?s:[],this.openLevel=null!=i?i:0,this.appendToBody=null==l||l,this.alwaysOpen=!(!o||f),this.showTags=null==a||a,this.tagsCountText=null!=c?c:"elements selected",this.clearable=null==r||r,this.searchable=null==h||h,this.placeholder=null!=d?d:"Search...",this.grouped=null==u||u,this.isGroupedValue=null!=p&&p,this.listSlotHtmlComponent=null!=m?m:null,this.disabled=null!=f&&f,this.emptyText=null!=v?v:"No results found...",this.staticList=!(!w||this.appendToBody),this.id=null!=g?g:"",this.isSingleSelect=null!=b&&b,this.showCount=null!=E&&E,this.disabledBranchNode=null!=k&&k,this.direction=null!=y?y:"auto",this.iconElements=n(L),this.inputCallback=C,this.openCallback=_,this.closeCallback=x,this.groupedValue=[],this.isListOpened=!1,this.srcElement=null,this.mount()}}Wt=new WeakMap,Vt=new WeakMap,jt=new WeakMap,qt=new WeakMap,Dt=new WeakMap,It=new WeakMap,$t=new WeakMap,Gt=new WeakSet,Rt=function(){const t=this.parentHtmlContainer;t.classList.add("treeselect");const e=new(0,W.TreeselectList)({options:this.options,value:this.value,openLevel:this.openLevel,listSlotHtmlComponent:this.listSlotHtmlComponent,emptyText:this.emptyText,isSingleSelect:this.isSingleSelect,showCount:this.showCount,disabledBranchNode:this.disabledBranchNode,iconElements:this.iconElements,inputCallback:t=>ce(this,Gt,"m",Kt).call(this,t),arrowClickCallback:()=>ce(this,Gt,"m",Xt).call(this),mouseupCallback:()=>{var t;return null===(t=ce(this,Vt,"f"))||void 0===t?void 0:t.focus()}}),{groupedNodes:i,nodes:l}=e.selectedNodes,n=new(0,s.TreeselectInput)({value:this.grouped?i:l,showTags:this.showTags,tagsCountText:this.tagsCountText,clearable:this.clearable,isAlwaysOpened:this.alwaysOpen,searchable:this.searchable,placeholder:this.placeholder,disabled:this.disabled,isSingleSelect:this.isSingleSelect,id:this.id,iconElements:this.iconElements,inputCallback:t=>ce(this,Gt,"m",zt).call(this,t),searchCallback:t=>ce(this,Gt,"m",Yt).call(this,t),openCallback:()=>ce(this,Gt,"m",Qt).call(this),closeCallback:()=>ce(this,Gt,"m",Zt).call(this),keydownCallback:t=>ce(this,Gt,"m",Ut).call(this,t),focusCallback:()=>ce(this,Gt,"m",Ft).call(this),blurCallback:()=>ce(this,Gt,"m",Jt).call(this)});return this.appendToBody&&re(this,jt,new ResizeObserver((()=>this.updateListPosition())),"f"),t.append(n.srcElement),{container:t,list:e,input:n}},zt=function(t){var e,s,i,l,n;const o=he(t);null===(e=ce(this,Wt,"f"))||void 0===e||e.updateValue(o);const a=null===(i=null===(s=ce(this,Wt,"f"))||void 0===s?void 0:s.selectedNodes)||void 0===i?void 0:i.nodes,c=null===(n=null===(l=ce(this,Wt,"f"))||void 0===l?void 0:l.selectedNodes)||void 0===n?void 0:n.groupedNodes;this.value=a?he(a):[],this.groupedValue=c?he(c):[],ce(this,Gt,"m",ne).call(this)},Ut=function(t){var e;this.isListOpened&&(null===(e=ce(this,Wt,"f"))||void 0===e||e.callKeyAction(t))},Yt=function(t){var e;null===(e=ce(this,Wt,"f"))||void 0===e||e.updateSearchValue(t),this.updateListPosition()},Ft=function(){ce(this,Gt,"m",ee).call(this,!0),ce(this,It,"f")&&ce(this,It,"f")&&ce(this,$t,"f")&&(document.addEventListener("mousedown",ce(this,It,"f"),!0),document.addEventListener("focus",ce(this,It,"f"),!0),window.addEventListener("blur",ce(this,$t,"f")))},Jt=function(){setTimeout((()=>{var t,e;const s=null===(t=ce(this,Vt,"f"))||void 0===t?void 0:t.srcElement.contains(document.activeElement),i=null===(e=ce(this,Wt,"f"))||void 0===e?void 0:e.srcElement.contains(document.activeElement);s||i||this.blurWindowHandler()}),1)},Kt=function(t){var e,s,i,l;const{groupedNodes:n,nodes:o}=t,a=this.grouped?n:o;null===(e=ce(this,Vt,"f"))||void 0===e||e.updateValue(a),this.value=he(o),this.groupedValue=he(n),this.isSingleSelect&&!this.alwaysOpen&&(null===(s=ce(this,Vt,"f"))||void 0===s||s.openClose(),null===(i=ce(this,Vt,"f"))||void 0===i||i.clearSearch()),null===(l=ce(this,Vt,"f"))||void 0===l||l.focus(),ce(this,Gt,"m",ne).call(this)},Xt=function(){var t;null===(t=ce(this,Vt,"f"))||void 0===t||t.focus(),this.updateListPosition()},Qt=function(){var t;this.isListOpened=!0,ce(this,qt,"f")&&ce(this,Dt,"f")&&(window.addEventListener("scroll",ce(this,qt,"f"),!0),window.addEventListener("resize",ce(this,Dt,"f"))),ce(this,Wt,"f")&&this.srcElement&&(this.appendToBody?(document.body.appendChild(ce(this,Wt,"f").srcElement),null===(t=ce(this,jt,"f"))||void 0===t||t.observe(this.srcElement)):this.srcElement.appendChild(ce(this,Wt,"f").srcElement),this.updateListPosition(),ce(this,Gt,"m",se).call(this,!0),ce(this,Wt,"f").focusFirstListElement(),ce(this,Gt,"m",oe).call(this))},Zt=function(){var t;if(this.alwaysOpen)return;if(this.isListOpened=!1,ce(this,qt,"f")&&ce(this,Dt,"f")&&(window.removeEventListener("scroll",ce(this,qt,"f"),!0),window.removeEventListener("resize",ce(this,Dt,"f"))),!ce(this,Wt,"f")||!this.srcElement)return;(this.appendToBody?document.body.contains(ce(this,Wt,"f").srcElement):this.srcElement.contains(ce(this,Wt,"f").srcElement))&&(this.appendToBody?(document.body.removeChild(ce(this,Wt,"f").srcElement),null===(t=ce(this,jt,"f"))||void 0===t||t.disconnect()):this.srcElement.removeChild(ce(this,Wt,"f").srcElement),ce(this,Gt,"m",se).call(this,!1),ce(this,Gt,"m",ae).call(this))},te=function(t,e){if(!ce(this,Wt,"f")||!ce(this,Vt,"f"))return;const s=e?"treeselect-list--top-to-body":"treeselect-list--top",i=e?"treeselect-list--bottom-to-body":"treeselect-list--bottom";t?(ce(this,Wt,"f").srcElement.classList.add(s),ce(this,Wt,"f").srcElement.classList.remove(i),ce(this,Vt,"f").srcElement.classList.add("treeselect-input--top"),ce(this,Vt,"f").srcElement.classList.remove("treeselect-input--bottom")):(ce(this,Wt,"f").srcElement.classList.remove(s),ce(this,Wt,"f").srcElement.classList.add(i),ce(this,Vt,"f").srcElement.classList.remove("treeselect-input--top"),ce(this,Vt,"f").srcElement.classList.add("treeselect-input--bottom"))},ee=function(t){ce(this,Vt,"f")&&ce(this,Wt,"f")&&(t?(ce(this,Vt,"f").srcElement.classList.add("treeselect-input--focused"),ce(this,Wt,"f").srcElement.classList.add("treeselect-list--focused")):(ce(this,Vt,"f").srcElement.classList.remove("treeselect-input--focused"),ce(this,Wt,"f").srcElement.classList.remove("treeselect-list--focused")))},se=function(t){var e,s,i,l;t?null===(e=ce(this,Vt,"f"))||void 0===e||e.srcElement.classList.add("treeselect-input--opened"):null===(s=ce(this,Vt,"f"))||void 0===s||s.srcElement.classList.remove("treeselect-input--opened"),this.staticList?null===(i=ce(this,Wt,"f"))||void 0===i||i.srcElement.classList.add("treeselect-list--static"):null===(l=ce(this,Wt,"f"))||void 0===l||l.srcElement.classList.remove("treeselect-list--static")},ie=function(t){ce(this,qt,"f")&&ce(this,Dt,"f")&&ce(this,It,"f")&&ce(this,$t,"f")&&(this.alwaysOpen&&!t||(window.removeEventListener("scroll",ce(this,qt,"f"),!0),window.removeEventListener("resize",ce(this,Dt,"f"))),document.removeEventListener("mousedown",ce(this,It,"f"),!0),document.removeEventListener("focus",ce(this,It,"f"),!0),window.removeEventListener("blur",ce(this,$t,"f")))},le=function(){return((t,e)=>{if(e){const[e]=t;return e}return t})(this.isGroupedValue||this.isSingleSelect?this.groupedValue:this.value,this.isSingleSelect)},ne=function(){var t;const e=ce(this,Gt,"m",le).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("input",{detail:e})),this.inputCallback&&this.inputCallback(e)},oe=function(){var t;const e=ce(this,Gt,"m",le).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("open",{detail:e})),this.openCallback&&this.openCallback(e)},ae=function(){var t;const e=ce(this,Gt,"m",le).call(this);null===(t=this.srcElement)||void 0===t||t.dispatchEvent(new CustomEvent("close",{detail:e})),this.closeCallback&&this.closeCallback(e)};export{ue as Treeselect,e as default};