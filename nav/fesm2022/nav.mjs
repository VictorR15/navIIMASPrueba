import * as i0 from '@angular/core';
import { Injectable, Component, input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

class NavService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NavService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NavService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NavService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NavComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: NavComponent, isStandalone: true, selector: "lib-nav", ngImport: i0, template: `
    <p>
      nav works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-nav', imports: [], template: `
    <p>
      nav works!
    </p>
  ` }]
        }] });

class NavIimasComponent {
    navInfo = input();
    navImg = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NavIimasComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.15", type: NavIimasComponent, isStandalone: true, selector: "nav-iimas", inputs: { navInfo: { classPropertyName: "navInfo", publicName: "navInfo", isSignal: true, isRequired: false, transformFunction: null }, navImg: { classPropertyName: "navImg", publicName: "navImg", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div\r\n  class=\"bg-primary p-5 flex text-white flex-col md:flex-row items-center justify-center md:justify-between gap-5\"\r\n>\r\n  <a routerLink=\"/home\"\r\n    ><img\r\n      class=\"md:max-w-90 md:ml-5\"\r\n      [src]=\"navImg()\"\r\n      alt=\"imagen del iimas logo\"\r\n  /></a>\r\n\r\n  <div>\r\n    <div class=\"drawer drawer-end\">\r\n      <input id=\"my-drawer-5\" type=\"checkbox\" class=\"drawer-toggle\" />\r\n      <div class=\"drawer-content\">\r\n        <!-- Page content here -->\r\n        <label for=\"my-drawer-5\" class=\"drawer-button btn btn-secondary\"\r\n          ><svg\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            fill=\"none\"\r\n            viewBox=\"0 0 24 24\"\r\n            stroke-width=\"1.5\"\r\n            stroke=\"currentColor\"\r\n            class=\"size-6\"\r\n          >\r\n            <path\r\n              stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\"\r\n              d=\"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5\"\r\n            />\r\n          </svg>\r\n        </label>\r\n      </div>\r\n      <div class=\"drawer-side\">\r\n        <label\r\n          for=\"my-drawer-5\"\r\n          aria-label=\"close sidebar\"\r\n          class=\"drawer-overlay\"\r\n        ></label>\r\n        <ul class=\"menu bg-base-200 min-h-full w-80 p-4 text-black\">\r\n          <!-- Sidebar content here -->\r\n\r\n          @for (item of navInfo() | keyvalue; track $index) {\r\n          <li>\r\n            <a routerLink=\"{{ item.value }}\">{{ item.key }}</a>\r\n          </li>\r\n          }\r\n          <!-- <li><a>Selector</a></li>\r\n          <li><a>Sidebar Item 2</a></li> -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: KeyValuePipe, name: "keyvalue" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NavIimasComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nav-iimas', imports: [RouterLink, KeyValuePipe], template: "<div\r\n  class=\"bg-primary p-5 flex text-white flex-col md:flex-row items-center justify-center md:justify-between gap-5\"\r\n>\r\n  <a routerLink=\"/home\"\r\n    ><img\r\n      class=\"md:max-w-90 md:ml-5\"\r\n      [src]=\"navImg()\"\r\n      alt=\"imagen del iimas logo\"\r\n  /></a>\r\n\r\n  <div>\r\n    <div class=\"drawer drawer-end\">\r\n      <input id=\"my-drawer-5\" type=\"checkbox\" class=\"drawer-toggle\" />\r\n      <div class=\"drawer-content\">\r\n        <!-- Page content here -->\r\n        <label for=\"my-drawer-5\" class=\"drawer-button btn btn-secondary\"\r\n          ><svg\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            fill=\"none\"\r\n            viewBox=\"0 0 24 24\"\r\n            stroke-width=\"1.5\"\r\n            stroke=\"currentColor\"\r\n            class=\"size-6\"\r\n          >\r\n            <path\r\n              stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\"\r\n              d=\"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5\"\r\n            />\r\n          </svg>\r\n        </label>\r\n      </div>\r\n      <div class=\"drawer-side\">\r\n        <label\r\n          for=\"my-drawer-5\"\r\n          aria-label=\"close sidebar\"\r\n          class=\"drawer-overlay\"\r\n        ></label>\r\n        <ul class=\"menu bg-base-200 min-h-full w-80 p-4 text-black\">\r\n          <!-- Sidebar content here -->\r\n\r\n          @for (item of navInfo() | keyvalue; track $index) {\r\n          <li>\r\n            <a routerLink=\"{{ item.value }}\">{{ item.key }}</a>\r\n          </li>\r\n          }\r\n          <!-- <li><a>Selector</a></li>\r\n          <li><a>Sidebar Item 2</a></li> -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }] });

/*
 * Public API Surface of nav
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NavComponent, NavIimasComponent, NavService };
//# sourceMappingURL=nav.mjs.map
