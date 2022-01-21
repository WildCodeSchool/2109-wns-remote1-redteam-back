import  UserQueries  from "./api/user/graphQl/queries"
import  { ProjectQueries } from "./api/project/graphQl/queries/index"
import { TaskQueries } from "./api/task/graphQl/queries"
import { CommentQueries } from "./api/comment/graphQl/queries"
import CommentMutation from "./api/comment/graphQl/mutations/index"
import  UserMutation  from "./api/user/graphQl/mutations/index"
import  TaskMutation  from "./api/task/graphQl/mutations/index"
import ProjectMutation from "./api/project/graphQl/mutations/index"


 const resolvers = {
    Query: {
      ...UserQueries,
      ...TaskQueries,
      ...CommentQueries,
      ...ProjectQueries,
    },

    Mutation: {
      ...ProjectMutation,
      ...TaskMutation,
      ...CommentMutation,
      ...UserMutation
    }
  };
 export default resolvers;