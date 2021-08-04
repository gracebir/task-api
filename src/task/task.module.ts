import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { TaskSchema } from "./schema/TaskSchema";

@Module({
    imports:[MongooseModule.forFeature([{
        name:'Task',
        schema: TaskSchema
    }])],
    controllers:[TaskController],
    providers:[TaskService],
    
})
export class TaskModule{}