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
const sequelize_typescript_1 = require("sequelize-typescript");
const crypto_1 = require("crypto");
const brand_model_1 = require("./brand.model");
let MetaModel = class MetaModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: () => (0, crypto_1.randomUUID)(),
        primaryKey: true,
    }),
    __metadata("design:type", String)
], MetaModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => brand_model_1.default),
    __metadata("design:type", String)
], MetaModel.prototype, "brandId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => brand_model_1.default),
    __metadata("design:type", brand_model_1.default)
], MetaModel.prototype, "brand", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: '' }),
    __metadata("design:type", String)
], MetaModel.prototype, "keywords", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: '' }),
    __metadata("design:type", String)
], MetaModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: '' }),
    __metadata("design:type", String)
], MetaModel.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: '' }),
    __metadata("design:type", String)
], MetaModel.prototype, "SEFN", void 0);
MetaModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Metas',
    })
], MetaModel);
exports.default = MetaModel;