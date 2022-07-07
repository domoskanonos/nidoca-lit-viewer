export * from "./webcomponent-viewer";
export * from "./webcomponent-viewer-container";
export * from "./webcomponent-viewer-playground";
import { HTMLTemplateResult, TemplateResult } from "lit";
export declare class Nidoca {
    initDefaultComponents(): void;
    private static uniqueInstance;
    private constructor();
    static getUniqueInstance(): Nidoca;
    private _registeredElementsMap;
    get registeredElementsMap(): Map<string, TemplateResult>;
    get registeredElementNames(): string[];
    registerElementName(elementName: string): void;
}
export declare class NidocaTheme {
    static getStyle(theme: NidocaTheme | string | undefined): HTMLTemplateResult;
    static readonly PRIMARY: string;
    static readonly SECONDARY: string;
    static readonly SURFACE: string;
    static readonly BACKGROUND: string;
    static readonly TRANSPARENT: string;
    static getOposite(theme: string | undefined): string;
    getParentTheme(element: HTMLElement): string | undefined;
}
