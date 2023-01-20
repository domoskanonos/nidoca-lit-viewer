import {html, TemplateResult} from "lit";
import {WebcomponentWrapper} from "./webcomponent-wrapper";
import {PropertyGuiWrapper} from "./property-gui-wrapper";
import {WebcomponentViewer} from "..";

export class WebcomponentGuiWrapper {
  constructor(public parent: WebcomponentViewer, public webcomponentWrapper: WebcomponentWrapper) {}

  public getAsHtml(): string {
    const htmlString: string = `<${this.webcomponentWrapper.getTagName()}
${this.getPropertyGuiWrappers()
  .map((propertyGuiWrapper) => {
    return propertyGuiWrapper.getAsHtml(this);
  })
  .join("")}></${this.webcomponentWrapper.getTagName()}>
`;
    return htmlString.trim();
  }

  public getAsJavascript(): string {
    const htmlString: string = `<${this.webcomponentWrapper.getTagName()} id="meinElement"></${this.webcomponentWrapper.getTagName()}>
<script>
  const element = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsJavascript(this);
    })
    .join("  ")}</script>
`;
    return htmlString.trim();
  }

  public getTypescript(): string {
    const htmlString: string = `
const element : ${this.webcomponentWrapper.getClassName()} = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsTypescript(this);
    })
    .join("  ")}
`;
    return htmlString.trim();
  }

  public getAsLit(): string {
    const htmlString: string = `
<${this.webcomponentWrapper.getTagName()}
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsLit(this);
    })
    .join("  ")}>
`;
    return htmlString.trim();
  }

  public getAsAngular(): string {
    const htmlString: string = `<${this.webcomponentWrapper.getTagName()}
${this.getPropertyGuiWrappers()
  .map((propertyGuiWrapper) => {
    return propertyGuiWrapper.getAsAngular(this);
  })
  .join("  ")}></${this.webcomponentWrapper.getTagName()}>
`;
    return htmlString.trim();
  }

  public renderPropertyGui(): TemplateResult[] {
    const returnArray: TemplateResult[] = [];
    for (const prop of this.getPropertyGuiWrappers()) {
      returnArray.push(
        html`
          <div>
            <b>${prop.propertyWrapper.propertyName}</b>

            <pre>${prop.propertyWrapper.getTypeName()}</pre>
            <div>${prop.getInputElement(this)}</div>
          </div>
        `
      );
    }
    return returnArray;
  }
  public getPropertyGuiWrappers(): PropertyGuiWrapper[] {
    const propertyGuiWrappers: PropertyGuiWrapper[] = [];
    for (const prop of this.webcomponentWrapper.getElementProperties()) {
      propertyGuiWrappers.push(new PropertyGuiWrapper(prop));
    }
    return propertyGuiWrappers;
  }

  public getPropertieNames(): string[] {
    const retval: string[] = [];
    this.getPropertyGuiWrappers().map((prop) => {
      retval.push(prop.propertyWrapper.propertyName);
    });
    return retval;
  }

  hasProperties(): boolean {
    return this.getPropertieNames().length > 0;
  }
}
