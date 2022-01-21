export const types = `
  type TaskDefs {
    name: String,
    description: String,
    project_id: ID,
    status: String,
    user_id: ID
  }
`

export const queries = `
  tasks: [TaskDefs]
  task(_id: ID): TaskDefs
`

export const mutation = `
  createTask(
    name: String,
    description: String,
    status: String,
    user_id: ID,
    project_id: ID
  ) : TaskDefs

  updateTask(
    id: String,
    name : String,
    description: String,
    project_id : String,
    status : String,
    user_id : String,
  ) : TaskDefs

  deleteTask(
    id: String,
  ) : [TaskDefs]
`
