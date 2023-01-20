import {PropertyWrapper, RenderType} from "./property-wrapper";
import {html, LitElement, TemplateResult} from "lit";
import {WebcomponentGuiWrapper} from "./webcomponent-gui-wrapper";
import {NidocaFormTextType, NidocaFormCombobox} from "@domoskanonos/nidoca-webcomponents/lib";
import {WebcomponentWrapper} from "./webcomponent-wrapper";

export class PropertyGuiWrapper {
  public propertyWrapper: PropertyWrapper;

  constructor(propertyWrapper: PropertyWrapper) {
    this.propertyWrapper = propertyWrapper;
  }

  public getInputElement(classGuiWrapper: WebcomponentGuiWrapper | null): TemplateResult {
    if (classGuiWrapper == null) {
      return html``;
    }

    const classWrapper: WebcomponentWrapper | null = classGuiWrapper.webcomponentWrapper;

    if (classWrapper == null) {
      return html``;
    }
    const propertyType: RenderType = this.propertyWrapper.getRenderType();
    switch (propertyType) {
      case RenderType.String:
        return html`
                    <nidoca-form-text .textType="${NidocaFormTextType.text}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${
                                        classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
                                      }"
                                      @input="${(eventArg: any) => {
                                        classWrapper.instance[this.propertyWrapper.propertyName] =
                                          eventArg.target.getOutputData().value;
                                        classGuiWrapper.parent.requestUpdate();
                                      }}"
                    /></nidoca-form-text>`;
      case RenderType.Number:
        return html` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${NidocaFormTextType.number}"
          value="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
            classGuiWrapper.parent.requestUpdate();
          }}"
        ></nidoca-form-text>`;
      case RenderType.Boolean: {
        return html` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
            classGuiWrapper.parent.requestUpdate();
          }}"
        ></nidoca-form-switch>`;
      }
      case RenderType.Class: {
        return html` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${NidocaFormCombobox.enumToOptions(this.propertyWrapper.getType(), false)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((key) => {
            return (
              this.propertyWrapper.getType()[key] ==
              classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
            );
          })[0]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[this.propertyWrapper.propertyName] = this.propertyWrapper.getEnumValue(
              eventArg.target.getOutputData().value
            );
            classGuiWrapper.parent.requestUpdate();
          }}"
        >
        </nidoca-form-combobox>`;
      }
      case RenderType.Array:
        return html`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${NidocaFormCombobox.toComboboxOptions(
              this.propertyWrapper.getType(),
              this.propertyWrapper.getTypeName()
            )}"
            .multiple="${true}"
            size="5"
            .value="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
            @input="${(eventArg: any) => {
              classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
              classWrapper.instance.requestUpdate();
            }}"
          >
          </nidoca-form-combobox>
        `;
      default:
        return html``;
    }
  }

  getAsHtml(classGuiWrapper: WebcomponentGuiWrapper): string {
    const propertyType: RenderType = this.propertyWrapper.getRenderType();
    switch (propertyType) {
      case RenderType.Boolean:
        return `${this.propertyWrapper.propertyName}\n`;
      case RenderType.Array:
        return "";
      default:
        return `${this.propertyWrapper.propertyName}="${
          classGuiWrapper.webcomponentWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }"\n`;
    }
  }

  getAsLit(classGuiWrapper: WebcomponentGuiWrapper): string {
    const renderType: RenderType = this.propertyWrapper.getRenderType();
    switch (renderType) {
      case RenderType.Class:
      case RenderType.String:
        return `${this.propertyWrapper.propertyName}="${
          classGuiWrapper.webcomponentWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }"\n`;
      case RenderType.Boolean:
        return `${this.propertyWrapper.propertyName}\n`;
      case RenderType.Array:
        return `.${this.propertyWrapper.propertyName}="\${[]}"\n`;
      default:
        return `.${this.propertyWrapper.propertyName}="\${}"\n`;
    }
  }

  getAsAngular(classGuiWrapper: WebcomponentGuiWrapper): string {
    const propertyType: RenderType = this.propertyWrapper.getRenderType();
    switch (propertyType) {
      case RenderType.Class:
      case RenderType.String:
        return `[${this.propertyWrapper.propertyName}]="${
          classGuiWrapper.webcomponentWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }"\n`;
      case RenderType.Array:
        return `[${this.propertyWrapper.propertyName}]="\${[]}"\n`;
      default:
        return `[${this.propertyWrapper.propertyName}]="\${}"\n`;
    }
  }

  getAsJavascript(classGuiWrapper: WebcomponentGuiWrapper): string {
    const propertyType: RenderType = this.propertyWrapper.getRenderType();
    switch (propertyType) {
      case RenderType.Class:
      case RenderType.Array:
        return "";
      case RenderType.String:
        return `element.${this.propertyWrapper.propertyName}="${
          classGuiWrapper.webcomponentWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }";\n`;
      default:
        return `element.${this.propertyWrapper.propertyName}=${
          classGuiWrapper.webcomponentWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        };\n`;
    }
  }

  getAsTypescript(classGuiWrapper: WebcomponentGuiWrapper): string {
    const propertyType: RenderType = this.propertyWrapper.getRenderType();
    switch (propertyType) {
      case RenderType.Array:
        return "";
      case RenderType.Class:
      case RenderType.String:
        return `element.${this.propertyWrapper.propertyName}="${
          classGuiWrapper.webcomponentWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }";\n`;
      default:
        return `element.${this.propertyWrapper.propertyName}=${
          classGuiWrapper.webcomponentWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        };\n`;
    }
  }
}
