import { Component, Directive, ElementRef, Injectable, Input, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleComponent = (function () {
    function SampleComponent() {
    }
    SampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sample-component',
                    template: "<h1>abc componentaa</h1>"
                },] },
    ];
    /** @nocollapse */
    SampleComponent.ctorParameters = function () { return []; };
    return SampleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5ButtonComponent = (function () {
    function Ui5ButtonComponent() {
    }
    Ui5ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui5-button',
                    template: "<button><span>{{label}}</span></button>",
                    inputs: ['label'],
                    styles: [":host{ height: 3rem; margin: 0; padding: 0.250rem 0; vertical-align: top; border: 1px solid #ababab; background-color: transparent; } :host span{ padding-left: 0.75rem; padding-right: 0.75rem; vertical-align: top; -webkit-appearance: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -webkit-background-clip: padding-box; background-clip: padding-box; box-sizing: border-box; font-family: \"72\",Arial,Helvetica,sans-serif; font-size: 0.875rem; height: 2.500rem; min-width: 2.500rem; margin: 0; padding: 0; text-align: center; position: relative; background-color: #f7f7f7; border-radius: 0.2rem; color: #346187; text-shadow: 0 0 0.125rem #ffffff; cursor: pointer; } :host span div{ display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: top; line-height: 2.375rem; }"]
                },] },
    ];
    /** @nocollapse */
    Ui5ButtonComponent.ctorParameters = function () { return []; };
    Ui5ButtonComponent.propDecorators = {
        "label": [{ type: Input },],
        "border": [{ type: Input },],
    };
    return Ui5ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5ShellComponent = (function () {
    function Ui5ShellComponent() {
    }
    Ui5ShellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui5-shell',
                    template: '<div id="app"><ui5-brandingbar></ui5-brandingbar><ng-content></ng-content></div>',
                    styles: [":host{ background: linear-gradient(to bottom,#a9c4df,#e7ecf0); margin: 0; position: absolute; width: 100%; padding: 0; height: 100%; top: 0; left: 0; } body{ width: 100%; height: 100%; margin: 0; font-family: \"72\",Arial,Helvetica,sans-serif; font-size: 1rem; } "]
                },] },
    ];
    /** @nocollapse */
    Ui5ShellComponent.ctorParameters = function () { return []; };
    return Ui5ShellComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5BrandingBarComponent = (function () {
    function Ui5BrandingBarComponent() {
    }
    Ui5BrandingBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui5-brandingbar',
                    template: "<div></div>",
                    styles: [":host{ position: absolute; left: 0; top: 0; width: 100%; height: 4px; z-index: 1; background-color: #427cac; }"]
                },] },
    ];
    /** @nocollapse */
    Ui5BrandingBarComponent.ctorParameters = function () { return []; };
    return Ui5BrandingBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5ShellCentralComponent = (function () {
    function Ui5ShellCentralComponent() {
    }
    Ui5ShellCentralComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui5-shellcentral',
                    template: '<div id="shell-central"><ng-content></ng-content></div>',
                    styles: [":host{ width: 1280px; margin-left: -640px; left: 50%; background-color: #fafafa; box-shadow: 0 0 24px rgba(0,0,0,0.15); position: absolute; height: 100%; } "]
                },] },
    ];
    /** @nocollapse */
    Ui5ShellCentralComponent.ctorParameters = function () { return []; };
    return Ui5ShellCentralComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5PageHeaderComponent = (function () {
    function Ui5PageHeaderComponent() {
    }
    Ui5PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui5-page-header',
                    template: "<div><ng-content></ng-content></div>",
                    styles: [":host{ color: #666666; text-shadow: 0 0 0.125rem #ffffff; font-family: \"72\",Arial,Helvetica,sans-serif; font-size: 1rem; white-space: nowrap; display: block; width: 100%; position: relative; height: 3rem; line-height: 3rem; color: #666666; background-color: #eff4f9; text-shadow: 0 0 0.125rem #ffffff; box-shadow: inset 0 -0.0625rem #d1e0ee; }"]
                },] },
    ];
    /** @nocollapse */
    Ui5PageHeaderComponent.ctorParameters = function () { return []; };
    return Ui5PageHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5CenterComponent = (function () {
    function Ui5CenterComponent() {
    }
    Ui5CenterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui5-center',
                    template: "<span><ng-content></ng-content></span>",
                    styles: [":host{ margin: 0 auto; position: relative; display: block; width: 100px; }"]
                },] },
    ];
    /** @nocollapse */
    Ui5CenterComponent.ctorParameters = function () { return []; };
    return Ui5CenterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5LeftDirective = (function () {
    function Ui5LeftDirective(el) {
        el.nativeElement.style.alignContent = 'left';
        el.nativeElement.style.width = 'auto';
        el.nativeElement.style.textAlign = 'center';
    }
    Ui5LeftDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[left]'
                },] },
    ];
    /** @nocollapse */
    Ui5LeftDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return Ui5LeftDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5RightDirective = (function () {
    function Ui5RightDirective(el) {
        el.nativeElement.style.alignContent = 'right';
        el.nativeElement.style.width = 'auto';
        el.nativeElement.style.textAlign = 'center';
    }
    Ui5RightDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[right]'
                },] },
    ];
    /** @nocollapse */
    Ui5RightDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return Ui5RightDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5CenterDirective = (function () {
    function Ui5CenterDirective(el) {
        el.nativeElement.style.alignContent = 'center';
        el.nativeElement.style.width = 'auto';
        el.nativeElement.style.margin = '0px auto';
        el.nativeElement.style.textAlign = 'center';
    }
    Ui5CenterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[center]',
                    exportAs: 'atcenter',
                },] },
    ];
    /** @nocollapse */
    Ui5CenterDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return Ui5CenterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleDirective = (function () {
    function SampleDirective(el) {
        this.el = el;
    }
    SampleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[sampleDirective]'
                },] },
    ];
    /** @nocollapse */
    SampleDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return SampleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    SamplePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'samplePipe'
                },] },
        { type: Injectable },
    ];
    return SamplePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleService = (function () {
    function SampleService() {
    }
    SampleService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SampleService.ctorParameters = function () { return []; };
    return SampleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ui5Module = (function () {
    function Ui5Module() {
    }
    /**
     * @return {?}
     */
    Ui5Module.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: Ui5Module,
            providers: [SampleService]
        };
    };
    Ui5Module.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SampleComponent,
                        Ui5ButtonComponent,
                        Ui5ShellComponent,
                        Ui5BrandingBarComponent,
                        Ui5ShellCentralComponent,
                        Ui5PageHeaderComponent,
                        Ui5CenterComponent,
                        Ui5CenterDirective,
                        Ui5LeftDirective,
                        Ui5RightDirective,
                        SampleDirective,
                        SamplePipe
                    ],
                    exports: [
                        SampleComponent,
                        Ui5ButtonComponent,
                        Ui5ShellComponent,
                        Ui5BrandingBarComponent,
                        Ui5ShellCentralComponent,
                        Ui5PageHeaderComponent,
                        Ui5CenterComponent,
                        Ui5CenterDirective,
                        SampleDirective,
                        SamplePipe
                    ]
                },] },
    ];
    return Ui5Module;
}());

export { Ui5Module, SampleComponent, Ui5ButtonComponent, Ui5ShellComponent, Ui5BrandingBarComponent, Ui5ShellCentralComponent, Ui5PageHeaderComponent, Ui5CenterComponent, Ui5CenterDirective, Ui5LeftDirective, Ui5RightDirective, SampleDirective, SamplePipe, SampleService };
