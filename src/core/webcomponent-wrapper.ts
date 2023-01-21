import {PropertyWrapper} from "./property-wrapper";

export class WebcomponentWrapper {
  public instance: any;

  constructor(element: any) {
    this.instance = element;
  }

  public getClassName() {
    return this.instance.constructor.name;
  }

  getTagName(): string {
    return this.instance.localName;
  }

  getHTMLTag(): string {
    return "<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">");
  }

  public getClazz(): unknown {
    return this.instance.constructor;
  }

  public getSlotNames(): string[] {
    return this.getSlots().map((prop) => {
      return prop.name ? prop.name : "default";
    });
  }

  public getSlots(): HTMLSlotElement[] {
    return this.getElementsByTagName("SLOT", this.instance.shadowRoot);
  }

  hasSlots(): boolean {
    return this.getSlots().length > 0;
  }

  private getElementsByTagName(tagName: string, element: any | undefined | null): HTMLSlotElement[] {
    let retval: HTMLSlotElement[] = [];
    if (element) {
      const elementTagName = element.tagName;
      if (elementTagName == tagName) {
        retval.push(<HTMLSlotElement>element);
      }
      if (element.children.length > 0) {
        const elements = element?.children;
        for (let i = 0; i < elements.length; i++) {
          retval = retval.concat(this.getElementsByTagName(tagName, elements.item(i)));
        }
      }
    }
    return retval;
  }

  public getElementProperties(): PropertyWrapper[] {
    let classProperties: Map<string, any> = (<any>this.instance.constructor)["elementProperties"];
    if (!classProperties) {
      classProperties = new Map<string, any>();
    }
    const classPropertyArray: PropertyWrapper[] = [];
    for (const key of Array.from(classProperties.keys())) {
      classPropertyArray.push(new PropertyWrapper(key, classProperties.get(key)));
    }
    return classPropertyArray;
  }

  public getOwnPropertieNames(): string[] {
    const obj: any = this.instance.constructor;
    const propNames: string[] = Object.getOwnPropertyNames(obj);
    return propNames;
  }
}
