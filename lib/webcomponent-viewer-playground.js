var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Nidoca } from ".";
let WebcomponentViewerPlayground = class WebcomponentViewerPlayground extends LitElement {
    constructor() {
        super(...arguments);
        this.elementName = "nidoca-tabs";
    }
    render() {
        return html `
      <nidoca-section>
        <nidoca-article
          title="Komponentenübersicht"
          text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-section>
        <webcomponent-viewer-container>
          ${Nidoca.getUniqueInstance().registeredElementNames.map((elementName) => html ` ${Nidoca.getUniqueInstance().registeredElementsMap.get(elementName)} `)}
        </webcomponent-viewer-container>
      </nidoca-section>
    `;
    }
};
WebcomponentViewerPlayground.styles = css ``;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], WebcomponentViewerPlayground.prototype, "elementName", void 0);
WebcomponentViewerPlayground = __decorate([
    customElement("webcomponent-viewer-playground")
], WebcomponentViewerPlayground);
export { WebcomponentViewerPlayground };
//# sourceMappingURL=webcomponent-viewer-playground.js.map