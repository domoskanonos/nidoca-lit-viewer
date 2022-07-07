export declare enum RenderType {
    STRING = "String",
    NUMBER = "Number",
    BOOLEAN = "Boolean",
    COMBOBOX = "Class",
    ARRAY = "Array",
    UNDEFINED = "undefined"
}
export declare class PropertyWrapper {
    getClassName(): string;
    propertyName: string;
    propertyValue: any;
    constructor(propertyName: string, propertyValue: any);
    getRenderType(): RenderType;
    getEnumValues(): any[];
    getEnumValue(key: any): any;
    getEnumKey(value: any): any;
    isConverterTypeArray(): boolean;
    isArray(): boolean;
    isPrimitive(): boolean;
    getType(): any | undefined;
    getTypeName(): string;
    getConverterType(): any | undefined;
    getConverterTypeName(): any | undefined;
    getTypeOf(): any | undefined;
    toString(): string;
}
