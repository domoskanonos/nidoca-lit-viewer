import { PropertyWrapper } from "./property-wrapper";
import { TemplateResult } from "lit";
import { WebcomponentGuiWrapper } from "./webcomponent-gui-wrapper";
export declare class PropertyGuiWrapper {
    propertyWrapper: PropertyWrapper;
    constructor(propertyWrapper: PropertyWrapper);
    getInputElement(classGuiWrapper: WebcomponentGuiWrapper | null): TemplateResult;
    getAsHtml(classGuiWrapper: WebcomponentGuiWrapper): string;
    getAsLit(classGuiWrapper: WebcomponentGuiWrapper): string;
    getAsAngular(classGuiWrapper: WebcomponentGuiWrapper): string;
    getAsJavascript(classGuiWrapper: WebcomponentGuiWrapper): string;
    getAsTypescript(classGuiWrapper: WebcomponentGuiWrapper): string;
}
