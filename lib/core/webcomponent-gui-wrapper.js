import { html } from "lit";
import "./webcomponent-wrapper";
import { PropertyGuiWrapper } from "./property-gui-wrapper";
import "..";
export class WebcomponentGuiWrapper {
    constructor(parent, classWrapper) {
        this.parent = parent;
        this.classWrapper = classWrapper;
    }
    getAsHtml() {
        const htmlString = `
<${this.classWrapper.getTagName()}
${this.getPropertyGuiWrappers()
            .map((propertyGuiWrapper) => {
            return propertyGuiWrapper.getAsHtml(this);
        })
            .join("")}></${this.classWrapper.getTagName()}>
`;
        return htmlString;
    }
    getAsJavascript() {
        const htmlString = `
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
    getTypescript() {
        const htmlString = `
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
    getAsLit() {
        const htmlString = `
<${this.classWrapper.getTagName()}
  ${this.getPropertyGuiWrappers()
            .map((propertyGuiWrapper) => {
            return propertyGuiWrapper.getAsLit(this);
        })
            .join("  ")}>
`;
        return htmlString;
    }
    getAsAngular() {
        const htmlString = `<${this.classWrapper.getTagName()}
${this.getPropertyGuiWrappers()
            .map((propertyGuiWrapper) => {
            return propertyGuiWrapper.getAsAngular(this);
        })
            .join("  ")}></${this.classWrapper.getTagName()}>
`;
        return htmlString;
    }
    removeOwnTag(innerHTML) {
        if (innerHTML.indexOf(">") > -1) {
            innerHTML = innerHTML.substr(innerHTML.indexOf(">") + 1, innerHTML.length);
        }
        return innerHTML;
    }
    renderPropertyGui() {
        const returnArray = [];
        for (const prop of this.getPropertyGuiWrappers()) {
            returnArray.push(html `
          <div>
            <b>${prop.propertyWrapper.propertyName}</b>

            <pre>${prop.propertyWrapper.getTypeName()}</pre>
            <div>${prop.getInputElement(this)}</div>
          </div>
        `);
        }
        return returnArray;
    }
    getPropertyGuiWrappers() {
        const propertyGuiWrappers = [];
        for (const prop of this.classWrapper.getProperties()) {
            propertyGuiWrappers.push(new PropertyGuiWrapper(prop));
        }
        return propertyGuiWrappers;
    }
    getPropertieNames() {
        const retval = [];
        this.getPropertyGuiWrappers().map((prop) => {
            retval.push(prop.propertyWrapper.propertyName);
        });
        return retval;
    }
    hasProperties() {
        return this.getPropertieNames().length > 0;
    }
}
//# sourceMappingURL=webcomponent-gui-wrapper.js.map