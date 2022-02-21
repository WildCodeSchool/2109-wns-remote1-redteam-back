export const types = `
  type ProjectDefs {
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    tasks : [TaskDefs]
    _id : ID
  }
`

export const queries = `
  projects: [ProjectDefs]
  project(_id : ID): ProjectDefs
`

export const mutation = `
  createProject(
    name: String,
    description: String,
    status: String,
    start_date: String,
    end_date: String,
  ) : ProjectDefs


  updateProject( 
    _id: String,
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    ): ProjectDefs

    deleteProject(
      _id: String
    ) : [ProjectDefs]
`
