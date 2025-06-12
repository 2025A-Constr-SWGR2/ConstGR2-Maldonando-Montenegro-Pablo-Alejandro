import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculadoraController } from './calculadora/calculadora.controller';

@Module({
  imports: [],
  controllers: [AppController, CalculadoraController],
  providers: [AppService],
})
export class AppModule {}
