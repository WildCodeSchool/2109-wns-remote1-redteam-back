export const types = `
  type UserDefs {
    name: String,
    email: String,
    password: String,
    role: String,
    project_id : String
  }
`

export const queries = `
  users: [UserDefs]
`

export const mutation = `
  createUser(
    name: String,
    password: String,
    email: String,
    role: String,
    project_id: String
  ) : [UserDefs]

  updateUser(
    id: String,
    name: String,
    password: String,
    email: String,
    role: String,
    project_id : String,
  ) : UserDefs

`
