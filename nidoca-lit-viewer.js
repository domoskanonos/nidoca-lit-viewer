/*! For license information please see nidoca-lit-viewer.js.LICENSE.txt */
(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{ds:()=>bi});const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new i(n,e,o)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,o))(t)})(e):e;var s;const c=window.trustedTypes,l=c?c.emptyScript:"",d=window.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},h=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((t=>{const o=document.createElement("style"),n=window.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=f){var n,i;const r=this.constructor._$Ep(e,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:p.toAttribute)(t,o.type);this._$El=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,t){var o,n;const i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=i.getPropertyOptions(r),a=e.converter,s=null!==(n=null!==(o=null==a?void 0:a.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:p.fromAttribute;this._$El=r,this[r]=s(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var m;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:u}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.3");const g=globalThis.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,v="?"+b,x=`<${v}>`,w=document,$=(e="")=>w.createComment(e),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,S=Array.isArray,O=e=>{var t;return S(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,j=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,C=/"/g,A=/^(?:script|style|textarea|title)$/i,_=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),N=_(1),I=(_(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),L=new WeakMap,B=w.createTreeWalker(w,129,null,!1),M=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=E;for(let t=0;t<o;t++){const o=e[t];let s,c,l=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===E?"!--"===c[1]?a=k:void 0!==c[1]?a=j:void 0!==c[2]?(A.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=T):void 0!==c[3]&&(a=T):a===T?">"===c[0]?(a=null!=i?i:E,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?T:'"'===c[3]?C:P):a===C||a===P?a=T:a===k||a===j?a=E:(a=T,i=void 0);const p=a===T&&e[t+1].startsWith("/>")?" ":"";r+=a===E?o+x:l>=0?(n.push(s),o.slice(0,l)+"$lit$"+o.slice(l)+b+p):o+b+(-2===l?(n.push(void 0),t):p)}const s=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(s):s,n]};class W{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,s=this.parts,[c,l]=M(e,t);if(this.el=W.createElement(c,o),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=B.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(b)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(b),t=/([.?@])?(.*)/.exec(o);s.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?q:"?"===t[1]?Y:"@"===t[1]?X:G})}else s.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(A.test(n.tagName)){const e=n.textContent.split(b),t=e.length-1;if(t>0){n.textContent=g?g.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],$()),B.nextNode(),s.push({type:2,index:++i});n.append(e[t],$())}}}else if(8===n.nodeType)if(n.data===v)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(b,e+1));)s.push({type:7,index:i}),e+=b.length-1}i++}}static createElement(e,t){const o=w.createElement("template");return o.innerHTML=e,o}}function z(e,t,o=e,n){var i,r,a,s;if(t===I)return t;let c=void 0!==n?null===(i=o._$Cl)||void 0===i?void 0:i[n]:o._$Cu;const l=R(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=c:o._$Cu=c),void 0!==c&&(t=z(e,c._$AS(e,t.values),c,n)),t}class U{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:w).importNode(o,!0);B.currentNode=i;let r=B.nextNode(),a=0,s=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new H(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new K(r,this,e)),this.v.push(t),c=n[++s]}a!==(null==c?void 0:c.index)&&(r=B.nextNode(),a++)}return i}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class H{constructor(e,t,o,n){var i;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),R(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==I&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):O(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==D&&R(this._$AH)?this._$AA.nextSibling.data=e:this.k(w.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=W.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.m(o);else{const e=new U(i,this),t=e.p(this.options);e.m(o),this.k(t),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return void 0===t&&L.set(e.strings,t=new W(e)),t}S(e){S(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new H(this.M($()),this.M($()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class G{constructor(e,t,o,n,i){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=z(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==I,r&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=z(this,n[o+a],t,a),s===I&&(s=this._$AH[a]),r||(r=!R(s)||s!==this._$AH[a]),s===D?e=D:e!==D&&(e+=(null!=s?s:"")+i[a+1]),this._$AH[a]=s}r&&!n&&this.C(e)}C(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class q extends G{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===D?void 0:e}}const F=g?g.emptyScript:"";class Y extends G{constructor(){super(...arguments),this.type=4}C(e){e&&e!==D?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class X extends G{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=z(this,e,t,0))&&void 0!==o?o:D)===I)return;const n=this._$AH,i=e===D&&n!==D||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==D&&(n===D||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const V={L:"$lit$",P:b,V:v,I:1,N:M,R:U,j:O,D:z,H,F:G,O:Y,W:X,B:q,Z:K},J=window.litHtmlPolyfillSupport;var Z,Q;null==J||J(W,H),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.2.6");class ee extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let a=r._$litPart$;if(void 0===a){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=a=new H(t.insertBefore($(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return I}}ee.finalized=!0,ee._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.1");const oe=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),ne=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function ie(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):ne(e,t)}function re(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var ae,se,ce;null===(ae=window.HTMLSlotElement)||void 0===ae||ae.prototype.assignedElements,function(e){e.STRING="String",e.NUMBER="Number",e.BOOLEAN="Boolean",e.COMBOBOX="Class",e.ARRAY="Array",e.UNDEFINED="undefined"}(se||(se={}));class le{constructor(e,t){this.propertyName=e,this.propertyValue=t}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?se.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?se.UNDEFINED:this.getTypeName():se.COMBOBOX}getEnumValues(){const e=[];return Object.values(this.getType()).forEach((t=>{e.push({key:t,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(t)])})})),e}getEnumValue(e){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(e)]}getEnumKey(e){const t=this.getEnumValues();for(let o=0;o<t.length;o++){const n=t[o];if(n.key==e)return n.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var e;return null===(e=this.propertyValue)||void 0===e?void 0:e.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var e;return null===(e=this.getConverterType())||void 0===e?void 0:e.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class de{constructor(e){this.instance=e}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((e=>e.name?e.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(e,t){let o=[];if(t&&(t.tagName==e&&o.push(t),t.children.length>0)){const n=null==t?void 0:t.children;for(let t=0;t<n.length;t++)o=o.concat(this.getElementsByTagName(e,n.item(t)))}return o}getPropertieNames(){const e=this.instance.constructor;return Object.getOwnPropertyNames(e)}getProperties(){const e=this.instance.constructor.elementProperties;if(!e)throw new Error("selected item malformed. no lit element ? wrong lit version ?");const t=[];for(const o of Array.from(e.keys()))t.push(new le(o,e.get(o)));return t}}!function(e){e.primary="primary",e.secondary="secondary",e.surface="surface",e.background="background",e.transparent="transparent"}(ce||(ce={}));class pe{static getStyle(e){return e?e==ce.transparent?N``:N` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${e});
              background-color: var(--app-color-${e}-background);
              border-color: var(--app-color-${e}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`:N``}static getOposite(e){return e==ce.background?ce.surface:e==ce.primary||e==ce.primary?ce.secondary:e==ce.secondary?ce.primary:ce.background}getParentTheme(e){let t=e;for(;null!=t;){if(null!=t.theme)return t.theme;t=t.parentElement}}}var he=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},fe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ue=class extends ee{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return N`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?N` <slot></slot>`:N``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};ue.styles=r`
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
  `,he([ie({type:String}),fe("design:type",String)],ue.prototype,"header",void 0),he([ie({type:Boolean}),fe("design:type",Boolean)],ue.prototype,"opened",void 0),ue=he([oe("nidoca-accordion-item")],ue);var me,ge=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ye=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.SINGLE="SINGLE",e.MULTI="MULTI"}(me||(me={}));let be=class extends ee{constructor(){super(...arguments),this.theme=ce.surface,this.accordionType=me.SINGLE}render(){return N`
      ${pe.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(e){const t=e.detail;switch(this.accordionType){case me.SINGLE:if(null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof ue&&n!=t&&(n.opened=!1)}}case me.MULTI:}e.stopPropagation()}};be.styles=r`
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
  `,ge([ie({type:ce,converter:String}),ye("design:type",String)],be.prototype,"theme",void 0),ge([ie({type:me,converter:String}),ye("design:type",String)],be.prototype,"accordionType",void 0),ge([re("#accordionSlot"),ye("design:type",Object)],be.prototype,"accordionSlot",void 0),be=ge([oe("nidoca-accordion")],be);var ve,xe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},we=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.CURRENT=0]="CURRENT",e[e.COMPLETED=1]="COMPLETED",e[e.OPEN=2]="OPEN",e[e.FINISH=3]="FINISH"}(ve||(ve={}));let $e=class extends ee{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return N`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${ro.NONE}"
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

          ${this.isLast?N``:N`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(e){return e==ve.COMPLETED?"var(--app-color-primary)":e==ve.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(e){return e==ve.FINISH?"var(--app-color-success)":e==ve.COMPLETED?"var(--mdc-theme-on-primary)":e==ve.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const e=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}};$e.styles=r`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-color-primary);
    }
  `,xe([ie({type:String}),we("design:type",String)],$e.prototype,"icon",void 0),xe([ie({type:String}),we("design:type",String)],$e.prototype,"primaryText",void 0),xe([ie({type:Number}),we("design:type",Object)],$e.prototype,"state",void 0),xe([ie({type:Boolean}),we("design:type",Boolean)],$e.prototype,"isLast",void 0),$e=xe([oe("nidoca-wizard-step")],$e);var Re=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Se=class extends ee{render(){return N`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();let n=0;for(let e=0;e<o.length;e++){const t=o[e];t instanceof $e&&(t.index=e,t.state==ve.CURRENT&&(n=e),t.index==o.length-1&&(t.isLast=!0))}this.changeState(n)}stepClicked(e){const t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){const t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof $e&&void 0!==n.index&&(n.index<e?n.state=ve.COMPLETED:n.index==e?n.state=ve.CURRENT:n.state=ve.OPEN)}}}};Se.styles=r``,Re([re("#wizardSlot"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Se.prototype,"wizardSlot",void 0),Se=Re([oe("nidoca-wizard")],Se);var Oe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ee=class extends ee{constructor(){super(...arguments),this.clickable=!0}render(){return N`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Ee.styles=r`
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
  `,Oe([ie({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Ee.prototype,"clickable",void 0),Ee=Oe([oe("nidoca-chip")],Ee);var ke=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let je=class extends ee{constructor(){super(...arguments),this.code=""}render(){return N`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};je.styles=r`
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
      background: var(--app-color-surface-background);
      border-radius: 0.375em;
      border: solid 1px var(--app-color-surface-background-dark);
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
  `,ke([ie({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],je.prototype,"code",void 0),je=ke([oe("nidoca-code")],je);var Te=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Pe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ce=class extends ee{constructor(){super(),this.show=!1,addEventListener("click",(e=>{var t;const o=null===(t=this.associatedElement)||void 0===t?void 0:t.getBoundingClientRect();o&&(o.top>e.clientY||o.right<e.clientX||o.left>e.clientX||o.bottom<e.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?N`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:N``}calculatePositionStyle(e){let t="";if(e){const o=e.getBoundingClientRect();o.right>window.innerWidth/2?t+=`right:${window.innerWidth-o.right}px;`:t+=`left:${o.left}px;`,o.top>window.innerHeight/2?t+=`bottom:${o.height+window.innerHeight-o.top}px;`:t+=`top:${o.bottom}px;`}return t}};Ce.styles=r`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Te([ie({type:Boolean}),Pe("design:type",Boolean)],Ce.prototype,"show",void 0),Te([ie({type:Object}),Pe("design:type",Object)],Ce.prototype,"associatedElement",void 0),Ce=Te([oe("nidoca-elevation"),Pe("design:paramtypes",[])],Ce);var Ae=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Ne{}Ne.PROGRESS="PROGRESS",Ne.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Ie=class extends ee{constructor(){super(...arguments),this.progressType=Ne.PROGRESS}render(){return N` <style>
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

      <progress class="${this.progressType}"></progress>`}};Ie.styles=r``,Ae([ie({type:ce,converter:String}),_e("design:type",Object)],Ie.prototype,"theme",void 0),Ae([ie({type:Ne,converter:String}),_e("design:type",String)],Ie.prototype,"progressType",void 0),Ie=Ae([oe("nidoca-progress")],Ie);var De,Le=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Be=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.CONTAINED="CONTAINED",e.OUTLINED="OUTLINED",e.TEXT="TEXT"}(De||(De={}));let Me=class extends ee{constructor(){super(...arguments),this.theme=ce.primary,this.buttonType=De.CONTAINED,this.leadingIcon="",this.text=""}render(){return N`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .TEXT {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${()=>{this.clicked()}}"
      >
        ${this.leadingIcon?N` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:N``}

        <nidoca-text-button text="${this.text}">
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Me.styles=r`
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
  `,Le([ie({type:ce,converter:String}),Be("design:type",Object)],Me.prototype,"theme",void 0),Le([ie({type:De,converter:String}),Be("design:type",String)],Me.prototype,"buttonType",void 0),Le([ie({type:String}),Be("design:type",String)],Me.prototype,"leadingIcon",void 0),Le([ie({type:String}),Be("design:type",String)],Me.prototype,"text",void 0),Me=Le([oe("nidoca-button")],Me);class We extends ee{}var ze=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ue=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let He=class extends ee{constructor(){super(...arguments),this.autocomplete=!0}render(){return N`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const e=new FormData,t={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();t[n.key]=n.value,e.append(n.key,n.value)}const o={};return o.jsonObject=t,o.formData=e,o}validate(){let e=!0;for(const t of this.getInputElements(this.slotElement))t.validate()||(e=!1);return e||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),e}getInputElements(e){if(null==e)return[];const t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){const n=o[e];this.recursiveInputElementSearch(n,t)}return t}recursiveInputElementSearch(e,t){if(e instanceof We)t.push(e);else if(e.hasChildNodes()){const o=e.children;for(const e of[].slice.call(o))this.recursiveInputElementSearch(e,t)}}};He.styles=r`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,ze([ie({type:Boolean}),Ue("design:type",Boolean)],He.prototype,"autocomplete",void 0),ze([re("#slotElement"),Ue("design:type",Object)],He.prototype,"slotElement",void 0),He=ze([oe("nidoca-form")],He);const Ge=e=>(...t)=>({_$litDirective$:e,values:t});class qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{H:Fe}=V,Ye=()=>document.createComment(""),Xe=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Ye(),r),n=i.insertBefore(Ye(),r);o=new Fe(t,n,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,s=a!==e;if(s){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||s){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},Ke=(e,t,o=e)=>(e._$AI(t,o),e),Ve={},Je=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},Ze=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},Qe=Ge(class extends qe{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let a=0;for(const t of e)i[a]=n?n(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){var i;const r=e._$AH,{values:a,keys:s}=this.dt(t,o,n);if(!Array.isArray(r))return this.ut=s,a;const c=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],l=[];let d,p,h=0,f=r.length-1,u=0,m=a.length-1;for(;h<=f&&u<=m;)if(null===r[h])h++;else if(null===r[f])f--;else if(c[h]===s[u])l[u]=Ke(r[h],a[u]),h++,u++;else if(c[f]===s[m])l[m]=Ke(r[f],a[m]),f--,m--;else if(c[h]===s[m])l[m]=Ke(r[h],a[m]),Xe(e,l[m+1],r[h]),h++,m--;else if(c[f]===s[u])l[u]=Ke(r[f],a[u]),Xe(e,r[h],r[f]),f--,u++;else if(void 0===d&&(d=Ze(s,u,m),p=Ze(c,h,f)),d.has(c[h]))if(d.has(c[f])){const t=p.get(s[u]),o=void 0!==t?r[t]:null;if(null===o){const t=Xe(e,r[h]);Ke(t,a[u]),l[u]=t}else l[u]=Ke(o,a[u]),Xe(e,r[h],o),r[t]=null;u++}else Je(r[f]),f--;else Je(r[h]),h++;for(;u<=m;){const t=Xe(e,l[m+1]);Ke(t,a[u]),l[u++]=t}for(;h<=f;){const e=r[h++];null!==e&&Je(e)}return this.ut=s,((e,t=Ve)=>{e._$AH=t})(e,l),I}}),et={},tt=Ge(class extends qe{constructor(){super(...arguments),this.nt=et}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return I}else if(this.nt===t)return I;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});var ot=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},nt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let it=class extends We{constructor(){super(...arguments),this.theme=ce.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return N` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon?N` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:N``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${tt([this.value,this.options],(()=>N`
                ${Qe(this.options,(e=>null==e?N` <option></option>`:this.isSelectedOption(e)?N` <option value="${e.key}" selected>${e.value}</option> `:N` <option value="${e.key}">${e.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?N`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?N` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:N``}
              ${this.warningText?N` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:N``}
              ${this.errorText?N` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:N``}
            </div>
          `:N``}`}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++)this.selectElement.options[t].selected&&e.push(this.options[t].key)}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(e){if(this.multiple){let t=!1;for(const o of this.value)if(t=e.key===o,t)return!0}return this.value===e.key}static enumToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}static stringArrayToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),e.forEach((e=>{o.push({key:e,value:e})})),o}static toComboboxOptions(e=null,t=null){if(null==e)return[];const o=[];return Object.values(e).forEach((n=>{let i=String(Object.keys(e)[Object.values(e).indexOf(n)]);t&&(i=i.concat(t)),o.push({key:n,value:i})})),o}};it.styles=r`
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
  `,ot([ie({type:ce,converter:String}),nt("design:type",String)],it.prototype,"theme",void 0),ot([ie({type:String}),nt("design:type",String)],it.prototype,"trailingIcon",void 0),ot([ie({type:String}),nt("design:type",String)],it.prototype,"label",void 0),ot([ie({type:String}),nt("design:type",String)],it.prototype,"errorText",void 0),ot([ie({type:String}),nt("design:type",String)],it.prototype,"infoText",void 0),ot([ie({type:String}),nt("design:type",String)],it.prototype,"warningText",void 0),ot([ie(),nt("design:type",Object)],it.prototype,"value",void 0),ot([ie({type:Array}),nt("design:type",Array)],it.prototype,"options",void 0),ot([ie({type:String}),nt("design:type",String)],it.prototype,"name",void 0),ot([ie({type:Boolean}),nt("design:type",Boolean)],it.prototype,"required",void 0),ot([ie({type:Boolean}),nt("design:type",Boolean)],it.prototype,"multiple",void 0),ot([ie({type:Number}),nt("design:type",Number)],it.prototype,"size",void 0),ot([re("#selectElement"),nt("design:type",Object)],it.prototype,"selectElement",void 0),it=ot([oe("nidoca-form-combobox")],it);const rt=e=>null!=e?e:D;var at,st=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ct=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.COLOR="color",e.EMAIL="email",e.HIDDEN="hidden",e.NUMBER="number",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.SEARCH="search",e.URL="url",e.DATE="date",e.DATETIME_LOCAL="datetime-local",e.MONTH="month",e.TIME="time",e.WEEK="week"}(at||(at={}));let lt=class extends We{constructor(){super(...arguments),this.type=at.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=ce.surface}render(){return this.type==at.HIDDEN?N`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:N` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              filter: contrast(var(--app-color-percent-selected));
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?N` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:N``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${rt(this.size)}"
                minlength="${rt(this.minlength)}"
                maxlength="${rt(this.maxlength)}"
                pattern="${rt(this.pattern)}"
                min="${rt(this.min)}"
                max="${rt(this.max)}"
                step="${rt(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?N`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?N` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:N``}
                  ${this.warningText?N` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:N``}
                  ${this.errorText?N` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:N``}
                </div>
              `:N``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:null==t?void 0:t.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};lt.styles=r`
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
  `,st([ie({type:at,converter:String}),ct("design:type",String)],lt.prototype,"type",void 0),st([ie({type:String}),ct("design:type",String)],lt.prototype,"label",void 0),st([ie({type:String}),ct("design:type",String)],lt.prototype,"placeholder",void 0),st([ie({type:String}),ct("design:type",String)],lt.prototype,"trailingIcon",void 0),st([ie({type:String}),ct("design:type",String)],lt.prototype,"errorText",void 0),st([ie({type:String}),ct("design:type",String)],lt.prototype,"infoText",void 0),st([ie({type:String}),ct("design:type",String)],lt.prototype,"warningText",void 0),st([ie({type:String}),ct("design:type",String)],lt.prototype,"name",void 0),st([ie(),ct("design:type",String)],lt.prototype,"value",void 0),st([ie({type:Boolean}),ct("design:type",Boolean)],lt.prototype,"required",void 0),st([ie({type:Boolean}),ct("design:type",Boolean)],lt.prototype,"disabled",void 0),st([ie({type:Boolean}),ct("design:type",Boolean)],lt.prototype,"checked",void 0),st([ie({type:Number}),ct("design:type",Object)],lt.prototype,"maxlength",void 0),st([ie({type:Number}),ct("design:type",Object)],lt.prototype,"minlength",void 0),st([ie({type:Number}),ct("design:type",Object)],lt.prototype,"min",void 0),st([ie({type:Number}),ct("design:type",Object)],lt.prototype,"max",void 0),st([ie({type:String}),ct("design:type",Object)],lt.prototype,"step",void 0),st([ie({type:Number}),ct("design:type",Object)],lt.prototype,"size",void 0),st([ie({type:String}),ct("design:type",Object)],lt.prototype,"pattern",void 0),st([re("#inputElement"),ct("design:type",Object)],lt.prototype,"inputElement",void 0),st([ie({type:ce,converter:String}),ct("design:type",String)],lt.prototype,"theme",void 0),lt=st([oe("nidoca-form-text")],lt);let dt=class extends lt{constructor(){super(),this.type=at.DATE}};dt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-form-date"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],dt);var pt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ht=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ft=class extends We{constructor(){super(...arguments),this.theme=ce.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return N` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          filter: contrast(var(--app-color-percent-hover));
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

      ${this.infoText||this.warningText||this.errorText?N`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?N` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:N``}
              ${this.warningText?N` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:N``}
              ${this.errorText?N` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:N``}
            </div>
          `:N``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ft.styles=r`
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
  `,pt([ie({type:ce,converter:String}),ht("design:type",String)],ft.prototype,"theme",void 0),pt([ie({type:String}),ht("design:type",String)],ft.prototype,"infoText",void 0),pt([ie({type:String}),ht("design:type",String)],ft.prototype,"warningText",void 0),pt([ie({type:String}),ht("design:type",String)],ft.prototype,"errorText",void 0),pt([ie({type:String}),ht("design:type",String)],ft.prototype,"name",void 0),pt([ie(),ht("design:type",String)],ft.prototype,"value",void 0),pt([ie({type:String}),ht("design:type",String)],ft.prototype,"label",void 0),pt([ie({type:Boolean}),ht("design:type",Boolean)],ft.prototype,"required",void 0),pt([ie({type:String}),ht("design:type",String)],ft.prototype,"placeholder",void 0),pt([ie({type:Boolean}),ht("design:type",Boolean)],ft.prototype,"disabled",void 0),pt([ie({type:Number}),ht("design:type",Number)],ft.prototype,"rows",void 0),pt([re("#inputElement"),ht("design:type",Object)],ft.prototype,"inputElement",void 0),ft=pt([oe("nidoca-form-textarea")],ft);var ut=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},mt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let gt=class extends We{constructor(){super(...arguments),this.theme=ce.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return N`
      <nidoca-box theme="${rt(this.theme)}">
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
    `}upload(){var e;null===(e=this.inputElement)||void 0===e||e.click()}};gt.styles=r`
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
  `,ut([ie({type:ce,converter:String}),mt("design:type",Object)],gt.prototype,"theme",void 0),ut([re("#inputElement"),mt("design:type",Object)],gt.prototype,"inputElement",void 0),gt=ut([oe("nidoca-form-upload")],gt);var yt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},bt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let vt=class extends We{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=ce.primary,this.theme=pe.prototype.getParentTheme(this)||ce.background}render(){return N`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-${this.theme});
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

        ${this.infoText.length>0?N` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:N``}

        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @input="${e=>{this.checked=e.target.checked,console.log(this.checked)}}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText?N` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:N``}
      ${this.errorText?N` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:N``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};vt.styles=r`
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
  `,yt([ie({type:String}),bt("design:type",String)],vt.prototype,"name",void 0),yt([ie({type:String}),bt("design:type",String)],vt.prototype,"label",void 0),yt([ie({type:String}),bt("design:type",String)],vt.prototype,"infoText",void 0),yt([ie({type:String}),bt("design:type",String)],vt.prototype,"errorText",void 0),yt([ie({type:String}),bt("design:type",String)],vt.prototype,"warningText",void 0),yt([ie({type:Boolean}),bt("design:type",Boolean)],vt.prototype,"required",void 0),yt([ie({type:Boolean}),bt("design:type",Boolean)],vt.prototype,"disabled",void 0),yt([ie({type:Boolean}),bt("design:type",Boolean)],vt.prototype,"checked",void 0),yt([ie({type:String}),bt("design:type",String)],vt.prototype,"theme",void 0),yt([re("#inputElement"),bt("design:type",Object)],vt.prototype,"inputElement",void 0),vt=yt([oe("nidoca-form-switch"),bt("design:paramtypes",[])],vt);var xt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},wt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $t=class extends ee{constructor(){super(...arguments),this.theme=ce.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return N`
      <nidoca-box theme="${rt(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};$t.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,xt([ie({type:ce,converter:String}),wt("design:type",Object)],$t.prototype,"theme",void 0),xt([ie({type:String,converter:String}),wt("design:type",String)],$t.prototype,"label",void 0),xt([ie({type:String,converter:String}),wt("design:type",String)],$t.prototype,"emailLabel",void 0),xt([ie({type:String,converter:String}),wt("design:type",String)],$t.prototype,"buttonLabel",void 0),xt([re("#form"),wt("design:type",Object)],$t.prototype,"formComponent",void 0),$t=xt([oe("nidoca-form-newsletter")],$t);var Rt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},St=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ot=class extends ee{constructor(){super(...arguments),this.theme=ce.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return N`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ot.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Rt([ie({type:ce,converter:String}),St("design:type",String)],Ot.prototype,"theme",void 0),Rt([ie({type:String,converter:String}),St("design:type",String)],Ot.prototype,"label",void 0),Rt([ie({type:String,converter:String}),St("design:type",String)],Ot.prototype,"emailLabel",void 0),Rt([ie({type:String,converter:String}),St("design:type",String)],Ot.prototype,"buttonLabel",void 0),Rt([re("#form"),St("design:type",Object)],Ot.prototype,"formComponent",void 0),Ot=Rt([oe("nidoca-form-reset-password")],Ot);var Et=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let jt=class extends ee{constructor(){super(...arguments),this.theme=ce.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return N`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.PASSWORD}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.PASSWORD}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.PASSWORD}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?N` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:N``}
        ${this.showErrorMessagePasswordDiff?N` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:N``}
      </nidoca-box>
    `}changePassword(){var e,t,o,n,i;(null===(e=this.formComponent)||void 0===e?void 0:e.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(t=this.newPasswordInputField)||void 0===t?void 0:t.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(n=this.oldPasswordInputField)||void 0===n?void 0:n.getOutputData().value)==(null===(i=this.newPasswordInputField)||void 0===i?void 0:i.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};jt.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Et([ie({type:ce,converter:String}),kt("design:type",String)],jt.prototype,"theme",void 0),Et([ie({type:String,converter:String}),kt("design:type",String)],jt.prototype,"label",void 0),Et([ie({type:String,converter:String}),kt("design:type",String)],jt.prototype,"oldPasswordLabel",void 0),Et([ie({type:String,converter:String}),kt("design:type",String)],jt.prototype,"newPasswordLabel",void 0),Et([ie({type:String,converter:String}),kt("design:type",String)],jt.prototype,"repeatNewPasswordLabel",void 0),Et([ie({type:String,converter:String}),kt("design:type",String)],jt.prototype,"buttonLabel",void 0),Et([re("#form"),kt("design:type",Object)],jt.prototype,"formComponent",void 0),Et([re("#oldPassword"),kt("design:type",Object)],jt.prototype,"oldPasswordInputField",void 0),Et([re("#newPassword"),kt("design:type",Object)],jt.prototype,"newPasswordInputField",void 0),Et([re("#repeatNewPassword"),kt("design:type",Object)],jt.prototype,"repeatNewPasswordInputField",void 0),Et([ie(),kt("design:type",String)],jt.prototype,"errorMessageSamePasswordLabel",void 0),Et([ie(),kt("design:type",String)],jt.prototype,"errorMessagePasswordDiffLabel",void 0),jt=Et([oe("nidoca-form-change-password")],jt);var Tt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Pt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ct=class extends ee{constructor(){super(...arguments),this.theme=ce.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return N`
      <nidoca-box theme="${rt(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.PASSWORD}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ct.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Tt([ie({type:ce,converter:String}),Pt("design:type",Object)],Ct.prototype,"theme",void 0),Tt([ie({type:String,converter:String}),Pt("design:type",String)],Ct.prototype,"label",void 0),Tt([ie({type:String,converter:String}),Pt("design:type",String)],Ct.prototype,"emailLabel",void 0),Tt([ie({type:String,converter:String}),Pt("design:type",String)],Ct.prototype,"passwordLabel",void 0),Tt([ie({type:String,converter:String}),Pt("design:type",String)],Ct.prototype,"buttonLabel",void 0),Tt([re("#form"),Pt("design:type",Object)],Ct.prototype,"formComponent",void 0),Ct=Tt([oe("nidoca-form-register")],Ct);var At=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let _t=class extends ee{constructor(){super(...arguments),this.code=""}render(){return N``}};_t.styles=r``,At([ie({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],_t.prototype,"code",void 0),_t=At([oe("nidoca-upload")],_t);var Nt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},It=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Dt=class extends ee{constructor(){super(),this.theme=pe.prototype.getParentTheme(this)||ce.background}render(){return N`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};Dt.styles=r`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,Nt([ie({type:ce,converter:String}),It("design:type",String)],Dt.prototype,"theme",void 0),Dt=Nt([oe("nidoca-hr"),It("design:paramtypes",[])],Dt);var Lt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Bt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mt=class extends ee{constructor(){super(...arguments),this.text="",this.icon=""}render(){return N`
      <div class="container">
        ${this.icon?N` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:N``}
        ${this.text?N` <nidoca-text-button>${this.text}</nidoca-text-button>`:N``}
        <slot></slot>
      </div>
    `}};Mt.styles=r`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,Lt([ie({type:String}),Bt("design:type",String)],Mt.prototype,"text",void 0),Lt([ie({type:String}),Bt("design:type",String)],Mt.prototype,"icon",void 0),Mt=Lt([oe("nidoca-menu-area")],Mt);var Wt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ut=class extends ee{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1}render(){return N`
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?N` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:N``}
        ${this.text?N` <nidoca-text>${this.text}</nidoca-text>`:N``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ut.styles=r`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .container:hover {
      backdrop-filter: contrast(var(--app-color-percent-hover));
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `,Wt([ie({type:String}),zt("design:type",String)],Ut.prototype,"text",void 0),Wt([ie({type:String}),zt("design:type",String)],Ut.prototype,"icon",void 0),Wt([ie({type:Boolean}),zt("design:type",Boolean)],Ut.prototype,"selected",void 0),Ut=Wt([oe("nidoca-menu-item")],Ut);var Ht=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let qt=class extends ee{constructor(){super(...arguments),this.theme=ce.secondary}render(){return N` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}firstUpdated(){this.addEventListener("click",(e=>{if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof Ut){const t=n.getBoundingClientRect();t.left<e.x&&t.right>e.x&&(t.top<e.y&&t.bottom>e.y?n.selected=!0:n.selected=!1)}}}}))}};qt.styles=r`
    :host,
    slot {
      display: block;
    }
  `,Ht([ie({type:ce,converter:String}),Gt("design:type",Object)],qt.prototype,"theme",void 0),Ht([re("#slotElement"),Gt("design:type",Object)],qt.prototype,"slotElement",void 0),qt=Ht([oe("nidoca-menu")],qt);var Ft=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Yt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Xt=class extends ee{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return N`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,n,i,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(i).concat(";").concat("bottom:").concat(r).concat(";")}};Xt.styles=r`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Ft([ie({type:String}),Yt("design:type",String)],Xt.prototype,"height",void 0),Ft([ie({type:String}),Yt("design:type",String)],Xt.prototype,"width",void 0),Ft([ie({type:String}),Yt("design:type",String)],Xt.prototype,"left",void 0),Ft([ie({type:String}),Yt("design:type",String)],Xt.prototype,"top",void 0),Ft([ie({type:String}),Yt("design:type",String)],Xt.prototype,"right",void 0),Ft([ie({type:String}),Yt("design:type",String)],Xt.prototype,"bottom",void 0),Xt=Ft([oe("nidoca-layout-floating")],Xt);var Kt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Vt=class extends ee{constructor(){super(...arguments),this.theme=ce.background}render(){return N`
      ${pe.getStyle(this.theme)}
      <slot></slot>
    `}};Vt.styles=r`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: min-content;
    }

    @media only screen and (min-width: 641px) and (max-width: 1918px) {
      slot {
        width: 50%;
      }
    }

    @media only screen and (max-width: 640px) {
      slot {
        width: 90%;
      }
    }

    @media only screen and (min-width: 1919px) {
      slot {
        width: 75%;
      }
    }
  `,Kt([ie({type:ce,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Vt.prototype,"theme",void 0),Vt=Kt([oe("nidoca-container")],Vt);var Jt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Zt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Qt=class extends ee{constructor(){super(),this.hideSidebox=!0,this.theme=pe.prototype.getParentTheme(this)||ce.background}render(){return N` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox?N``:N` <slot class="sidebox" name="sidebox"></slot>`}`}};Qt.styles=r`
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
  `,Jt([ie({type:ce,converter:String}),Zt("design:type",String)],Qt.prototype,"theme",void 0),Jt([ie({type:Boolean,converter:String}),Zt("design:type",Boolean)],Qt.prototype,"hideSidebox",void 0),Qt=Jt([oe("nidoca-split-screen"),Zt("design:paramtypes",[])],Qt);var eo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},to=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let oo=class extends ee{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return N`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};oo.styles=r`
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
  `,eo([ie({type:String}),to("design:type",String)],oo.prototype,"icon",void 0),eo([ie({type:Boolean}),to("design:type",Boolean)],oo.prototype,"clickable",void 0),eo([ie({type:Boolean}),to("design:type",Boolean)],oo.prototype,"deactivated",void 0),eo([ie({type:String}),to("design:type",String)],oo.prototype,"primaryText",void 0),oo=eo([oe("nidoca-icon")],oo);var no=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},io=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class ro{}ro.NONE="NONE",ro.DEFAULT_SHADOW="DEFAULT_SHADOW",ro.SHADOW_1="SHADOW_1",ro.SHADOW_2="SHADOW_2",ro.SHADOW_3="SHADOW_3";let ao=class extends ee{constructor(){super(...arguments),this.theme=ce.primary,this.shadowType=ro.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return N`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-${this.theme});
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
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};ao.styles=r`
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
  `,no([ie({type:String}),io("design:type",String)],ao.prototype,"theme",void 0),no([ie({type:Object}),io("design:type",ro)],ao.prototype,"shadowType",void 0),no([ie({type:String}),io("design:type",String)],ao.prototype,"icon",void 0),no([ie({type:Boolean}),io("design:type",Boolean)],ao.prototype,"clickable",void 0),no([ie({type:Boolean}),io("design:type",Boolean)],ao.prototype,"deactivated",void 0),ao=no([oe("nidoca-icon-extended")],ao);var so=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let co=class extends ee{render(){return N`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(null!=this.rippleContainerElement){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);const t=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};co.styles=r`
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
  `,so([re("#rippleContainer"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],co.prototype,"rippleContainerElement",void 0),co=so([oe("nidoca-ripple")],co);var lo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},po=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ho=class extends ee{constructor(){super(...arguments),this.src="",this.width="100%",this.height="100%"}render(){return this.src?N`<img width="${this.width}" height="${this.height}" src="${this.src}" />`:N``}};ho.styles=r`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,lo([ie({type:String}),po("design:type",String)],ho.prototype,"src",void 0),lo([ie({type:String}),po("design:type",String)],ho.prototype,"width",void 0),lo([ie({type:String}),po("design:type",String)],ho.prototype,"height",void 0),ho=lo([oe("nidoca-img")],ho);let fo=class extends ho{render(){return N`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};fo.styles=r`
    :host {
      font-size: 0;
      display: block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }
  `,fo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-img-round")],fo);var uo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let mo=class extends ee{constructor(){super(...arguments),this.src=""}render(){return N`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};mo.styles=r``,uo([ie({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],mo.prototype,"src",void 0),mo=uo([oe("nidoca-movie")],mo);var go=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},yo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let bo=class extends ee{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return N`
      <nidoca-form-text
        theme="${rt(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${at.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(e){(e.has("min")||e.has("max"))&&this.generateNewNumber(),super.updated(e)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(e,t){return Math.random()*(t-e)+e}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),e}};bo.styles=r`
    :host {
      display: block;
      width: 100%;
    }
  `,go([ie({type:ce,converter:String}),yo("design:type",Object)],bo.prototype,"theme",void 0),go([ie({type:String}),yo("design:type",String)],bo.prototype,"label",void 0),go([ie({type:String}),yo("design:type",String)],bo.prototype,"placeholder",void 0),go([ie({type:String}),yo("design:type",String)],bo.prototype,"name",void 0),go([ie({type:Number}),yo("design:type",Number)],bo.prototype,"min",void 0),go([ie({type:Number}),yo("design:type",Number)],bo.prototype,"max",void 0),go([ie({type:String}),yo("design:type",String)],bo.prototype,"errorText",void 0),go([re("#inputfield"),yo("design:type",Object)],bo.prototype,"inputfield",void 0),bo=go([oe("nidoca-form-captcha")],bo);var vo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},xo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let wo=class extends ee{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return N`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};wo.styles=r`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,vo([ie({type:String}),xo("design:type",String)],wo.prototype,"text",void 0),vo([ie({type:String}),xo("design:type",String)],wo.prototype,"href",void 0),vo([ie({type:String}),xo("design:type",String)],wo.prototype,"targetType",void 0),wo=vo([oe("nidoca-link")],wo);var $o=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ro=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let So=class extends ee{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=pe.prototype.getParentTheme(this)||ce.background}update(e){super.update(e),null!=e.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return N`
      <style>
        .selected {
          backdrop-filter: contrast(var(--app-color-percent-selected));
        }
      </style>
      <div
        class="container ${this.selected?"selected":""}"
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        ${this.multiSelect?N` <nidoca-icon
              style="padding-right: var(--space-2);"
              class="item"
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>`:N`<span></span>`}
        <slot name="graphic" class="item"></slot>
        <div class="containerTypography">
          ${this.primaryText?N` <nidoca-text class="item">${this.primaryText} </nidoca-text>`:N``}
          <slot></slot>
          ${this.secondaryText?N` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`:N``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let e="";e=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};So.styles=r`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      padding: var(--space-2);
    }

    .item {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `,$o([ie({type:ce,converter:String}),Ro("design:type",Object)],So.prototype,"theme",void 0),$o([ie({type:Boolean}),Ro("design:type",Boolean)],So.prototype,"multiSelect",void 0),$o([ie({type:Boolean}),Ro("design:type",Boolean)],So.prototype,"selected",void 0),$o([ie({type:String}),Ro("design:type",String)],So.prototype,"primaryText",void 0),$o([ie({type:String}),Ro("design:type",String)],So.prototype,"secondaryText",void 0),So=$o([oe("nidoca-list-item"),Ro("design:paramtypes",[])],So);var Oo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Eo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ko=class extends ee{constructor(){super(),this.multiSelect=!1,this.theme=pe.prototype.getParentTheme(this)||ce.background}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"selectionMode"==t&&this.getItems().forEach((e=>{e.multiSelect=this.multiSelect}))}))}render(){return N`
      <style>
        slot {
          border-color: var(--app-color-${this.theme}-border);
          border-top-style: solid;
          border-width: thin;
        }

        ::slotted(nidoca-list-section) {
          color: var(--app-color-${this.theme});
          backdrop-filter: contrast(var(--app-color-percent-optional));
        }

        ::slotted(nidoca-list-item) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        ::slotted(nidoca-list-item),
        ::slotted(nidoca-list-section) {
          border-bottom-style: solid;
          border-width: var(--border-width-min);
        }

        ::slotted(nidoca-list-item:hover) {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <slot
        @nidoca-event-list-item-click="${e=>{this.multiSelect||this.unselectAll(),e.detail.selected=!0}}"
        @nidoca-event-list-item-unselect="${()=>{this.multiSelect=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot>
    `}getItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof So&&e.push(n)}}return e}getSelectedItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof So&&n.selected&&e.push(n)}}return e}getSelectedIndexes(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();let o=0;for(let n=0;n<t.length;n++){const i=t[n];i instanceof So&&(i.selected&&e.push(o),o++)}}return e}selectAll(){this.getItems().forEach((e=>{e.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((e=>{e.selected=!1}))}};ko.styles=r`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Oo([ie({type:ce,converter:String}),Eo("design:type",Object)],ko.prototype,"theme",void 0),Oo([ie({type:Boolean}),Eo("design:type",Boolean)],ko.prototype,"multiSelect",void 0),Oo([re("#slotElement"),Eo("design:type",Object)],ko.prototype,"slotElement",void 0),ko=Oo([oe("nidoca-list"),Eo("design:paramtypes",[])],ko);var jo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},To=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Po=class extends ee{constructor(){super(),this.text="",this.theme=pe.prototype.getParentTheme(this)||ce.background}render(){return N`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};Po.styles=r`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `,jo([ie({type:ce,converter:String}),To("design:type",Object)],Po.prototype,"theme",void 0),jo([ie({type:String}),To("design:type",String)],Po.prototype,"text",void 0),Po=jo([oe("nidoca-list-section"),To("design:paramtypes",[])],Po);var Co=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ao=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _o=class extends ee{constructor(){super(...arguments),this.theme=ce.primary,this.prominent=!1}render(){return N`
      ${pe.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?N` <slot class="prominent" name="prominent"></slot>`:N``}
    `}};_o.styles=r`
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
  `,Co([ie({type:ce,converter:String}),Ao("design:type",Object)],_o.prototype,"theme",void 0),Co([ie({type:Boolean}),Ao("design:type",Boolean)],_o.prototype,"prominent",void 0),_o=Co([oe("nidoca-top-app-bar")],_o);var No=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Io=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Do=class extends ee{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new oo],["row 2",new oo]],this.theme=ce.background}render(){return N`
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
          color: var(--app-color-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${tt([this.headers],(()=>N` ${Qe(this.headers,(e=>N` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${tt([this.rows],(()=>N`
                  ${Qe(this.rows,(e=>N`
                        <tr>
                          ${Qe(e,(e=>N` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Do.styles=r`
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
  `,No([ie({type:Array}),Io("design:type",Array)],Do.prototype,"headers",void 0),No([ie({type:Array}),Io("design:type",Array)],Do.prototype,"rows",void 0),No([ie({type:ce,converter:String}),Io("design:type",String)],Do.prototype,"theme",void 0),Do=No([oe("nidoca-table")],Do);var Lo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Bo=class extends ee{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?N` <slot></slot>`:N``}};Bo.styles=r`
    :host,
    slot {
      display: block;
    }
  `,Lo([ie({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Bo.prototype,"selected",void 0),Bo=Lo([oe("nidoca-tab-content")],Bo);var Mo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Wo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let zo=class extends ee{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=ce.surface}render(){return N`
      <style>
        .container {
          border-color: var(--app-color-${this.theme}-background);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
        ${this.text?N` <nidoca-text text="${this.text}"></nidoca-text> `:N``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};zo.styles=r`
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
  `,Mo([ie({type:Boolean}),Wo("design:type",Boolean)],zo.prototype,"selected",void 0),Mo([ie({type:String}),Wo("design:type",String)],zo.prototype,"text",void 0),Mo([ie({type:String}),Wo("design:type",String)],zo.prototype,"theme",void 0),zo=Mo([oe("nidoca-tab")],zo);var Uo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ho=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Go=class extends ee{constructor(){super(...arguments),this.theme=ce.surface,this.tabIndex=0}render(){return N`
      <div class="container" @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.tabIndexChanged()}update(e){super.update(e),null!=e.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const e=this.tabSlot.assignedElements(),t=100/e.length,o=e[this.tabIndex];for(let n=0;n<e.length;n++){const i=e[n];i instanceof zo&&(i.theme=this.theme,i.style.width=String(t).concat("%"),i==o?(i.selected=!0,i.classList.add("SELECTED")):(i.selected=!1,i.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let e=0;if(null!=this.tabContentSlot){const t=this.tabContentSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Bo&&(this.tabIndex==e?n.selected=!0:n.selected=!1,e++)}}}tabClicked(e){const t=e.detail;this.changeTabIndex(t)}changeTabIndex(e){if(!e.selected&&null!=this.tabSlot){const t=this.tabSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof zo&&n==e){this.tabIndex=o;break}}}}};Go.styles=r`
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
  `,Uo([re("#tabSlot"),Ho("design:type",Object)],Go.prototype,"tabSlot",void 0),Uo([re("#tabContentSlot"),Ho("design:type",Object)],Go.prototype,"tabContentSlot",void 0),Uo([ie({type:String}),Ho("design:type",String)],Go.prototype,"theme",void 0),Uo([ie({type:Number}),Ho("design:type",Number)],Go.prototype,"tabIndex",void 0),Go=Uo([oe("nidoca-tabs")],Go);var qo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Fo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Yo=class extends ee{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(e=>{if(!this.hideLeft&&this.leftElement){console.log("close");const t=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=e.x-t.width}}))}updated(e){super.updated(e)}render(){return N`
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
    `}};Yo.styles=r`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-primary);
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
  `,qo([ie({type:Boolean}),Fo("design:type",Boolean)],Yo.prototype,"hideLeft",void 0),qo([ie({type:Boolean}),Fo("design:type",Boolean)],Yo.prototype,"prominent",void 0),qo([re("#header"),Fo("design:type",Object)],Yo.prototype,"headerElement",void 0),qo([re("#left"),Fo("design:type",Object)],Yo.prototype,"leftElement",void 0),qo([re("#content"),Fo("design:type",Object)],Yo.prototype,"contentElement",void 0),Yo=qo([oe("nidoca-template"),Fo("design:paramtypes",[])],Yo);var Xo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ko=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Vo=class extends ee{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((e=>{this.videoElement&&(this.videoElement.srcObject=e)}))}render(){return N`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};Vo.styles=r``,Xo([re("#video"),Ko("design:type",Object)],Vo.prototype,"videoElement",void 0),Xo([re("#canvas"),Ko("design:type",Object)],Vo.prototype,"canvasElement",void 0),Xo([re("#click-photo"),Ko("design:type",Object)],Vo.prototype,"buttonElement",void 0),Vo=Xo([oe("nidoca-video")],Vo);var Jo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Zo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Qo=class extends ee{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return N`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((e=>N`${e}`))}
    `}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"src"==t&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((e=>{const t=document.createElement("canvas");t.width=e[0],t.height=e[1];const o=t.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,e[0],e[1]),t.toBlob((e=>{}),"image/webp")),this.canvasElements.push(t)})),this.requestUpdate()})}};Qo.styles=r``,Jo([ie({type:String}),Zo("design:type",String)],Qo.prototype,"src",void 0),Jo([re("#img"),Zo("design:type",Object)],Qo.prototype,"img",void 0),Qo=Jo([oe("nidoca-svg-2-webp")],Qo);var en=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let tn=class extends ee{constructor(){super(...arguments),this.text=""}render(){return N` <slot id="slotElement">${this.text}</slot>`}};tn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,en([ie({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],tn.prototype,"text",void 0),tn=en([oe("nidoca-text")],tn);let on=class extends tn{render(){return N` ${super.render()}`}};on.styles=r`
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
  `,on=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-button")],on);let nn=class extends tn{};nn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-overline")],nn);let rn=class extends tn{render(){return N` ${super.render()}`}};rn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.5em;
      font-weight: 400;
    }
  `,rn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-body")],rn);let an=class extends tn{};an.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,an=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-caption")],an);let sn=class extends an{constructor(){super(),this.style.color="red"}};sn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-error"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],sn);let cn=class extends an{constructor(){super(),this.style.color="green"}};cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-success"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],cn);let ln=class extends an{constructor(){super(),this.style.color="yellow"}};ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-warning"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],ln);let dn=class extends an{constructor(){super(),this.style.color="blue"}};dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-info"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],dn);let pn=class extends tn{};pn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1em;
    }
  `,pn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-h1")],pn);let hn=class extends tn{};hn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,hn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-h2")],hn);let fn=class extends tn{};fn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,fn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-h3")],fn);let un=class extends tn{};un.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,un=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-h4")],un);let mn=class extends tn{};mn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,mn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-h5")],mn);let gn=class extends tn{};gn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,gn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-text-h6")],gn);var yn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},bn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let vn=class extends ee{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=ce.surface}render(){return N`
      <style>
        .container,
        input {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        ::slotted(.container:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: contrast(var(--app-color-percent-selected));
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
    `}clearValue(){this.value=""}valueChanged(){var e;return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const t=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(e=this.inputElement)||void 0===e?void 0:e.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}))}};vn.styles=r`
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
  `,yn([ie({type:String}),bn("design:type",String)],vn.prototype,"value",void 0),yn([ie({type:String}),bn("design:type",String)],vn.prototype,"placeholder",void 0),yn([ie({type:Boolean}),bn("design:type",Boolean)],vn.prototype,"disabled",void 0),yn([re("#inputElement"),bn("design:type",Object)],vn.prototype,"inputElement",void 0),yn([ie({type:ce,converter:String}),bn("design:type",String)],vn.prototype,"theme",void 0),vn=yn([oe("nidoca-search-bar")],vn);var xn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},wn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class $n{}$n.CENTER="CENTER",$n.LEFT="LEFT",$n.RIGHT="RIGHT",$n.TOP="TOP",$n.BOTTOM="BOTTOM",$n.SLIDE_CENTER="SLIDE_CENTER",$n.SLIDE_LEFT="SLIDE_LEFT",$n.SLIDE_RIGHT="SLIDE_RIGHT",$n.SLIDE_TOP="SLIDE_TOP",$n.SLIDE_BOTTOM="SLIDE_BOTTOM";let Rn=class extends ee{constructor(){super(...arguments),this.transitionType=$n.CENTER,this.duration=.5}render(){return N` <div class="${rt(this.transitionType)}"><slot></slot></div> `}};Rn.styles=r`
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
  `,xn([ie({type:String}),wn("design:type",String)],Rn.prototype,"transitionType",void 0),xn([ie({type:Number}),wn("design:type",Number)],Rn.prototype,"duration",void 0),Rn=xn([oe("nidoca-transition")],Rn);var Sn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let On=class extends ee{constructor(){super(...arguments),this.show=!1}render(){return this.show?N`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${$n.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:N``}};On.styles=r`
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
  `,Sn([ie({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],On.prototype,"show",void 0),On=Sn([oe("nidoca-dialog")],On);var En=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},kn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let jn=class extends ee{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return N`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${De.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${De.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};jn.styles=r``,En([ie({type:Boolean}),kn("design:type",Boolean)],jn.prototype,"show",void 0),En([ie({type:String}),kn("design:type",String)],jn.prototype,"title",void 0),En([ie({type:String}),kn("design:type",String)],jn.prototype,"description",void 0),En([ie({type:String}),kn("design:type",String)],jn.prototype,"labelButtonYes",void 0),En([ie({type:String}),kn("design:type",String)],jn.prototype,"labelButtonNo",void 0),jn=En([oe("nidoca-dialog-decision")],jn);var Tn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Pn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Cn{}Cn.ROUND="ROUND",Cn.CLICKABLE="CLICKABLE",Cn.ZOOM_WRAPPED="ZOOM_WRAPPED",Cn.FULL_WIDTH="FULL_WIDTH";class An extends ee{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[Cn.CLICKABLE,Cn.FULL_WIDTH]}render(){return N`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(e){let t="";return e.forEach((e=>{t=t.concat(" ").concat("")})),t}}An.styles=r`
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
  `,Tn([ie({type:String}),Pn("design:type",String)],An.prototype,"src",void 0),Tn([ie({type:String}),Pn("design:type",String)],An.prototype,"width",void 0),Tn([ie({type:String}),Pn("design:type",String)],An.prototype,"height",void 0),Tn([ie({type:Cn,converter:Array}),Pn("design:type",Array)],An.prototype,"richMediaProperties",void 0);var _n=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Nn=class extends ee{constructor(){super(...arguments),this.imgSrc=""}render(){return N`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[Cn.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};Nn.styles=r`
    :host {
      display: block;
    }
  `,_n([ie({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Nn.prototype,"imgSrc",void 0),Nn=_n([oe("nidoca-avatar")],Nn);var In=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Dn=class extends ee{constructor(){super(...arguments),this.theme=ce.surface}render(){return N`
      <style>
        :host {
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Dn.styles=r`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
    }
    slot {
      display: block;
    }
  `,In([ie({type:ce,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Dn.prototype,"theme",void 0),Dn=In([oe("nidoca-card")],Dn);let Ln=class extends ee{render(){return N`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();for(let e=0;e<o.length;e++){const t=o[e].classList;t.contains("flexItem")||t.add("flexItem"),t.contains("flexItemDevice")||t.add("flexItemDevice")}}};Ln.styles=r`
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
  `,Ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-gallery")],Ln);let Bn=class extends ee{render(){return N`<slot></slot>`}print(){const e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};Bn.styles=r`
    :host {
      display: none;
    }
  `,Bn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-print")],Bn);let Mn=class extends ee{constructor(){super(...arguments),this.flexBasis="auto"}render(){return N`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){const t=e.target,o=t.offsetWidth,n=t.assignedElements(),i=n.length,r=[];let a=0;for(let e=0;e<i;e++){const t=n[e];if(t.setAttribute("class","item"),t instanceof HTMLElement){const e=t.style.width;if(0==e.length)r.push(t);else{const t=e.toUpperCase();a+=t.indexOf("PX")>-1?Number(t.replace("PX","")):Number(t.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/i),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};Mn.styles=r`
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

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: 10240px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,Mn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-section")],Mn);var Wn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Un=class extends ee{render(){return N` <slot></slot>`}};Un.styles=r`
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
  `,Un=Wn([oe("nidoca-dashboard")],Un);let Hn=class extends ee{render(){return N` <slot></slot>`}};Hn.styles=r`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,Hn=Wn([oe("nidoca-dashboard-box-25")],Hn);let Gn=class extends ee{render(){return N` <slot></slot>`}};Gn.styles=r`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,Gn=Wn([oe("nidoca-dashboard-box-50")],Gn);let qn=class extends ee{render(){return N` <slot></slot>`}};qn.styles=r`
    :host {
      width: 100%;
      display: block;
    }
  `,qn=Wn([oe("nidoca-dashboard-box-100")],qn);let Fn=class extends ee{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return N`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Fn.styles=r`
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
  `,Wn([ie({type:Boolean}),zn("design:type",Boolean)],Fn.prototype,"clickable",void 0),Wn([ie({type:String}),zn("design:type",String)],Fn.prototype,"title",void 0),Fn=Wn([oe("nidoca-dashboard-card")],Fn);var Yn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Xn=class extends ee{constructor(){super(...arguments),this.theme=ce.transparent}render(){return N`
      ${pe.getStyle(this.theme)}
      <slot></slot>
    `}};Xn.styles=r`
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
  `,Yn([ie({type:ce,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Xn.prototype,"theme",void 0),Xn=Yn([oe("nidoca-box")],Xn);var Kn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Vn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Jn=class extends ee{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return N`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?N` <nidoca-text class="paddingBottom">${this.overline}</nidoca-text> `:N``}
        ${this.title?N` <nidoca-text-h2 class="paddingBottom">${this.title}</nidoca-text-h2> `:N``}
        ${this.summary?N` <nidoca-text-caption class="paddingBottom">${this.summary}</nidoca-text-caption> `:N``}
        ${this.text?N` <nidoca-text class="paddingBottom">${this.text}</nidoca-text>`:N``}
        <slot></slot>
      </div>
    `}};Jn.styles=r`
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
  `,Kn([ie({type:String}),Vn("design:type",String)],Jn.prototype,"overline",void 0),Kn([ie({type:String}),Vn("design:type",String)],Jn.prototype,"title",void 0),Kn([ie({type:String}),Vn("design:type",String)],Jn.prototype,"summary",void 0),Kn([ie({type:String}),Vn("design:type",String)],Jn.prototype,"text",void 0),Jn=Kn([oe("nidoca-article")],Jn);var Zn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ei=class extends ee{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return N`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};ei.styles=r`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,Zn([ie({type:String}),Qn("design:type",String)],ei.prototype,"primaryText",void 0),Zn([ie({type:String}),Qn("design:type",String)],ei.prototype,"text",void 0),Zn([ie({type:String}),Qn("design:type",String)],ei.prototype,"icon",void 0),ei=Zn([oe("nidoca-icon-with-description")],ei);var ti=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},oi=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ni=class extends ee{constructor(){super(...arguments),this.theme=ce.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return N`
      <nidoca-box theme="${rt(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${at.TEXT}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${at.TEXT}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${pe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${De.CONTAINED}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ni.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ti([ie({type:ce,converter:String}),oi("design:type",Object)],ni.prototype,"theme",void 0),ti([ie({type:String,converter:String}),oi("design:type",String)],ni.prototype,"label",void 0),ti([ie({type:String,converter:String}),oi("design:type",String)],ni.prototype,"nameLabel",void 0),ti([ie({type:String,converter:String}),oi("design:type",String)],ni.prototype,"emailLabel",void 0),ti([ie({type:String,converter:String}),oi("design:type",String)],ni.prototype,"titleLabel",void 0),ti([ie({type:String,converter:String}),oi("design:type",String)],ni.prototype,"messageLabel",void 0),ti([ie({type:String,converter:String}),oi("design:type",String)],ni.prototype,"buttonLabel",void 0),ti([re("#authenitcate-form"),oi("design:type",Object)],ni.prototype,"formComponent",void 0),ni=ti([oe("nidoca-form-contact")],ni);let ii=class extends ee{render(){return N`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};ii.styles=r`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      width: 100vw;
    }

    .right {
      background-color: var(--app-color-primary-background);
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
  `,ii=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([oe("nidoca-page-login")],ii);var ri,ai=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},si=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.anchor="anchor",e.page="page"}(ri||(ri={}));let ci=class extends ee{constructor(){super(...arguments),this.loggedIn=!1}updated(e){if(super.updated(e),e.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),e.has("route")&&this.root){for(let e=0;e<this.root.childs.length;e++){const t=this.root.childs[e];if(t.route==this.route){this.contentComponent=document.createElement(t.rootComponent);break}}this.requestUpdate()}}render(){var e;return this.loggedIn?N`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?N`${this.contentComponent}`:N``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(e=this.root)||void 0===e?void 0:e.childs.map((e=>N` <nidoca-menu-item
                        text="${e.name}"
                        @click="${()=>{this.routeTo(e)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:N` <nidoca-page-login
          @nidoca-form-login-submit="${e=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:e.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(e){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:e.route,bubbles:!0,composed:!0}))}};ai([ie({type:Array}),si("design:type",Object)],ci.prototype,"root",void 0),ai([ie({type:Boolean}),si("design:type",Boolean)],ci.prototype,"loggedIn",void 0),ai([ie({type:String,converter:String}),si("design:type",Object)],ci.prototype,"route",void 0),ci=ai([oe("nidoca-app")],ci);class li{constructor(e){this.propertyWrapper=e}getInputElement(e){if(null==e)return N``;const t=e.classWrapper;if(null==t)return N``;switch(this.propertyWrapper.getRenderType()){case se.STRING:return N`
                    <nidoca-form-text .textType="${at.TEXT}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${t.instance[this.propertyWrapper.propertyName]}"
                                      @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case se.NUMBER:return N` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${at.NUMBER}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case se.BOOLEAN:return N` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case se.COMBOBOX:return N` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${it.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((e=>this.propertyWrapper.getType()[e]==t.instance[this.propertyWrapper.propertyName]))[0]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(o.target.getOutputData().value),e.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case se.ARRAY:return N`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${it.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${t.instance[this.propertyWrapper.propertyName]}"
            @input="${e=>{t.instance[this.propertyWrapper.propertyName]=e.target.getOutputData().value,t.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return N``}}getAsHtml(e){switch(this.propertyWrapper.getConverterTypeName()){case se.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case se.ARRAY:return"";case se.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(e.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(e){switch(this.propertyWrapper.getRenderType()){case se.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(e.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case se.STRING:return`${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case se.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsAngular(e){switch(this.propertyWrapper.getRenderType()){case se.COMBOBOX:return`[${this.propertyWrapper.propertyName}]="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(e.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case se.STRING:return`[${this.propertyWrapper.propertyName}]="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case se.ARRAY:return`[${this.propertyWrapper.propertyName}]="\${[]}"\n`;default:return`[${this.propertyWrapper.propertyName}]="\${}"\n`}}getAsJavascript(e){switch(this.propertyWrapper.getConverterTypeName()){case se.COMBOBOX:case se.ARRAY:return"";case se.STRING:return`element.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${e.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(e){switch(this.propertyWrapper.getConverterTypeName()){case se.COMBOBOX:case se.ARRAY:return"";case se.STRING:return`element.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${e.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class di{constructor(e,t){this.parent=e,this.classWrapper=t}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((e=>e.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((e=>e.getAsAngular(this))).join("  ")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(e){return e.indexOf(">")>-1&&(e=e.substr(e.indexOf(">")+1,e.length)),e}renderPropertyGui(){const e=[];for(const t of this.getPropertyGuiWrappers())e.push(N`
          <div>
            <b>${t.propertyWrapper.propertyName}</b>

            <pre>${t.propertyWrapper.getTypeName()}</pre>
            <div>${t.getInputElement(this)}</div>
          </div>
        `);return e}getPropertyGuiWrappers(){const e=[];for(const t of this.classWrapper.getProperties())e.push(new li(t));return e}getPropertieNames(){const e=[];return this.getPropertyGuiWrappers().map((t=>{e.push(t.propertyWrapper.propertyName)})),e}hasProperties(){return this.getPropertieNames().length>0}}console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var pi=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},hi=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let fi=class extends ee{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(e){e.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new di(this,new de(this.element)),this.requestUpdate())}render(){var e,t,o,n,i,r,a,s;return N` <nidoca-section theme="primary">
        <div>
          <nidoca-text-h2 class="paddingTopBottom">Tag</nidoca-text-h2>
          <nidoca-code
            >${this.webcomponentGuiWrapper?this.webcomponentGuiWrapper.classWrapper.getHTMLTag():""}
          </nidoca-code>

          <div style="padding-top:var(--space-3);">
            <nidoca-section> ${this.element}</nidoca-section>
          </div>
        </div>

        <div style="padding-left:var(--space-3)">
          ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.hasProperties())?N`
                <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((e=>N`${e.getInputElement(this.webcomponentGuiWrapper)}
                    <div class="paddingTopBottom"></div>`))}
              `:N``}
          ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.classWrapper.hasSlots())?N` <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                <nidoca-table
                  theme="surface"
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                >
                </nidoca-table>`:N``}
          ${this.customEventNames.length>0?N` <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                <nidoca-table
                  class="paddingTopBottom"
                  .headers="${["name"]}"
                  .rows="${this.toCustomEventRows(this.customEventNames)}"
                >
                </nidoca-table>`:N``}
        </div>
      </nidoca-section>

      <nidoca-hr></nidoca-hr>

      <nidoca-text-h2 class="paddingTopBottom">Quelltext</nidoca-text-h2>
      <nidoca-tabs tabIndex="0">
        <nidoca-tab slot="tab">Angular</nidoca-tab>
        <nidoca-tab slot="tab">Javascript</nidoca-tab>
        <nidoca-tab slot="tab">Typescript</nidoca-tab>
        <nidoca-tab slot="tab">Lit</nidoca-tab>
        <nidoca-tab slot="tab">Html</nidoca-tab>

        <nidoca-tab-content slot="tabContent">
          <nidoca-code class="paddingTopBottom">${null===(o=this.webcomponentGuiWrapper)||void 0===o?void 0:o.getAsAngular()}</nidoca-code>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-code class="paddingTopBottom">${null===(n=this.webcomponentGuiWrapper)||void 0===n?void 0:n.getAsJavascript()} </nidoca-code>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-code class="paddingTopBottom">${null===(i=this.webcomponentGuiWrapper)||void 0===i?void 0:i.getTypescript()}</nidoca-code>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-code class="paddingTopBottom">${null===(r=this.webcomponentGuiWrapper)||void 0===r?void 0:r.getAsLit()}</nidoca-code>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-code class="paddingTopBottom">${null===(a=this.webcomponentGuiWrapper)||void 0===a?void 0:a.getAsHtml()}</nidoca-code>
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
      <slot @slotchange="${e=>this.slotChanged(e)}"></slot>`}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements()[0];o instanceof HTMLElement&&(this.element=o)}toAttributeRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e.propertyWrapper.propertyName),o.push(e.propertyWrapper.getTypeName()),o.push(e.propertyWrapper.getConverterTypeName()),o.push(e.propertyWrapper.getRenderType()),t.push(o),o})),t}toSlotRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e),t.push(o),o})),t}toCustomEventRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e),t.push(o),o})),t}};fi.styles=r`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `,pi([ie({type:Array}),hi("design:type",Array)],fi.prototype,"customEventNames",void 0),pi([ie({type:Object}),hi("design:type",Object)],fi.prototype,"element",void 0),fi=pi([oe("webcomponent-viewer")],fi);var ui=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let mi=class extends ee{constructor(){super(...arguments),this.componentMap=new Map,this.options=[]}render(){return N`
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${rt(this.elementName)}"
        .options="${this.options}"
        @input="${e=>{this.elementName=e.target.getOutputData().value}}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer> ${this.componentMap.get(this.elementName?this.elementName:"")} </webcomponent-viewer>
      <slot @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){const t=e.target.assignedElements(),o=t.length;for(let e=0;e<o;e++){const o=t[e];o instanceof HTMLElement&&(null==this.elementName&&(this.elementName=o.tagName),this.componentMap.set(o.tagName,o.cloneNode(!0)))}this.options=it.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};mi.styles=r`
    slot {
      display: none;
    }
  `,ui([ie({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],mi.prototype,"elementName",void 0),mi=ui([oe("webcomponent-viewer-container")],mi);var gi=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let yi=class extends ee{constructor(){super(...arguments),this.elementName="nidoca-tabs"}render(){return N`
      <nidoca-container theme="primary">
        <nidoca-section>
          <nidoca-article
            title="Komponentenübersicht"
            text="Auf dieser Seite kannst du dir die einzelnen Komponenten anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
          ></nidoca-article>
        </nidoca-section>

        <nidoca-section>
          <webcomponent-viewer-container>
            ${bi.getUniqueInstance().registeredElementNames.map((e=>N` ${bi.getUniqueInstance().registeredElementsMap.get(e)} `))}
          </webcomponent-viewer-container>
        </nidoca-section>
      </nidoca-container>
    `}};yi.styles=r``,gi([ie({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],yi.prototype,"elementName",void 0),yi=gi([oe("webcomponent-viewer-playground")],yi);class bi{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){this._registeredElementsMap.set("nidoca-form-upload",N` <nidoca-form-upload theme="primary"></nidoca-form-upload>`),this.registeredElementsMap.set("nidoca-list",N` <nidoca-list theme="secondary" selectionMode>
        <nidoca-list-section>A</nidoca-list-section>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
      </nidoca-list>`),this._registeredElementsMap.set("nidoca-form-contact",N` <nidoca-form-contact
        @nidoca-form-contact-submit="${e=>alert(JSON.stringify(e.detail))}"
        theme="${vi.BACKGROUND}"
      ></nidoca-form-contact>`),this._registeredElementsMap.set("nidoca-form-change-password",N` <nidoca-form-change-password
        theme="${vi.SECONDARY}"
        @nidoca-form-change-password-submit="${e=>alert(JSON.stringify(e.detail))}"
      ></nidoca-form-change-password>`),this._registeredElementsMap.set("nidoca-form-register",N` <nidoca-form-register
        @nidoca-form-register-submit="${e=>alert(JSON.stringify(e.detail))}"
        theme="${vi.PRIMARY}"
      ></nidoca-form-register>`),this._registeredElementsMap.set("nidoca-form-reset-password",N` <nidoca-form-reset-password
        @nidoca-form-reset-password-submit="${e=>alert(JSON.stringify(e.detail))}"
        theme="${vi.PRIMARY}"
      ></nidoca-form-reset-password>`),this._registeredElementsMap.set("nidoca-form-newsletter",N` <nidoca-form-newsletter
        @nidoca-form-newsletter-submit="${e=>alert(JSON.stringify(e.detail))}"
        theme="${vi.SURFACE}"
      ></nidoca-form-newsletter>`),this.registeredElementsMap.set("nidoca-article",N` <nidoca-article
        overline="Ut enim ad minim veniam"
        title="Ut enim ad minim veniam"
        summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      >
        <nidoca-button theme="${vi.SECONDARY}" .buttonType="${De.OUTLINED}"
          >Aktion
        </nidoca-button>
      </nidoca-article>`),this.registeredElementsMap.set("nidoca-text",N` <nidoca-text>Ut enim ad minim veniam.</nidoca-text>`);const e=new ho;e.src="http://nidoca.eu/img/DSC02586.jpg",e.width="100%",e.height="100%",this.registeredElementsMap.set("nidoca-img",N`${e}`);const t=new mo;t.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",N`${t}`),this.registeredElementsMap.set("nidoca-search-bar",N` <nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`),this.registeredElementsMap.set("nidoca-avatar",N` <nidoca-avatar
        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
        primaryText="Dominik Bruhn"
        description="Softwareentwickler"
      >
      </nidoca-avatar>`);const o=new Ie;o.style.padding="var(--space-6)",this.registeredElementsMap.set("nidoca-progress",N`${o}`);const n=new oo;n.style.padding="var(--space-6)",n.icon="home",n.primaryText="Home Icon",n.clickable=!0,n.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",N`${n}`),this._registeredElementsMap.set("nidoca-menu",N` <nidoca-menu theme="primary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"></nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
      </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",N` <nidoca-accordion .theme="${vi.PRIMARY}">
        <nidoca-accordion-item header="Lorem Ipsum" opened>
          <nidoca-article
            style="padding:25px;"
            title="Lorem Ipsum"
            summary="Lorem Ipsum Dolorem ipsum med en to."
            text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
          ></nidoca-article>
        </nidoca-accordion-item>
        <nidoca-accordion-item header="Bild 2">
          <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        </nidoca-accordion-item>
        <nidoca-accordion-item header="Bild 3">
          <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        </nidoca-accordion-item>
        <nidoca-accordion-item header="Bild 4">
          <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        </nidoca-accordion-item>
      </nidoca-accordion>`),this._registeredElementsMap.set("nidoca-button",N` <nidoca-button leadingIcon="home" buttonType="CONTAINED">Mein Button</nidoca-button>`),this._registeredElementsMap.set("nidoca-card",N` <nidoca-card></nidoca-card>`),this._registeredElementsMap.set("nidoca-chip",N` <nidoca-chip>Lorem Ipsum</nidoca-chip>`),this._registeredElementsMap.set("nidoca-code",N` <nidoca-code>Lorem Ipsum</nidoca-code>`),this._registeredElementsMap.set("nidoca-dialog-action",N` <nidoca-dialog-action></nidoca-dialog-action>`),this._registeredElementsMap.set("nidoca-dialog",N` <nidoca-dialog>
        <nidoca-button
          @click="${e=>{e.target.parentNode.show=!1,e.target.getRootNode().host.requestUpdate()}}"
          >Schließen
        </nidoca-button>
      </nidoca-dialog>`),this._registeredElementsMap.set("nidoca-form-combobox",N` <nidoca-form-combobox
        theme="surface"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
        .options="${[{key:"item1",value:"Item 1"},{key:"item2",value:"Item 2"}]}"
        value="item2"
      ></nidoca-form-combobox>`),this._registeredElementsMap.set("nidoca-form-date",N` <nidoca-form-date
        theme="background"
        label="Geburtstag"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-date>`),this._registeredElementsMap.set("nidoca-form-switch",N` <nidoca-form-switch></nidoca-form-switch>`),this._registeredElementsMap.set("nidoca-form-text",N`
        <nidoca-form-text
          theme="primary"
          label="Mein Textfeld"
          placeholder="Platzhalter"
          trailingIcon="home"
          infoText="Info"
          warningText="Warnung"
          errorText="Fehler"
          name="text"
        >
        </nidoca-form-text>
      `),this._registeredElementsMap.set("nidoca-form-textarea",N` <nidoca-form-textarea
        theme="secondary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-textarea>`),this._registeredElementsMap.set("nidoca-form-captcha",N` <nidoca-form-captcha
        theme="primary"
        label="Wie lautet das Ergebnis von:"
        name="captcha"
      ></nidoca-form-captcha>`),this._registeredElementsMap.set("nidoca-gallery",N` <nidoca-gallery>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
      </nidoca-gallery>`),this._registeredElementsMap.set("nidoca-link",N` <nidoca-link></nidoca-link>`),this._registeredElementsMap.set("nidoca-ripple",N` <nidoca-ripple></nidoca-ripple>`),this._registeredElementsMap.set("nidoca-tabs",N`
        <nidoca-tabs tabIndex="0">
          <nidoca-tab slot="tab">Tab 1</nidoca-tab>
          <nidoca-tab slot="tab">Tab 2</nidoca-tab>
          <nidoca-tab slot="tab">Tab 3</nidoca-tab>
          <nidoca-tab-content slot="tabContent">
            <nidoca-text>Tab Inhalt 1</nidoca-text>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-text>Tab Inhalt 2</nidoca-text>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-text>Tab Inhalt 3</nidoca-text>
          </nidoca-tab-content>
        </nidoca-tabs>
      `),this._registeredElementsMap.set("nidoca-table",N` <nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",N` <nidoca-top-app-bar style="min-height: 48px;" .theme="${vi.PRIMARY}">
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",N` <nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",N` <nidoca-wizard></nidoca-wizard>`),this._registeredElementsMap.set("nidoca-icon-with-description",N` <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
        Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über
        ${bi.getUniqueInstance().registeredElementNames.length} Komponenten. Diese sind für den direkten Einsatz in
        deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können dank der Webcomponent
        Technologie überall in andere Frameworks eingebaungen werden.
      </nidoca-icon-with-description>`)}static getUniqueInstance(){return bi.uniqueInstance||(bi.uniqueInstance=new bi),bi.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const e=[];for(const t of this.registeredElementsMap.keys())e.push(t);return e}registerElementName(e){console.log(`register element: ${e}`);const t=document.createElement(e);this.registeredElementsMap.set(e,N`${t}`)}}class vi{static getStyle(e){return e?e==vi.TRANSPARENT?N``:N` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${e});
              background-color: var(--app-color-${e}-background);
              border-color: var(--app-color-${e}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`:N``}static getOposite(e){return e==vi.BACKGROUND?vi.SURFACE:e==vi.PRIMARY||e==vi.PRIMARY?vi.SECONDARY:e==vi.SECONDARY?vi.PRIMARY:vi.BACKGROUND}getParentTheme(e){let t=e;for(;null!=t;){if(null!=t.theme)return t.theme;t=t.parentElement}}}vi.PRIMARY="primary",vi.SECONDARY="secondary",vi.SURFACE="surface",vi.BACKGROUND="background",vi.TRANSPARENT="transparent",bi.getUniqueInstance().initDefaultComponents()})();