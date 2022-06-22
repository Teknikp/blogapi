import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PaintingRepository } from './painting.repository';
import { Painting } from './schemas/painting.schema';
import { UpdatePaintingDto } from './dto/update-painting.dto';

@Injectable()
export class PaintingsService {
    constructor(private readonly paintRepository: PaintingRepository) {}

    async getPaintingById(paintId: string): Promise<Painting> {
        return this.paintRepository.findOne({ paintId })
    }

    async getPaintings(): Promise<Painting[]> {
        return this.paintRepository.find({});
    }

    async createPainting(paintingId: string, paintingName: string, paintingBuyDate: string, paintingBuyPrice: number, paintingSellDate: string, paintingArtist: string, paintingSellPrice: number): Promise<Painting> {
        return this.paintRepository.create({
            paintingId: uuidv4(),
            paintingName,
            paintingBuyDate,
            paintingSellDate,
            paintingArtist,
            paintingBuyPrice,
            paintingSellPrice

        })
    }

    async updatePainting(paintingId: string, paintingUpdates: UpdatePaintingDto): Promise<Painting> {
        return this.paintRepository.findOneandUpdate({ paintingId }, paintingUpdates);
    }
}



//@Injectable()
//export class PaintingsService {
    //private paintings: Painting[]= [];

    //insertPainting(name: string, painter: string, buydate: string, selldate:string, buyprice: number, sellprice: number){
        //const ide = Date.now().toString();
        //const newPainting= new Painting(ide, name, buydate, selldate, painter, buyprice, sellprice);
        //this.paintings.push(newPainting);
        //return ide;
   // }

   // getPaintings(){
        //return [...this.paintings]
    //}
   // getSinglePainting(paintId: string){
        //const painting = this.paintings.find((prod) => prod.id === paintId);
        //if (!painting){
          //  throw new NotFoundException('This painting does not exist');
       // }
       // return {...painting}
  //  }


//}

