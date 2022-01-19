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
  id: string,
  name : string,
  description: string,
  project_id : string,
  status : string,
  user_id : string,
}

export const getAllTasks = () => {
  const tasks = projects.map(project => project.tasks.map(task => task))
    console.log(tasks)
    return tasks[0]
};

export const createTask = (_, task) => {
  console.log(task);
    tasksList.push(task);
    return tasksList;
}


export const updateTask = (_, data : Task) => {
  console.log(data.id);
  let taskToUpdate = tasksList.filter(task => task.id === data.id);
  taskToUpdate = {
    ...taskToUpdate, 
    ...data
  }
  return taskToUpdate;
}

export const deleteTask = (_, data: Task) => {
  const indexOfTaskToDelete = tasksList.findIndex(task => task.id === data.id);
  console.log(indexOfTaskToDelete);
  tasksList.splice(indexOfTaskToDelete, 1);
  return tasksList;
}