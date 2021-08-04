import { Controller, Post,Get, Put, Param,Body, Delete } from '@nestjs/common'
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Post()
    addTask(@Body('title') title: string){
        return  this.taskService.addTaskToDatabase(title);  
    }

    @Get()
    getTask(){
        return this.taskService.fetchTask();
    }


    @Put(':id')
    editTask(@Param('id') id: string){
        return this.taskService.modifyTask(id);
    }


    @Delete(':id')
    deleteTask(@Param('id') id:string){
        return this.taskService.remoteTask(id);
    }
}