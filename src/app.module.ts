import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeriodoModule } from './periodo/periodo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 imports: [
    TypeOrmModule.forRoot({

    type : 'mongodb',
    database :'db.mongo', 
    entities : [__dirname + '/**/*.entity{.ts, .js}'],
    //nao se usa em producao para producao usa-se o migration
    synchronize : true
    }),
    
    PeriodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
