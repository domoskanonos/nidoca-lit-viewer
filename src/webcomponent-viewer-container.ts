import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, query} from "lit/decorators.js";
import {NidocaFormCombobox} from "@domoskanonos/nidoca-webcomponents/lib/nidoca-form-combobox";
import {FormOutputData} from "@domoskanonos/nidoca-webcomponents/lib/nidoca-form-abstract-input-element";
import {WebcomponentViewer} from "./webcomponent-viewer";

@customElement("webcomponent-viewer-container")
export class WebcomponentViewerContainer extends LitElement {
  static styles = css`
    slot {
      display: none;
    }
  `;

  @query("#webcomponentViewer")
  webcomponentViewer?: WebcomponentViewer;

  private componentMap: Map<string, HTMLElement> = new Map<string, HTMLElement>();

  private value: string = "";
  private options: FormOutputData[] = [];

  public render(): TemplateResult {
    return html`
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${this.value}"
        .options="${this.options}"
        @input="${(event: Event) => {
          const elementName = (<NidocaFormCombobox>event.target).getOutputData().value;
          const element = this.componentMap.get(elementName);
          if (this.webcomponentViewer) {
            console.log(`change element: ${elementName}`);
            this.webcomponentViewer.element = element;
          }
        }}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer id="webcomponentViewer"></webcomponent-viewer>
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
        if (this.webcomponentViewer && this.webcomponentViewer.element == undefined) {
          this.webcomponentViewer.element = element;
          this.value = element.tagName;
        }
        this.componentMap.set(element.tagName, <HTMLElement>element.cloneNode(true));
      }
    }

    this.options = NidocaFormCombobox.stringArrayToOptions(Array.from(this.componentMap.keys()));

    this.requestUpdate();
  }
}
