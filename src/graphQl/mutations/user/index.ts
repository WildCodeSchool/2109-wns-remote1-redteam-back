export const users = [
  {
    id: "2",
    name: 'Fab',
    project_id: '123345',
    role: 'admin'
  }
]

type User = {
  id: string,
  name: string,
  password: string,
  email: string,
  role: string,
  project_id: string,
}

export const UserMutation = {
  createUser: (_, user) => {
    console.log(user);
    users.push(user);
    return users;
  },
  updateUser: (_, data : User) => {
    console.log(data.id);
    let userToUpdate = users.filter(user => user.id === data.id)

    userToUpdate = {
      ...userToUpdate,
      ...data
    }
    return userToUpdate
  },
}