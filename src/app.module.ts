import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

//mongodb+srv://rachoder:Firewall12@mern.v8ddv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
@Module({
  imports: [TaskModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/task',{useFindAndModify:false})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
