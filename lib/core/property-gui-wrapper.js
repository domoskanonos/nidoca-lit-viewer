import { RenderType } from "./property-wrapper";
import { html } from "lit";
import "./webcomponent-gui-wrapper";
import { NidocaFormTextType, NidocaFormCombobox } from "@domoskanonos/nidoca-webcomponents/lib";
import "./webcomponent-wrapper";
export class PropertyGuiWrapper {
    constructor(propertyWrapper) {
        this.propertyWrapper = propertyWrapper;
    }
    getInputElement(classGuiWrapper) {
        if (classGuiWrapper == null) {
            return html ``;
        }
        const classWrapper = classGuiWrapper.classWrapper;
        if (classWrapper == null) {
            return html ``;
        }
        const propertyType = this.propertyWrapper.getRenderType();
        switch (propertyType) {
            case RenderType.String:
                return html `
                    <nidoca-form-text .textType="${NidocaFormTextType.TEXT}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${classWrapper.instance[this.propertyWrapper.propertyName]}"
                                      @input="${(eventArg) => {
                    classWrapper.instance[this.propertyWrapper.propertyName] =
                        eventArg.target.getOutputData().value;
                    classGuiWrapper.parent.requestUpdate();
                }}"
                    /></nidoca-form-text>`;
            case RenderType.Number:
                return html ` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${NidocaFormTextType.NUMBER}"
          value="${classWrapper.instance[this.propertyWrapper.propertyName]}"
          @input="${(eventArg) => {
                    classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
                    classGuiWrapper.parent.requestUpdate();
                }}"
        ></nidoca-form-text>`;
            case RenderType.Boolean: {
                return html ` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${classWrapper.instance[this.propertyWrapper.propertyName]}"
          @input="${(eventArg) => {
                    classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
                    classGuiWrapper.parent.requestUpdate();
                }}"
        ></nidoca-form-switch>`;
            }
            case RenderType.Class: {
                return html ` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${NidocaFormCombobox.enumToOptions(this.propertyWrapper.getType(), false)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((key) => {
                    return (this.propertyWrapper.getType()[key] ==
                        classWrapper.instance[this.propertyWrapper.propertyName]);
                })[0]}"
          @input="${(eventArg) => {
                    classWrapper.instance[this.propertyWrapper.propertyName] = this.propertyWrapper.getEnumValue(eventArg.target.getOutputData().value);
                    classGuiWrapper.parent.requestUpdate();
                }}"
        >
        </nidoca-form-combobox>`;
            }
            case RenderType.Array:
                return html `
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${NidocaFormCombobox.toComboboxOptions(this.propertyWrapper.getType(), this.propertyWrapper.getTypeName())}"
            .multiple="${true}"
            size="5"
            .value="${classWrapper.instance[this.propertyWrapper.propertyName]}"
            @input="${(eventArg) => {
                    classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
                    classWrapper.instance.requestUpdate();
                }}"
          >
          </nidoca-form-combobox>
        `;
            default:
                return html ``;
        }
    }
    getAsHtml(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getRenderType();
        switch (propertyType) {
            case RenderType.Boolean:
                return `${this.propertyWrapper.propertyName}\n`;
            case RenderType.Array:
                return "";
            case RenderType.Class:
                return `${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;
            default:
                return `${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;
        }
    }
    getAsLit(classGuiWrapper) {
        const renderType = this.propertyWrapper.getRenderType();
        console.log(this.propertyWrapper.propertyName + renderType);
        switch (renderType) {
            case RenderType.Class:
                return `.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;
            case RenderType.String:
                return `${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;
            case RenderType.Boolean:
                return `${this.propertyWrapper.propertyName}\n`;
            case RenderType.Array:
                return `.${this.propertyWrapper.propertyName}="\${[]}"\n`;
            default:
                return `.${this.propertyWrapper.propertyName}="\${}"\n`;
        }
    }
    getAsAngular(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getRenderType();
        switch (propertyType) {
            case RenderType.Class:
                return `[${this.propertyWrapper.propertyName}]="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;
            case RenderType.String:
                return `[${this.propertyWrapper.propertyName}]="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;
            case RenderType.Array:
                return `[${this.propertyWrapper.propertyName}]="\${[]}"\n`;
            default:
                return `[${this.propertyWrapper.propertyName}]="\${}"\n`;
        }
    }
    getAsJavascript(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getRenderType();
        switch (propertyType) {
            case RenderType.Class:
            case RenderType.Array:
                return "";
            case RenderType.String:
                return `element.${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;
            default:
                return `element.${this.propertyWrapper.propertyName}=${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]};\n`;
        }
    }
    getAsTypescript(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getConverterTypeName();
        switch (propertyType) {
            case RenderType.Class:
            case RenderType.Array:
                return "";
            case RenderType.String:
                return `element.${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;
            default:
                return `element.${this.propertyWrapper.propertyName}=${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]};\n`;
        }
    }
}
//# sourceMappingURL=property-gui-wrapper.js.map