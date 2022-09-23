/*! For license information please see nidoca-lit-viewer.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=r.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(o,t))}return t}toString(){return this.cssText}}const i=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new n(r,t,o)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var s;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",p=l.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},f=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:f};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var o;const r=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,r)=>{e?o.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((e=>{const r=document.createElement("style"),n=t.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=u){var r;const n=this.constructor._$Ep(t,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:h).toAttribute(e,o.type);this._$El=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:h;this._$El=n,this[n]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:y}),(null!==(s=l.reactiveElementVersions)&&void 0!==s?s:l.reactiveElementVersions=[]).push("1.4.1");const g=window,b=g.trustedTypes,v=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,$=`<${w}>`,S=document,R=(t="")=>S.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,O=t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,P=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),C=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,I=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),N=I(1),_=(I(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),W=new WeakMap,z=S.createTreeWalker(S,129,null,!1),M=(t,e)=>{const o=t.length-1,r=[];let n,i=2===e?"<svg>":"",a=E;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===E?"!--"===l[1]?a=j:void 0!==l[1]?a=P:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=T):void 0!==l[3]&&(a=T):a===T?">"===l[0]?(a=null!=n?n:E,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?T:'"'===l[3]?B:C):a===B||a===C?a=T:a===j||a===P?a=E:(a=T,n=void 0);const p=a===T&&t[e+1].startsWith("/>")?" ":"";i+=a===E?o+$:c>=0?(r.push(s),o.slice(0,c)+"$lit$"+o.slice(c)+x+p):o+x+(-2===c?(r.push(void 0),e):p)}const s=i+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(s):s,r]};class U{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,i=0;const a=t.length-1,s=this.parts,[l,c]=M(t,e);if(this.el=U.createElement(l,o),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=z.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const o=c[i++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?K:"@"===e[1]?J:Q})}else s.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(D.test(r.tagName)){const t=r.textContent.split(x),e=t.length-1;if(e>0){r.textContent=b?b.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],R()),z.nextNode(),s.push({type:2,index:++n});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===w)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(x,t+1));)s.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const o=S.createElement("template");return o.innerHTML=t,o}}function H(t,e,o=t,r){var n,i,a,s;if(e===_)return e;let l=void 0!==r?null===(n=o._$Cl)||void 0===n?void 0:n[r]:o._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,r)),void 0!==r?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[r]=l:o._$Cu=l),void 0!==l&&(e=H(t,l._$AS(t,e.values),l,r)),e}class q{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(o,!0);z.currentNode=n;let i=z.nextNode(),a=0,s=0,l=r[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new G(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new Y(i,this,t)),this.v.push(e),l=r[++s]}a!==(null==l?void 0:l.index)&&(i=z.nextNode(),a++)}return n}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class G{constructor(t,e,o,r){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$C_=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),A(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==_&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):O(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==L&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=U.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(o);else{const t=new q(n,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new U(t)),e}O(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const n of t)r===e.length?e.push(o=new G(this.S(R()),this.S(R()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,o,r,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const n=this.strings;let i=!1;if(void 0===n)t=H(this,t,e,0),i=!A(t)||t!==this._$AH&&t!==_,i&&(this._$AH=t);else{const r=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=H(this,r[o+a],e,a),s===_&&(s=this._$AH[a]),i||(i=!A(s)||s!==this._$AH[a]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}i&&!r&&this.P(t)}P(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends Q{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===L?void 0:t}}const F=b?b.emptyScript:"";class K extends Q{constructor(){super(...arguments),this.type=4}P(t){t&&t!==L?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class J extends Q{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=H(this,t,e,0))&&void 0!==o?o:L)===_)return;const r=this._$AH,n=t===L&&r!==L||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==L&&(r===L||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const X={A:"$lit$",M:x,C:w,L:1,R:M,D:q,V:O,I:H,H:G,N:Q,U:K,B:J,F:V,W:Y},Z=g.litHtmlPolyfillSupport;var tt,et;null==Z||Z(U,G),(null!==(m=g.litHtmlVersions)&&void 0!==m?m:g.litHtmlVersions=[]).push("2.3.1");class ot extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var r,n;const i=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let a=i._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;i._$litPart$=a=new G(e.insertBefore(R(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return _}}ot.finalized=!0,ot._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:ot});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:ot}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.2.2");const nt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function at(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):it(t,e)}function st(t,e){return(({finisher:t,descriptor:e})=>(o,r)=>{var n;if(void 0===r){const r=null!==(n=o.originalKey)&&void 0!==n?n:o.key,i=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:{...o,key:r};return null!=t&&(i.finisher=function(e){t(e,r)}),i}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(n,r)}})({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}var lt,ct,dt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements,function(t){t.String="String",t.Number="Number",t.Boolean="Boolean",t.Class="Class",t.Array="Array",t[void 0]="undefined"}(ct||(ct={}));class pt{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()||this.isArray()?ct.Array:null==this.getTypeName()?ct.Class:this.getTypeName()}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let o=0;o<e.length;o++){const r=e[o];if(r.key==t)return r.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class ht{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let o=[];if(e&&(e.tagName==t&&o.push(e),e.children.length>0)){const r=null==e?void 0:e.children;for(let e=0;e<r.length;e++)o=o.concat(this.getElementsByTagName(t,r.item(e)))}return o}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed. no lit element ? wrong lit version ?");const e=[];for(const o of Array.from(t.keys()))e.push(new pt(o,t.get(o)));return e}}!function(t){t.primary="primary",t.secondary="secondary",t.surface="surface",t.background="background",t.transparent="transparent"}(dt||(dt={}));class ft{static getStyle(t){return t?t==dt.transparent?N``:N` <style>
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
          </style>`:N``}static getOposite(t){return t==dt.background?dt.surface:t==dt.primary||t==dt.primary?dt.secondary:t==dt.secondary?dt.primary:dt.background}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}var ut=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},yt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let mt=class extends ot{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return N`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?N` <slot></slot>`:N``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};mt.styles=i`
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
  `,ut([at({type:String}),yt("design:type",String)],mt.prototype,"header",void 0),ut([at({type:Boolean}),yt("design:type",Boolean)],mt.prototype,"opened",void 0),mt=ut([nt("nidoca-accordion-item")],mt);var gt,bt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},vt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.single="single",t.multi="multi"}(gt||(gt={}));let xt=class extends ot{constructor(){super(...arguments),this.theme=dt.surface,this.accordionType=gt.single}render(){return N`
      ${ft.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case gt.single:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const r=t[o];r instanceof mt&&r!=e&&(r.opened=!1)}}case gt.multi:}t.stopPropagation()}};xt.styles=i`
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
  `,bt([at({type:dt,converter:String}),vt("design:type",String)],xt.prototype,"theme",void 0),bt([at({type:gt,converter:String}),vt("design:type",String)],xt.prototype,"accordionType",void 0),bt([st("#accordionSlot"),vt("design:type",Object)],xt.prototype,"accordionSlot",void 0),xt=bt([nt("nidoca-accordion")],xt);var wt,$t=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},St=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.current=0]="current",t[t.completed=1]="completed",t[t.open=2]="open",t[t.finish=3]="finish"}(wt||(wt={}));let Rt=class extends ot{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return N`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${lo.NONE}"
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
    `}determineBackgroundColor(t){return t==wt.completed?"var(--app-color-text-primary)":t==wt.current?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==wt.finish?"var(--app-color-success)":t==wt.completed?"var(--mdc-theme-on-primary)":t==wt.current?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};Rt.styles=i`
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
  `,$t([at({type:String}),St("design:type",String)],Rt.prototype,"icon",void 0),$t([at({type:String}),St("design:type",String)],Rt.prototype,"primaryText",void 0),$t([at({type:Number}),St("design:type",Object)],Rt.prototype,"state",void 0),$t([at({type:Boolean}),St("design:type",Boolean)],Rt.prototype,"isLast",void 0),Rt=$t([nt("nidoca-wizard-step")],Rt);var At=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let kt=class extends ot{render(){return N`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let r=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof Rt&&(e.index=t,e.state==wt.current&&(r=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(r)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof Rt&&void 0!==r.index&&(r.index<t?r.state=wt.completed:r.index==t?r.state=wt.current:r.state=wt.open)}}}};kt.styles=i``,At([st("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],kt.prototype,"wizardSlot",void 0),kt=At([nt("nidoca-wizard")],kt);var Ot=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Et=class extends ot{constructor(){super(...arguments),this.clickable=!0}render(){return N`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Et.styles=i`
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
  `,Ot([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Et.prototype,"clickable",void 0),Et=Ot([nt("nidoca-chip")],Et);var jt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Tt=class extends ot{constructor(){super(...arguments),this.code="",this.theme=dt.surface}render(){return N`
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
    `}};Tt.styles=i`
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
  `,jt([at({type:String}),Pt("design:type",String)],Tt.prototype,"code",void 0),jt([at({type:String}),Pt("design:type",String)],Tt.prototype,"theme",void 0),Tt=jt([nt("nidoca-code")],Tt);var Ct=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Dt=class extends ot{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?N`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:N``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};Dt.styles=i`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Ct([at({type:Boolean}),Bt("design:type",Boolean)],Dt.prototype,"show",void 0),Ct([at({type:Object}),Bt("design:type",Object)],Dt.prototype,"associatedElement",void 0),Dt=Ct([nt("nidoca-elevation"),Bt("design:paramtypes",[])],Dt);var It=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Nt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class _t{}_t.PROGRESS="PROGRESS",_t.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Lt=class extends ot{constructor(){super(...arguments),this.progressType=_t.PROGRESS}render(){return N` <style>
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

      <progress class="${this.progressType}"></progress>`}};Lt.styles=i``,It([at({type:dt,converter:String}),Nt("design:type",Object)],Lt.prototype,"theme",void 0),It([at({type:_t,converter:String}),Nt("design:type",String)],Lt.prototype,"progressType",void 0),Lt=It([nt("nidoca-progress")],Lt);var Wt,zt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.contained="contained",t.outlined="outlined",t.text="text"}(Wt||(Wt={}));let Ut=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.buttonType=Wt.contained,this.leadingIcon="",this.text=""}render(){return N`
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
        ${this.leadingIcon?N` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:N``}

        <nidoca-text-button
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ut.styles=i`
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
  `,zt([at({type:dt,converter:String}),Mt("design:type",String)],Ut.prototype,"theme",void 0),zt([at({type:Wt,converter:String}),Mt("design:type",String)],Ut.prototype,"buttonType",void 0),zt([at({type:String}),Mt("design:type",String)],Ut.prototype,"leadingIcon",void 0),zt([at({type:String}),Mt("design:type",String)],Ut.prototype,"text",void 0),Ut=zt([nt("nidoca-button")],Ut);class Ht extends ot{}var qt=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Qt=class extends ot{constructor(){super(...arguments),this.autocomplete=!0}render(){return N`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const r=o.getOutputData();e[r.key]=r.value,t.append(r.key,r.value)}const o={};return o.jsonObject=e,o.formData=t,o}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const r=o[t];this.recursiveInputElementSearch(r,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof Ht)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};Qt.styles=i`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,qt([at({type:Boolean}),Gt("design:type",Boolean)],Qt.prototype,"autocomplete",void 0),qt([st("#slotElement"),Gt("design:type",Object)],Qt.prototype,"slotElement",void 0),Qt=qt([nt("nidoca-form")],Qt);const Vt=t=>(...e)=>({_$litDirective$:t,values:e});class Ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:Kt}=X,Jt=()=>document.createComment(""),Yt=(t,e,o)=>{var r;const n=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=n.insertBefore(Jt(),i),r=n.insertBefore(Jt(),i);o=new Kt(e,r,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(r=o._$AQ)||void 0===r||r.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==i||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,i),t=e}}}return o},Xt=(t,e,o=t)=>(t._$AI(e,o),t),Zt={},te=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const r=t._$AB.nextSibling;for(;o!==r;){const t=o.nextSibling;o.remove(),o=t}},ee=(t,e,o)=>{const r=new Map;for(let n=e;n<=o;n++)r.set(t[n],n);return r},oe=Vt(class extends Ft{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}ht(t,e,o){let r;void 0===o?o=e:void 0!==e&&(r=e);const n=[],i=[];let a=0;for(const e of t)n[a]=r?r(e,a):a,i[a]=o(e,a),a++;return{values:i,keys:n}}render(t,e,o){return this.ht(t,e,o).values}update(t,[e,o,r]){var n;const i=t._$AH,{values:a,keys:s}=this.ht(e,o,r);if(!Array.isArray(i))return this.ut=s,a;const l=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],c=[];let d,p,h=0,f=i.length-1,u=0,y=a.length-1;for(;h<=f&&u<=y;)if(null===i[h])h++;else if(null===i[f])f--;else if(l[h]===s[u])c[u]=Xt(i[h],a[u]),h++,u++;else if(l[f]===s[y])c[y]=Xt(i[f],a[y]),f--,y--;else if(l[h]===s[y])c[y]=Xt(i[h],a[y]),Yt(t,c[y+1],i[h]),h++,y--;else if(l[f]===s[u])c[u]=Xt(i[f],a[u]),Yt(t,i[h],i[f]),f--,u++;else if(void 0===d&&(d=ee(s,u,y),p=ee(l,h,f)),d.has(l[h]))if(d.has(l[f])){const e=p.get(s[u]),o=void 0!==e?i[e]:null;if(null===o){const e=Yt(t,i[h]);Xt(e,a[u]),c[u]=e}else c[u]=Xt(o,a[u]),Yt(t,i[h],o),i[e]=null;u++}else te(i[f]),f--;else te(i[h]),h++;for(;u<=y;){const e=Yt(t,c[y+1]);Xt(e,a[u]),c[u++]=e}for(;h<=f;){const t=i[h++];null!==t&&te(t)}return this.ut=s,((t,e=Zt)=>{t._$AH=e})(t,c),_}}),re={},ne=Vt(class extends Ft{constructor(){super(...arguments),this.ot=re}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((t,e)=>t===this.ot[e])))return _}else if(this.ot===e)return _;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});var ie=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let se=class extends Ht{constructor(){super(...arguments),this.theme=dt.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return N` <style>
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
            ${ne([this.value,this.options],(()=>N`
                ${oe(this.options,(t=>null==t?N` <option></option>`:this.isSelectedOption(t)?N` <option value="${t.key}" selected>${t.value}</option> `:N` <option value="${t.key}">${t.value}</option> `))}
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
          `:N``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((r=>{let n=String(Object.keys(t)[Object.values(t).indexOf(r)]);e&&(n=n.concat(e)),o.push({key:r,value:n})})),o}};se.styles=i`
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
  `,ie([at({type:dt,converter:String}),ae("design:type",String)],se.prototype,"theme",void 0),ie([at({type:String}),ae("design:type",String)],se.prototype,"trailingIcon",void 0),ie([at({type:String}),ae("design:type",String)],se.prototype,"label",void 0),ie([at({type:String}),ae("design:type",String)],se.prototype,"errorText",void 0),ie([at({type:String}),ae("design:type",String)],se.prototype,"infoText",void 0),ie([at({type:String}),ae("design:type",String)],se.prototype,"warningText",void 0),ie([at(),ae("design:type",Object)],se.prototype,"value",void 0),ie([at({type:Array}),ae("design:type",Array)],se.prototype,"options",void 0),ie([at({type:String}),ae("design:type",String)],se.prototype,"name",void 0),ie([at({type:Boolean}),ae("design:type",Boolean)],se.prototype,"required",void 0),ie([at({type:Boolean}),ae("design:type",Boolean)],se.prototype,"multiple",void 0),ie([at({type:Number}),ae("design:type",Number)],se.prototype,"size",void 0),ie([st("#selectElement"),ae("design:type",Object)],se.prototype,"selectElement",void 0),se=ie([nt("nidoca-form-combobox")],se);const le=t=>null!=t?t:L;var ce,de=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.color="color",t.email="email",t.hidden="hidden",t.number="number",t.password="password",t.tel="tel",t.text="text",t.search="search",t.url="url",t.date="date",t.month="month",t.time="time",t.week="week"}(ce||(ce={}));let he=class extends Ht{constructor(){super(...arguments),this.type=ce.text,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=dt.surface}render(){return this.type==ce.hidden?N`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:N` <style>
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
                size="${le(this.size)}"
                minlength="${le(this.minlength)}"
                maxlength="${le(this.maxlength)}"
                pattern="${le(this.pattern)}"
                min="${le(this.min)}"
                max="${le(this.max)}"
                step="${le(this.step)}"
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
              `:N``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:null==e?void 0:e.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};he.styles=i`
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
  `,de([at({type:ce,converter:String}),pe("design:type",String)],he.prototype,"type",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"label",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"placeholder",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"trailingIcon",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"errorText",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"infoText",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"warningText",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"name",void 0),de([at(),pe("design:type",String)],he.prototype,"value",void 0),de([at({type:Boolean}),pe("design:type",Boolean)],he.prototype,"required",void 0),de([at({type:Boolean}),pe("design:type",Boolean)],he.prototype,"disabled",void 0),de([at({type:Boolean}),pe("design:type",Boolean)],he.prototype,"checked",void 0),de([at({type:Number}),pe("design:type",Object)],he.prototype,"maxlength",void 0),de([at({type:Number}),pe("design:type",Object)],he.prototype,"minlength",void 0),de([at({type:Number}),pe("design:type",Object)],he.prototype,"min",void 0),de([at({type:Number}),pe("design:type",Object)],he.prototype,"max",void 0),de([at({type:String}),pe("design:type",Object)],he.prototype,"step",void 0),de([at({type:Number}),pe("design:type",Object)],he.prototype,"size",void 0),de([at({type:String}),pe("design:type",Object)],he.prototype,"pattern",void 0),de([st("#inputElement"),pe("design:type",Object)],he.prototype,"inputElement",void 0),de([at({type:dt,converter:String}),pe("design:type",String)],he.prototype,"theme",void 0),he=de([nt("nidoca-form-text")],he);let fe=class extends he{constructor(){super(),this.type=ce.date}};fe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-form-date"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],fe);var ue=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let me=class extends Ht{constructor(){super(...arguments),this.theme=dt.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return N` <style>
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
          `:N``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};me.styles=i`
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
  `,ue([at({type:dt,converter:String}),ye("design:type",String)],me.prototype,"theme",void 0),ue([at({type:String}),ye("design:type",String)],me.prototype,"infoText",void 0),ue([at({type:String}),ye("design:type",String)],me.prototype,"warningText",void 0),ue([at({type:String}),ye("design:type",String)],me.prototype,"errorText",void 0),ue([at({type:String}),ye("design:type",String)],me.prototype,"name",void 0),ue([at(),ye("design:type",String)],me.prototype,"value",void 0),ue([at({type:String}),ye("design:type",String)],me.prototype,"label",void 0),ue([at({type:Boolean}),ye("design:type",Boolean)],me.prototype,"required",void 0),ue([at({type:String}),ye("design:type",String)],me.prototype,"placeholder",void 0),ue([at({type:Boolean}),ye("design:type",Boolean)],me.prototype,"disabled",void 0),ue([at({type:Number}),ye("design:type",Number)],me.prototype,"rows",void 0),ue([st("#inputElement"),ye("design:type",Object)],me.prototype,"inputElement",void 0),me=ue([nt("nidoca-form-textarea")],me);var ge=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ve=class extends Ht{constructor(){super(...arguments),this.theme=dt.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return N`
      <nidoca-box theme="${le(this.theme)}">
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
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};ve.styles=i`
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
  `,ge([at({type:dt,converter:String}),be("design:type",Object)],ve.prototype,"theme",void 0),ge([st("#inputElement"),be("design:type",Object)],ve.prototype,"inputElement",void 0),ve=ge([nt("nidoca-form-upload")],ve);var xe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},we=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $e=class extends Ht{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=dt.primary,this.theme=ft.prototype.getParentTheme(this)||dt.background}render(){return N`
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

        ${this.infoText.length>0?N` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:N``}

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

      ${this.warningText?N` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:N``}
      ${this.errorText?N` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:N``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};$e.styles=i`
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
  `,xe([at({type:String}),we("design:type",String)],$e.prototype,"name",void 0),xe([at({type:String}),we("design:type",String)],$e.prototype,"label",void 0),xe([at({type:String}),we("design:type",String)],$e.prototype,"infoText",void 0),xe([at({type:String}),we("design:type",String)],$e.prototype,"errorText",void 0),xe([at({type:String}),we("design:type",String)],$e.prototype,"warningText",void 0),xe([at({type:Boolean}),we("design:type",Boolean)],$e.prototype,"required",void 0),xe([at({type:Boolean}),we("design:type",Boolean)],$e.prototype,"disabled",void 0),xe([at({type:Boolean}),we("design:type",Boolean)],$e.prototype,"checked",void 0),xe([at({type:String}),we("design:type",String)],$e.prototype,"theme",void 0),xe([st("#inputElement"),we("design:type",Object)],$e.prototype,"inputElement",void 0),$e=xe([nt("nidoca-form-switch"),we("design:paramtypes",[])],$e);var Se=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ae=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return N`
      <nidoca-box theme="${le(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ae.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Se([at({type:dt,converter:String}),Re("design:type",Object)],Ae.prototype,"theme",void 0),Se([at({type:String,converter:String}),Re("design:type",String)],Ae.prototype,"label",void 0),Se([at({type:String,converter:String}),Re("design:type",String)],Ae.prototype,"emailLabel",void 0),Se([at({type:String,converter:String}),Re("design:type",String)],Ae.prototype,"buttonLabel",void 0),Se([st("#form"),Re("design:type",Object)],Ae.prototype,"formComponent",void 0),Ae=Se([nt("nidoca-form-newsletter")],Ae);var ke=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ee=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return N`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ee.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ke([at({type:dt,converter:String}),Oe("design:type",String)],Ee.prototype,"theme",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"label",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"emailLabel",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],Ee.prototype,"buttonLabel",void 0),ke([st("#form"),Oe("design:type",Object)],Ee.prototype,"formComponent",void 0),Ee=ke([nt("nidoca-form-reset-password")],Ee);var je=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Te=class extends ot{constructor(){super(...arguments),this.theme=dt.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return N`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.password}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.password}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.password}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${ft.getOposite(this.theme)}"
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
    `}changePassword(){var t,e,o,r,n;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(r=this.oldPasswordInputField)||void 0===r?void 0:r.getOutputData().value)==(null===(n=this.newPasswordInputField)||void 0===n?void 0:n.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};Te.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,je([at({type:dt,converter:String}),Pe("design:type",String)],Te.prototype,"theme",void 0),je([at({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"label",void 0),je([at({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"oldPasswordLabel",void 0),je([at({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"newPasswordLabel",void 0),je([at({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"repeatNewPasswordLabel",void 0),je([at({type:String,converter:String}),Pe("design:type",String)],Te.prototype,"buttonLabel",void 0),je([st("#form"),Pe("design:type",Object)],Te.prototype,"formComponent",void 0),je([st("#oldPassword"),Pe("design:type",Object)],Te.prototype,"oldPasswordInputField",void 0),je([st("#newPassword"),Pe("design:type",Object)],Te.prototype,"newPasswordInputField",void 0),je([st("#repeatNewPassword"),Pe("design:type",Object)],Te.prototype,"repeatNewPasswordInputField",void 0),je([at(),Pe("design:type",String)],Te.prototype,"errorMessageSamePasswordLabel",void 0),je([at(),Pe("design:type",String)],Te.prototype,"errorMessagePasswordDiffLabel",void 0),Te=je([nt("nidoca-form-change-password")],Te);var Ce=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let De=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return N`
      <nidoca-box theme="${le(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.password}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};De.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ce([at({type:dt,converter:String}),Be("design:type",Object)],De.prototype,"theme",void 0),Ce([at({type:String,converter:String}),Be("design:type",String)],De.prototype,"label",void 0),Ce([at({type:String,converter:String}),Be("design:type",String)],De.prototype,"emailLabel",void 0),Ce([at({type:String,converter:String}),Be("design:type",String)],De.prototype,"passwordLabel",void 0),Ce([at({type:String,converter:String}),Be("design:type",String)],De.prototype,"buttonLabel",void 0),Ce([st("#form"),Be("design:type",Object)],De.prototype,"formComponent",void 0),De=Ce([nt("nidoca-form-register")],De);var Ie=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Ne=class extends ot{constructor(){super(...arguments),this.code=""}render(){return N``}};Ne.styles=i``,Ie([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ne.prototype,"code",void 0),Ne=Ie([nt("nidoca-upload")],Ne);var _e=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Le=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let We=class extends ot{constructor(){super(),this.theme=ft.prototype.getParentTheme(this)||dt.background}render(){return N`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};We.styles=i`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,_e([at({type:dt,converter:String}),Le("design:type",String)],We.prototype,"theme",void 0),We=_e([nt("nidoca-hr"),Le("design:paramtypes",[])],We);var ze=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ue=class extends ot{constructor(){super(...arguments),this.text="",this.icon=""}render(){return N`
      <div class="container">
        ${this.icon?N` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:N``}
        ${this.text?N` <nidoca-text-button>${this.text}</nidoca-text-button>`:N``}
        <slot></slot>
      </div>
    `}};Ue.styles=i`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,ze([at({type:String}),Me("design:type",String)],Ue.prototype,"text",void 0),ze([at({type:String}),Me("design:type",String)],Ue.prototype,"icon",void 0),Ue=ze([nt("nidoca-menu-area")],Ue);var He=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},qe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ge=class extends ot{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1,this.theme=dt.surface}render(){return N`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?N` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:N``}
        ${this.text?N` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>`:N``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ge.styles=i`
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
  `,He([at({type:String}),qe("design:type",String)],Ge.prototype,"text",void 0),He([at({type:String}),qe("design:type",String)],Ge.prototype,"icon",void 0),He([at({type:Boolean}),qe("design:type",Boolean)],Ge.prototype,"selected",void 0),He([at({type:String}),qe("design:type",String)],Ge.prototype,"theme",void 0),Ge=He([nt("nidoca-menu-item")],Ge);var Qe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fe=class extends ot{constructor(){super(...arguments),this.theme=dt.surface}render(){return N` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach(((t,e)=>{if("theme"==e&&null!=this.slotElement){const t=this.slotElement.assignedElements();for(let e=0;e<t.length;e++){const o=t[e];o instanceof Ge&&(o.theme=this.theme)}}}))}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];if(r instanceof Ge){const e=r.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?r.selected=!0:r.selected=!1)}}}}))}};Fe.styles=i`
    :host,
    slot {
      display: block;
    }
  `,Qe([at({type:String}),Ve("design:type",String)],Fe.prototype,"theme",void 0),Qe([st("#slotElement"),Ve("design:type",Object)],Fe.prototype,"slotElement",void 0),Fe=Qe([nt("nidoca-menu")],Fe);var Ke=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Je=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ye=class extends ot{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return N`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,r,n,i){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(r).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(i).concat(";")}};Ye.styles=i`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Ke([at({type:String}),Je("design:type",String)],Ye.prototype,"height",void 0),Ke([at({type:String}),Je("design:type",String)],Ye.prototype,"width",void 0),Ke([at({type:String}),Je("design:type",String)],Ye.prototype,"left",void 0),Ke([at({type:String}),Je("design:type",String)],Ye.prototype,"top",void 0),Ke([at({type:String}),Je("design:type",String)],Ye.prototype,"right",void 0),Ke([at({type:String}),Je("design:type",String)],Ye.prototype,"bottom",void 0),Ye=Ke([nt("nidoca-layout-floating")],Ye);var Xe=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Ze=class extends ot{constructor(){super(...arguments),this.theme=dt.background}render(){return N`
      ${ft.getStyle(this.theme)}
      <slot></slot>
    `}};Ze.styles=i`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,Xe([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ze.prototype,"theme",void 0),Ze=Xe([nt("nidoca-container")],Ze);var to=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let oo=class extends ot{constructor(){super(),this.hideSidebox=!0,this.theme=ft.prototype.getParentTheme(this)||dt.background}render(){return N` <style>
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
      ${this.hideSidebox?N``:N` <slot class="sidebox" name="sidebox"></slot>`}`}};oo.styles=i`
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
  `,to([at({type:dt,converter:String}),eo("design:type",String)],oo.prototype,"theme",void 0),to([at({type:Boolean,converter:String}),eo("design:type",Boolean)],oo.prototype,"hideSidebox",void 0),oo=to([nt("nidoca-split-screen"),eo("design:paramtypes",[])],oo);var ro=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},no=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let io=class extends ot{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return N`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,r){return new(o||(o=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};io.styles=i`
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
  `,ro([at({type:String}),no("design:type",String)],io.prototype,"icon",void 0),ro([at({type:Boolean}),no("design:type",Boolean)],io.prototype,"clickable",void 0),ro([at({type:Boolean}),no("design:type",Boolean)],io.prototype,"deactivated",void 0),ro([at({type:String}),no("design:type",String)],io.prototype,"primaryText",void 0),io=ro([nt("nidoca-icon")],io);var ao=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},so=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class lo{}lo.NONE="NONE",lo.DEFAULT_SHADOW="DEFAULT_SHADOW",lo.SHADOW_1="SHADOW_1",lo.SHADOW_2="SHADOW_2",lo.SHADOW_3="SHADOW_3";let co=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.shadowType=lo.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return N`
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
    `}clicked(){return function(t,e,o,r){return new(o||(o=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};co.styles=i`
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
  `,ao([at({type:String}),so("design:type",String)],co.prototype,"theme",void 0),ao([at({type:Object}),so("design:type",lo)],co.prototype,"shadowType",void 0),ao([at({type:String}),so("design:type",String)],co.prototype,"icon",void 0),ao([at({type:Boolean}),so("design:type",Boolean)],co.prototype,"clickable",void 0),ao([at({type:Boolean}),so("design:type",Boolean)],co.prototype,"deactivated",void 0),co=ao([nt("nidoca-icon-extended")],co);var po=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let ho=class extends ot{render(){return N`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};ho.styles=i`
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
  `,po([st("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],ho.prototype,"rippleContainerElement",void 0),ho=po([nt("nidoca-ripple")],ho);var fo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},uo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let yo=class extends ot{constructor(){super(...arguments),this.src="",this.width="auto",this.height="auto"}render(){return this.src?N`<img width="${this.width}" height="${this.height}" src="${this.src}" />`:N``}};yo.styles=i`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,fo([at({type:String}),uo("design:type",String)],yo.prototype,"src",void 0),fo([at({type:String}),uo("design:type",String)],yo.prototype,"width",void 0),fo([at({type:String}),uo("design:type",String)],yo.prototype,"height",void 0),yo=fo([nt("nidoca-img")],yo);let mo=class extends yo{render(){return N`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}static example(t=""){return N`<nidoca-img-round
      width="64px"
      width="64px"
      slot="${t}"
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QCURXhpZgAASUkqAAgAAAACADEBAgAHAAAAJgAAAGmHBAABAAAALgAAAAAAAABHb29nbGUAAAIAAJAHAAQAAAAwMjIwhpIHAEAAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gAtQ29udmVydGVkIGZyb20gIFdlYlAgdG8gSlBHIHVzaW5nIGV6Z2lmLmNvbf/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAGAAYAMBEQACEQEDEQH/xAAdAAACAgMBAQEAAAAAAAAAAAAEBwMGBQgJAQIA/8QAPBAAAQMDAwIEAwYDBgcAAAAAAQIDBAUGEQAHIRIxCBNBURQiYSMycYGRoQkVFjNCUmJywSRTkqKx0fH/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAJhEAAgICAwACAQQDAAAAAAAAAAECEQQhAxIxBUFRExQiI0Jhcv/aAAwDAQACEQMRAD8A3lbbJOkECUI47ahCZts+2oQBue6aDY1JRVrlmrZ89XlRIrDReky3vRtptPKlc/gBySNBuhkr0VSRc1+1hsOfCwLUZfQCGOlM2cE+7ij9khfukBePc6zyyTqx+N+2yu1Ktbj0v7SFdlYc74W6ttSf+kIA/bVP7rZo/Y8X4B6PvPedNdVCuNEKrIxgodYDDnr2eR6+3Uk9u+njkWymfxqq0NG2Lvod4NLVRlLj1BhIU/TpS0h1Kf8AGkg4cR/nSSPfGtCdnIkqdGXPW53OdWCkLqM49dMlRCBbRx76dKiArrRB+7++iTwMQ3j8tUkCW28EEjRSsh7PqUKh0qXWqhnyIbZX0g8rV/dQPqTgfnpZ6QyjYuqFbk6rVc39dykv1x8FMVI+5Aa9END09yfU5PrrmybO/i4yqywriuN/e9e2q2jYjE1IZbcb7Y0qiixC6uOO6055raevGcjtjTJDVZV6fdEiJVmX1SlsTIyguJLbOFMuf7pPZSTwoZBHbDKTs5uViatI2btWvN3ZbMSuAJS+ctSm09m3h95I+nOR9FDXVg7PPy/i9h60Ad+dXJAIlsn8dQgM4zn+7++oQISnVaIGJbAydNFWQr98tl2HTIfmEpkzUqLfoooBIz+uqufSNmMth0SB0sozjKRwNc5nU7tBsqAyhHX3xqNDLloqtRb61qRnv66SqZugxd1v/iI5j46epSk579sf+9BmiK+xH3I5JhTi193GeffVLlsjpj08MN2OTpNStt+QC3MY89pJGB5jeBwfcoP/AGa6mLKzzPyWPTtD0W1jvroHMtA62wMaPoAdaBoEJEN9RAzjOqUMFoHrp4kMJc8dt+bSGljP268H2+XP+2s+Q9GzFaszbCE4Ax21gOkSPR1vIKEfrpmDqVK4GHmGXGery3W/XGcarfp0eLSKS/8ADyIzqV8rSorUn/Dn/wCaBpvQmNwaW2y6JTzflMur6Q46QgD9TqtwsqbMh4daihrcajuQJbMlh+d8Ol1lwKQrqQtOMj1yoZGtOM2mcj5K2rRt+4nJOPQ660H2PPU7pg60899MNF2DOIx66L2Mfmk/MOdUjBSE8d9QlWYi5vKcaaeQVlEGUC8oJBAHSoKSrnKTyO41lyWb8bga2HrddYgqlss+asJJSjqx1H0Gecaxo319CB3+3DvuwLVXULn3todgzX0FTLTbZkPFCR1fYxUhS3iBnKu2M9vUlsYJ7EJtD4lL0vG6KfbVU3JvO4G63g0+bMtxiHFlpBUCWj/aITwo854TqGmGkObxMVK6tmtsqpekJXxLiYiX+pnhTGABnHPV+2hVFnbstHMap7oSd0LlYnX7LvGovzXfKixIdXajNpUf9fyJAIIzwPfTxS/JznkOQ8/Cfd8Ni/5s6xJNdpr7MF4tRaikZakIBUy4kj7M/MCPz01qD0Ol+r6jp9s9PuOsbO2ZXbykrfrtSpDMucpQGetY6k5I7/KR+nproY9v04OWv79Fkc76uKQV3uNH6IfbSOQc6pGCUJ476hDA3AU0ll+BBjoL1xyENkuA+WlaW8ElXoSE8H3GNZslHexa5+L/AJMnF+eGx9U6xIZOhRVvZHbhqsV6qHb+BUKvcLHw86qSXXVyXGcf2JUVZDecEoGASlOe2mo0ca7MrO3XhZtSgX5Au6q1kOJpiein06GwWWWEZJCDkk9IKj8owk+2gvS6ceqLz4nYgqG20iMmM1JS91NLadT1JW0oYXn8j++hyx/A3Ar9OeFG2Rp1Nmyv6LuZ6E8l4h6MQh5sL9sKHGPprNsZYqTtIYNFtyRY1L/mEtxT81OCqUcY/LA0E3Ys+JRTOktNimn0SlwMgpjU+M0Me4bSD/416SCpKjyE3/Js8cOTnRFYM72GigH2j01SNZOjg6KA3SPqTHblRnYrycodT0nVWRGzTjZPXRXqOSmSpg8+Uopz74JH+2sSVHRUrC7hqMWnU12RIWEobSVqJPYaiSN+M97FRZcms3Zdib1rrKYlEp46YKFuKbMkkEFzpHOMds8ZOfTS/ZtyEktFd393vm0mgxLZNDZp9Wq0SpS6SwXviUupjMlasrSnhZHZICgfQnGmkuyKINQ2aXWHfje5dSpdwP0+NRag3GSmaocCY6FEhakjAyElIB+96HOBrO4lyyWhiXJWxM+BgRHfMRUHGY2e2epaQP3I0qWyZMqjZ0pqMdmPILLHDTSUttj2SkAAftr0MfDxEpbYArUCQL0CH5HpqoWwhAznUAmyQZPro+h88K7Um0xrlUlaxmY38Qj6qHyqH7D9dZeeNHSxpXoCqkOPVZSBMSHGYqy6plXKHigFQCh7ZxrJs6cZV4LPbe87v3GvW6BD27mO0GmShEiVeRKaYjrfQnlttsZcUkZA8wAJ6sjPGdFIuhJf5MqO+MS9YstiqwNqKIup0Fl9NHmSZyXEsJUSl0dPPdH0I45Gnb0dGMuBxNMGod5wLgjzbjtG26RSI0jLrkKSEyPMIIBQlKUhWfVJSMjgHk6oZl5HFPRfdtaS/U947Ls2Irzv5hX4CnMdg0hwOrV+SEEn20kdszZUv6DqJUV+ZNfXyQVlWfodegj4eXa2Aq1AkC9Ah4nVQhKnRQUEDjOnSsK8MZc9Fl1e3narTEZn0t4OtJ/xoH9ojP1T+hA1myI6NGM6ZRKRcDlVSFusJDpCg96EEfeQR+ffWTodVT/2e0OSzbsRUaMrDDkcqRjhP1wPT9dRxLIif3c2vgXLVnriTWJ8YdAeaaDhWtSvRPSTgfiBpGauO/s093Yep1pS+ikIddbUTJcSv5+lxI+ZPpg5yD+A0HGyrn5KNgv4bmy9brVXf8U94RZEWkNxXqfaMN0dPnOOHokykj/lpCS0hXqVOHsBnRj4/wBs42Rk6N7ySvqWruo5Oul4ZKshX31GAHc9NAh4nVdFdkqdRDI8q9Xott0Gp3TctWjUukUeMuXOmSVhLbDKQSVEk/Tt3JONOhokPhw3gtHfXaSkbmWZJSuDVVPBxgrSp2I8hxSVMugfdWkdPHsUkcEHQlsbt1Jb92XoV1Fc+kzjRKmru60nLTvsFoyP1Tg8n3xqp8aHWRQh7ngbxbVNNu1Wx5VepsdwL+PovVLbSn6tJ6XkAeuUEDB5ONK+NGvjy/ya/blb73qme5UmdpL9VEjx1IjzE0dz4dxfHKlYCEgEEcfj2xqiUTdDKRqNe9fue7pFYuK7YYolMZ65PwTnT5q1JBw2npVlAKlZJHJHH10saEm+y2dPPAdcEKD4UNrbWr9aZjVGpwXDS2ZboQZCOtS/Lbz3KUk8d8DWqGjjv02LkU+TGJS42R9ccavsBj199MxSBz01ErFsjS4fUd9M1YtWYHdHdXbXYi1HL53buaPRYCepMZk/PJmuAZ8thofM4rtwBgZySBzqpqmA5YeLvx83T4i6b/RtFtxVtWAX1SU0ZxQcl1RKFfZvS1AYbQFAKDaCR1clSsDDJFovvCl4tL58IN9P1W34ztcs2tqCKxQC6W0u47SGVYKW305IBIwpJ6SOElMIdkdhvF7sJ4kaY0/t1esf+bFHU/QZ+I1Sj8ZOWVH5wB/fbK0f5tCheqHFnOlaCn1FNvxtxt1WbErVQrqKlS3FtDqkUOQY0p9wnpQjAylZKiB8yT30koWh1zUcsry8IW8s3dehbWXVX6YbfqkZyrVSuQFqV8FDS6OtDqFBPS+QpKUp56lKynhKtKuCi5ZLaD/GlvDR7x8OVLpNux4FFiWXue7b1qwIJKXY9KgUtCUrK85UvzHRlfBJV30yj1KrTFDs3/Ek8VOzwZhN30u66U0Og0+40mYkp7YDpIeTx/nx9NMmQ3f2Q/i3bPX+yqnb822qxqsjCWqhTkOSoD30OB5jWOOCFDvyNED8Nq7N3m2P3NDZ283htauKdPShmPPR56j7eWSFg8diBolDVOhD+K7x87feHYy7FsIU+9Nx8BK4aXiYFHX7yloOXHMnAZQQfVRTxm62x6OUu6m6187sXW/e25F0S7luORnDksgNRWhz5bTScIbRyCEJAAz699DqLRQYMqQ7OS5JdLq+kICj6Adh+A0pYZnzvL5OoiAig1HltVKHLdhyWlBxp1pZSpCx6gpIIP4HUIPDb7x7+MbbdDFNoO9VUqUFHCWa221VAQOAnrkJU4B9AofTUohbNwP4mviqv2k06h1j+loqabKMvz4VMWhclfSUp8zqdUn5eokdITyec8aWgUhT3X4wd+7nnTZsm5WKe7UEtIkmFDQ35qW2y2kHIPoSf9RJ0W2FJCbqFSnVN5cifKdfdccU4pS1k5Ue5/Hgc6rY3gHoEPvTkPtl52O4l+O4tp1tQUhaFFJSR6gjnOgQ/9k="
    ></nidoca-img-round>`}};mo.styles=i`
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
  `,mo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-img-round")],mo);var go=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let bo=class extends ot{constructor(){super(...arguments),this.src=""}render(){return N`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};bo.styles=i``,go([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],bo.prototype,"src",void 0),bo=go([nt("nidoca-movie")],bo);var vo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},xo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wo=class extends ot{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return N`
      <nidoca-form-text
        theme="${le(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${ce.number}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};wo.styles=i`
    :host {
      display: block;
      width: 100%;
    }
  `,vo([at({type:dt,converter:String}),xo("design:type",Object)],wo.prototype,"theme",void 0),vo([at({type:String}),xo("design:type",String)],wo.prototype,"label",void 0),vo([at({type:String}),xo("design:type",String)],wo.prototype,"placeholder",void 0),vo([at({type:String}),xo("design:type",String)],wo.prototype,"name",void 0),vo([at({type:Number}),xo("design:type",Number)],wo.prototype,"min",void 0),vo([at({type:Number}),xo("design:type",Number)],wo.prototype,"max",void 0),vo([at({type:String}),xo("design:type",String)],wo.prototype,"errorText",void 0),vo([st("#inputfield"),xo("design:type",Object)],wo.prototype,"inputfield",void 0),wo=vo([nt("nidoca-form-captcha")],wo);var $o=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},So=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ro=class extends ot{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return N`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};Ro.styles=i`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,$o([at({type:String}),So("design:type",String)],Ro.prototype,"text",void 0),$o([at({type:String}),So("design:type",String)],Ro.prototype,"href",void 0),$o([at({type:String}),So("design:type",String)],Ro.prototype,"targetType",void 0),Ro=$o([nt("nidoca-link")],Ro);var Ao=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oo=class extends ot{constructor(){super(...arguments),this.theme=dt.surface,this.primaryText="",this.secondaryText="",this.selected=!1}render(){return N`
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
          ${this.primaryText?N` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`:N``}
          <slot></slot>
          ${this.secondaryText?N` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>`:N``}
          <slot name="secondary"></slot>
        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `}switchSelected(){this.selected=Boolean(!this.selected),this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(t=""){return N`<nidoca-list-item slot="${t}" primaryText="List Item" secondaryText="List Item Secondary Text">
      ${mo.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};Oo.styles=i`
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
  `,Ao([at({type:dt,converter:String}),ko("design:type",String)],Oo.prototype,"theme",void 0),Ao([at({type:String}),ko("design:type",String)],Oo.prototype,"primaryText",void 0),Ao([at({type:String}),ko("design:type",String)],Oo.prototype,"secondaryText",void 0),Ao([at({type:Boolean}),ko("design:type",Boolean)],Oo.prototype,"selected",void 0),Oo=Ao([nt("nidoca-list-item")],Oo);var Eo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Po=class extends ot{constructor(){super(...arguments),this.theme=dt.surface,this.multiselect=!1}updated(t){super.updated(t),t.forEach(((t,e)=>{"theme"==e&&this.getItems().forEach((t=>{t.theme=this.theme}))}))}render(){return N`
      <slot
        @nidoca-event-list-item-clicked="${t=>{this.multiselect||(this.unselectAll(),t.target.selected=!0)}}"
        id="slotElement"
      ></slot>
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof Oo&&t.push(r)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof Oo&&r.selected&&t.push(r)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let r=0;r<e.length;r++){const n=e[r];n instanceof Oo&&(n.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}static example(){return N`<nidoca-list theme="surface">
      ${Bo.example()} ${Oo.example()} ${Oo.example()} ${Oo.example()}
    </nidoca-list>`}};Po.styles=i`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Eo([at({type:dt,converter:String}),jo("design:type",String)],Po.prototype,"theme",void 0),Eo([at({type:Boolean}),jo("design:type",Boolean)],Po.prototype,"multiselect",void 0),Eo([st("#slotElement"),jo("design:type",Object)],Po.prototype,"slotElement",void 0),Po=Eo([nt("nidoca-list")],Po);var To=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Co=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Bo=class extends ot{constructor(){super(...arguments),this.theme=dt.surface,this.text=""}render(){return N`
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
    `}static example(){return N`<nidoca-list-section>Section A</nidoca-list-section>`}};Bo.styles=i`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,To([at({type:dt,converter:String}),Co("design:type",String)],Bo.prototype,"theme",void 0),To([at({type:String}),Co("design:type",String)],Bo.prototype,"text",void 0),Bo=To([nt("nidoca-list-section")],Bo);var Do=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let No=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.prominent=!1}render(){return N`
      ${ft.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?N` <slot class="prominent" name="prominent"></slot>`:N``}
    `}};No.styles=i`
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
  `,Do([at({type:String,converter:String}),Io("design:type",String)],No.prototype,"theme",void 0),Do([at({type:Boolean}),Io("design:type",Boolean)],No.prototype,"prominent",void 0),No=Do([nt("nidoca-top-app-bar")],No);var _o=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Lo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wo=class extends ot{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new io],["row 2",new io]],this.theme=dt.background}render(){return N`
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
            ${ne([this.headers],(()=>N` ${oe(this.headers,(t=>N` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${ne([this.rows],(()=>N`
                  ${oe(this.rows,(t=>N`
                        <tr>
                          ${oe(t,(t=>N` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Wo.styles=i`
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
  `,_o([at({type:Array}),Lo("design:type",Array)],Wo.prototype,"headers",void 0),_o([at({type:Array}),Lo("design:type",Array)],Wo.prototype,"rows",void 0),_o([at({type:dt,converter:String}),Lo("design:type",String)],Wo.prototype,"theme",void 0),Wo=_o([nt("nidoca-table")],Wo);var zo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Mo=class extends ot{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?N` <slot></slot>`:N``}};Mo.styles=i`
    :host,
    slot {
      display: block;
    }
  `,zo([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Mo.prototype,"selected",void 0),Mo=zo([nt("nidoca-tab-content")],Mo);var Uo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ho=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qo=class extends ot{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=dt.surface}render(){return N`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};qo.styles=i`
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
  `,Uo([at({type:Boolean}),Ho("design:type",Boolean)],qo.prototype,"selected",void 0),Uo([at({type:String}),Ho("design:type",String)],qo.prototype,"text",void 0),Uo([at({type:String}),Ho("design:type",String)],qo.prototype,"theme",void 0),qo=Uo([nt("nidoca-tab")],qo);var Go=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Qo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vo=class extends ot{constructor(){super(...arguments),this.theme=dt.surface,this.tabIndex=0}render(){return N`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let r=0;r<t.length;r++){const n=t[r];n instanceof qo&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==o?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];r instanceof Mo&&(this.tabIndex==t?r.selected=!0:r.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const r=e[o];if(r instanceof qo&&r==t){this.tabIndex=o;break}}}}};Vo.styles=i`
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
  `,Go([st("#tabSlot"),Qo("design:type",Object)],Vo.prototype,"tabSlot",void 0),Go([st("#tabContentSlot"),Qo("design:type",Object)],Vo.prototype,"tabContentSlot",void 0),Go([at({type:String}),Qo("design:type",String)],Vo.prototype,"theme",void 0),Go([at({type:Number}),Qo("design:type",Number)],Vo.prototype,"tabIndex",void 0),Vo=Go([nt("nidoca-tabs")],Vo);var Fo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Jo=class extends ot{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return N`
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
    `}};Jo.styles=i`
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
  `,Fo([at({type:Boolean}),Ko("design:type",Boolean)],Jo.prototype,"hideLeft",void 0),Fo([at({type:Boolean}),Ko("design:type",Boolean)],Jo.prototype,"prominent",void 0),Fo([st("#header"),Ko("design:type",Object)],Jo.prototype,"headerElement",void 0),Fo([st("#left"),Ko("design:type",Object)],Jo.prototype,"leftElement",void 0),Fo([st("#content"),Ko("design:type",Object)],Jo.prototype,"contentElement",void 0),Jo=Fo([nt("nidoca-template"),Ko("design:paramtypes",[])],Jo);var Yo=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Xo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zo=class extends ot{firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((t=>{this.videoElement&&(this.videoElement.srcObject=t)}))}render(){return N`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};Zo.styles=i``,Yo([st("#video"),Xo("design:type",Object)],Zo.prototype,"videoElement",void 0),Yo([st("#canvas"),Xo("design:type",Object)],Zo.prototype,"canvasElement",void 0),Yo([st("#click-photo"),Xo("design:type",Object)],Zo.prototype,"buttonElement",void 0),Zo=Yo([nt("nidoca-video")],Zo);var tr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},er=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let or=class extends ot{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return N`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((t=>N`${t}`))}
    `}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"src"==e&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((t=>{const e=document.createElement("canvas");e.width=t[0],e.height=t[1];const o=e.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,t[0],t[1]),e.toBlob((t=>{}),"image/webp")),this.canvasElements.push(e)})),this.requestUpdate()})}};or.styles=i``,tr([at({type:String}),er("design:type",String)],or.prototype,"src",void 0),tr([st("#img"),er("design:type",Object)],or.prototype,"img",void 0),or=tr([nt("nidoca-svg-2-webp")],or);var rr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},nr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ir=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.text=""}render(){return N` <slot>${this.text}</slot>`}};ir.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,rr([at({type:dt,converter:String}),nr("design:type",Object)],ir.prototype,"theme",void 0),rr([at({type:String}),nr("design:type",String)],ir.prototype,"text",void 0),ir=rr([nt("nidoca-text")],ir);let ar=class extends ir{render(){return N`${super.render()}`}};ar.styles=i`
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
  `,ar=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-button")],ar);let sr=class extends ir{};sr.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,sr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-overline")],sr);let lr=class extends ir{render(){return N` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};lr.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,lr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-body")],lr);let cr=class extends ir{render(){return N` <slot style="color: var(--app-color-subtext-${this.theme});">${this.text}</slot>`}};cr.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,cr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-caption")],cr);let dr=class extends cr{constructor(){super(),this.style.color="red"}};dr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-error"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],dr);let pr=class extends cr{constructor(){super(),this.style.color="green"}};pr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-success"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],pr);let hr=class extends cr{constructor(){super(),this.style.color="yellow"}};hr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-warning"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],hr);let fr=class extends cr{constructor(){super(),this.style.color="blue"}};fr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-info"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],fr);let ur=class extends ir{};ur.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.25em;
    }
  `,ur=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h1")],ur);let yr=class extends ir{};yr.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,yr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h2")],yr);let mr=class extends ir{};mr.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,mr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h3")],mr);let gr=class extends ir{};gr.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,gr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h4")],gr);let br=class extends ir{};br.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,br=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h5")],br);let vr=class extends ir{};vr.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,vr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h6")],vr);var xr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},wr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $r=class extends ot{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=dt.surface}render(){return N`
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
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,r){return new(o||(o=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};$r.styles=i`
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
  `,xr([at({type:String}),wr("design:type",String)],$r.prototype,"value",void 0),xr([at({type:String}),wr("design:type",String)],$r.prototype,"placeholder",void 0),xr([at({type:Boolean}),wr("design:type",Boolean)],$r.prototype,"disabled",void 0),xr([st("#inputElement"),wr("design:type",Object)],$r.prototype,"inputElement",void 0),xr([at({type:dt,converter:String}),wr("design:type",String)],$r.prototype,"theme",void 0),$r=xr([nt("nidoca-search-bar")],$r);var Sr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Rr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ar{}Ar.CENTER="CENTER",Ar.LEFT="LEFT",Ar.RIGHT="RIGHT",Ar.TOP="TOP",Ar.BOTTOM="BOTTOM",Ar.SLIDE_CENTER="SLIDE_CENTER",Ar.SLIDE_LEFT="SLIDE_LEFT",Ar.SLIDE_RIGHT="SLIDE_RIGHT",Ar.SLIDE_TOP="SLIDE_TOP",Ar.SLIDE_BOTTOM="SLIDE_BOTTOM";let kr=class extends ot{constructor(){super(...arguments),this.transitionType=Ar.CENTER,this.duration=.5}render(){return N` <div class="${le(this.transitionType)}"><slot></slot></div> `}};kr.styles=i`
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
  `,Sr([at({type:String}),Rr("design:type",String)],kr.prototype,"transitionType",void 0),Sr([at({type:Number}),Rr("design:type",Number)],kr.prototype,"duration",void 0),kr=Sr([nt("nidoca-transition")],kr);var Or=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Er=class extends ot{constructor(){super(...arguments),this.show=!1}render(){return this.show?N`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Ar.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:N``}};Er.styles=i`
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
  `,Or([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Er.prototype,"show",void 0),Er=Or([nt("nidoca-dialog")],Er);var jr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Pr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Tr=class extends ot{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return N`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Wt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Wt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};Tr.styles=i``,jr([at({type:Boolean}),Pr("design:type",Boolean)],Tr.prototype,"show",void 0),jr([at({type:String}),Pr("design:type",String)],Tr.prototype,"title",void 0),jr([at({type:String}),Pr("design:type",String)],Tr.prototype,"description",void 0),jr([at({type:String}),Pr("design:type",String)],Tr.prototype,"labelButtonYes",void 0),jr([at({type:String}),Pr("design:type",String)],Tr.prototype,"labelButtonNo",void 0),Tr=jr([nt("nidoca-dialog-decision")],Tr);var Cr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Br=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Dr{}Dr.ROUND="ROUND",Dr.CLICKABLE="CLICKABLE",Dr.ZOOM_WRAPPED="ZOOM_WRAPPED",Dr.FULL_WIDTH="FULL_WIDTH";class Ir extends ot{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[Dr.CLICKABLE,Dr.FULL_WIDTH]}render(){return N`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}}Ir.styles=i`
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
  `,Cr([at({type:String}),Br("design:type",String)],Ir.prototype,"src",void 0),Cr([at({type:String}),Br("design:type",String)],Ir.prototype,"width",void 0),Cr([at({type:String}),Br("design:type",String)],Ir.prototype,"height",void 0),Cr([at({type:Dr,converter:Array}),Br("design:type",Array)],Ir.prototype,"richMediaProperties",void 0);var Nr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let _r=class extends ot{constructor(){super(...arguments),this.imgSrc=""}render(){return N`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[Dr.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};_r.styles=i`
    :host {
      display: block;
    }
  `,Nr([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],_r.prototype,"imgSrc",void 0),_r=Nr([nt("nidoca-avatar")],_r);var Lr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Wr=class extends ot{constructor(){super(...arguments),this.theme=dt.surface}render(){return N`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Wr.styles=i`
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
  `,Lr([at({type:dt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Wr.prototype,"theme",void 0),Wr=Lr([nt("nidoca-card")],Wr);let zr=class extends ot{render(){return N`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};zr.styles=i`
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
  `,zr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-gallery")],zr);let Mr=class extends ot{render(){return N`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};Mr.styles=i`
    :host {
      display: none;
    }
  `,Mr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-print")],Mr);let Ur=class extends ot{constructor(){super(...arguments),this.flexBasis="auto"}render(){return N`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,o=e.offsetWidth,r=e.assignedElements(),n=r.length,i=[];let a=0;for(let t=0;t<n;t++){const e=r[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)i.push(e);else{const e=t.toUpperCase();a+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/n),this.flexBasis=String(s/i.length)+"%",this.requestUpdate()}};Ur.styles=i`
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
  `,Ur=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-section")],Ur);var Hr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},qr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Gr=class extends ot{render(){return N` <slot></slot>`}};Gr.styles=i`
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
  `,Gr=Hr([nt("nidoca-dashboard")],Gr);let Qr=class extends ot{render(){return N` <slot></slot>`}};Qr.styles=i`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,Qr=Hr([nt("nidoca-dashboard-box-25")],Qr);let Vr=class extends ot{render(){return N` <slot></slot>`}};Vr.styles=i`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,Vr=Hr([nt("nidoca-dashboard-box-50")],Vr);let Fr=class extends ot{render(){return N` <slot></slot>`}};Fr.styles=i`
    :host {
      width: 100%;
      display: block;
    }
  `,Fr=Hr([nt("nidoca-dashboard-box-100")],Fr);let Kr=class extends ot{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return N`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Kr.styles=i`
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
  `,Hr([at({type:Boolean}),qr("design:type",Boolean)],Kr.prototype,"clickable",void 0),Hr([at({type:String}),qr("design:type",String)],Kr.prototype,"title",void 0),Kr=Hr([nt("nidoca-dashboard-card")],Kr);var Jr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Yr=class extends ot{constructor(){super(...arguments),this.theme=dt.transparent}render(){return N`
      ${ft.getStyle(this.theme)}
      <slot></slot>
    `}};Yr.styles=i`
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
  `,Jr([at({type:dt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Yr.prototype,"theme",void 0),Yr=Jr([nt("nidoca-box")],Yr);var Xr=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Zr=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let tn=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.overline="",this.title="",this.summary="",this.text=""}render(){return N`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?N` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:N``}
        ${this.title?N` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:N``}
        ${this.summary?N`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:N``}
        ${this.text?N` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:N``}
        <slot></slot>
      </div>
    `}};tn.styles=i`
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
  `,Xr([at({type:dt,converter:String}),Zr("design:type",String)],tn.prototype,"theme",void 0),Xr([at({type:String}),Zr("design:type",String)],tn.prototype,"overline",void 0),Xr([at({type:String}),Zr("design:type",String)],tn.prototype,"title",void 0),Xr([at({type:String}),Zr("design:type",String)],tn.prototype,"summary",void 0),Xr([at({type:String}),Zr("design:type",String)],tn.prototype,"text",void 0),tn=Xr([nt("nidoca-article")],tn);var en=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},on=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let rn=class extends ot{constructor(){super(...arguments),this.theme=dt.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return N`
      <nidoca-box theme="${le(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${ce.text}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.email}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ce.text}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${ft.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Wt.contained}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};rn.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,en([at({type:dt,converter:String}),on("design:type",Object)],rn.prototype,"theme",void 0),en([at({type:String,converter:String}),on("design:type",String)],rn.prototype,"label",void 0),en([at({type:String,converter:String}),on("design:type",String)],rn.prototype,"nameLabel",void 0),en([at({type:String,converter:String}),on("design:type",String)],rn.prototype,"emailLabel",void 0),en([at({type:String,converter:String}),on("design:type",String)],rn.prototype,"titleLabel",void 0),en([at({type:String,converter:String}),on("design:type",String)],rn.prototype,"messageLabel",void 0),en([at({type:String,converter:String}),on("design:type",String)],rn.prototype,"buttonLabel",void 0),en([st("#authenitcate-form"),on("design:type",Object)],rn.prototype,"formComponent",void 0),rn=en([nt("nidoca-form-contact")],rn);let nn=class extends ot{render(){return N`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};nn.styles=i`
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
  `,nn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-page-login")],nn);var an,sn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ln=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.anchor="anchor",t.page="page"}(an||(an={}));let cn=class extends ot{constructor(){super(...arguments),this.loggedIn=!1}updated(t){if(super.updated(t),t.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),t.has("route")&&this.root){for(let t=0;t<this.root.childs.length;t++){const e=this.root.childs[t];if(e.route==this.route){this.contentComponent=document.createElement(e.rootComponent);break}}this.requestUpdate()}}render(){var t;return this.loggedIn?N`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?N`${this.contentComponent}`:N``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(t=this.root)||void 0===t?void 0:t.childs.map((t=>N` <nidoca-menu-item
                        text="${t.name}"
                        @click="${()=>{this.routeTo(t)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:N` <nidoca-page-login
          @nidoca-form-login-submit="${t=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:t.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(t){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:t.route,bubbles:!0,composed:!0}))}};sn([at({type:Array}),ln("design:type",Object)],cn.prototype,"root",void 0),sn([at({type:Boolean}),ln("design:type",Boolean)],cn.prototype,"loggedIn",void 0),sn([at({type:String,converter:String}),ln("design:type",Object)],cn.prototype,"route",void 0),cn=sn([nt("nidoca-app")],cn);class dn{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return N``;const e=t.classWrapper;if(null==e)return N``;switch(this.propertyWrapper.getRenderType()){case ct.String:return N`
                    <nidoca-form-text .textType="${ce.text}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${e.instance[this.propertyWrapper.propertyName]}"
                                      @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case ct.Number:return N` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${ce.number}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case ct.Boolean:return N` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case ct.Class:return N` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${se.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(o.target.getOutputData().value),t.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case ct.Array:return N`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${se.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${e.instance[this.propertyWrapper.propertyName]}"
            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return N``}}getAsHtml(t){switch(this.propertyWrapper.getRenderType()){case ct.Boolean:return`${this.propertyWrapper.propertyName}\n`;case ct.Array:return"";default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case ct.Class:case ct.String:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case ct.Boolean:return`${this.propertyWrapper.propertyName}\n`;case ct.Array:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsAngular(t){switch(this.propertyWrapper.getRenderType()){case ct.Class:case ct.String:return`[${this.propertyWrapper.propertyName}]="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case ct.Array:return`[${this.propertyWrapper.propertyName}]="\${[]}"\n`;default:return`[${this.propertyWrapper.propertyName}]="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getRenderType()){case ct.Class:case ct.Array:return"";case ct.String:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getRenderType()){case ct.Array:return"";case ct.Class:case ct.String:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class pn{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`.trim()}getAsJavascript(){return`<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`.trim()}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`.trim()}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`.trim()}getAsAngular(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsAngular(this))).join("  ")}></${this.classWrapper.getTagName()}>\n`.trim()}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(N`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new dn(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var hn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},fn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let un=class extends ot{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new pn(this,new ht(this.element)),this.requestUpdate())}render(){var t,e,o,r,n,i,a,s;return this.element?N` <nidoca-section theme="primary">
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
              ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.hasProperties())?N`
                    <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                    ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((t=>N`${t.getInputElement(this.webcomponentGuiWrapper)}
                        <div class="paddingTopBottom"></div>`))}
                  `:N``}
              ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?N` <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

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
          <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`:N`Kein Element ausgewählt.`}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements()[0];o instanceof HTMLElement&&(this.element=o)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t.propertyWrapper.propertyName),o.push(t.propertyWrapper.getTypeName()),o.push(t.propertyWrapper.getConverterTypeName()),o.push(t.propertyWrapper.getRenderType()),e.push(o),o})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}};un.styles=i`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `,hn([at({type:Array}),fn("design:type",Array)],un.prototype,"customEventNames",void 0),hn([at({type:Object}),fn("design:type",Object)],un.prototype,"element",void 0),un=hn([nt("webcomponent-viewer")],un);var yn,mn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let gn=class extends ot{constructor(){super(...arguments),this.componentMap=new Map,this.value="",this.options=[]}render(){return N`
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
    `}slotChanged(t){const e=t.target.assignedElements(),o=e.length;for(let t=0;t<o;t++){const o=e[t];o instanceof HTMLElement&&(this.webcomponentViewer&&null==this.webcomponentViewer.element&&(this.webcomponentViewer.element=o,this.value=o.tagName),this.componentMap.set(o.tagName,o.cloneNode(!0)))}this.options=se.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};gn.styles=i`
    slot {
      display: none;
    }
  `,mn([st("#webcomponentViewer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type","function"==typeof(yn=void 0!==un&&un)?yn:Object)],gn.prototype,"webcomponentViewer",void 0),gn=mn([nt("webcomponent-viewer-container")],gn);let bn=class extends ot{render(){return N`<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${Po.example()} ${Oo.example()} ${Bo.example()} ${mo.example()}
        </webcomponent-viewer-container>
      </nidoca-section>
    </nidoca-container>`}};bn=function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-viewer")],bn)})();