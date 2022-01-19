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


type Project = {
  id: string;
  name: string;
  description: string;
  status: string;
  start_date: string;
  end_date: string;
  advance_pourcentage: string;
} 

export const getAllProject = () => projects;


export const createProject = (_, project) => {
  console.log(project);
  projects.push(project);
  return projects;
}

export const updateProject = (_,  data : Project) => {
  console.log(data.id);
  let projectToUpdate = projects.filter(project => project.id === data.id)

  projectToUpdate = {
    ...projectToUpdate,
    ...data
  }
  return projectToUpdate;
}

export const deleteProject = (_, data : Project) => {
  const selectIndexToDelete = projects.findIndex(project => project.id === data.id)
  projects.splice(selectIndexToDelete, 1)

  return projects;
}