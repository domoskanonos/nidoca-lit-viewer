import { TemplateResult } from "lit";
import { WebcomponentWrapper } from "./webcomponent-wrapper";
import { PropertyGuiWrapper } from "./property-gui-wrapper";
import { WebcomponentViewer } from "..";
export declare class WebcomponentGuiWrapper {
    parent: WebcomponentViewer;
    classWrapper: WebcomponentWrapper;
    constructor(parent: WebcomponentViewer, classWrapper: WebcomponentWrapper);
    getAsHtml(): string;
    getAsJavascript(): string;
    getTypescript(): string;
    getAsLit(): string;
    getAsAngular(): string;
    renderPropertyGui(): TemplateResult[];
    getPropertyGuiWrappers(): PropertyGuiWrapper[];
    getPropertieNames(): string[];
    hasProperties(): boolean;
}
