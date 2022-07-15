var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";
import { WebcomponentWrapper as WebcomponentWrapper } from "./core/webcomponent-wrapper";
import { WebcomponentGuiWrapper as WebcomponentGuiWrapper } from "./core/webcomponent-gui-wrapper";
import { css } from "lit-element";
import "./core/property-gui-wrapper";
let WebcomponentViewer = class WebcomponentViewer extends LitElement {
    constructor() {
        super(...arguments);
        this.webcomponentGuiWrapper = null;
        this.customEventNames = [];
    }
    updated(_changedProperties) {
        if (_changedProperties.has("element") && this.element != undefined) {
            this.element.style.flexBasis = "auto";
            this.webcomponentGuiWrapper = new WebcomponentGuiWrapper(this, new WebcomponentWrapper(this.element));
            this.requestUpdate();
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return this.element
            ? html ` <nidoca-section theme="primary">
            <div>
              <nidoca-text-h2 class="paddingTopBottom">Tag</nidoca-text-h2>
              <nidoca-code
                >${this.webcomponentGuiWrapper ? this.webcomponentGuiWrapper.classWrapper.getHTMLTag() : ""}
              </nidoca-code>

              <div style="padding-top:var(--space-3);">
                <nidoca-section> ${this.element}</nidoca-section>
              </div>
            </div>

            <div style="padding-left:var(--space-3)">
              ${((_a = this.webcomponentGuiWrapper) === null || _a === void 0 ? void 0 : _a.hasProperties())
                ? html `
                    <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                    ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((prop) => {
                    return html `${prop.getInputElement(this.webcomponentGuiWrapper)}
                        <div class="paddingTopBottom"></div>`;
                })}
                  `
                : html ``}
              ${((_b = this.webcomponentGuiWrapper) === null || _b === void 0 ? void 0 : _b.classWrapper.hasSlots())
                ? html ` <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                    <nidoca-table
                      theme="surface"
                      .headers="${["name"]}"
                      .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                    >
                    </nidoca-table>`
                : html ``}
              ${this.customEventNames.length > 0
                ? html ` <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                    <nidoca-table
                      class="paddingTopBottom"
                      .headers="${["name"]}"
                      .rows="${this.toCustomEventRows(this.customEventNames)}"
                    >
                    </nidoca-table>`
                : html ``}
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
              <nidoca-code class="paddingTopBottom">${(_c = this.webcomponentGuiWrapper) === null || _c === void 0 ? void 0 : _c.getAsHtml()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${(_d = this.webcomponentGuiWrapper) === null || _d === void 0 ? void 0 : _d.getAsJavascript()} </nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${(_e = this.webcomponentGuiWrapper) === null || _e === void 0 ? void 0 : _e.getTypescript()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${(_f = this.webcomponentGuiWrapper) === null || _f === void 0 ? void 0 : _f.getAsLit()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${(_g = this.webcomponentGuiWrapper) === null || _g === void 0 ? void 0 : _g.getAsAngular()}</nidoca-code>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-hr></nidoca-hr>

          <nidoca-text-h2 class="paddingTopBottom">Attribute Übersicht</nidoca-text-h2>
          <nidoca-table
            class="paddingTopBottom"
            theme="surface"
            .headers="${["name", "type", "converter type", "render type"]}"
            .rows="${this.toAttributeRows((_h = this.webcomponentGuiWrapper) === null || _h === void 0 ? void 0 : _h.getPropertyGuiWrappers())}"
          >
          </nidoca-table>
          <slot @slotchange="${(event) => this.slotChanged(event)}"></slot>`
            : html `Kein Element ausgewählt.`;
    }
    slotChanged(event) {
        const slotElement = event.target;
        if (slotElement == undefined) {
            return;
        }
        const elements = slotElement.assignedElements();
        const element = elements[0];
        if (element instanceof HTMLElement) {
            this.element = element;
        }
    }
    toAttributeRows(arr) {
        const retval = [[]];
        if (arr) {
            arr.map((prop) => {
                const arr = [];
                arr.push(prop.propertyWrapper.propertyName);
                arr.push(prop.propertyWrapper.getTypeName());
                arr.push(prop.propertyWrapper.getConverterTypeName());
                arr.push(prop.propertyWrapper.getRenderType());
                retval.push(arr);
                return arr;
            });
        }
        return retval;
    }
    toSlotRows(arr) {
        const retval = [[]];
        if (arr) {
            arr.map((name) => {
                const arr = [];
                arr.push(name);
                retval.push(arr);
                return arr;
            });
        }
        return retval;
    }
    toCustomEventRows(arr) {
        const retval = [[]];
        if (arr) {
            arr.map((name) => {
                const arr = [];
                arr.push(name);
                retval.push(arr);
                return arr;
            });
        }
        return retval;
    }
};
WebcomponentViewer.styles = css `
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `;
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array)
], WebcomponentViewer.prototype, "customEventNames", void 0);
__decorate([
    property({ type: Object }),
    __metadata("design:type", Object)
], WebcomponentViewer.prototype, "element", void 0);
WebcomponentViewer = __decorate([
    customElement("webcomponent-viewer")
], WebcomponentViewer);
export { WebcomponentViewer };
//# sourceMappingURL=webcomponent-viewer.js.map