import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PaintingDocument= Painting & Document;

@Schema()
export class Painting{
    @Prop()
    paintingId: string;

    @Prop()
    paintingName: string;

    @Prop()
    paintingBuyDate: string;

    @Prop()
    paintingSellDate: string;

    @Prop()
    paintingArtist: string;

    
    @Prop()
    paintingBuyPrice: number;

    @Prop()
    paintingSellPrice: number;
}

export const PaintingSchema = SchemaFactory.createForClass(Painting)