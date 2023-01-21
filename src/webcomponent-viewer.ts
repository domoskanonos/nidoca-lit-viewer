import {html, LitElement, PropertyValues, TemplateResult, css} from "lit";
import {property, customElement} from "lit/decorators.js";
import {WebcomponentWrapper as WebcomponentWrapper} from "./core/webcomponent-wrapper";
import {WebcomponentGuiWrapper as WebcomponentGuiWrapper} from "./core/webcomponent-gui-wrapper";
import {PropertyGuiWrapper} from "./core/property-gui-wrapper";

@customElement("webcomponent-viewer")
export class WebcomponentViewer extends LitElement {
  static styles = css`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `;

  private webcomponentGuiWrapper: WebcomponentGuiWrapper | null = null;

  @property({type: Array})
  customEventNames: string[] = [];

  @property({type: Object})
  element: HTMLElement | undefined;

  updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has("element") && this.element != undefined) {
      this.element.style.flexBasis = "auto";
      this.webcomponentGuiWrapper = new WebcomponentGuiWrapper(this, new WebcomponentWrapper(this.element));
      this.requestUpdate();
    }
  }

  public render(): TemplateResult {
    return this.element
      ? html` <nidoca-section theme="primary">
            <div>
              <nidoca-text-h2 class="paddingTopBottom">Tag</nidoca-text-h2>
              <nidoca-code
                >${this.webcomponentGuiWrapper ? this.webcomponentGuiWrapper.webcomponentWrapper.getHTMLTag() : ""}
              </nidoca-code>

              <div style="padding-top:var(--space-3);">
                <nidoca-card style="padding:var(--space-4)" theme="primary"> ${this.element}</nidoca-card>
              </div>
            </div>

            <div style="padding-left:var(--space-3)">
              ${this.webcomponentGuiWrapper?.hasProperties()
                ? html`
                    <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                    ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((prop) => {
                      return html`${prop.getInputElement(this.webcomponentGuiWrapper)}
                        <div class="paddingTopBottom"></div>`;
                    })}
                  `
                : html``}
              ${this.webcomponentGuiWrapper?.webcomponentWrapper.hasSlots()
                ? html` <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                    <nidoca-table
                      theme="surface"
                      .headers="${["name"]}"
                      .rows="${this.toSlotRows(this.webcomponentGuiWrapper.webcomponentWrapper.getSlotNames())}"
                    >
                    </nidoca-table>`
                : html``}
              ${this.customEventNames.length > 0
                ? html` <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                    <nidoca-table
                      class="paddingTopBottom"
                      .headers="${["name"]}"
                      .rows="${this.toCustomEventRows(this.customEventNames)}"
                    >
                    </nidoca-table>`
                : html``}
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
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsHtml()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsJavascript()} </nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getTypescript()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsLit()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsAngular()}</nidoca-code>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-hr></nidoca-hr>

          <nidoca-text-h2 class="paddingTopBottom">Attribute Übersicht</nidoca-text-h2>
          <nidoca-table
            class="paddingTopBottom"
            theme="surface"
            .headers="${["name", "type", "converter type", "render type"]}"
            .rows="${this.toAttributeRows(this.webcomponentGuiWrapper?.getPropertyGuiWrappers())}"
          >
          </nidoca-table>
          <slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>`
      : html`Kein Element ausgewählt.`;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    if (slotElement == undefined) {
      return;
    }
    const elements: Element[] = slotElement.assignedElements();
    const element: Element = elements[0];
    if (element instanceof HTMLElement) {
      this.element = element;
    }
  }

  toAttributeRows(arr: PropertyGuiWrapper[] | undefined) {
    const retval: string[][] = [[]];
    if (arr) {
      arr.map((prop) => {
        const arr: any[] = [];
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

  toSlotRows(arr: string[] | undefined) {
    const retval: string[][] = [[]];
    if (arr) {
      arr.map((name) => {
        const arr: string[] = [];
        arr.push(name);
        retval.push(arr);
        return arr;
      });
    }
    return retval;
  }

  toCustomEventRows(arr: string[] | undefined) {
    const retval: string[][] = [[]];
    if (arr) {
      arr.map((name) => {
        const arr: string[] = [];
        arr.push(name);
        retval.push(arr);
        return arr;
      });
    }
    return retval;
  }
}
