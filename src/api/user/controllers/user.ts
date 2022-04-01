import UserSchema from '../models/User'

const users = [
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

export const getAllUser = async () => {
  const users = await UserSchema.find();
  return users;
};

export const getConnectedUser = async(_, __, ctx) => {
  const { isAuth, userId, role } = ctx;
  const user = UserSchema.findById(userId);

  return user;
}

export const createUser = (_, user) => {
  console.log(user);
    users.push(user);
    return users;
}


export const updateUser = (_, data : User) => {
  console.log(data.id);
    let userToUpdate = users.filter(user => user.id === data.id)

    userToUpdate = {
      ...userToUpdate,
      ...data
    }
    return userToUpdate
}