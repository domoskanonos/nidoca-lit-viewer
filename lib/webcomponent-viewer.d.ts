import { LitElement, PropertyValues, TemplateResult } from "lit";
import { PropertyGuiWrapper } from "./core/property-gui-wrapper";
export declare class WebcomponentViewer extends LitElement {
    static styles: import("lit").CSSResult;
    private webcomponentGuiWrapper;
    customEventNames: string[];
    element: HTMLElement | undefined;
    updated(_changedProperties: PropertyValues): void;
    render(): TemplateResult;
    slotChanged(event: Event): void;
    toAttributeRows(arr: PropertyGuiWrapper[] | undefined): string[][];
    toSlotRows(arr: string[] | undefined): string[][];
    toCustomEventRows(arr: string[] | undefined): string[][];
}
