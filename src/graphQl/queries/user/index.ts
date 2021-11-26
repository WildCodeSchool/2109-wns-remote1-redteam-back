import { users } from '../../mutations/user'

export const UserQueries = {
  users: () => users,
  getOneUser : () => users[0]
}