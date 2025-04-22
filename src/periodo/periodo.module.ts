import { Module } from '@nestjs/common';
import { PeriodoService } from './periodo.service';
import { PeriodoController } from './periodo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';

@Module({
  //configuração do typeorm
  imports: [TypeOrmModule.forFeature([Periodo])],
  controllers: [PeriodoController],
  providers: [PeriodoService],
})
export class PeriodoModule {}
