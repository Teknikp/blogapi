import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Painting, PaintingDocument } from "./schemas/painting.schema";

Injectable()
export class PaintingRepository{
    constructor(@InjectModel(Painting.name) private PaintingModel: Model<PaintingDocument>){}

    async findOne(userFilterQuery: FilterQuery<Painting>): Promise<Painting>{
        return this.PaintingModel.findOne(userFilterQuery)
    }
    async find(userFilterQuery: FilterQuery<Painting>): Promise<Painting[]>{
        return this.PaintingModel.find(userFilterQuery)
    }

    async create(painting: Painting): Promise<Painting>{
        const newPainting = new this.PaintingModel(painting);
        return newPainting.save()
    }

    async findOneandUpdate(userFilterQuery: FilterQuery<Painting>, painting: Partial<Painting>): Promise<Painting>{
        return this.PaintingModel.findOneAndUpdate(userFilterQuery, painting)
    }

}