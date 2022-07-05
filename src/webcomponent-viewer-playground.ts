import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {Nidoca} from "..";

@customElement("webcomponent-viewer-playground")
export class WebcomponentViewerPlayground extends LitElement {
  static styles = css``;

  @property({type: String})
  elementName: string = "nidoca-tabs";

  render(): TemplateResult {
    return html`
      <nidoca-section>
        <nidoca-article
          title="Komponentenübersicht"
          text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-section>
        <webcomponent-viewer-container>
          ${Nidoca.getUniqueInstance().registeredElementNames.map(
            (elementName: string) => html` ${Nidoca.getUniqueInstance().registeredElementsMap.get(elementName)} `
          )}
        </webcomponent-viewer-container>
      </nidoca-section>
    `;
  }
}
