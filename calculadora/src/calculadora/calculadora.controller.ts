import { Controller, Get, Query } from '@nestjs/common';

@Controller('calculadora')
export class CalculadoraController {

  @Get('suma')
  sumar(@Query('num1') num1: string, @Query('num2') num2: string): string {
    const resultado = Number(num1) + Number(num2);
    return `Resultado: ${resultado}`;
  }

  @Get('resta')
  restar(@Query('num1') num1: string, @Query('num2') num2: string): string {
    const resultado = Number(num1) - Number(num2);
    return `Resultado: ${resultado}`;
  }

  @Get('multiplicar')
  multiplicar(@Query('num1') num1: string, @Query('num2') num2: string): string {
    const resultado = Number(num1) * Number(num2);
    return `Resultado: ${resultado}`;
  }

  @Get('dividir')
  dividir(@Query('num1') num1: string, @Query('num2') num2: string): string {
    const divisor = Number(num2);
    if (divisor === 0) {
      return 'Error: No se puede dividir por cero';
    }
    const resultado = Number(num1) / divisor;
    return `Resultado: ${resultado}`;
  }
}