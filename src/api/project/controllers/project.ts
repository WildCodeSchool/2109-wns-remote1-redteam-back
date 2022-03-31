import { ObjectId } from 'mongoose';
import ProjectSchema from '../models/Project'


type Project = {
  _id: ObjectId;
  name: string;
  description: string;
  status: string;
  start_date: string;
  end_date: string;
  advance_pourcentage: number;
} 

export const getAllProject = async (_, __, ctx) =>  { 
  console.log('CONTEXT: ', ctx);
  const projects =  await ProjectSchema.find();
  console.log(projects);
  return projects;
};

export const getOneProject = async (_, _id) => 
   ProjectSchema.findOne(_id)


export const createProject = async (_, project) => {
  const savedProject = await  new ProjectSchema({ ...project,  advance_pourcentage : 0 }).save();
  return savedProject;
}

export const updateProject = async (_,  data : Project) =>  ProjectSchema.findOneAndUpdate(data._id, data, {new: true});

export const deleteProject = async (_, _id) => {
  console.log(_id);
  await ProjectSchema.findByIdAndRemove(_id);
  const projectsToReturn =  await ProjectSchema.find()  
  return projectsToReturn
}