import { Controller, Injectable } from '@nestjs/common';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';

@Injectable()
export class PeriodoService {
  constructor(
    @InjectRepository(Periodo)
    private readonly repository: Repository<Periodo>,
  ){} 


  create(dto: CreatePeriodoDto) {
    const periodo = this.repository.create(dto);
    return this.repository.save(periodo);
  }

  findAll() {
    //return `Retornando todas os periodos`
    return this.repository.find();
  }

  findOne(id: string) {
    //return `Retornando o periodos`
    return this.repository.findOneBy({id});
  }

  async update(id: string, dto: UpdatePeriodoDto) {
    //return `modificando o periodos`
    const periodo = await this.repository.find();
    if (!periodo) return null;
    //this.repository.merge(periodo, dto)
    return this.repository.save(periodo)
  }

  async remove(id: string) {
    //return `removendo o periodos`
    const periodo = await this.repository.find();
    if (!periodo) return null;
    return this.repository.remove(periodo)
  }
}
