import {customElement, html, LitElement, TemplateResult} from "lit-element";
import {css} from "lit-element";
import {property} from "lit/decorators.js";
import {NidocaFormCombobox, FormOutputData} from "@domoskanonos/nidoca-webcomponents";
import {ifDefined} from "lit/directives/if-defined.js";

@customElement("webcomponent-viewer-container")
export class WebcomponentViewerContainer extends LitElement {
  static styles = css`
    slot {
      display: none;
    }
  `;

  @property({type: String})
  elementName: string | undefined;

  private componentMap: Map<string, HTMLElement> = new Map<string, HTMLElement>();

  private options: FormOutputData[] = [];

  public render(): TemplateResult {
    return html`
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${ifDefined(this.elementName)}"
        .options="${this.options}"
        @input="${(event: Event) => {
          this.elementName = (<NidocaFormCombobox>event.target).getOutputData().value;
        }}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer> ${this.componentMap.get(this.elementName ? this.elementName : "")} </webcomponent-viewer>
      <slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
    `;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    const elements: Element[] = slotElement.assignedElements();
    const elementSize = elements.length;
    for (let index = 0; index < elementSize; index++) {
      const element: Element = elements[index];
      if (element instanceof HTMLElement) {
        if (this.elementName == undefined) {
          this.elementName = element.tagName;
        }
        this.componentMap.set(element.tagName, <HTMLElement>element.cloneNode(true));
      }
    }

    this.options = NidocaFormCombobox.stringArrayToOptions(Array.from(this.componentMap.keys()));

    this.requestUpdate();
  }
}
