import { LitElement, TemplateResult } from "lit-element";
export declare class WebcomponentViewerContainer extends LitElement {
    static styles: import("lit-element").CSSResult;
    elementName: string | undefined;
    private componentMap;
    private options;
    render(): TemplateResult;
    slotChanged(event: Event): void;
}
