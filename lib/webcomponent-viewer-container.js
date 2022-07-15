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
import { customElement, query } from "lit/decorators.js";
import { NidocaFormCombobox } from "@domoskanonos/nidoca-webcomponents/lib/nidoca-form-combobox";
import "@domoskanonos/nidoca-webcomponents/lib/nidoca-form-abstract-input-element";
import { WebcomponentViewer } from "./webcomponent-viewer";
let WebcomponentViewerContainer = class WebcomponentViewerContainer extends LitElement {
    constructor() {
        super(...arguments);
        this.componentMap = new Map();
        this.value = "";
        this.options = [];
    }
    render() {
        return html `
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${this.value}"
        .options="${this.options}"
        @input="${(event) => {
            const elementName = event.target.getOutputData().value;
            const element = this.componentMap.get(elementName);
            if (this.webcomponentViewer) {
                console.log(`change element: ${elementName}`);
                this.webcomponentViewer.element = element;
            }
        }}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer id="webcomponentViewer"></webcomponent-viewer>
      <slot @slotchange="${(event) => this.slotChanged(event)}"></slot>
    `;
    }
    slotChanged(event) {
        const slotElement = event.target;
        const elements = slotElement.assignedElements();
        const elementSize = elements.length;
        for (let index = 0; index < elementSize; index++) {
            const element = elements[index];
            if (element instanceof HTMLElement) {
                if (this.webcomponentViewer && this.webcomponentViewer.element == undefined) {
                    this.webcomponentViewer.element = element;
                    this.value = element.tagName;
                }
                this.componentMap.set(element.tagName, element.cloneNode(true));
            }
        }
        this.options = NidocaFormCombobox.stringArrayToOptions(Array.from(this.componentMap.keys()));
        this.requestUpdate();
    }
};
WebcomponentViewerContainer.styles = css `
    slot {
      display: none;
    }
  `;
__decorate([
    query("#webcomponentViewer"),
    __metadata("design:type", WebcomponentViewer)
], WebcomponentViewerContainer.prototype, "webcomponentViewer", void 0);
WebcomponentViewerContainer = __decorate([
    customElement("webcomponent-viewer-container")
], WebcomponentViewerContainer);
export { WebcomponentViewerContainer };
//# sourceMappingURL=webcomponent-viewer-container.js.map