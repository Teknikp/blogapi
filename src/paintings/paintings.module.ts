import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaintingRepository } from './painting.repository';
import { PaintingsController } from './paintings.controller';
import { PaintingsService } from './paintings.service';
import { Painting, PaintingSchema } from './schemas/painting.schema';

@Module({
  controllers: [PaintingsController],
  providers: [PaintingsService, PaintingRepository],
  imports: [MongooseModule.forFeature([{name: Painting.name, schema: PaintingSchema}])]
})
export class PaintingsModule {}
