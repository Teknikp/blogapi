import { Body, Controller, Get, Patch, Param, Post } from '@nestjs/common';
import { CreatePaintingDto } from './dto/create-painting.dto';
import { UpdatePaintingDto } from './dto/update-painting.dto';
import { PaintingsModule } from './paintings.module';
import { PaintingsService } from './paintings.service';
import { Painting } from './schemas/painting.schema';



@Controller('paintings')
export class PaintingsController{
  constructor(private readonly usersService: PaintingsService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<Painting> {
    return this.usersService.getPaintingById(userId);
  }

  @Get()
  async getUsers(): Promise<Painting[]> {
      return this.usersService.getPaintings();
  }

  @Post()
  async createUser(@Body() createPaintingDto: CreatePaintingDto): Promise<Painting> {
      return this.usersService.createPainting(createPaintingDto.paintingId, createPaintingDto.paintingName, createPaintingDto.paintingBuyDate, createPaintingDto.paintingBuyPrice, createPaintingDto.paintingSellDate, createPaintingDto.paintingArtist, createPaintingDto.paintingSellPrice)
  }

  @Patch(':userId')
  async updateUser(@Param('paintingId') paintingId: string, @Body() updateUserDto: UpdatePaintingDto): Promise<Painting> {
      return this.usersService.updatePainting(paintingId, updateUserDto);
  }
}

//@Controller('paintings')
//export class PaintingsController {
  //constructor(private readonly paintingService: PaintingsService) {}
  //@Post()
  //addpainting(
    //@Body('name') paintingName: string,
    //@Body('buydate') paintingdatea: string,
    //@Body('selldate') paintingdateb: string,
    //@Body('buyprice') paintingpricea: number,
   // @Body('sellprice') paintingpriceb: number,
    //@Body('painter') paintingpainter: string,
  //) {
    //const test = this.paintingService.insertPainting(
     // paintingName,
     // paintingpainter,
     // paintingdatea,
     // paintingdateb,
      //paintingpricea,
      //paintingpriceb,
    //);
   // return { id: test };
  //}

  //@Get()
  //findPaintings(){
  //    return this.paintingService.getPaintings();
  //}

  //@Get(':id')
  //findPainting(@Param('id') prodId: string){
  //  return this.paintingService.getSinglePainting(prodId);
 // }

  
//}
