import { LitElement, TemplateResult } from "lit";
export declare class WebcomponentViewerContainer extends LitElement {
    static styles: import("lit").CSSResult;
    elementName: string | undefined;
    private componentMap;
    private options;
    render(): TemplateResult;
    slotChanged(event: Event): void;
}
