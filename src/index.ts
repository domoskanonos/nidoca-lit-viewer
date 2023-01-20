export * from "./webcomponent-viewer";
export * from "./webcomponent-viewer-container";
export * from "./nidoca-viewer";



//Custom Elements Methode überschreiben um alle CustomElements zu bekommen.
// Muss überarbeitet werden.

let original = customElements.define;
let customTags: any = [];


customElements.define = function () {


    console.log("custom elements hijacked", arguments);

    customTags.push({ tag: arguments[0], ctor: arguments[1] })

    //original.apply(customElements, arguments);
}

//setTimeout(() => { console.log(customTags); }, 1000)