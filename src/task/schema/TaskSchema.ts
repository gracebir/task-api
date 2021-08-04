import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    completed : {type:Boolean, required:true},
})