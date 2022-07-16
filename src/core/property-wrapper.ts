export enum RenderType {
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  Class = "Class",
  Array = "Array",
  undefined = "undefined",
}

export class PropertyWrapper {
  getClassName(): string {
    return this.getTypeName() ? this.getTypeName() : this.getConverterTypeName();
  }

  public propertyName: string;
  public propertyValue: any;

  constructor(propertyName: string, propertyValue: any) {
    this.propertyName = propertyName;
    this.propertyValue = propertyValue;
  }

  public getRenderType(): RenderType {
    if (this.isConverterTypeArray() || this.isArray()) {
      return RenderType.Array;
    }

    if (this.getTypeName() == undefined) {
      return RenderType.Class;
    }

    const renderType = <RenderType>this.getTypeName();
    return renderType;
  }

  getEnumValues(): any[] {
    const enumValues: any[] = [];
    Object.values(this.getType()).forEach((value: any) => {
      enumValues.push({
        key: value,
        value: String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(value)]),
      });
    });
    return enumValues;
  }

  getEnumValue(key: any): any {
    return Object.values(this.getType())[Object.keys(this.getType()).indexOf(key)];
  }

  getEnumKey(value: any): any {
    const values = this.getEnumValues();
    for (let i = 0; i < values.length; i++) {
      const item: any = values[i];
      if (item.key == value) {
        return item.value;
      }
    }
  }

  isConverterTypeArray(): boolean {
    return this.getConverterTypeName() == "Array";
  }

  isArray(): boolean {
    return this.getTypeName() == "Array";
  }

  isPrimitive(): boolean {
    return this.getTypeName() == "String" || this.getTypeName() == "Boolean" || this.getTypeName() == "Number";
  }

  public getType(): any | undefined {
    return this.propertyValue?.type;
  }

  getTypeName(): string {
    return this.getType().name;
  }

  public getConverterType(): any | undefined {
    return this.propertyValue.converter;
  }

  public getConverterTypeName(): any | undefined {
    return this.getConverterType()?.name;
  }

  public getTypeOf(): any | undefined {
    return typeof this.propertyValue;
  }

  public toString(): string {
    return JSON.stringify(
      {
        name: this.propertyValue.type.name,
        prototype: this.propertyValue,
      },
      null,
      2
    );
  }
}
