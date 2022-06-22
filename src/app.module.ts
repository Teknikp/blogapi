import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { PaintingsModule } from './paintings/paintings.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PaintingsModule, MongooseModule.forRoot('mongodb+srv://tekniko:Dubuisson21@cluster0.z0ljt.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}
