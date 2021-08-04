import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ITask } from "./interface/task.interface";
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<ITask>){}

    async addTaskToDatabase(title:string){
        const taskValue = {title:title, completed: false}
        const task = await new this.taskModel(taskValue);
        return task.save();
    }

    async fetchTask(){
        return await this.taskModel.find();
    }

    async modifyTask(id:string){
        let newTask = {
            completed: true
        }

        const findTask = await this.taskModel.findById({_id:id});
        if(findTask.completed === true){
            newTask.completed = false
        } else {
            newTask.completed = true
        }

        return await this.taskModel.findByIdAndUpdate({_id:id}, newTask);
    }

    async remoteTask(id:string){
        return await this.taskModel.findByIdAndDelete({_id:id});
    }
}