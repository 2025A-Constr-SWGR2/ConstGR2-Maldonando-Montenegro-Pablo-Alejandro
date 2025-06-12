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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraController = void 0;
const common_1 = require("@nestjs/common");
let CalculadoraController = class CalculadoraController {
    sumar(num1, num2) {
        const resultado = Number(num1) + Number(num2);
        return `Resultado: ${resultado}`;
    }
    restar(num1, num2) {
        const resultado = Number(num1) - Number(num2);
        return `Resultado: ${resultado}`;
    }
    multiplicar(num1, num2) {
        const resultado = Number(num1) * Number(num2);
        return `Resultado: ${resultado}`;
    }
    dividir(num1, num2) {
        const divisor = Number(num2);
        if (divisor === 0) {
            return 'Error: No se puede dividir por cero';
        }
        const resultado = Number(num1) / divisor;
        return `Resultado: ${resultado}`;
    }
};
exports.CalculadoraController = CalculadoraController;
__decorate([
    (0, common_1.Get)('suma'),
    __param(0, (0, common_1.Query)('num1')),
    __param(1, (0, common_1.Query)('num2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], CalculadoraController.prototype, "sumar", null);
__decorate([
    (0, common_1.Get)('resta'),
    __param(0, (0, common_1.Query)('num1')),
    __param(1, (0, common_1.Query)('num2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], CalculadoraController.prototype, "restar", null);
__decorate([
    (0, common_1.Get)('multiplicar'),
    __param(0, (0, common_1.Query)('num1')),
    __param(1, (0, common_1.Query)('num2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], CalculadoraController.prototype, "multiplicar", null);
__decorate([
    (0, common_1.Get)('dividir'),
    __param(0, (0, common_1.Query)('num1')),
    __param(1, (0, common_1.Query)('num2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], CalculadoraController.prototype, "dividir", null);
exports.CalculadoraController = CalculadoraController = __decorate([
    (0, common_1.Controller)('calculadora')
], CalculadoraController);
//# sourceMappingURL=calculadora.controller.js.map