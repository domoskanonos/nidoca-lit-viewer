export var RenderType;
(function (RenderType) {
    RenderType["String"] = "String";
    RenderType["Number"] = "Number";
    RenderType["Boolean"] = "Boolean";
    RenderType["Class"] = "Class";
    RenderType["Array"] = "Array";
    RenderType["undefined"] = "undefined";
})(RenderType || (RenderType = {}));
export class PropertyWrapper {
    constructor(propertyName, propertyValue) {
        this.propertyName = propertyName;
        this.propertyValue = propertyValue;
    }
    getClassName() {
        return this.getTypeName() ? this.getTypeName() : this.getConverterTypeName();
    }
    getRenderType() {
        if (this.isConverterTypeArray() || this.isArray()) {
            return RenderType.Array;
        }
        if (this.getTypeName() == undefined) {
            return RenderType.Class;
        }
        const renderType = this.getTypeName();
        return renderType;
    }
    getEnumValues() {
        const enumValues = [];
        Object.values(this.getType()).forEach((value) => {
            enumValues.push({
                key: value,
                value: String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(value)]),
            });
        });
        return enumValues;
    }
    getEnumValue(key) {
        return Object.values(this.getType())[Object.keys(this.getType()).indexOf(key)];
    }
    getEnumKey(value) {
        const values = this.getEnumValues();
        for (let i = 0; i < values.length; i++) {
            const item = values[i];
            if (item.key == value) {
                return item.value;
            }
        }
    }
    isConverterTypeArray() {
        return this.getConverterTypeName() == "Array";
    }
    isArray() {
        return this.getTypeName() == "Array";
    }
    isPrimitive() {
        return this.getTypeName() == "String" || this.getTypeName() == "Boolean" || this.getTypeName() == "Number";
    }
    getType() {
        var _a;
        return (_a = this.propertyValue) === null || _a === void 0 ? void 0 : _a.type;
    }
    getTypeName() {
        return this.getType().name;
    }
    getConverterType() {
        return this.propertyValue.converter;
    }
    getConverterTypeName() {
        var _a;
        return (_a = this.getConverterType()) === null || _a === void 0 ? void 0 : _a.name;
    }
    getTypeOf() {
        return typeof this.propertyValue;
    }
    toString() {
        return JSON.stringify({
            name: this.propertyValue.type.name,
            prototype: this.propertyValue,
        }, null, 2);
    }
}
//# sourceMappingURL=property-wrapper.js.map