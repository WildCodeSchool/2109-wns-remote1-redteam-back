import {getAllProject, getOneProject} from "../../controllers/project"


export const ProjectQueries = {
  projects: getAllProject,
  project: getOneProject
}