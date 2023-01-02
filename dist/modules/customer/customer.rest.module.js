"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const repositories_1 = require("./repositories");
const customer_database_interface_1 = require("./repositories/customer.database.interface");
const rest_1 = require("./rest");
const services_1 = require("./services");
let CustomerModule = class CustomerModule {
};
CustomerModule = __decorate([
    (0, common_1.Module)({
        controllers: [rest_1.CustomerController],
        providers: [
            services_1.CustomerService,
            repositories_1.CustomerRepository,
            {
                provide: customer_database_interface_1.ICustomerDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('CUSTOMER'),
            },
        ],
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.rest.module.js.map