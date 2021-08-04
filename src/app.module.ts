import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

// mongodb://127.0.0.1:27017/tasks

@Module({
  imports: [TaskModule,MongooseModule.forRoot(process.env.mongoUrl,{useFindAndModify:false})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
