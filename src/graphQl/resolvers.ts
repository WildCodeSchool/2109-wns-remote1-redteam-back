import Task from "../models/Task"
import { UserQueries } from "./queries/user"
import  { ProjectQueries } from "./queries/project/index"
import { TaskQueries } from "./queries/task"
import { CommentQueries } from "./queries/comment"
import {CommentMutation} from "./mutations/comment/index"
import { UserMutation } from "./mutations/user/index"
import { TaskMutation } from "./mutations/task/index"
import {ProjectMutation } from "./mutations/project/index"


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