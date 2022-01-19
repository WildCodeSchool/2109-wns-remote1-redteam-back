export const types = `
  type ProjectDefs {
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    tasks : [TaskDefs]
  }
`

export const queries = `
  projects: [ProjectDefs]
`

export const mutation = `
  createProject(
    name: String,
    description: String,
    status: String
  ) : [ProjectDefs]


  updateProject( 
    id: String,
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    ): ProjectDefs

    deleteProject(
      id: String
    ) : [ProjectDefs]
`
