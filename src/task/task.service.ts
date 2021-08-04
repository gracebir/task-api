import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ITask } from "./interface/task.interface";
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<ITask>){
        
    }
}