export * from "./webcomponent-viewer";
export * from "./webcomponent-viewer-container";
export * from "./webcomponent-viewer-playground";
import { html } from "lit";
import { NidocaButtonType, NidocaIcon, NidocaImg, NidocaMovie, NidocaProgress } from "@domoskanonos/nidoca-webcomponents";
export class Nidoca {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        this._registeredElementsMap = new Map();
    }
    initDefaultComponents() {
        this._registeredElementsMap.set("nidoca-form-upload", html ` <nidoca-form-upload theme="primary"></nidoca-form-upload>`);
        //nidoca-list
        this.registeredElementsMap.set("nidoca-list", html ` <nidoca-list theme="secondary" selectionMode>
        <nidoca-list-section>A</nidoca-list-section>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
      </nidoca-list>`);
        this._registeredElementsMap.set("nidoca-form-contact", html ` <nidoca-form-contact
        @nidoca-form-contact-submit="${(event) => alert(JSON.stringify(event.detail))}"
        theme="${NidocaTheme.BACKGROUND}"
      ></nidoca-form-contact>`);
        this._registeredElementsMap.set("nidoca-form-change-password", html ` <nidoca-form-change-password
        theme="${NidocaTheme.SECONDARY}"
        @nidoca-form-change-password-submit="${(event) => alert(JSON.stringify(event.detail))}"
      ></nidoca-form-change-password>`);
        this._registeredElementsMap.set("nidoca-form-register", html ` <nidoca-form-register
        @nidoca-form-register-submit="${(event) => alert(JSON.stringify(event.detail))}"
        theme="${NidocaTheme.PRIMARY}"
      ></nidoca-form-register>`);
        this._registeredElementsMap.set("nidoca-form-reset-password", html ` <nidoca-form-reset-password
        @nidoca-form-reset-password-submit="${(event) => alert(JSON.stringify(event.detail))}"
        theme="${NidocaTheme.PRIMARY}"
      ></nidoca-form-reset-password>`);
        this._registeredElementsMap.set("nidoca-form-newsletter", html ` <nidoca-form-newsletter
        @nidoca-form-newsletter-submit="${(event) => alert(JSON.stringify(event.detail))}"
        theme="${NidocaTheme.SURFACE}"
      ></nidoca-form-newsletter>`);
        this._registeredElementsMap.set("nidoca-form-login", html ` <nidoca-form-login
        @nidoca-form-login-submit="${(event) => alert(JSON.stringify(event.detail))}"
      ></nidoca-form-login>`);
        this.registeredElementsMap.set("nidoca-article", html ` <nidoca-article
        overline="Ut enim ad minim veniam"
        title="Ut enim ad minim veniam"
        summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      >
        <nidoca-button theme="${NidocaTheme.SECONDARY}" .buttonType="${NidocaButtonType.OUTLINED}"
          >Aktion
        </nidoca-button>
      </nidoca-article>`);
        //nidoca-text
        this.registeredElementsMap.set("nidoca-text", html ` <nidoca-text>Ut enim ad minim veniam.</nidoca-text>`);
        //nidoca-img
        const nidocaImg = new NidocaImg();
        nidocaImg.src = "http://nidoca.eu/img/DSC02586.jpg";
        nidocaImg.width = "100%";
        nidocaImg.height = "100%";
        this.registeredElementsMap.set("nidoca-img", html `${nidocaImg}`);
        //nidoca-movie
        const nidocaMovie = new NidocaMovie();
        nidocaMovie.src = "http://www.youtube.com/embed/lJIrF4YjHfQ";
        this.registeredElementsMap.set("nidoca-movie", html `${nidocaMovie}`);
        //nidoca-search-bar
        this.registeredElementsMap.set("nidoca-search-bar", html ` <nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`);
        //nidoca-avatar
        this.registeredElementsMap.set("nidoca-avatar", html ` <nidoca-avatar
        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
        primaryText="Dominik Bruhn"
        description="Softwareentwickler"
      >
      </nidoca-avatar>`);
        //nidoca-progress
        const nidocaProgress = new NidocaProgress();
        nidocaProgress.style.padding = "var(--space-6)";
        this.registeredElementsMap.set("nidoca-progress", html `${nidocaProgress}`);
        //nidoca-icon
        const nidocaIcon = new NidocaIcon();
        nidocaIcon.style.padding = "var(--space-6)";
        nidocaIcon.icon = "home";
        nidocaIcon.primaryText = "Home Icon";
        nidocaIcon.clickable = true;
        nidocaIcon.style.fontSize = "96px";
        this.registeredElementsMap.set("nidoca-icon", html `${nidocaIcon}`);
        this._registeredElementsMap.set("nidoca-menu", html ` <nidoca-menu theme="primary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"></nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
      </nidoca-menu>`);
        this._registeredElementsMap.set("nidoca-accordion", html ` <nidoca-accordion .theme="${NidocaTheme.PRIMARY}">
        <nidoca-accordion-item header="Lorem Ipsum" opened>
          <nidoca-article
            style="padding:25px;"
            title="Lorem Ipsum"
            summary="Lorem Ipsum Dolorem ipsum med en to."
            text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
          ></nidoca-article>
        </nidoca-accordion-item>
        <nidoca-accordion-item header="Bild 2">
          <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        </nidoca-accordion-item>
        <nidoca-accordion-item header="Bild 3">
          <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        </nidoca-accordion-item>
        <nidoca-accordion-item header="Bild 4">
          <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        </nidoca-accordion-item>
      </nidoca-accordion>`);
        this._registeredElementsMap.set("nidoca-button", html ` <nidoca-button leadingIcon="home" buttonType="CONTAINED">Mein Button</nidoca-button>`);
        this._registeredElementsMap.set("nidoca-card", html ` <nidoca-card></nidoca-card>`);
        this._registeredElementsMap.set("nidoca-chip", html ` <nidoca-chip>Lorem Ipsum</nidoca-chip>`);
        this._registeredElementsMap.set("nidoca-code", html ` <nidoca-code>Lorem Ipsum</nidoca-code>`);
        this._registeredElementsMap.set("nidoca-dialog-action", html ` <nidoca-dialog-action></nidoca-dialog-action>`);
        this._registeredElementsMap.set("nidoca-dialog", html ` <nidoca-dialog>
        <nidoca-button
          @click="${(event) => {
            event.target.parentNode.show = false;
            event.target.getRootNode().host.requestUpdate();
        }}"
          >Schließen
        </nidoca-button>
      </nidoca-dialog>`);
        this._registeredElementsMap.set("nidoca-form-combobox", html ` <nidoca-form-combobox
        theme="surface"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
        .options="${[
            { key: "item1", value: "Item 1" },
            { key: "item2", value: "Item 2" },
        ]}"
        value="item2"
      ></nidoca-form-combobox>`);
        this._registeredElementsMap.set("nidoca-form-date", html ` <nidoca-form-date
        theme="background"
        label="Geburtstag"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-date>`);
        this._registeredElementsMap.set("nidoca-form-switch", html ` <nidoca-form-switch></nidoca-form-switch>`);
        this._registeredElementsMap.set("nidoca-form-text", html `
        <nidoca-form-text
          theme="primary"
          label="Mein Textfeld"
          placeholder="Platzhalter"
          trailingIcon="home"
          infoText="Info"
          warningText="Warnung"
          errorText="Fehler"
          name="text"
        >
        </nidoca-form-text>
      `);
        this._registeredElementsMap.set("nidoca-form-textarea", html ` <nidoca-form-textarea
        theme="secondary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-textarea>`);
        this._registeredElementsMap.set("nidoca-form-captcha", html ` <nidoca-form-captcha
        theme="primary"
        label="Wie lautet das Ergebnis von:"
        name="captcha"
      ></nidoca-form-captcha>`);
        this._registeredElementsMap.set("nidoca-gallery", html ` <nidoca-gallery>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
      </nidoca-gallery>`);
        this._registeredElementsMap.set("nidoca-link", html ` <nidoca-link></nidoca-link>`);
        this._registeredElementsMap.set("nidoca-ripple", html ` <nidoca-ripple></nidoca-ripple>`);
        this._registeredElementsMap.set("nidoca-tabs", html `
        <nidoca-tabs tabIndex="0">
          <nidoca-tab slot="tab">Tab 1</nidoca-tab>
          <nidoca-tab slot="tab">Tab 2</nidoca-tab>
          <nidoca-tab slot="tab">Tab 3</nidoca-tab>
          <nidoca-tab-content slot="tabContent">
            <nidoca-text>Tab Inhalt 1</nidoca-text>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-text>Tab Inhalt 2</nidoca-text>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-text>Tab Inhalt 3</nidoca-text>
          </nidoca-tab-content>
        </nidoca-tabs>
      `);
        this._registeredElementsMap.set("nidoca-table", html ` <nidoca-table></nidoca-table>`);
        this._registeredElementsMap.set("nidoca-top-app-bar", html ` <nidoca-top-app-bar style="min-height: 48px;" .theme="${NidocaTheme.PRIMARY}">
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`);
        this._registeredElementsMap.set("nidoca-upload", html ` <nidoca-upload></nidoca-upload>`);
        this._registeredElementsMap.set("nidoca-wizard", html ` <nidoca-wizard></nidoca-wizard>`);
        this._registeredElementsMap.set("nidoca-icon-with-description", html ` <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
        Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über
        ${Nidoca.getUniqueInstance().registeredElementNames.length} Komponenten. Diese sind für den direkten Einsatz in
        deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können dank der Webcomponent
        Technologie überall in andere Frameworks eingebaungen werden.
      </nidoca-icon-with-description>`);
    }
    static getUniqueInstance() {
        if (!Nidoca.uniqueInstance) {
            Nidoca.uniqueInstance = new Nidoca();
        }
        return Nidoca.uniqueInstance;
    }
    get registeredElementsMap() {
        return this._registeredElementsMap;
    }
    get registeredElementNames() {
        const elementNames = [];
        for (const key of this.registeredElementsMap.keys()) {
            elementNames.push(key);
        }
        return elementNames;
    }
    registerElementName(elementName) {
        console.log(`register element: ${elementName}`);
        const element = document.createElement(elementName);
        this.registeredElementsMap.set(elementName, html `${element}`);
    }
}
export class NidocaTheme {
    static getStyle(theme) {
        return theme
            ? theme == NidocaTheme.TRANSPARENT
                ? html ``
                : html ` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${theme});
              background-color: var(--app-color-${theme}-background);
              border-color: var(--app-color-${theme}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`
            : html ``;
    }
    static getOposite(theme) {
        return theme == NidocaTheme.BACKGROUND
            ? NidocaTheme.SURFACE
            : theme == NidocaTheme.PRIMARY
                ? NidocaTheme.SECONDARY
                : theme == NidocaTheme.PRIMARY
                    ? NidocaTheme.SECONDARY
                    : theme == NidocaTheme.SECONDARY
                        ? NidocaTheme.PRIMARY
                        : NidocaTheme.BACKGROUND;
    }
    getParentTheme(element) {
        let parentComponent = element;
        while (parentComponent != null) {
            if (parentComponent.theme != undefined) {
                return parentComponent.theme;
            }
            parentComponent = parentComponent.parentElement;
        }
        return undefined;
    }
}
NidocaTheme.PRIMARY = "primary";
NidocaTheme.SECONDARY = "secondary";
NidocaTheme.SURFACE = "surface";
NidocaTheme.BACKGROUND = "background";
NidocaTheme.TRANSPARENT = "transparent";
//# sourceMappingURL=index.js.map