import { TemplateResult } from "lit";
import { WebcomponentWrapper } from "./webcomponent-wrapper";
import { PropertyGuiWrapper } from "./property-gui-wrapper";
import { WebcomponentViewer } from "..";
export declare class WebcomponentGuiWrapper {
    parent: WebcomponentViewer;
    webcomponentWrapper: WebcomponentWrapper;
    constructor(parent: WebcomponentViewer, webcomponentWrapper: WebcomponentWrapper);
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
