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
exports.AuthLogSchema = exports.AuthLog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AuthLog = class AuthLog {
};
exports.AuthLog = AuthLog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], AuthLog.prototype, "employeeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['loggedIn', 'loggedOut'] }),
    __metadata("design:type", String)
], AuthLog.prototype, "currentStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Date)
], AuthLog.prototype, "lastLoginDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Date)
], AuthLog.prototype, "lastLogOutDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], AuthLog.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], AuthLog.prototype, "updatedAt", void 0);
exports.AuthLog = AuthLog = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AuthLog);
exports.AuthLogSchema = mongoose_1.SchemaFactory.createForClass(AuthLog);
//# sourceMappingURL=auth-log.js.map