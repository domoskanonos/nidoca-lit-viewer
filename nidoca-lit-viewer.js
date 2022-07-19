/*! For license information please see nidoca-lit-viewer.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new WeakMap;class r{constructor(t,o,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=o.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(r,e))}return e}toString(){return this.cssText}}const n=(t,...o)=>{const n=1===t.length?t[0]:o.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new r(n,t,e)},i=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let o="";for(const e of t.cssRules)o+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,e))(o)})(t):t;var a;const s=window.trustedTypes,l=s?s.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},p=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(i(t))}else void 0!==t&&e.push(i(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style"),r=window.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=h){var r,n;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const a=(null!==(n=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:d.toAttribute)(e,o.type);this._$El=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,e){var o,r;const n=this.constructor,i=n._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=n.getPropertyOptions(i),a=t.converter,s=null!==(r=null!==(o=null==a?void 0:a.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==r?r:d.fromAttribute;this._$El=i,this[i]=s(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var u;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:f}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.3.3");const y=globalThis.trustedTypes,m=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,b="?"+g,v=`<${b}>`,x=document,w=(t="")=>x.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,R=t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,O=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,j=/'/g,P=/"/g,T=/^(?:script|style|textarea|title)$/i,C=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),B=C(1),D=(C(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),N=new WeakMap,_=x.createTreeWalker(x,129,null,!1),L=(t,e)=>{const o=t.length-1,r=[];let n,i=2===e?"<svg>":"",a=A;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===A?"!--"===l[1]?a=k:void 0!==l[1]?a=O:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=E):void 0!==l[3]&&(a=E):a===E?">"===l[0]?(a=null!=n?n:A,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?E:'"'===l[3]?P:j):a===P||a===j?a=E:a===k||a===O?a=A:(a=E,n=void 0);const p=a===E&&t[e+1].startsWith("/>")?" ":"";i+=a===A?o+v:c>=0?(r.push(s),o.slice(0,c)+"$lit$"+o.slice(c)+g+p):o+g+(-2===c?(r.push(void 0),e):p)}const s=i+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(s):s,r]};class W{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,i=0;const a=t.length-1,s=this.parts,[l,c]=L(t,e);if(this.el=W.createElement(l,o),_.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=_.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const o=c[i++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?Q:"@"===e[1]?V:H})}else s.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(T.test(r.tagName)){const t=r.textContent.split(g),e=t.length-1;if(e>0){r.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],w()),_.nextNode(),s.push({type:2,index:++n});r.append(t[e],w())}}}else if(8===r.nodeType)if(r.data===b)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(g,t+1));)s.push({type:7,index:n}),t+=g.length-1}n++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function z(t,e,o=t,r){var n,i,a,s;if(e===D)return e;let l=void 0!==r?null===(n=o._$Cl)||void 0===n?void 0:n[r]:o._$Cu;const c=$(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,r)),void 0!==r?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[r]=l:o._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,r)),e}class M{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);_.currentNode=n;let i=_.nextNode(),a=0,s=0,l=r[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new U(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new F(i,this,t)),this.v.push(e),l=r[++s]}a!==(null==l?void 0:l.index)&&(i=_.nextNode(),a++)}return n}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class U{constructor(t,e,o,r){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),$(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):R(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==I&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=W.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(o);else{const t=new M(n,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new W(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const n of t)r===e.length?e.push(o=new U(this.M(w()),this.M(w()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,o,r,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const n=this.strings;let i=!1;if(void 0===n)t=z(this,t,e,0),i=!$(t)||t!==this._$AH&&t!==D,i&&(this._$AH=t);else{const r=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=z(this,r[o+a],e,a),s===D&&(s=this._$AH[a]),i||(i=!$(s)||s!==this._$AH[a]),s===I?t=I:t!==I&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}i&&!r&&this.C(t)}C(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends H{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===I?void 0:t}}const G=y?y.emptyScript:"";class Q extends H{constructor(){super(...arguments),this.type=4}C(t){t&&t!==I?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class V extends H{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=z(this,t,e,0))&&void 0!==o?o:I)===D)return;const r=this._$AH,n=t===I&&r!==I||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==I&&(r===I||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const K={L:"$lit$",P:g,V:b,I:1,N:L,R:M,j:R,D:z,H:U,F:H,O:Q,W:V,B:q,Z:F},J=window.litHtmlPolyfillSupport;var Y,X;null==J||J(W,U),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.2.6");class Z extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var r,n;const i=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let a=i._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;i._$litPart$=a=new U(e.insertBefore(w(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}Z.finalized=!0,Z._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:Z});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Z}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.1");const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function rt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):ot(t,e)}function nt(t,e){return(({finisher:t,descriptor:e})=>(o,r)=>{var n;if(void 0===r){const r=null!==(n=o.originalKey)&&void 0!==n?n:o.key,i=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:{...o,key:r};return null!=t&&(i.finisher=function(e){t(e,r)}),i}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(n,r)}})({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}var it,at,st;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements,function(t){t.String="String",t.Number="Number",t.Boolean="Boolean",t.Class="Class",t.Array="Array",t[void 0]="undefined"}(at||(at={}));class lt{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()||this.isArray()?at.Array:null==this.getTypeName()?at.Class:this.getTypeName()}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let o=0;o<e.length;o++){const r=e[o];if(r.key==t)return r.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class ct{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let o=[];if(e&&(e.tagName==t&&o.push(e),e.children.length>0)){const r=null==e?void 0:e.children;for(let e=0;e<r.length;e++)o=o.concat(this.getElementsByTagName(t,r.item(e)))}return o}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed. no lit element ? wrong lit version ?");const e=[];for(const o of Array.from(t.keys()))e.push(new lt(o,t.get(o)));return e}}!function(t){t.primary="primary",t.secondary="secondary",t.surface="surface",t.background="background",t.transparent="transparent"}(st||(st={}));class dt{static getStyle(t){return t?t==st.transparent?B``:B` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${t});
              background-color: var(--app-color-${t}-background);
              border-color: var(--app-color-${t}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`:B``}static getOposite(t){return t==st.background?st.surface:t==st.primary||t==st.primary?st.secondary:t==st.secondary?st.primary:st.background}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}var pt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ft=class extends Z{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return B`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?B` <slot></slot>`:B``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};ft.styles=n`
    :host {
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
    }

    .header {
      height: var(--height-medium);
      box-sizing: border-box;
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `,pt([rt({type:String}),ht("design:type",String)],ft.prototype,"header",void 0),pt([rt({type:Boolean}),ht("design:type",Boolean)],ft.prototype,"opened",void 0),ft=pt([et("nidoca-accordion-item")],ft);var ut,yt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.single="single",t.multi="multi"}(ut||(ut={}));let gt=class extends Z{constructor(){super(...arguments),this.theme=st.surface,this.accordionType=ut.single}render(){return B`
      ${dt.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case ut.single:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const r=t[o];r instanceof ft&&r!=e&&(r.opened=!1)}}case ut.multi:}t.stopPropagation()}};gt.styles=n`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    slot {
      font-size: 0;
    }
  `,yt([rt({type:st,converter:String}),mt("design:type",String)],gt.prototype,"theme",void 0),yt([rt({type:ut,converter:String}),mt("design:type",String)],gt.prototype,"accordionType",void 0),yt([nt("#accordionSlot"),mt("design:type",Object)],gt.prototype,"accordionSlot",void 0),gt=yt([et("nidoca-accordion")],gt);var bt,vt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},xt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.current=0]="current",t[t.completed=1]="completed",t[t.open=2]="open",t[t.finish=3]="finish"}(bt||(bt={}));let wt=class extends Z{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return B`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${io.NONE}"
            .withIconSpace="${!1}"
            .round="${!0}"
            .clickable="${!0}"
            .deactivated="${!1}"
            color="${this.determineColor(this.state)}"
            backgroundColor="${this.determineBackgroundColor(this.state)}"
            size="24"
            @nidoca-event-icon-clicked="${()=>this.stepClicked()}"
            sizeUnit="px"
          >
          </nidoca-icon>

          ${this.isLast?B``:B`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==bt.completed?"var(--app-color-text-primary)":t==bt.current?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==bt.finish?"var(--app-color-success)":t==bt.completed?"var(--mdc-theme-on-primary)":t==bt.current?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};wt.styles=n`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-text-color-primary);
    }
  `,vt([rt({type:String}),xt("design:type",String)],wt.prototype,"icon",void 0),vt([rt({type:String}),xt("design:type",String)],wt.prototype,"primaryText",void 0),vt([rt({type:Number}),xt("design:type",Object)],wt.prototype,"state",void 0),vt([rt({type:Boolean}),xt("design:type",Boolean)],wt.prototype,"isLast",void 0),wt=vt([et("nidoca-wizard-step")],wt);var $t=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let St=class extends Z{render(){return B`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let r=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof wt&&(e.index=t,e.state==bt.current&&(r=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(r)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof wt&&void 0!==r.index&&(r.index<t?r.state=bt.completed:r.index==t?r.state=bt.current:r.state=bt.open)}}}};St.styles=n``,$t([nt("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],St.prototype,"wizardSlot",void 0),St=$t([et("nidoca-wizard")],St);var Rt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let At=class extends Z{constructor(){super(...arguments),this.clickable=!0}render(){return B`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};At.styles=n`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-4);
      border-radius: var(--line-height-3);
      line-height: var(--line-height-3);
    }

    .chip:hover {
      background: var(--app-color-surface-background-dark);
    }

    .clickable {
      cursor: pointer;
    }
  `,Rt([rt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],At.prototype,"clickable",void 0),At=Rt([et("nidoca-chip")],At);var kt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ot=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Et=class extends Z{constructor(){super(...arguments),this.code="",this.theme=st.surface}render(){return B`
      <style>
        code {
          color: var(--app-color-text-${this.theme});
          background: var(--app-color-${this.theme}-background);
          border: solid 1px var(--app-color-${this.theme}-border);
        }
      </style>
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};Et.styles=n`
    :host {
      display: block;
    }
    pre {
      margin: 0;
      padding: 0;
      white-space: unset;
    }

    pre code {
      white-space: pre-line;
      display: block;
      line-height: var(--height-min);
      padding: 1em 1.5em;
      overflow-x: auto;
    }

    code {
      border-radius: 0.375em;
      font-family: 'Courier New', monospace;
      font-size: 0.85em;
      position: relative;
    }

    .icon-position {
      position: absolute;
      top: -24px;
      right: 0;
      opacity: 0.2;
    }
  `,kt([rt({type:String}),Ot("design:type",String)],Et.prototype,"code",void 0),kt([rt({type:String}),Ot("design:type",String)],Et.prototype,"theme",void 0),Et=kt([et("nidoca-code")],Et);var jt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Tt=class extends Z{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?B`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:B``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};Tt.styles=n`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,jt([rt({type:Boolean}),Pt("design:type",Boolean)],Tt.prototype,"show",void 0),jt([rt({type:Object}),Pt("design:type",Object)],Tt.prototype,"associatedElement",void 0),Tt=jt([et("nidoca-elevation"),Pt("design:paramtypes",[])],Tt);var Ct=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Dt{}Dt.PROGRESS="PROGRESS",Dt.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let It=class extends Z{constructor(){super(...arguments),this.progressType=Dt.PROGRESS}render(){return B` <style>
        :host {
          width: 100%;
          display: block;
        }

        .PROGRESS {
          color: var(--app-color-${this.theme}-background);
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          height: 0.25em;
          background-color: #dddddd;
          font-size: 16px;
          width: 100%;
        }

        .PROGRESS::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Determinate */
        .PROGRESS::-webkit-progress-value {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-moz-progress-bar {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-ms-fill {
          border: none;
          background-color: currentColor;
          transition: all 0.2s;
        }

        /* Indeterminate */
        .PROGRESS:indeterminate {
          background-size: 200% 100%;
          background-image: linear-gradient(
            to right,
            transparent 50%,
            currentColor 50%,
            currentColor 60%,
            transparent 60%,
            transparent 71.5%,
            currentColor 71.5%,
            currentColor 84%,
            transparent 84%
          );
          animation: progresslinear 2s infinite linear;
        }

        .PROGRESS:indeterminate::-moz-progress-bar {
          background-color: transparent;
        }

        .PROGRESS:indeterminate::-ms-fill {
          animation-name: none;
        }

        @keyframes progresslinear {
          0% {
            background-size: 200% 100%;
            background-position: left -31.25% top 0%;
          }
          50% {
            background-size: 800% 100%;
            background-position: left -49% top 0%;
          }
          100% {
            background-size: 400% 100%;
            background-position: left -102% top 0%;
          }
        }

        .PROGRESS_CIRCULAR {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          box-sizing: border-box;
          border: none;
          border-radius: 50%;
          padding: 0.25em;
          width: 3em;
          height: 3em;
          color: var(--app-color-${this.theme}-background);
          background-color: transparent;
          font-size: 16px;
          overflow: hidden;
          margin-top: 30px;
        }

        .PROGRESS_CIRCULAR::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Indeterminate */
        .PROGRESS_CIRCULAR:indeterminate {
          mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
          animation: progress-circular 6s infinite cubic-bezier(0.3, 0.6, 1, 1);
        }

        :-ms-lang(x),
        .PROGRESS_CIRCULAR:indeterminate {
          animation: none;
        }

        .PROGRESS_CIRCULAR:indeterminate::before,
        .PROGRESS_CIRCULAR:indeterminate::-webkit-progress-value {
          content: '';
          display: block;
          box-sizing: border-box;
          margin-bottom: 0.25em;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100% !important;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-moz-progress-bar {
          box-sizing: border-box;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-ms-fill {
          animation-name: -ms-ring;
        }

        @keyframes progress-circular {
          0% {
            transform: rotate(0deg);
          }
          12.5% {
            transform: rotate(180deg);
            animation-timing-function: linear;
          }
          25% {
            transform: rotate(630deg);
          }
          37.5% {
            transform: rotate(810deg);
            animation-timing-function: linear;
          }
          50% {
            transform: rotate(1260deg);
          }
          62.5% {
            transform: rotate(1440deg);
            animation-timing-function: linear;
          }
          75% {
            transform: rotate(1890deg);
          }
          87.5% {
            transform: rotate(2070deg);
            animation-timing-function: linear;
          }
          100% {
            transform: rotate(2520deg);
          }
        }

        @keyframes progress-circular-pseudo {
          0% {
            transform: rotate(-30deg);
          }
          29.4% {
            border-left-color: transparent;
          }
          29.41% {
            border-left-color: currentColor;
          }
          64.7% {
            border-bottom-color: transparent;
          }
          64.71% {
            border-bottom-color: currentColor;
          }
          100% {
            border-left-color: currentColor;
            border-bottom-color: currentColor;
            transform: rotate(225deg);
          }
        }
      </style>

      <progress class="${this.progressType}"></progress>`}};It.styles=n``,Ct([rt({type:st,converter:String}),Bt("design:type",Object)],It.prototype,"theme",void 0),Ct([rt({type:Dt,converter:String}),Bt("design:type",String)],It.prototype,"progressType",void 0),It=Ct([et("nidoca-progress")],It);var Nt,_t=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Lt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.contained="contained",t.outlined="outlined",t.text="text"}(Nt||(Nt={}));let Wt=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.buttonType=Nt.contained,this.leadingIcon="",this.text=""}render(){return B`
      <style>
        .outlined {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-text-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .contained {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .text {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${()=>{this.clicked()}}"
      >
        ${this.leadingIcon?B` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:B``}

        <nidoca-text-button
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Wt.styles=n`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .container {
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,_t([rt({type:st,converter:String}),Lt("design:type",String)],Wt.prototype,"theme",void 0),_t([rt({type:Nt,converter:String}),Lt("design:type",String)],Wt.prototype,"buttonType",void 0),_t([rt({type:String}),Lt("design:type",String)],Wt.prototype,"leadingIcon",void 0),_t([rt({type:String}),Lt("design:type",String)],Wt.prototype,"text",void 0),Wt=_t([et("nidoca-button")],Wt);class zt extends Z{}var Mt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ut=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ht=class extends Z{constructor(){super(...arguments),this.autocomplete=!0}render(){return B`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const r=o.getOutputData();e[r.key]=r.value,t.append(r.key,r.value)}const o={};return o.jsonObject=e,o.formData=t,o}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const r=o[t];this.recursiveInputElementSearch(r,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof zt)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};Ht.styles=n`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,Mt([rt({type:Boolean}),Ut("design:type",Boolean)],Ht.prototype,"autocomplete",void 0),Mt([nt("#slotElement"),Ut("design:type",Object)],Ht.prototype,"slotElement",void 0),Ht=Mt([et("nidoca-form")],Ht);const qt=t=>(...e)=>({_$litDirective$:t,values:e});class Gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:Qt}=K,Vt=()=>document.createComment(""),Ft=(t,e,o)=>{var r;const n=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=n.insertBefore(Vt(),i),r=n.insertBefore(Vt(),i);o=new Qt(e,r,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(r=o._$AQ)||void 0===r||r.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==i||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,i),t=e}}}return o},Kt=(t,e,o=t)=>(t._$AI(e,o),t),Jt={},Yt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const r=t._$AB.nextSibling;for(;o!==r;){const t=o.nextSibling;o.remove(),o=t}},Xt=(t,e,o)=>{const r=new Map;for(let n=e;n<=o;n++)r.set(t[n],n);return r},Zt=qt(class extends Gt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let r;void 0===o?o=e:void 0!==e&&(r=e);const n=[],i=[];let a=0;for(const e of t)n[a]=r?r(e,a):a,i[a]=o(e,a),a++;return{values:i,keys:n}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,r]){var n;const i=t._$AH,{values:a,keys:s}=this.dt(e,o,r);if(!Array.isArray(i))return this.ut=s,a;const l=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],c=[];let d,p,h=0,f=i.length-1,u=0,y=a.length-1;for(;h<=f&&u<=y;)if(null===i[h])h++;else if(null===i[f])f--;else if(l[h]===s[u])c[u]=Kt(i[h],a[u]),h++,u++;else if(l[f]===s[y])c[y]=Kt(i[f],a[y]),f--,y--;else if(l[h]===s[y])c[y]=Kt(i[h],a[y]),Ft(t,c[y+1],i[h]),h++,y--;else if(l[f]===s[u])c[u]=Kt(i[f],a[u]),Ft(t,i[h],i[f]),f--,u++;else if(void 0===d&&(d=Xt(s,u,y),p=Xt(l,h,f)),d.has(l[h]))if(d.has(l[f])){const e=p.get(s[u]),o=void 0!==e?i[e]:null;if(null===o){const e=Ft(t,i[h]);Kt(e,a[u]),c[u]=e}else c[u]=Kt(o,a[u]),Ft(t,i[h],o),i[e]=null;u++}else Yt(i[f]),f--;else Yt(i[h]),h++;for(;u<=y;){const e=Ft(t,c[y+1]);Kt(e,a[u]),c[u++]=e}for(;h<=f;){const t=i[h++];null!==t&&Yt(t)}return this.ut=s,((t,e=Jt)=>{t._$AH=e})(t,c),D}}),te={},ee=qt(class extends Gt{constructor(){super(...arguments),this.nt=te}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return D}else if(this.nt===e)return D;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});var oe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ne=class extends zt{constructor(){super(...arguments),this.theme=st.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return B` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon?B` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:B``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${ee([this.value,this.options],(()=>B`
                ${Zt(this.options,(t=>null==t?B` <option></option>`:this.isSelectedOption(t)?B` <option value="${t.key}" selected>${t.value}</option> `:B` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?B`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?B` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:B``}
              ${this.warningText?B` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:B``}
              ${this.errorText?B` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:B``}
            </div>
          `:B``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((r=>{let n=String(Object.keys(t)[Object.values(t).indexOf(r)]);e&&(n=n.concat(e)),o.push({key:r,value:n})})),o}};ne.styles=n`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    option {
      padding: 0;
    }

    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--height-min);
      line-height: var(--height-min);
    }

    select[multiple] {
      line-height: unset;
      height: auto;
    }

    select:focus {
      outline: none;
      box-shadow: none;
    }

    select:valid {
      outline: none;
      box-shadow: none;
    }
  `,oe([rt({type:st,converter:String}),re("design:type",String)],ne.prototype,"theme",void 0),oe([rt({type:String}),re("design:type",String)],ne.prototype,"trailingIcon",void 0),oe([rt({type:String}),re("design:type",String)],ne.prototype,"label",void 0),oe([rt({type:String}),re("design:type",String)],ne.prototype,"errorText",void 0),oe([rt({type:String}),re("design:type",String)],ne.prototype,"infoText",void 0),oe([rt({type:String}),re("design:type",String)],ne.prototype,"warningText",void 0),oe([rt(),re("design:type",Object)],ne.prototype,"value",void 0),oe([rt({type:Array}),re("design:type",Array)],ne.prototype,"options",void 0),oe([rt({type:String}),re("design:type",String)],ne.prototype,"name",void 0),oe([rt({type:Boolean}),re("design:type",Boolean)],ne.prototype,"required",void 0),oe([rt({type:Boolean}),re("design:type",Boolean)],ne.prototype,"multiple",void 0),oe([rt({type:Number}),re("design:type",Number)],ne.prototype,"size",void 0),oe([nt("#selectElement"),re("design:type",Object)],ne.prototype,"selectElement",void 0),ne=oe([et("nidoca-form-combobox")],ne);const ie=t=>null!=t?t:I;var ae,se=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},le=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.color="color",t.email="email",t.hidden="hidden",t.number="number",t.password="password",t.tel="tel",t.text="text",t.search="search",t.url="url",t.date="date",t.month="month",t.time="time",t.week="week"}(ae||(ae={}));let ce=class extends zt{constructor(){super(...arguments),this.type=ae.text,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=st.surface}render(){return this.type==ae.hidden?B`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:B` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-text-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              background-color: var(--app-color-${this.theme}-selected);
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?B` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:B``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${ie(this.size)}"
                minlength="${ie(this.minlength)}"
                maxlength="${ie(this.maxlength)}"
                pattern="${ie(this.pattern)}"
                min="${ie(this.min)}"
                max="${ie(this.max)}"
                step="${ie(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?B`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?B` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:B``}
                  ${this.warningText?B` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:B``}
                  ${this.errorText?B` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:B``}
                </div>
              `:B``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:null==e?void 0:e.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};ce.styles=n`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      padding: var(--space);
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      background: inherit;
      color: inherit;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input:focus::placeholder {
      color: transparent;
    }
  `,se([rt({type:ae,converter:String}),le("design:type",String)],ce.prototype,"type",void 0),se([rt({type:String}),le("design:type",String)],ce.prototype,"label",void 0),se([rt({type:String}),le("design:type",String)],ce.prototype,"placeholder",void 0),se([rt({type:String}),le("design:type",String)],ce.prototype,"trailingIcon",void 0),se([rt({type:String}),le("design:type",String)],ce.prototype,"errorText",void 0),se([rt({type:String}),le("design:type",String)],ce.prototype,"infoText",void 0),se([rt({type:String}),le("design:type",String)],ce.prototype,"warningText",void 0),se([rt({type:String}),le("design:type",String)],ce.prototype,"name",void 0),se([rt(),le("design:type",String)],ce.prototype,"value",void 0),se([rt({type:Boolean}),le("design:type",Boolean)],ce.prototype,"required",void 0),se([rt({type:Boolean}),le("design:type",Boolean)],ce.prototype,"disabled",void 0),se([rt({type:Boolean}),le("design:type",Boolean)],ce.prototype,"checked",void 0),se([rt({type:Number}),le("design:type",Object)],ce.prototype,"maxlength",void 0),se([rt({type:Number}),le("design:type",Object)],ce.prototype,"minlength",void 0),se([rt({type:Number}),le("design:type",Object)],ce.prototype,"min",void 0),se([rt({type:Number}),le("design:type",Object)],ce.prototype,"max",void 0),se([rt({type:String}),le("design:type",Object)],ce.prototype,"step",void 0),se([rt({type:Number}),le("design:type",Object)],ce.prototype,"size",void 0),se([rt({type:String}),le("design:type",Object)],ce.prototype,"pattern",void 0),se([nt("#inputElement"),le("design:type",Object)],ce.prototype,"inputElement",void 0),se([rt({type:st,converter:String}),le("design:type",String)],ce.prototype,"theme",void 0),ce=se([et("nidoca-form-text")],ce);let de=class extends ce{constructor(){super(),this.type=ae.date}};de=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-form-date"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],de);var pe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},he=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fe=class extends zt{constructor(){super(...arguments),this.theme=st.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return B` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="parentContainer">
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>

          <textarea
            id="inputElement"
            name="${this.name}"
            placeholder="${this.placeholder}"
            rows="${this.rows}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          >
${this.value}</textarea
          >
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?B`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?B` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:B``}
              ${this.warningText?B` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:B``}
              ${this.errorText?B` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:B``}
            </div>
          `:B``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};fe.styles=n`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    textarea {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--height-min);
    }
    textarea:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    textarea:focus::placeholder {
      color: transparent;
    }
  `,pe([rt({type:st,converter:String}),he("design:type",String)],fe.prototype,"theme",void 0),pe([rt({type:String}),he("design:type",String)],fe.prototype,"infoText",void 0),pe([rt({type:String}),he("design:type",String)],fe.prototype,"warningText",void 0),pe([rt({type:String}),he("design:type",String)],fe.prototype,"errorText",void 0),pe([rt({type:String}),he("design:type",String)],fe.prototype,"name",void 0),pe([rt(),he("design:type",String)],fe.prototype,"value",void 0),pe([rt({type:String}),he("design:type",String)],fe.prototype,"label",void 0),pe([rt({type:Boolean}),he("design:type",Boolean)],fe.prototype,"required",void 0),pe([rt({type:String}),he("design:type",String)],fe.prototype,"placeholder",void 0),pe([rt({type:Boolean}),he("design:type",Boolean)],fe.prototype,"disabled",void 0),pe([rt({type:Number}),he("design:type",Number)],fe.prototype,"rows",void 0),pe([nt("#inputElement"),he("design:type",Object)],fe.prototype,"inputElement",void 0),fe=pe([et("nidoca-form-textarea")],fe);var ue=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let me=class extends zt{constructor(){super(...arguments),this.theme=st.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return B`
      <nidoca-box theme="${ie(this.theme)}">
        <div class="container">
          <nidoca-icon
            clickable
            class="icon"
            @nidoca-event-icon-clicked="${()=>this.upload()}"
            icon="cloud_upload"
          ></nidoca-icon>

          Upload your Files
          <input style="display:none;" id="inputElement" name="file" type="file" />
        </div>
      </nidoca-box>
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};me.styles=n`
    :host,
    slot {
      display: block;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }

    .icon {
      font-size: 96px;
      align-self: center;
    }
  `,ue([rt({type:st,converter:String}),ye("design:type",Object)],me.prototype,"theme",void 0),ue([nt("#inputElement"),ye("design:type",Object)],me.prototype,"inputElement",void 0),me=ue([et("nidoca-form-upload")],me);var ge=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ve=class extends zt{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=st.primary,this.theme=dt.prototype.getParentTheme(this)||st.background}render(){return B`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-text-${this.theme});
        }

        input:checked + .slider {
          background-color: var(--app-color-${this.theme}-selected);
        }

        input:focus + .slider {
          box-shadow: 0 0 20px var(--app-color-${this.theme}-border);
        }
      </style>

      <nidoca-list-item>
        <nidoca-text-subtitle>
          ${this.label}
          <slot></slot>
        </nidoca-text-subtitle>

        ${this.infoText.length>0?B` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:B``}

        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @input="${t=>{this.checked=t.target.checked,console.log(this.checked)}}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText?B` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:B``}
      ${this.errorText?B` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:B``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ve.styles=n`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: var(--height-max);
    }

    .switch {
      position: relative;
      display: inline-block;
      height: 18px;
      width: 48px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      width: 40px;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 24px;
      width: 24px;
      left: 0px;
      bottom: -3px;

      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }

    .slider.round {
      border-radius: 12px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `,ge([rt({type:String}),be("design:type",String)],ve.prototype,"name",void 0),ge([rt({type:String}),be("design:type",String)],ve.prototype,"label",void 0),ge([rt({type:String}),be("design:type",String)],ve.prototype,"infoText",void 0),ge([rt({type:String}),be("design:type",String)],ve.prototype,"errorText",void 0),ge([rt({type:String}),be("design:type",String)],ve.prototype,"warningText",void 0),ge([rt({type:Boolean}),be("design:type",Boolean)],ve.prototype,"required",void 0),ge([rt({type:Boolean}),be("design:type",Boolean)],ve.prototype,"disabled",void 0),ge([rt({type:Boolean}),be("design:type",Boolean)],ve.prototype,"checked",void 0),ge([rt({type:String}),be("design:type",String)],ve.prototype,"theme",void 0),ge([nt("#inputElement"),be("design:type",Object)],ve.prototype,"inputElement",void 0),ve=ge([et("nidoca-form-switch"),be("design:paramtypes",[])],ve);var xe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},we=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $e=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return B`
      <nidoca-box theme="${ie(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};$e.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,xe([rt({type:st,converter:String}),we("design:type",Object)],$e.prototype,"theme",void 0),xe([rt({type:String,converter:String}),we("design:type",String)],$e.prototype,"label",void 0),xe([rt({type:String,converter:String}),we("design:type",String)],$e.prototype,"emailLabel",void 0),xe([rt({type:String,converter:String}),we("design:type",String)],$e.prototype,"buttonLabel",void 0),xe([nt("#form"),we("design:type",Object)],$e.prototype,"formComponent",void 0),$e=xe([et("nidoca-form-newsletter")],$e);var Se=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ae=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return B`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ae.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Se([rt({type:st,converter:String}),Re("design:type",String)],Ae.prototype,"theme",void 0),Se([rt({type:String,converter:String}),Re("design:type",String)],Ae.prototype,"label",void 0),Se([rt({type:String,converter:String}),Re("design:type",String)],Ae.prototype,"emailLabel",void 0),Se([rt({type:String,converter:String}),Re("design:type",String)],Ae.prototype,"buttonLabel",void 0),Se([nt("#form"),Re("design:type",Object)],Ae.prototype,"formComponent",void 0),Ae=Se([et("nidoca-form-reset-password")],Ae);var ke=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ee=class extends Z{constructor(){super(...arguments),this.theme=st.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return B`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.password}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.password}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.password}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?B` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:B``}
        ${this.showErrorMessagePasswordDiff?B` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:B``}
      </nidoca-box>
    `}changePassword(){var t,e,o,r,n;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(r=this.oldPasswordInputField)||void 0===r?void 0:r.getOutputData().value)==(null===(n=this.newPasswordInputField)||void 0===n?void 0:n.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};Ee.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ke([rt({type:st,converter:String}),Oe("design:type",String)],Ee.prototype,"theme",void 0),ke([rt({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"label",void 0),ke([rt({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"oldPasswordLabel",void 0),ke([rt({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"newPasswordLabel",void 0),ke([rt({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"repeatNewPasswordLabel",void 0),ke([rt({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"buttonLabel",void 0),ke([nt("#form"),Oe("design:type",Object)],Ee.prototype,"formComponent",void 0),ke([nt("#oldPassword"),Oe("design:type",Object)],Ee.prototype,"oldPasswordInputField",void 0),ke([nt("#newPassword"),Oe("design:type",Object)],Ee.prototype,"newPasswordInputField",void 0),ke([nt("#repeatNewPassword"),Oe("design:type",Object)],Ee.prototype,"repeatNewPasswordInputField",void 0),ke([rt(),Oe("design:type",String)],Ee.prototype,"errorMessageSamePasswordLabel",void 0),ke([rt(),Oe("design:type",String)],Ee.prototype,"errorMessagePasswordDiffLabel",void 0),Ee=ke([et("nidoca-form-change-password")],Ee);var je=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Te=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return B`
      <nidoca-box theme="${ie(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.password}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Te.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,je([rt({type:st,converter:String}),Pe("design:type",Object)],Te.prototype,"theme",void 0),je([rt({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"label",void 0),je([rt({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"emailLabel",void 0),je([rt({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"passwordLabel",void 0),je([rt({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"buttonLabel",void 0),je([nt("#form"),Pe("design:type",Object)],Te.prototype,"formComponent",void 0),Te=je([et("nidoca-form-register")],Te);var Ce=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Be=class extends Z{constructor(){super(...arguments),this.code=""}render(){return B``}};Be.styles=n``,Ce([rt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Be.prototype,"code",void 0),Be=Ce([et("nidoca-upload")],Be);var De=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ie=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ne=class extends Z{constructor(){super(),this.theme=dt.prototype.getParentTheme(this)||st.background}render(){return B`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};Ne.styles=n`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,De([rt({type:st,converter:String}),Ie("design:type",String)],Ne.prototype,"theme",void 0),Ne=De([et("nidoca-hr"),Ie("design:paramtypes",[])],Ne);var _e=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Le=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let We=class extends Z{constructor(){super(...arguments),this.text="",this.icon=""}render(){return B`
      <div class="container">
        ${this.icon?B` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:B``}
        ${this.text?B` <nidoca-text-button>${this.text}</nidoca-text-button>`:B``}
        <slot></slot>
      </div>
    `}};We.styles=n`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,_e([rt({type:String}),Le("design:type",String)],We.prototype,"text",void 0),_e([rt({type:String}),Le("design:type",String)],We.prototype,"icon",void 0),We=_e([et("nidoca-menu-area")],We);var ze=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ue=class extends Z{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1,this.theme=st.surface}render(){return B`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?B` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:B``}
        ${this.text?B` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>`:B``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ue.styles=n`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `,ze([rt({type:String}),Me("design:type",String)],Ue.prototype,"text",void 0),ze([rt({type:String}),Me("design:type",String)],Ue.prototype,"icon",void 0),ze([rt({type:Boolean}),Me("design:type",Boolean)],Ue.prototype,"selected",void 0),ze([rt({type:String}),Me("design:type",String)],Ue.prototype,"theme",void 0),Ue=ze([et("nidoca-menu-item")],Ue);var He=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},qe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ge=class extends Z{constructor(){super(...arguments),this.theme=st.surface}render(){return B` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach(((t,e)=>{if("theme"==e&&null!=this.slotElement){const t=this.slotElement.assignedElements();for(let e=0;e<t.length;e++){const o=t[e];o instanceof Ue&&(o.theme=this.theme)}}}))}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];if(r instanceof Ue){const e=r.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?r.selected=!0:r.selected=!1)}}}}))}};Ge.styles=n`
    :host,
    slot {
      display: block;
    }
  `,He([rt({type:String}),qe("design:type",String)],Ge.prototype,"theme",void 0),He([nt("#slotElement"),qe("design:type",Object)],Ge.prototype,"slotElement",void 0),Ge=He([et("nidoca-menu")],Ge);var Qe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fe=class extends Z{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return B`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,r,n,i){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(r).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(i).concat(";")}};Fe.styles=n`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Qe([rt({type:String}),Ve("design:type",String)],Fe.prototype,"height",void 0),Qe([rt({type:String}),Ve("design:type",String)],Fe.prototype,"width",void 0),Qe([rt({type:String}),Ve("design:type",String)],Fe.prototype,"left",void 0),Qe([rt({type:String}),Ve("design:type",String)],Fe.prototype,"top",void 0),Qe([rt({type:String}),Ve("design:type",String)],Fe.prototype,"right",void 0),Qe([rt({type:String}),Ve("design:type",String)],Fe.prototype,"bottom",void 0),Fe=Qe([et("nidoca-layout-floating")],Fe);var Ke=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Je=class extends Z{constructor(){super(...arguments),this.theme=st.background}render(){return B`
      ${dt.getStyle(this.theme)}
      <slot></slot>
    `}};Je.styles=n`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,Ke([rt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Je.prototype,"theme",void 0),Je=Ke([et("nidoca-container")],Je);var Ye=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ze=class extends Z{constructor(){super(),this.hideSidebox=!0,this.theme=dt.prototype.getParentTheme(this)||st.background}render(){return B` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox?B``:B` <slot class="sidebox" name="sidebox"></slot>`}`}};Ze.styles=n`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .listbox {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    .sidebox {
      display: block;
      z-index: 1;
      position: fixed;
      right: 0;
      width: 33vw;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: 640px) {
      .sidebox {
        width: 100%;
      }
    }
  `,Ye([rt({type:st,converter:String}),Xe("design:type",String)],Ze.prototype,"theme",void 0),Ye([rt({type:Boolean,converter:String}),Xe("design:type",Boolean)],Ze.prototype,"hideSidebox",void 0),Ze=Ye([et("nidoca-split-screen"),Xe("design:paramtypes",[])],Ze);var to=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let oo=class extends Z{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return B`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,r){return new(o||(o=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};oo.styles=n`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
    }
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      filter: brightness(var(--app-lighten-2));
    }

    .clickable:hover {
      filter: brightness(var(--app-darken-2));
    }
  `,to([rt({type:String}),eo("design:type",String)],oo.prototype,"icon",void 0),to([rt({type:Boolean}),eo("design:type",Boolean)],oo.prototype,"clickable",void 0),to([rt({type:Boolean}),eo("design:type",Boolean)],oo.prototype,"deactivated",void 0),to([rt({type:String}),eo("design:type",String)],oo.prototype,"primaryText",void 0),oo=to([et("nidoca-icon")],oo);var ro=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},no=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class io{}io.NONE="NONE",io.DEFAULT_SHADOW="DEFAULT_SHADOW",io.SHADOW_1="SHADOW_1",io.SHADOW_2="SHADOW_2",io.SHADOW_3="SHADOW_3";let ao=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.shadowType=io.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return B`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <span class="iconExtended round ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
          style="font-size: inherit;"
        ></nidoca-icon>
      </span>
    `}clicked(){return function(t,e,o,r){return new(o||(o=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};ao.styles=n`
    .round {
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .DEFAULT_SHADOW {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .SHADOW_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }
  `,ro([rt({type:String}),no("design:type",String)],ao.prototype,"theme",void 0),ro([rt({type:Object}),no("design:type",io)],ao.prototype,"shadowType",void 0),ro([rt({type:String}),no("design:type",String)],ao.prototype,"icon",void 0),ro([rt({type:Boolean}),no("design:type",Boolean)],ao.prototype,"clickable",void 0),ro([rt({type:Boolean}),no("design:type",Boolean)],ao.prototype,"deactivated",void 0),ao=ro([et("nidoca-icon-extended")],ao);var so=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let lo=class extends Z{render(){return B`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};lo.styles=n`
    :host {
      display: inline-block;
    }

    :root {
      --ripple-background: var(--app-color-surface-background-dark);
      --ripple-opacity: 0.8;
      --ripple-duration: 600ms;
      --ripple-easing: linear;

      --y: 0;
      --x: 0;
      --d: 0;
      --t: 0;
      --s: 0;
      --o: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    [anim='ripple'] {
      position: relative;
      overflow: hidden;
    }

    [anim='ripple']:before {
      content: '';
      position: absolute;
      display: block;
      background: var(--ripple-background, white);
      border-radius: 50%;
      pointer-events: none;
      top: calc(var(--y) * 1px);
      left: calc(var(--x) * 1px);
      width: calc(var(--d) * 1px);
      height: calc(var(--d) * 1px);
      opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
      -webkit-transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      -webkit-transform: translate(-50%, -50%) scale(var(--s, 1));
      transform: translate(-50%, -50%) scale(var(--s, 1));
      -webkit-transform-origin: center;
      transform-origin: center;
    }
  `,so([nt("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],lo.prototype,"rippleContainerElement",void 0),lo=so([et("nidoca-ripple")],lo);var co=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},po=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ho=class extends Z{constructor(){super(...arguments),this.src="",this.width="auto",this.height="auto"}render(){return this.src?B`<img width="${this.width}" height="${this.height}" src="${this.src}" />`:B``}};ho.styles=n`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,co([rt({type:String}),po("design:type",String)],ho.prototype,"src",void 0),co([rt({type:String}),po("design:type",String)],ho.prototype,"width",void 0),co([rt({type:String}),po("design:type",String)],ho.prototype,"height",void 0),ho=co([et("nidoca-img")],ho);let fo=class extends ho{render(){return B`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}static example(t=""){return B`<nidoca-img-round
      width="64px"
      width="64px"
      slot="${t}"
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QCURXhpZgAASUkqAAgAAAACADEBAgAHAAAAJgAAAGmHBAABAAAALgAAAAAAAABHb29nbGUAAAIAAJAHAAQAAAAwMjIwhpIHAEAAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gAtQ29udmVydGVkIGZyb20gIFdlYlAgdG8gSlBHIHVzaW5nIGV6Z2lmLmNvbf/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAGAAYAMBEQACEQEDEQH/xAAdAAACAgMBAQEAAAAAAAAAAAAEBwMGBQgJAQIA/8QAPBAAAQMDAwIEAwYDBgcAAAAAAQIDBAUGEQAHIRIxCBNBURQiYSMycYGRoQkVFjNCUmJywSRTkqKx0fH/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAJhEAAgICAwACAQQDAAAAAAAAAAECEQQhAxIxBUFRExQiI0Jhcv/aAAwDAQACEQMRAD8A3lbbJOkECUI47ahCZts+2oQBue6aDY1JRVrlmrZ89XlRIrDReky3vRtptPKlc/gBySNBuhkr0VSRc1+1hsOfCwLUZfQCGOlM2cE+7ij9khfukBePc6zyyTqx+N+2yu1Ktbj0v7SFdlYc74W6ttSf+kIA/bVP7rZo/Y8X4B6PvPedNdVCuNEKrIxgodYDDnr2eR6+3Uk9u+njkWymfxqq0NG2Lvod4NLVRlLj1BhIU/TpS0h1Kf8AGkg4cR/nSSPfGtCdnIkqdGXPW53OdWCkLqM49dMlRCBbRx76dKiArrRB+7++iTwMQ3j8tUkCW28EEjRSsh7PqUKh0qXWqhnyIbZX0g8rV/dQPqTgfnpZ6QyjYuqFbk6rVc39dykv1x8FMVI+5Aa9END09yfU5PrrmybO/i4yqywriuN/e9e2q2jYjE1IZbcb7Y0qiixC6uOO6055raevGcjtjTJDVZV6fdEiJVmX1SlsTIyguJLbOFMuf7pPZSTwoZBHbDKTs5uViatI2btWvN3ZbMSuAJS+ctSm09m3h95I+nOR9FDXVg7PPy/i9h60Ad+dXJAIlsn8dQgM4zn+7++oQISnVaIGJbAydNFWQr98tl2HTIfmEpkzUqLfoooBIz+uqufSNmMth0SB0sozjKRwNc5nU7tBsqAyhHX3xqNDLloqtRb61qRnv66SqZugxd1v/iI5j46epSk579sf+9BmiK+xH3I5JhTi193GeffVLlsjpj08MN2OTpNStt+QC3MY89pJGB5jeBwfcoP/AGa6mLKzzPyWPTtD0W1jvroHMtA62wMaPoAdaBoEJEN9RAzjOqUMFoHrp4kMJc8dt+bSGljP268H2+XP+2s+Q9GzFaszbCE4Ax21gOkSPR1vIKEfrpmDqVK4GHmGXGery3W/XGcarfp0eLSKS/8ADyIzqV8rSorUn/Dn/wCaBpvQmNwaW2y6JTzflMur6Q46QgD9TqtwsqbMh4daihrcajuQJbMlh+d8Ol1lwKQrqQtOMj1yoZGtOM2mcj5K2rRt+4nJOPQ660H2PPU7pg60899MNF2DOIx66L2Mfmk/MOdUjBSE8d9QlWYi5vKcaaeQVlEGUC8oJBAHSoKSrnKTyO41lyWb8bga2HrddYgqlss+asJJSjqx1H0Gecaxo319CB3+3DvuwLVXULn3todgzX0FTLTbZkPFCR1fYxUhS3iBnKu2M9vUlsYJ7EJtD4lL0vG6KfbVU3JvO4G63g0+bMtxiHFlpBUCWj/aITwo854TqGmGkObxMVK6tmtsqpekJXxLiYiX+pnhTGABnHPV+2hVFnbstHMap7oSd0LlYnX7LvGovzXfKixIdXajNpUf9fyJAIIzwPfTxS/JznkOQ8/Cfd8Ni/5s6xJNdpr7MF4tRaikZakIBUy4kj7M/MCPz01qD0Ol+r6jp9s9PuOsbO2ZXbykrfrtSpDMucpQGetY6k5I7/KR+nproY9v04OWv79Fkc76uKQV3uNH6IfbSOQc6pGCUJ476hDA3AU0ll+BBjoL1xyENkuA+WlaW8ElXoSE8H3GNZslHexa5+L/AJMnF+eGx9U6xIZOhRVvZHbhqsV6qHb+BUKvcLHw86qSXXVyXGcf2JUVZDecEoGASlOe2mo0ca7MrO3XhZtSgX5Au6q1kOJpiein06GwWWWEZJCDkk9IKj8owk+2gvS6ceqLz4nYgqG20iMmM1JS91NLadT1JW0oYXn8j++hyx/A3Ar9OeFG2Rp1Nmyv6LuZ6E8l4h6MQh5sL9sKHGPprNsZYqTtIYNFtyRY1L/mEtxT81OCqUcY/LA0E3Ys+JRTOktNimn0SlwMgpjU+M0Me4bSD/416SCpKjyE3/Js8cOTnRFYM72GigH2j01SNZOjg6KA3SPqTHblRnYrycodT0nVWRGzTjZPXRXqOSmSpg8+Uopz74JH+2sSVHRUrC7hqMWnU12RIWEobSVqJPYaiSN+M97FRZcms3Zdib1rrKYlEp46YKFuKbMkkEFzpHOMds8ZOfTS/ZtyEktFd393vm0mgxLZNDZp9Wq0SpS6SwXviUupjMlasrSnhZHZICgfQnGmkuyKINQ2aXWHfje5dSpdwP0+NRag3GSmaocCY6FEhakjAyElIB+96HOBrO4lyyWhiXJWxM+BgRHfMRUHGY2e2epaQP3I0qWyZMqjZ0pqMdmPILLHDTSUttj2SkAAftr0MfDxEpbYArUCQL0CH5HpqoWwhAznUAmyQZPro+h88K7Um0xrlUlaxmY38Qj6qHyqH7D9dZeeNHSxpXoCqkOPVZSBMSHGYqy6plXKHigFQCh7ZxrJs6cZV4LPbe87v3GvW6BD27mO0GmShEiVeRKaYjrfQnlttsZcUkZA8wAJ6sjPGdFIuhJf5MqO+MS9YstiqwNqKIup0Fl9NHmSZyXEsJUSl0dPPdH0I45Gnb0dGMuBxNMGod5wLgjzbjtG26RSI0jLrkKSEyPMIIBQlKUhWfVJSMjgHk6oZl5HFPRfdtaS/U947Ls2Irzv5hX4CnMdg0hwOrV+SEEn20kdszZUv6DqJUV+ZNfXyQVlWfodegj4eXa2Aq1AkC9Ah4nVQhKnRQUEDjOnSsK8MZc9Fl1e3narTEZn0t4OtJ/xoH9ojP1T+hA1myI6NGM6ZRKRcDlVSFusJDpCg96EEfeQR+ffWTodVT/2e0OSzbsRUaMrDDkcqRjhP1wPT9dRxLIif3c2vgXLVnriTWJ8YdAeaaDhWtSvRPSTgfiBpGauO/s093Yep1pS+ikIddbUTJcSv5+lxI+ZPpg5yD+A0HGyrn5KNgv4bmy9brVXf8U94RZEWkNxXqfaMN0dPnOOHokykj/lpCS0hXqVOHsBnRj4/wBs42Rk6N7ySvqWruo5Oul4ZKshX31GAHc9NAh4nVdFdkqdRDI8q9Xott0Gp3TctWjUukUeMuXOmSVhLbDKQSVEk/Tt3JONOhokPhw3gtHfXaSkbmWZJSuDVVPBxgrSp2I8hxSVMugfdWkdPHsUkcEHQlsbt1Jb92XoV1Fc+kzjRKmru60nLTvsFoyP1Tg8n3xqp8aHWRQh7ngbxbVNNu1Wx5VepsdwL+PovVLbSn6tJ6XkAeuUEDB5ONK+NGvjy/ya/blb73qme5UmdpL9VEjx1IjzE0dz4dxfHKlYCEgEEcfj2xqiUTdDKRqNe9fue7pFYuK7YYolMZ65PwTnT5q1JBw2npVlAKlZJHJHH10saEm+y2dPPAdcEKD4UNrbWr9aZjVGpwXDS2ZboQZCOtS/Lbz3KUk8d8DWqGjjv02LkU+TGJS42R9ccavsBj199MxSBz01ErFsjS4fUd9M1YtWYHdHdXbXYi1HL53buaPRYCepMZk/PJmuAZ8thofM4rtwBgZySBzqpqmA5YeLvx83T4i6b/RtFtxVtWAX1SU0ZxQcl1RKFfZvS1AYbQFAKDaCR1clSsDDJFovvCl4tL58IN9P1W34ztcs2tqCKxQC6W0u47SGVYKW305IBIwpJ6SOElMIdkdhvF7sJ4kaY0/t1esf+bFHU/QZ+I1Sj8ZOWVH5wB/fbK0f5tCheqHFnOlaCn1FNvxtxt1WbErVQrqKlS3FtDqkUOQY0p9wnpQjAylZKiB8yT30koWh1zUcsry8IW8s3dehbWXVX6YbfqkZyrVSuQFqV8FDS6OtDqFBPS+QpKUp56lKynhKtKuCi5ZLaD/GlvDR7x8OVLpNux4FFiWXue7b1qwIJKXY9KgUtCUrK85UvzHRlfBJV30yj1KrTFDs3/Ek8VOzwZhN30u66U0Og0+40mYkp7YDpIeTx/nx9NMmQ3f2Q/i3bPX+yqnb822qxqsjCWqhTkOSoD30OB5jWOOCFDvyNED8Nq7N3m2P3NDZ283htauKdPShmPPR56j7eWSFg8diBolDVOhD+K7x87feHYy7FsIU+9Nx8BK4aXiYFHX7yloOXHMnAZQQfVRTxm62x6OUu6m6187sXW/e25F0S7luORnDksgNRWhz5bTScIbRyCEJAAz699DqLRQYMqQ7OS5JdLq+kICj6Adh+A0pYZnzvL5OoiAig1HltVKHLdhyWlBxp1pZSpCx6gpIIP4HUIPDb7x7+MbbdDFNoO9VUqUFHCWa221VAQOAnrkJU4B9AofTUohbNwP4mviqv2k06h1j+loqabKMvz4VMWhclfSUp8zqdUn5eokdITyec8aWgUhT3X4wd+7nnTZsm5WKe7UEtIkmFDQ35qW2y2kHIPoSf9RJ0W2FJCbqFSnVN5cifKdfdccU4pS1k5Ue5/Hgc6rY3gHoEPvTkPtl52O4l+O4tp1tQUhaFFJSR6gjnOgQ/9k="
    ></nidoca-img-round>`}};fo.styles=n`
    :host {
      font-size: 0;
      display: inline-block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }
  `,fo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-img-round")],fo);var uo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let yo=class extends Z{constructor(){super(...arguments),this.src=""}render(){return B`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};yo.styles=n``,uo([rt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],yo.prototype,"src",void 0),yo=uo([et("nidoca-movie")],yo);var mo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},go=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let bo=class extends Z{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return B`
      <nidoca-form-text
        theme="${ie(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${ae.number}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};bo.styles=n`
    :host {
      display: block;
      width: 100%;
    }
  `,mo([rt({type:st,converter:String}),go("design:type",Object)],bo.prototype,"theme",void 0),mo([rt({type:String}),go("design:type",String)],bo.prototype,"label",void 0),mo([rt({type:String}),go("design:type",String)],bo.prototype,"placeholder",void 0),mo([rt({type:String}),go("design:type",String)],bo.prototype,"name",void 0),mo([rt({type:Number}),go("design:type",Number)],bo.prototype,"min",void 0),mo([rt({type:Number}),go("design:type",Number)],bo.prototype,"max",void 0),mo([rt({type:String}),go("design:type",String)],bo.prototype,"errorText",void 0),mo([nt("#inputfield"),go("design:type",Object)],bo.prototype,"inputfield",void 0),bo=mo([et("nidoca-form-captcha")],bo);var vo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},xo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wo=class extends Z{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return B`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};wo.styles=n`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,vo([rt({type:String}),xo("design:type",String)],wo.prototype,"text",void 0),vo([rt({type:String}),xo("design:type",String)],wo.prototype,"href",void 0),vo([rt({type:String}),xo("design:type",String)],wo.prototype,"targetType",void 0),wo=vo([et("nidoca-link")],wo);var $o=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},So=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ro=class extends Z{constructor(){super(...arguments),this.theme=st.surface,this.primaryText="",this.secondaryText="",this.selected=!1}render(){return B`
      <style>
        .container {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
        .container.selected {
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div @click="${()=>this.switchSelected()}" class="container ${this.selected?"selected":""}">
        <slot name="left" class="item left"></slot>
        <div class="containerTypography">
          ${this.primaryText?B` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`:B``}
          <slot></slot>
          ${this.secondaryText?B` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>`:B``}
          <slot name="secondary"></slot>
        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `}switchSelected(){this.selected=Boolean(!this.selected),this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(t=""){return B`<nidoca-list-item slot="${t}" primaryText="List Item" secondaryText="List Item Secondary Text">
      ${fo.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};Ro.styles=n`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: min-content 1fr min-content;
      padding: var(--space-2);
    }

    .item {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .left {
      padding-right: var(--space-2);
    }

    .right {
      padding-left: var(--space-2);
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `,$o([rt({type:st,converter:String}),So("design:type",String)],Ro.prototype,"theme",void 0),$o([rt({type:String}),So("design:type",String)],Ro.prototype,"primaryText",void 0),$o([rt({type:String}),So("design:type",String)],Ro.prototype,"secondaryText",void 0),$o([rt({type:Boolean}),So("design:type",Boolean)],Ro.prototype,"selected",void 0),Ro=$o([et("nidoca-list-item")],Ro);var Ao=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oo=class extends Z{constructor(){super(...arguments),this.theme=st.surface,this.multiselect=!1}updated(t){super.updated(t),t.forEach(((t,e)=>{"theme"==e&&this.getItems().forEach((t=>{t.theme=this.theme}))}))}render(){return B`
      <slot
        @nidoca-event-list-item-clicked="${t=>{this.multiselect||(this.unselectAll(),t.target.selected=!0)}}"
        id="slotElement"
      ></slot>
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof Ro&&t.push(r)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof Ro&&r.selected&&t.push(r)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let r=0;r<e.length;r++){const n=e[r];n instanceof Ro&&(n.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}static example(){return B`<nidoca-list theme="surface">
      ${Po.example()} ${Ro.example()} ${Ro.example()} ${Ro.example()}
    </nidoca-list>`}};Oo.styles=n`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Ao([rt({type:st,converter:String}),ko("design:type",String)],Oo.prototype,"theme",void 0),Ao([rt({type:Boolean}),ko("design:type",Boolean)],Oo.prototype,"multiselect",void 0),Ao([nt("#slotElement"),ko("design:type",Object)],Oo.prototype,"slotElement",void 0),Oo=Ao([et("nidoca-list")],Oo);var Eo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Po=class extends Z{constructor(){super(...arguments),this.theme=st.surface,this.text=""}render(){return B`
      <style>
        :host {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background-dark);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }

        :host {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <nidoca-text-body theme="${this.theme}" style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-body>
    `}static example(){return B`<nidoca-list-section>Section A</nidoca-list-section>`}};Po.styles=n`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,Eo([rt({type:st,converter:String}),jo("design:type",String)],Po.prototype,"theme",void 0),Eo([rt({type:String}),jo("design:type",String)],Po.prototype,"text",void 0),Po=Eo([et("nidoca-list-section")],Po);var To=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Co=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Bo=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.prominent=!1}render(){return B`
      ${dt.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?B` <slot class="prominent" name="prominent"></slot>`:B``}
    `}};Bo.styles=n`
    :host {
      display: block;
      top: 0;
      width: 100%;
      position: sticky;
    }

    .bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      align-content: space-around;
      width: 100%;
      height: var(--height-medium);
      box-sizing: border-box;
    }

    slot {
      display: flex;
      align-items: center;
      flex-basis: auto;
    }

    .prominent {
      display: block;
    }
  `,To([rt({type:String,converter:String}),Co("design:type",String)],Bo.prototype,"theme",void 0),To([rt({type:Boolean}),Co("design:type",Boolean)],Bo.prototype,"prominent",void 0),Bo=To([et("nidoca-top-app-bar")],Bo);var Do=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let No=class extends Z{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new oo],["row 2",new oo]],this.theme=st.background}render(){return B`
      <style>
        td,
        th {
          border-bottom: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          border-left: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        tr > td:last-of-type,
        th:last-of-type {
          border-right: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        th {
          border-top: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${ee([this.headers],(()=>B` ${Zt(this.headers,(t=>B` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${ee([this.rows],(()=>B`
                  ${Zt(this.rows,(t=>B`
                        <tr>
                          ${Zt(t,(t=>B` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};No.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      height: var(--height-medium);
      box-sizing: border-box;
      text-align: left;
    }
  `,Do([rt({type:Array}),Io("design:type",Array)],No.prototype,"headers",void 0),Do([rt({type:Array}),Io("design:type",Array)],No.prototype,"rows",void 0),Do([rt({type:st,converter:String}),Io("design:type",String)],No.prototype,"theme",void 0),No=Do([et("nidoca-table")],No);var _o=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Lo=class extends Z{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?B` <slot></slot>`:B``}};Lo.styles=n`
    :host,
    slot {
      display: block;
    }
  `,_o([rt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Lo.prototype,"selected",void 0),Lo=_o([et("nidoca-tab-content")],Lo);var Wo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},zo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Mo=class extends Z{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=st.surface}render(){return B`
      <style>
        .container {
          border-color: var(--app-color-${this.theme}-background);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
        ${this.text?B` <nidoca-text text="${this.text}"></nidoca-text> `:B``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Mo.styles=n`
    :host {
      display: block;
      padding-right: var(--space);
    }

    .container {
      line-height: var(--height-min);
      height: var(--height-min);
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `,Wo([rt({type:Boolean}),zo("design:type",Boolean)],Mo.prototype,"selected",void 0),Wo([rt({type:String}),zo("design:type",String)],Mo.prototype,"text",void 0),Wo([rt({type:String}),zo("design:type",String)],Mo.prototype,"theme",void 0),Mo=Wo([et("nidoca-tab")],Mo);var Uo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ho=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qo=class extends Z{constructor(){super(...arguments),this.theme=st.surface,this.tabIndex=0}render(){return B`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let r=0;r<t.length;r++){const n=t[r];n instanceof Mo&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==o?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof Lo&&(this.tabIndex==t?r.selected=!0:r.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];if(r instanceof Mo&&r==t){this.tabIndex=o;break}}}}};qo.styles=n`
    :host {
      display: block;
      width: 100%;
    }
    slot {
      display: block;
    }

    .container {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 100%;
    }

    #tabSlot {
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,Uo([nt("#tabSlot"),Ho("design:type",Object)],qo.prototype,"tabSlot",void 0),Uo([nt("#tabContentSlot"),Ho("design:type",Object)],qo.prototype,"tabContentSlot",void 0),Uo([rt({type:String}),Ho("design:type",String)],qo.prototype,"theme",void 0),Uo([rt({type:Number}),Ho("design:type",Number)],qo.prototype,"tabIndex",void 0),qo=Uo([et("nidoca-tabs")],qo);var Go=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Qo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vo=class extends Z{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return B`
      <slot
        id="left"
        @nidoca-event-menu-item-clicked="${()=>{641>window.innerWidth&&(this.hideLeft=!0)}}"
        class="${this.hideLeft?"hideLeft":""}"
        name="left"
      >
      </slot>

      <div class="right">
        <nidoca-top-app-bar theme="primary" id="header" .prominent="${this.prominent}">
          <nidoca-icon
            slot="left"
            style="padding-left:var(--space-2);"
            icon="menu"
            .clickable="${!0}"
            @nidoca-event-icon-clicked="${()=>{this.hideLeft=!this.hideLeft}}"
          ></nidoca-icon>

          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span style="width: 100%;" slot="prominent">
            <slot class="slotHeader" name="prominent"></slot>
          </span>
        </nidoca-top-app-bar>
        <slot id="content" name="content"></slot>
      </div>
    `}};Vo.styles=n`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-text-primary);
      background-color: var(--app-color-primary-background);
      min-width: 280px;
      min-height: 100%;
      max-height: 100%;
    }

    #left.hideLeft {
      transition: all 0.35s ease;
      display: none;
    }

    @media screen and (max-width: 640px) {
      #left {
        position: fixed;
        z-index: 1;
      }
    }

    .right {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
  `,Go([rt({type:Boolean}),Qo("design:type",Boolean)],Vo.prototype,"hideLeft",void 0),Go([rt({type:Boolean}),Qo("design:type",Boolean)],Vo.prototype,"prominent",void 0),Go([nt("#header"),Qo("design:type",Object)],Vo.prototype,"headerElement",void 0),Go([nt("#left"),Qo("design:type",Object)],Vo.prototype,"leftElement",void 0),Go([nt("#content"),Qo("design:type",Object)],Vo.prototype,"contentElement",void 0),Vo=Go([et("nidoca-template"),Qo("design:paramtypes",[])],Vo);var Fo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Jo=class extends Z{firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((t=>{this.videoElement&&(this.videoElement.srcObject=t)}))}render(){return B`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};Jo.styles=n``,Fo([nt("#video"),Ko("design:type",Object)],Jo.prototype,"videoElement",void 0),Fo([nt("#canvas"),Ko("design:type",Object)],Jo.prototype,"canvasElement",void 0),Fo([nt("#click-photo"),Ko("design:type",Object)],Jo.prototype,"buttonElement",void 0),Jo=Fo([et("nidoca-video")],Jo);var Yo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Xo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zo=class extends Z{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return B`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((t=>B`${t}`))}
    `}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"src"==e&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((t=>{const e=document.createElement("canvas");e.width=t[0],e.height=t[1];const o=e.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,t[0],t[1]),e.toBlob((t=>{}),"image/webp")),this.canvasElements.push(e)})),this.requestUpdate()})}};Zo.styles=n``,Yo([rt({type:String}),Xo("design:type",String)],Zo.prototype,"src",void 0),Yo([nt("#img"),Xo("design:type",Object)],Zo.prototype,"img",void 0),Zo=Yo([et("nidoca-svg-2-webp")],Zo);var tr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},er=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let or=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.text=""}render(){return B` <slot>${this.text}</slot>`}};or.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,tr([rt({type:st,converter:String}),er("design:type",Object)],or.prototype,"theme",void 0),tr([rt({type:String}),er("design:type",String)],or.prototype,"text",void 0),or=tr([et("nidoca-text")],or);let rr=class extends or{render(){return B`${super.render()}`}};rr.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,rr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-button")],rr);let nr=class extends or{};nr.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,nr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-overline")],nr);let ir=class extends or{render(){return B` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ir.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,ir=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-body")],ir);let ar=class extends or{render(){return B` <slot style="color: var(--app-color-subtext-${this.theme});">${this.text}</slot>`}};ar.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,ar=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-caption")],ar);let sr=class extends ar{constructor(){super(),this.style.color="red"}};sr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-error"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],sr);let lr=class extends ar{constructor(){super(),this.style.color="green"}};lr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-success"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],lr);let cr=class extends ar{constructor(){super(),this.style.color="yellow"}};cr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-warning"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],cr);let dr=class extends ar{constructor(){super(),this.style.color="blue"}};dr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-info"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],dr);let pr=class extends or{};pr.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.25em;
    }
  `,pr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-h1")],pr);let hr=class extends or{};hr.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,hr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-h2")],hr);let fr=class extends or{};fr.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,fr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-h3")],fr);let ur=class extends or{};ur.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,ur=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-h4")],ur);let yr=class extends or{};yr.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,yr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-h5")],yr);let mr=class extends or{};mr.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,mr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-text-h6")],mr);var gr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},br=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vr=class extends Z{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=st.surface}render(){return B`
      <style>
        .container,
        input {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        ::slotted(.container:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container border">
        <nidoca-icon style="padding-right:var(--space);padding-left:var(--space);" icon="search"></nidoca-icon>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${()=>this.valueChanged()}"
        />
        <nidoca-icon
          style="padding-right:var(--space);padding-left:var(--space);"
          icon="close"
          @click="${()=>this.clearValue()}"
        ></nidoca-icon>
      </div>
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,r){return new(o||(o=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};vr.styles=n`
    :host {
      width: 100%;
      display: block;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    input {
      font: inherit;
      width: 100%;
      border: none;
      padding: 0;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
    }
  `,gr([rt({type:String}),br("design:type",String)],vr.prototype,"value",void 0),gr([rt({type:String}),br("design:type",String)],vr.prototype,"placeholder",void 0),gr([rt({type:Boolean}),br("design:type",Boolean)],vr.prototype,"disabled",void 0),gr([nt("#inputElement"),br("design:type",Object)],vr.prototype,"inputElement",void 0),gr([rt({type:st,converter:String}),br("design:type",String)],vr.prototype,"theme",void 0),vr=gr([et("nidoca-search-bar")],vr);var xr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},wr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class $r{}$r.CENTER="CENTER",$r.LEFT="LEFT",$r.RIGHT="RIGHT",$r.TOP="TOP",$r.BOTTOM="BOTTOM",$r.SLIDE_CENTER="SLIDE_CENTER",$r.SLIDE_LEFT="SLIDE_LEFT",$r.SLIDE_RIGHT="SLIDE_RIGHT",$r.SLIDE_TOP="SLIDE_TOP",$r.SLIDE_BOTTOM="SLIDE_BOTTOM";let Sr=class extends Z{constructor(){super(...arguments),this.transitionType=$r.CENTER,this.duration=.5}render(){return B` <div class="${ie(this.transitionType)}"><slot></slot></div> `}};Sr.styles=n`
    /* Declaration of keyframes */

    @-webkit-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-100px);
        -moz-transform: translatex(-100px);
        -o-transform: translatex(-100px);
        transform: translatex(-100px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(200px);
        -moz-transform: translatex(200px);
        -o-transform: translatex(200px);
        transform: translatex(200px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes slideInLeft {
      0% {
        opacity: 0;

        -webkit-transform: translateX(-400px);
      }
      60% {
        -webkit-transform: translateX(30px);
      }
      80% {
        -webkit-transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInLeft {
      0% {
        opacity: 0;

        transform: translateX(-400px);
      }
      60% {
        transform: translateX(30px);
      }
      80% {
        transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInRight {
      0% {
        opacity: 0;

        -webkit-transform: translateX(400px);
      }
      60% {
        -webkit-transform: translateX(-30px);
      }
      80% {
        -webkit-transform: translateX(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      0% {
        opacity: 0;

        transform: translateX(400px);
      }
      60% {
        transform: translateX(-30px);
      }
      80% {
        transform: translateX(10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInCenter {
      0% {
        opacity: 0;
        -webkit-transform: scale(0.3);
      }

      50% {
        opacity: 1;
        -webkit-transform: scale(1.05);
      }

      70% {
        -webkit-transform: scale(0.9);
      }

      100% {
        -webkit-transform: scale(1);
      }
    }

    @keyframes slideInCenter {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }

      50% {
        opacity: 1;
        transform: scale(1.05);
      }

      70% {
        transform: scale(0.9);
      }

      100% {
        transform: scale(1);
      }
    }

    @-webkit-keyframes slideInTop {
      0% {
        opacity: 0;

        -webkit-transform: translateY(400px);
      }
      60% {
        -webkit-transform: translateY(-30px);
      }
      80% {
        -webkit-transform: translateY(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInTop {
      0% {
        opacity: 0;

        transform: translateY(400px);
      }
      60% {
        transform: translateY(-30px);
      }
      80% {
        transform: translateY(10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    @-webkit-keyframes slideInBottom {
      0% {
        opacity: 0;

        -webkit-transform: translateY(-400px);
      }
      60% {
        -webkit-transform: translateY(30px);
      }
      80% {
        -webkit-transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInBottom {
      0% {
        opacity: 0;

        transform: translateY(-400px);
      }
      60% {
        transform: translateY(30px);
      }
      80% {
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    /*  */
    .CENTER {
      animation: fadeIn ease 2s;
      -webkit-animation: fadeIn ease 2s;
      -moz-animation: fadeIn ease 2s;
      -o-animation: fadeIn ease 2s;
      -ms-animation: fadeIn ease 2s;
    }

    .LEFT {
      -webkit-animation-name: fadeInLeft;
      -moz-animation-name: fadeInLeft;
      -o-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }
    .RIGHT {
      -webkit-animation-name: fadeInRight;
      -moz-animation-name: fadeInRight;
      -o-animation-name: fadeInRight;
      animation-name: fadeInRight;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }

    .TOP {
      opacity: 0;
      animation-name: fadeInUp;
      -webkit-animation-name: fadeInUp;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
    .BOTTOM {
      opacity: 0;
      animation-name: fadeInBottom;
      -webkit-animation-name: fadeInBottom;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_LEFT {
      -webkit-animation-name: slideInLeft;
      animation-name: slideInLeft;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_RIGHT {
      -webkit-animation-name: slideInRight;
      animation-name: slideInRight;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_CENTER {
      -webkit-animation-name: slideInCenter;
      animation-name: slideInCenter;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_TOP {
      -webkit-animation-name: slideInTop;
      animation-name: slideInTop;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_BOTTOM {
      -webkit-animation-name: slideInBottom;
      animation-name: slideInBottom;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
  `,xr([rt({type:String}),wr("design:type",String)],Sr.prototype,"transitionType",void 0),xr([rt({type:Number}),wr("design:type",Number)],Sr.prototype,"duration",void 0),Sr=xr([et("nidoca-transition")],Sr);var Rr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Ar=class extends Z{constructor(){super(...arguments),this.show=!1}render(){return this.show?B`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${$r.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:B``}};Ar.styles=n`
    .fullScreen {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .opacScreen {
      z-index: 20;
      opacity: 0.85;
      background-color: var(--app-color-surface-background);
    }

    .wrapperOutside {
      display: table;
      z-index: 30;
    }

    .wrapperInside {
      display: table-cell;
      vertical-align: middle;
    }

    .dialogContainer {
      width: max-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `,Rr([rt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Ar.prototype,"show",void 0),Ar=Rr([et("nidoca-dialog")],Ar);var kr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Or=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Er=class extends Z{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return B`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Nt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Nt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};Er.styles=n``,kr([rt({type:Boolean}),Or("design:type",Boolean)],Er.prototype,"show",void 0),kr([rt({type:String}),Or("design:type",String)],Er.prototype,"title",void 0),kr([rt({type:String}),Or("design:type",String)],Er.prototype,"description",void 0),kr([rt({type:String}),Or("design:type",String)],Er.prototype,"labelButtonYes",void 0),kr([rt({type:String}),Or("design:type",String)],Er.prototype,"labelButtonNo",void 0),Er=kr([et("nidoca-dialog-decision")],Er);var jr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Pr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Tr{}Tr.ROUND="ROUND",Tr.CLICKABLE="CLICKABLE",Tr.ZOOM_WRAPPED="ZOOM_WRAPPED",Tr.FULL_WIDTH="FULL_WIDTH";class Cr extends Z{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[Tr.CLICKABLE,Tr.FULL_WIDTH]}render(){return B`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}}Cr.styles=n`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }

    .CLICKABLE {
      cursor: pointer;
    }

    .ZOOM_WRAPPED {
      overflow: hidden;
    }

    .ZOOM_WRAPPED img:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }

    .FULL_WIDTH {
      box-sizing: border-box;
    }
    .FULL_WIDTH img {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }
    .ROUND img {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `,jr([rt({type:String}),Pr("design:type",String)],Cr.prototype,"src",void 0),jr([rt({type:String}),Pr("design:type",String)],Cr.prototype,"width",void 0),jr([rt({type:String}),Pr("design:type",String)],Cr.prototype,"height",void 0),jr([rt({type:Tr,converter:Array}),Pr("design:type",Array)],Cr.prototype,"richMediaProperties",void 0);var Br=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Dr=class extends Z{constructor(){super(...arguments),this.imgSrc=""}render(){return B`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[Tr.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};Dr.styles=n`
    :host {
      display: block;
    }
  `,Br([rt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Dr.prototype,"imgSrc",void 0),Dr=Br([et("nidoca-avatar")],Dr);var Ir=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Nr=class extends Z{constructor(){super(...arguments),this.theme=st.surface}render(){return B`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Nr.styles=n`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
    }
    slot {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `,Ir([rt({type:st,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Nr.prototype,"theme",void 0),Nr=Ir([et("nidoca-card")],Nr);let _r=class extends Z{render(){return B`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};_r.styles=n`
    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .flexItem,
    ::slotted(.flexItem) {
      flex-basis: 24%;
      padding-top: var(--space-3);
    }
  `,_r=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-gallery")],_r);let Lr=class extends Z{render(){return B`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};Lr.styles=n`
    :host {
      display: none;
    }
  `,Lr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-print")],Lr);let Wr=class extends Z{constructor(){super(...arguments),this.flexBasis="auto"}render(){return B`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,o=e.offsetWidth,r=e.assignedElements(),n=r.length,i=[];let a=0;for(let t=0;t<n;t++){const e=r[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)i.push(e);else{const e=t.toUpperCase();a+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/n),this.flexBasis=String(s/i.length)+"%",this.requestUpdate()}};Wr.styles=n`
    :host {
      display: block;
      margin: auto;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    @media only screen and (max-width: 1007px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,Wr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-section")],Wr);var zr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Mr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ur=class extends Z{render(){return B` <slot></slot>`}};Ur.styles=n`
    :host {
      display: block;
    }

    slot {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      width: 50%;
      margin: auto;
    }

    @media only screen and (max-width: 1007px) {
      slot {
        width: 100%;
      }
    }
  `,Ur=zr([et("nidoca-dashboard")],Ur);let Hr=class extends Z{render(){return B` <slot></slot>`}};Hr.styles=n`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,Hr=zr([et("nidoca-dashboard-box-25")],Hr);let qr=class extends Z{render(){return B` <slot></slot>`}};qr.styles=n`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,qr=zr([et("nidoca-dashboard-box-50")],qr);let Gr=class extends Z{render(){return B` <slot></slot>`}};Gr.styles=n`
    :host {
      width: 100%;
      display: block;
    }
  `,Gr=zr([et("nidoca-dashboard-box-100")],Gr);let Qr=class extends Z{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return B`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Qr.styles=n`
    :host {
      padding: var(--space-2);
      box-sizing: border-box;
    }

    :host,
    nidoca-card {
      display: block;
      height: 100%;
      width: 100%;
    }

    .clickable {
      cursor: pointer;
    }
  `,zr([rt({type:Boolean}),Mr("design:type",Boolean)],Qr.prototype,"clickable",void 0),zr([rt({type:String}),Mr("design:type",String)],Qr.prototype,"title",void 0),Qr=zr([et("nidoca-dashboard-card")],Qr);var Vr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Fr=class extends Z{constructor(){super(...arguments),this.theme=st.transparent}render(){return B`
      ${dt.getStyle(this.theme)}
      <slot></slot>
    `}};Fr.styles=n`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: 640px) {
      :host {
        padding: var(--space-2);
      }
    }
  `,Vr([rt({type:st,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Fr.prototype,"theme",void 0),Fr=Vr([et("nidoca-box")],Fr);var Kr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Jr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Yr=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.overline="",this.title="",this.summary="",this.text=""}render(){return B`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?B` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:B``}
        ${this.title?B` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:B``}
        ${this.summary?B`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:B``}
        ${this.text?B` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:B``}
        <slot></slot>
      </div>
    `}};Yr.styles=n`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .paddingBottom {
      padding-bottom: var(--space-2);
    }
  `,Kr([rt({type:st,converter:String}),Jr("design:type",String)],Yr.prototype,"theme",void 0),Kr([rt({type:String}),Jr("design:type",String)],Yr.prototype,"overline",void 0),Kr([rt({type:String}),Jr("design:type",String)],Yr.prototype,"title",void 0),Kr([rt({type:String}),Jr("design:type",String)],Yr.prototype,"summary",void 0),Kr([rt({type:String}),Jr("design:type",String)],Yr.prototype,"text",void 0),Yr=Kr([et("nidoca-article")],Yr);var Xr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Zr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let tn=class extends Z{constructor(){super(...arguments),this.theme=st.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return B`
      <nidoca-box theme="${ie(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${ae.text}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.email}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ae.text}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${dt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Nt.contained}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};tn.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Xr([rt({type:st,converter:String}),Zr("design:type",Object)],tn.prototype,"theme",void 0),Xr([rt({type:String,converter:String}),Zr("design:type",String)],tn.prototype,"label",void 0),Xr([rt({type:String,converter:String}),Zr("design:type",String)],tn.prototype,"nameLabel",void 0),Xr([rt({type:String,converter:String}),Zr("design:type",String)],tn.prototype,"emailLabel",void 0),Xr([rt({type:String,converter:String}),Zr("design:type",String)],tn.prototype,"titleLabel",void 0),Xr([rt({type:String,converter:String}),Zr("design:type",String)],tn.prototype,"messageLabel",void 0),Xr([rt({type:String,converter:String}),Zr("design:type",String)],tn.prototype,"buttonLabel",void 0),Xr([nt("#authenitcate-form"),Zr("design:type",Object)],tn.prototype,"formComponent",void 0),tn=Xr([et("nidoca-form-contact")],tn);let en=class extends Z{render(){return B`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};en.styles=n`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      width: 100vw;
    }

    .right {
      background-color: var(--app-color-text-primary-background);
    }

    .left {
      margin: auto;
      width: min-content;
      height: min-content;
    }

    @media only screen and (max-width: 640px) {
      :host {
        grid-template-columns: 1fr;
      }
      .right {
        display: block;
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0.1;
        z-index: -1;
      }
    }
  `,en=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-page-login")],en);var on,rn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},nn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.anchor="anchor",t.page="page"}(on||(on={}));let an=class extends Z{constructor(){super(...arguments),this.loggedIn=!1}updated(t){if(super.updated(t),t.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),t.has("route")&&this.root){for(let t=0;t<this.root.childs.length;t++){const e=this.root.childs[t];if(e.route==this.route){this.contentComponent=document.createElement(e.rootComponent);break}}this.requestUpdate()}}render(){var t;return this.loggedIn?B`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?B`${this.contentComponent}`:B``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(t=this.root)||void 0===t?void 0:t.childs.map((t=>B` <nidoca-menu-item
                        text="${t.name}"
                        @click="${()=>{this.routeTo(t)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:B` <nidoca-page-login
          @nidoca-form-login-submit="${t=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:t.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(t){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:t.route,bubbles:!0,composed:!0}))}};rn([rt({type:Array}),nn("design:type",Object)],an.prototype,"root",void 0),rn([rt({type:Boolean}),nn("design:type",Boolean)],an.prototype,"loggedIn",void 0),rn([rt({type:String,converter:String}),nn("design:type",Object)],an.prototype,"route",void 0),an=rn([et("nidoca-app")],an);class sn{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return B``;const e=t.classWrapper;if(null==e)return B``;switch(this.propertyWrapper.getRenderType()){case at.String:return B`
                    <nidoca-form-text .textType="${ae.text}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${e.instance[this.propertyWrapper.propertyName]}"
                                      @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case at.Number:return B` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${ae.number}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case at.Boolean:return B` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case at.Class:return B` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${ne.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(o.target.getOutputData().value),t.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case at.Array:return B`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${ne.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${e.instance[this.propertyWrapper.propertyName]}"
            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return B``}}getAsHtml(t){switch(this.propertyWrapper.getRenderType()){case at.Boolean:return`${this.propertyWrapper.propertyName}\n`;case at.Array:return"";default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case at.Class:case at.String:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case at.Boolean:return`${this.propertyWrapper.propertyName}\n`;case at.Array:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsAngular(t){switch(this.propertyWrapper.getRenderType()){case at.Class:case at.String:return`[${this.propertyWrapper.propertyName}]="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case at.Array:return`[${this.propertyWrapper.propertyName}]="\${[]}"\n`;default:return`[${this.propertyWrapper.propertyName}]="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getRenderType()){case at.Class:case at.Array:return"";case at.String:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getRenderType()){case at.Array:return"";case at.Class:case at.String:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class ln{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`.trim()}getAsJavascript(){return`<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`.trim()}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`.trim()}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`.trim()}getAsAngular(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsAngular(this))).join("  ")}></${this.classWrapper.getTagName()}>\n`.trim()}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(B`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new sn(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var cn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},dn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pn=class extends Z{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new ln(this,new ct(this.element)),this.requestUpdate())}render(){var t,e,o,r,n,i,a,s;return this.element?B` <nidoca-section theme="primary">
            <div>
              <nidoca-text-h2 class="paddingTopBottom">Tag</nidoca-text-h2>
              <nidoca-code
                >${this.webcomponentGuiWrapper?this.webcomponentGuiWrapper.classWrapper.getHTMLTag():""}
              </nidoca-code>

              <div style="padding-top:var(--space-3);">
                <nidoca-card style="padding:var(--space-4)" theme="primary"> ${this.element}</nidoca-card>
              </div>
            </div>

            <div style="padding-left:var(--space-3)">
              ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.hasProperties())?B`
                    <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                    ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((t=>B`${t.getInputElement(this.webcomponentGuiWrapper)}
                        <div class="paddingTopBottom"></div>`))}
                  `:B``}
              ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?B` <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                    <nidoca-table
                      theme="surface"
                      .headers="${["name"]}"
                      .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                    >
                    </nidoca-table>`:B``}
              ${this.customEventNames.length>0?B` <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                    <nidoca-table
                      class="paddingTopBottom"
                      .headers="${["name"]}"
                      .rows="${this.toCustomEventRows(this.customEventNames)}"
                    >
                    </nidoca-table>`:B``}
            </div>
          </nidoca-section>

          <nidoca-hr></nidoca-hr>

          <nidoca-text-h2 class="paddingTopBottom">Quelltext</nidoca-text-h2>
          <nidoca-tabs tabIndex="0">
            <nidoca-tab slot="tab">Html</nidoca-tab>
            <nidoca-tab slot="tab">Javascript</nidoca-tab>
            <nidoca-tab slot="tab">Typescript</nidoca-tab>
            <nidoca-tab slot="tab">Lit</nidoca-tab>
            <nidoca-tab slot="tab">Angular</nidoca-tab>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${null===(o=this.webcomponentGuiWrapper)||void 0===o?void 0:o.getAsHtml()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${null===(r=this.webcomponentGuiWrapper)||void 0===r?void 0:r.getAsJavascript()} </nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${null===(n=this.webcomponentGuiWrapper)||void 0===n?void 0:n.getTypescript()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${null===(i=this.webcomponentGuiWrapper)||void 0===i?void 0:i.getAsLit()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${null===(a=this.webcomponentGuiWrapper)||void 0===a?void 0:a.getAsAngular()}</nidoca-code>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-hr></nidoca-hr>

          <nidoca-text-h2 class="paddingTopBottom">Attribute Übersicht</nidoca-text-h2>
          <nidoca-table
            class="paddingTopBottom"
            theme="surface"
            .headers="${["name","type","converter type","render type"]}"
            .rows="${this.toAttributeRows(null===(s=this.webcomponentGuiWrapper)||void 0===s?void 0:s.getPropertyGuiWrappers())}"
          >
          </nidoca-table>
          <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`:B`Kein Element ausgewählt.`}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements()[0];o instanceof HTMLElement&&(this.element=o)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t.propertyWrapper.propertyName),o.push(t.propertyWrapper.getTypeName()),o.push(t.propertyWrapper.getConverterTypeName()),o.push(t.propertyWrapper.getRenderType()),e.push(o),o})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}};pn.styles=n`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `,cn([rt({type:Array}),dn("design:type",Array)],pn.prototype,"customEventNames",void 0),cn([rt({type:Object}),dn("design:type",Object)],pn.prototype,"element",void 0),pn=cn([et("webcomponent-viewer")],pn);var hn,fn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let un=class extends Z{constructor(){super(...arguments),this.componentMap=new Map,this.value="",this.options=[]}render(){return B`
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${this.value}"
        .options="${this.options}"
        @input="${t=>{const e=t.target.getOutputData().value,o=this.componentMap.get(e);this.webcomponentViewer&&(console.log(`change element: ${e}`),this.webcomponentViewer.element=o)}}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer id="webcomponentViewer"></webcomponent-viewer>
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target.assignedElements(),o=e.length;for(let t=0;t<o;t++){const o=e[t];o instanceof HTMLElement&&(this.webcomponentViewer&&null==this.webcomponentViewer.element&&(this.webcomponentViewer.element=o,this.value=o.tagName),this.componentMap.set(o.tagName,o.cloneNode(!0)))}this.options=ne.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};un.styles=n`
    slot {
      display: none;
    }
  `,fn([nt("#webcomponentViewer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type","function"==typeof(hn=void 0!==pn&&pn)?hn:Object)],un.prototype,"webcomponentViewer",void 0),un=fn([et("webcomponent-viewer-container")],un);let yn=class extends Z{render(){return B`<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${Oo.example()} ${Ro.example()} ${Po.example()} ${fo.example()}
        </webcomponent-viewer-container>
      </nidoca-section>
    </nidoca-container>`}};yn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-viewer")],yn)})();