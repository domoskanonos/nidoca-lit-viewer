import { PropertyWrapper } from "./property-wrapper";
export class WebcomponentWrapper {
    constructor(element) {
        this.instance = element;
    }
    getClassName() {
        return this.instance.constructor.name;
    }
    getTagName() {
        return this.instance.localName;
    }
    getHTMLTag() {
        return "<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">");
    }
    getClazz() {
        return this.instance.constructor;
    }
    getSlotNames() {
        return this.getSlots().map((prop) => {
            return prop.name ? prop.name : "default";
        });
    }
    getSlots() {
        return this.getElementsByTagName("SLOT", this.instance.shadowRoot);
    }
    hasSlots() {
        return this.getSlots().length > 0;
    }
    getElementsByTagName(tagName, element) {
        let retval = [];
        if (element) {
            const elementTagName = element.tagName;
            if (elementTagName == tagName) {
                retval.push(element);
            }
            if (element.children.length > 0) {
                const elements = element === null || element === void 0 ? void 0 : element.children;
                for (let i = 0; i < elements.length; i++) {
                    retval = retval.concat(this.getElementsByTagName(tagName, elements.item(i)));
                }
            }
        }
        return retval;
    }
    getElementProperties() {
        let classProperties = this.instance.constructor["elementProperties"];
        if (!classProperties) {
            classProperties = new Map();
        }
        const classPropertyArray = [];
        for (const key of Array.from(classProperties.keys())) {
            classPropertyArray.push(new PropertyWrapper(key, classProperties.get(key)));
        }
        return classPropertyArray;
    }
    getOwnPropertieNames() {
        const obj = this.instance.constructor;
        const propNames = Object.getOwnPropertyNames(obj);
        return propNames;
    }
}
//# sourceMappingURL=webcomponent-wrapper.js.map