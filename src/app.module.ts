import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeriodoModule } from './periodo/periodo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: true,
    }),
    PeriodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
