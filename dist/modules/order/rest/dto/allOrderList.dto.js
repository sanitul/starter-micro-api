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
exports.AllOrderResponseDto = exports.GetAllOrderQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GetAllOrderQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetAllOrderQueryDto.prototype, "shippingStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetAllOrderQueryDto.prototype, "orderStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetAllOrderQueryDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], GetAllOrderQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], GetAllOrderQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetAllOrderQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Number }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetAllOrderQueryDto.prototype, "limit", void 0);
exports.GetAllOrderQueryDto = GetAllOrderQueryDto;
class AllOrderResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AllOrderResponseDto.prototype, "orders", void 0);
exports.AllOrderResponseDto = AllOrderResponseDto;
