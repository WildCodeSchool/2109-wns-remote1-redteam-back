import { ObjectId } from 'mongoose';
import TaskSchema from '../models/Task';

const projects = [
  {
    id: "1",
    name: "projet 1",
    description: "description projet 1",
    status: "Non fini",
    start_date: "24-11-2021",
    end_date: "26-11-2021",
    advance_pourcentage: "90",
    tasks : [
      {
        id: "1",
        name: "tache1",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      },
      {
        id: "2",
        name: "tache3",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      },
      {
        id: "3",
        name: "tache4",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      }
    ]
  },
  {
    id: "2",
    name: "projet 2",
    description: "description projet 1",
    status: "Non fini",
    start_date: "24-11-2021",
    end_date: "26-11-2021",
    advance_pourcentage: "90",
    tasks : [
      {
        id: "1",
        name: "tache1",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      },
      {
        id: "2",
        name: "tache3",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      },
      {
        id: "3",
        name: "tache4",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      }
    ]
  }
]

const tasksList = [
  {
    id : "1",
    name: "tache1",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  },
  {
    id : "2",
    name: "tache3",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  },
  {
    id : "3",
    name: "tache4",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  }
]

type Task = {
  id: ObjectId,
  name : string,
  description: string,
  project_id : ObjectId,
  status : string,
  user_id : ObjectId,
}

export const getAllTasks = async () => {
  return await TaskSchema.find();
};

export const getOneTask = async (_, _id) => {
  return await TaskSchema.findOne(_id);
}

export const createTask = async (_, task : Task) => {
  return await new TaskSchema(task).save();
}


export const updateTask = (_, data : Task) => {
  return "bouuu"
}

export const deleteTask = (_, data: Task) => {
  return "bouuu"
}