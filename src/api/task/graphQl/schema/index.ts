export const types = `
  type TaskDefs {
    name: String,
    description: String,
    project_id: String,
    status: String,
    user_id: String
  }
`

export const queries = `
  tasks: [TaskDefs]
`

export const mutation = `
  createTask(
    name: String,
    description: String,
    status: String,
    user_id: String,
    project_id: String
  ) : [TaskDefs]

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
