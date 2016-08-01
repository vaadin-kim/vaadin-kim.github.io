System.register(["@angular/core","@angular/common"],function(e,t){"use strict";var n,i,r,o,a,c=(t&&t.id,this&&this.__decorate||function(e,t,n,i){var r,o=arguments.length,a=3>o?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(3>o?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),l=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0};return{setters:[function(e){n=e},function(e){i=e}],execute:function(){console.warn("The `VaadinDatePicker` directive is deprecated. Please use `PolymerElement('vaadin-date-picker')` from the `@vaadin/angular2-polymer` npm package instead."),r=window.Polymer,o=new n.Provider(i.NG_VALUE_ACCESSOR,{useExisting:n.forwardRef(function(){return a}),multi:!0}),a=function(){function e(e,t,i){var o=this;return this._injector=i,this._initialValueSet=!1,this.onChange=function(e){},this.onTouched=function(){},this.valueChange=new n.EventEmitter(!1),r&&r.isInstance(t.nativeElement)?(this._renderer=e,this._element=t.nativeElement,void this._element.$$("paper-input-container").addEventListener("blur",function(){o._element.opened||o._element._opened||o.onTouched()})):void console.error("vaadin-date-picker has not been imported yet, please remember to import vaadin-date-picker.html in your main HTML page.")}return e.prototype.writeValue=function(e){this._renderer.setElementProperty(this._element,"value",e)},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.ngOnInit=function(){this._control=this._injector.get(i.NgControl,null)},e.prototype.valuechanged=function(e){var t=this;this.valueChange.emit(e),this._initialValueSet?this.onChange(e):this._initialValueSet=!0,null!=this._control&&setTimeout(function(){t._element.invalid=!t._control.pristine&&!t._control.valid},0)},c([n.Output(),l("design:type",n.EventEmitter)],e.prototype,"valueChange",void 0),c([n.HostListener("value-changed",["$event.detail.value"]),l("design:type",Function),l("design:paramtypes",[Object]),l("design:returntype",void 0)],e.prototype,"valuechanged",null),e=c([n.Directive({selector:"vaadin-date-picker",providers:[o]}),l("design:paramtypes",[n.Renderer,n.ElementRef,n.Injector])],e)}(),e("VaadinDatePicker",a)}}});