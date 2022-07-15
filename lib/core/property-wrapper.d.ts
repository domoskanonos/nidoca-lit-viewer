export declare enum RenderType {
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    Class = "Class",
    Array = "Array",
    undefined = "undefined"
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
