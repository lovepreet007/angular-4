"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GmailComponent = (function () {
    function GmailComponent() {
    }
    return GmailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GmailComponent.prototype, "data", void 0);
GmailComponent = __decorate([
    core_1.Component({
        template: "\n  <link href=\"/app/assets/css/agency.css\" rel=\"stylesheet\" />\n    <div class=\"job-ad\">\n      <h4>{{data.headline}}</h4> \n      \n      {{data.body}}\n    </div>\n  "
    })
], GmailComponent);
exports.GmailComponent = GmailComponent;
//# sourceMappingURL=gmail.component.js.map