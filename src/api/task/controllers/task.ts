import { ObjectId } from 'mongoose';
import TaskSchema from '../models/Task';


type Task = {
  id: ObjectId,
  name : string,
  description: string,
  project_id : ObjectId,
  status : string,
  user_id : ObjectId,
}

export const getAllTasks = async () =>  TaskSchema.find();


export const getOneTask = async (_, _id) =>  TaskSchema.findOne(_id);


export const createTask = async (_, task : Task) =>  new TaskSchema(task).save();



export const updateTask = (_, data : Task) => {
  return "bouuu"
}

export const deleteTask = (_, data: Task) => {
  return "bouuu"
}