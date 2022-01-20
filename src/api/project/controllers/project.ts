import { ObjectId } from 'mongoose';
import ProjectSchema from '../models/Project'


type Project = {
  _id: ObjectId;
  name: string;
  description: string;
  status: string;
  start_date: Date;
  end_date: Date;
  advance_pourcentage: number;
} 

export const getAllProject = async () => {
  return await ProjectSchema.find()
};

export const getOneProject = async (_, _id) => {
  return await ProjectSchema.findOne(_id)
}

export const createProject = async (_, project) => {
  await new ProjectSchema(project).save();
  return project;
}

export const updateProject = async (_,  data : Project) => {
  return await ProjectSchema.findOneAndUpdate(data._id, data, {new: true});
}

export const deleteProject = async (_, _id) => {
  console.log(_id);
  await ProjectSchema.findByIdAndRemove(_id);
  const projectsToReturn =  await ProjectSchema.find()  
  return projectsToReturn
}