var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, html, LitElement } from "lit-element";
import { css } from "lit-element";
import { property } from "lit/decorators.js";
import { NidocaFormCombobox } from "@domoskanonos/nidoca-webcomponents";
import { ifDefined } from "lit/directives/if-defined.js";
let WebcomponentViewerContainer = class WebcomponentViewerContainer extends LitElement {
    constructor() {
        super(...arguments);
        this.componentMap = new Map();
        this.options = [];
    }
    render() {
        return html `
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${ifDefined(this.elementName)}"
        .options="${this.options}"
        @input="${(event) => {
            this.elementName = event.target.getOutputData().value;
        }}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer> ${this.componentMap.get(this.elementName ? this.elementName : "")} </webcomponent-viewer>
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
                if (this.elementName == undefined) {
                    this.elementName = element.tagName;
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
    property({ type: String }),
    __metadata("design:type", Object)
], WebcomponentViewerContainer.prototype, "elementName", void 0);
WebcomponentViewerContainer = __decorate([
    customElement("webcomponent-viewer-container")
], WebcomponentViewerContainer);
export { WebcomponentViewerContainer };
//# sourceMappingURL=webcomponent-viewer-container.js.map