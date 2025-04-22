import { PartialType } from '@nestjs/mapped-types';
import { CreatePeriodoDto } from './create-periodo.dto';

//Aqui ele esta pegando tudo do create mas nao precisa usar todos
export class UpdatePeriodoDto extends PartialType(CreatePeriodoDto) {}
