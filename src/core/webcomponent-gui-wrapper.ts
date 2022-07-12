import {html, TemplateResult} from "lit";
import {WebcomponentWrapper} from "./webcomponent-wrapper";
import {PropertyGuiWrapper} from "./property-gui-wrapper";
import {WebcomponentViewer} from "..";

export class WebcomponentGuiWrapper {
  constructor(public parent: WebcomponentViewer, public classWrapper: WebcomponentWrapper) {}

  public getAsHtml(): string {
    const htmlString: string = `
<${this.classWrapper.getTagName()}
${this.getPropertyGuiWrappers()
  .map((propertyGuiWrapper) => {
    return propertyGuiWrapper.getAsHtml(this);
  })
  .join("")}></${this.classWrapper.getTagName()}>
`;
    return htmlString;
  }

  public getAsJavascript(): string {
    const htmlString: string = `
<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>
<script>
  const element = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsJavascript(this);
    })
    .join("  ")}</script>
`;
    return htmlString;
  }

  public getTypescript(): string {
    const htmlString: string = `
const element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsTypescript(this);
    })
    .join("  ")}
`;
    return htmlString;
  }

  //${this.removeOwnTag(this.showcaseElement.innerHTML)}
  public getAsLit(): string {
    const htmlString: string = `
<${this.classWrapper.getTagName()}
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsLit(this);
    })
    .join("  ")}>
`;
    return htmlString;
  }

  public getAsAngular(): string {
    const htmlString: string = `<${this.classWrapper.getTagName()}
${this.getPropertyGuiWrappers()
  .map((propertyGuiWrapper) => {
    return propertyGuiWrapper.getAsAngular(this);
  })
  .join("  ")}></${this.classWrapper.getTagName()}>
`;
    return htmlString;
  }

  private removeOwnTag(innerHTML: string) {
    if (innerHTML.indexOf(">") > -1) {
      innerHTML = innerHTML.substr(innerHTML.indexOf(">") + 1, innerHTML.length);
    }
    return innerHTML;
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
    for (const prop of this.classWrapper.getProperties()) {
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
