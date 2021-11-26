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
  id: string,
  name : string,
  description: string,
  project_id : string,
  status : string,
  user_id : string,
}

export const TaskMutation = {
  createTask: (_, task) => {
    console.log(task);
    tasksList.push(task);
    return tasksList;
  },
  updateTask: (_, data : Task) => {
    console.log(data.id);
    let taskToUpdate = tasksList.filter(task => task.id === data.id);
    taskToUpdate = {
      ...taskToUpdate, 
      ...data
    }
    return taskToUpdate;
  },
  deleteTask: (_, data: Task) => {
    const indexOfTaskToDelete = tasksList.findIndex(task => task.id === data.id);
    console.log(indexOfTaskToDelete);
    tasksList.splice(indexOfTaskToDelete, 1);
    return tasksList;
  },
}