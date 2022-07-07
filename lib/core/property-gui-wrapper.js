import { RenderType } from "./property-wrapper";
import { html } from "lit";
import "./webcomponent-gui-wrapper";
import { NidocaFormCombobox, NidocaFormTextType } from "@domoskanonos/nidoca-webcomponents";
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
            case RenderType.STRING:
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
            case RenderType.NUMBER:
                return html ` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${NidocaFormTextType.NUMBER}"
          value="${classWrapper.instance[this.propertyWrapper.propertyName]}"
          @input="${(eventArg) => {
                    classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
                    classGuiWrapper.parent.requestUpdate();
                }}"
        ></nidoca-form-text>`;
            case RenderType.BOOLEAN: {
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
            case RenderType.COMBOBOX: {
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
            case RenderType.ARRAY:
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
        const propertyType = this.propertyWrapper.getConverterTypeName();
        switch (propertyType) {
            case RenderType.BOOLEAN:
                return `.${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;
            case RenderType.ARRAY:
                return "";
            case RenderType.COMBOBOX:
                return `${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;
            default:
                return `${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;
        }
    }
    getAsLit(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getRenderType();
        switch (propertyType) {
            case RenderType.COMBOBOX:
                return `.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;
            case RenderType.STRING:
                return `${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;
            case RenderType.ARRAY:
                return `.${this.propertyWrapper.propertyName}="\${[]}"\n`;
            default:
                return `.${this.propertyWrapper.propertyName}="\${}"\n`;
        }
    }
    getAsAngular(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getRenderType();
        switch (propertyType) {
            case RenderType.COMBOBOX:
                return `[${this.propertyWrapper.propertyName}]="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;
            case RenderType.STRING:
                return `[${this.propertyWrapper.propertyName}]="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;
            case RenderType.ARRAY:
                return `[${this.propertyWrapper.propertyName}]="\${[]}"\n`;
            default:
                return `[${this.propertyWrapper.propertyName}]="\${}"\n`;
        }
    }
    getAsJavascript(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getConverterTypeName();
        switch (propertyType) {
            case RenderType.COMBOBOX:
            case RenderType.ARRAY:
                return "";
            case RenderType.STRING:
                return `element.${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;
            default:
                return `element.${this.propertyWrapper.propertyName}=${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]};\n`;
        }
    }
    getAsTypescript(classGuiWrapper) {
        const propertyType = this.propertyWrapper.getConverterTypeName();
        switch (propertyType) {
            case RenderType.COMBOBOX:
            case RenderType.ARRAY:
                return "";
            case RenderType.STRING:
                return `element.${this.propertyWrapper.propertyName}="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;
            default:
                return `element.${this.propertyWrapper.propertyName}=${classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName]};\n`;
        }
    }
}
//# sourceMappingURL=property-gui-wrapper.js.map