!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=class{constructor(e){this.element=document.createElement(e)}getHTMLElement(){return this.element}add(e){this.element.appendChild(e.getHTMLElement())}}},function(e,t){class n{static setDOM(e){n.element=e}static setTheme(e){n.theme=e}static getHTML(){return n.element.innerHTML}static setHTML(){n.element.innerText=n.element.innerHTML}static setText(){n.element.innerHTML=n.element.innerText}}e.exports=n},function(e,t,n){let s=n(0);e.exports=class extends s{constructor(e){super("button"),this.clickCounter=!1,this.workingInterface=e,this.element.innerHTML=this.workingInterface.ICON,this.element.addEventListener("click",(e=>(function(t){e.workingInterface.activate()}))(this))}}},function(e,t,n){let s=n(1);const i={BOLD:{ICON:"<b>B</b>",shortcutKey:"ctrl+b",toggle:!0,activate:()=>{s.element.focus(),document.execCommand("bold",!1)}},ITALIC:{ICON:"<i>i</i>",shortcutKey:"ctrl+i",toggle:!0,activate(){s.element.focus(),document.execCommand("italic",!1)}},UNDERLINE:{ICON:"<u>U</u>",shortcutKey:"ctrl+u",toggle:!0,activate(){s.element.focus(),document.execCommand("underline",!1)}},LEFT_ALIGN:{ICON:'<i class="fa fa-align-left"></i>',shortcutKey:"",toggle:!0,activate(){s.element.focus(),document.execCommand("justifyleft",!1)}},RIGHT_ALIGN:{ICON:'<i class="fa fa-align-right"></i>',shortcutKey:"",toggle:!0,activate(){s.element.focus(),document.execCommand("justifyright",!1)}},CENTER_ALIGN:{ICON:'<i class="fa fa-align-center"></i>',shortcutKey:"",toggle:!0,activate(){s.element.focus(),document.execCommand("justifycenter",!1)}},ORDERED_LIST:{ICON:'<i class="fa fa-list-ol"></i>',shortcutKey:"",toggle:!0,activate(){s.element.focus(),document.execCommand("insertorderedlist",!1)}},UNORDERED_LIST:{ICON:'<i class="fa fa-list-ul"></i>',shortcutKey:"",toggle:!0,activate(){s.element.focus(),document.execCommand("insertunorderedlist",!1)}},HEADING:{ICON:'<i class="fas fa-user">H</i>',toggle:!1,options:[{text:"Main-Heading",value:"h1"},{text:"Sub-Heading",value:"h4"}],activate(e){s.element.focus(),document.execCommand("formatblock",!1,e)}},LINK:{ICON:'<i class="fa fa-link"></i>',toggle:!1,activate(){s.element.focus();let e=prompt("Enter HTTP URL!");null!=e&&document.execCommand("createLink",!1,e)}},IMAGE:{ICON:'<i class="fa fa-image"></i>',toggle:!1,getInput:async()=>prompt("Enter Image URL!"),async activate(){s.element.focus();let e=await this.getInput();null!=e&&document.execCommand("insertImage",!1,e)}},setPlugin:function(e,t){switch(e){case"IMAGE":i.IMAGE.getInput=t}}};e.exports=i},function(e,t){e.exports=function(e){return async function(){return await function(e){return new Promise((t,n)=>{let s=document.createElement("input");s.setAttribute("type","file"),s.click(),s.onchange=function(n){let s=this.files[0];e.imageFiles.push(s);let i=new FileReader;i.onload=function(e){t(e.target.result)},i.readAsDataURL(s)}})}(e)}}},function(e,t,n){let s={imageFiles:[]},i={imageExplorer:n(4)(s),State:s};window&&(window.Plugins=i),e.exports=i},function(e,t,n){let s=n(1);e.exports={toHTML:{ICON:'<i class="fa fa-code"></i>',toggle:!0,activate(){s.setHTML()}}}},function(e,t){e.exports=class{constructor(e){this.value=e,this.node=document.createTextNode(this.value)}getTextNode(){return this.node}}},function(e,t,n){let s=n(0),i=n(7),o=n(2),r=n(6),a=n(1);class c extends s{constructor(){super("footer"),this.element.setAttribute("class",a.theme+"--footer")}addText(e){this.element.appendChild(e)}static createProductFooter(){let e=new c,t=new i("©YawYwatWar"),n=new o(r.toHTML);return e.addText(t.getTextNode()),e.add(n),e}}e.exports=c},function(e,t,n){let s=n(0);e.exports=class extends s{constructor(e){super("option"),this.element.innerText=e.text,this.element.value=e.value}}},function(e,t,n){let s=n(0),i=n(9);e.exports=class extends s{constructor(e){super("select"),this.workingInterface=e;let t=document.createElement("option");t.innerHTML=e.ICON,t.selected=!0,this.element.appendChild(t),e.options.forEach(e=>{let t=new i(e);this.add(t)}),this.element.addEventListener("change",t=>{e.activate(t.target.value),this.element.selectedIndex=0})}}},function(e,t){e.exports={BOLD:"bold",ITALIC:"italic",LINK:"link",IMAGE:"image",HEADING:"heading",UNDERLINE:"underline",LEFT_ALIGN:"left-align",RIGHT_ALIGN:"right-align",CENTER_ALIGN:"center-align",ORDERED_LIST:"ordered-list",UNORDERED_LIST:"unordered-list"}},function(e,t,n){let s=n(11),i=n(3),o=n(0),r=n(2),a=n(10);e.exports=class extends o{static create(e){switch(e){case s.BOLD:return new r(i.BOLD);case s.ITALIC:return new r(i.ITALIC);case s.UNDERLINE:return new r(i.UNDERLINE);case s.IMAGE:return new r(i.LINK);case s.LINK:return new r(i.IMAGE);case s.HEADING:return new a(i.HEADING);case s.LEFT_ALIGN:return new r(i.LEFT_ALIGN);case s.RIGHT_ALIGN:return new r(i.RIGHT_ALIGN);case s.CENTER_ALIGN:return new r(i.CENTER_ALIGN);case s.ORDERED_LIST:return new r(i.ORDERED_LIST);case s.UNORDERED_LIST:return new r(i.UNORDERED_LIST)}}}},function(e,t,n){let s=n(12),i=n(0);e.exports=class extends i{constructor(e){super("div"),this.element.setAttribute("class",e+"--toolbar")}setConfig(e){e.forEach(e=>{let t=s.create(e);this.add(t)})}}},function(e,t,n){let s=n(13),i=n(8),o=n(0),r=n(1);e.exports=class extends o{constructor(){super("div"),this.theme="",this.element.setAttribute("contenteditable",!0)}setUp({toolbarConfig:e,theme:t="primaryStyle"}){this.setUpTheme(t),this.setUpToolBar(e),this.setUpFooter()}setUpToolBar(e){let t=new s(this.theme);t.setConfig(e),this.element.insertAdjacentElement("beforeBegin",t.getHTMLElement())}setUpFooter(){let e=i.createProductFooter();this.element.insertAdjacentElement("afterend",e.getHTMLElement())}setUpTheme(e){this.theme=e,r.setDOM(this.element),r.setTheme(this.theme),this.element.classList.add(e+"--textEditor")}}},function(e,t,n){let s=n(14),{State:i}=n(5),o=n(3);class r{constructor(e){this.mainElement=e,this.textEditor=new s,this.mainElement.appendChild(this.textEditor.getHTMLElement()),this.theme=""}setUp({toolbarConfig:e,plugins:t,theme:n="primaryStyle"}){this.textEditor.setUp({toolbarConfig:e,theme:n}),this.setPlguins(t),this.setUpTheme(n)}setUpTheme(e){this.theme=e,this.mainElement.setAttribute("class",this.theme)}setPlguins(e){for(var t in e)o.setPlugin(t,e[t])}}window&&(window.YawYwatWarEditor=r),e.exports=r}]);