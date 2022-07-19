import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaImgRound, NidocaList, NidocaListItem, NidocaListSection} from "@domoskanonos/nidoca-webcomponents/lib";

@customElement("nidoca-viewer")
export class NidocaViewer extends LitElement {
  public render(): TemplateResult {
    return html`<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${NidocaList.example()} ${NidocaListItem.example()} ${NidocaListSection.example()} ${NidocaImgRound.example()}
        </webcomponent-viewer-container>
      </nidoca-section>
    </nidoca-container>`;
  }
}
