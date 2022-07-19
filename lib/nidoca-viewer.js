var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { NidocaImgRound, NidocaList, NidocaListItem, NidocaListSection } from "@domoskanonos/nidoca-webcomponents/lib";
let NidocaViewer = class NidocaViewer extends LitElement {
    render() {
        return html `<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${NidocaList.example()} ${NidocaListItem.example()} ${NidocaListSection.example()} ${NidocaImgRound.example()}
        </webcomponent-viewer-container>
      </nidoca-section>
    </nidoca-container>`;
    }
};
NidocaViewer = __decorate([
    customElement("nidoca-viewer")
], NidocaViewer);
export { NidocaViewer };
//# sourceMappingURL=nidoca-viewer.js.map