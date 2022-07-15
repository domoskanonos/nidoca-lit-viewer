import { LitElement, TemplateResult } from "lit";
import { WebcomponentViewer } from "./webcomponent-viewer";
export declare class WebcomponentViewerContainer extends LitElement {
    static styles: import("lit").CSSResult;
    webcomponentViewer?: WebcomponentViewer;
    private componentMap;
    private value;
    private options;
    render(): TemplateResult;
    slotChanged(event: Event): void;
}
