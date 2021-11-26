import { projects } from '../../queries/project/index'


type Project = {
  id: string;
  name: string;
  description: string;
  status: string;
  start_date: string;
  end_date: string;
  advance_pourcentage: string;
} 


export const ProjectMutation = {
  createProject: (_, project) => {
    console.log(project);
    projects.push(project);
    return projects;
  },
  updateProject: (_,  data : Project) => {
    console.log(data.id);
    let projectToUpdate = projects.filter(project => project.id === data.id)

    projectToUpdate = {
      ...projectToUpdate,
      ...data
    }
    return projectToUpdate;
  },
  deleteProject : (_, data : Project) => {
    const selectIndexToDelete = projects.findIndex(project => project.id === data.id)
    projects.splice(selectIndexToDelete, 1)
  
    return projects;
  }
}