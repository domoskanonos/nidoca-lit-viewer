import { PropertyWrapper } from "./property-wrapper";
export declare class WebcomponentWrapper {
    instance: any;
    constructor(element: any);
    getClassName(): any;
    getTagName(): string;
    getHTMLTag(): string;
    getClazz(): unknown;
    getSlotNames(): string[];
    getSlots(): HTMLSlotElement[];
    hasSlots(): boolean;
    private getElementsByTagName;
    getElementProperties(): PropertyWrapper[];
    getOwnPropertieNames(): string[];
}
