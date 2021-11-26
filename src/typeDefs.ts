import { gql } from 'apollo-server-express';


const typeDefs = gql`
  type CommentDefs {
    id: String,
    content : String
  }

  type ProjectDefs {
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    tasks : [TaskDefs]
  }

  type TaskDefs {
    name: String,
    description: String,
    project_id: String,
    status: String,
    user_id: String
  }

  type UserDefs {
    name: String,
    email: String,
    password: String,
    role: String,
    project_id : String
  }

  type Query {
    users: [UserDefs]
    comments : [CommentDefs]
    projects: [ProjectDefs]
    tasks: [TaskDefs]
  }
  type Mutation {
    createComment(content : String) : [CommentDefs] 

    createProject(
      name: String,
      description: String,
      status: String
    ) : [ProjectDefs]

    createUser(
      name: String,
      password: String,
      email: String,
      role: String,
      project_id: String
    ) : [UserDefs]

    createTask(
      name: String,
      description: String,
      status: String,
      user_id: String,
      project_id: String
      ) : [TaskDefs]

      
    updateProject( 
      id: String,
      name: String, 
      description : String,
      status: String, 
      start_date: String,
      end_date: String,
      advance_pourcentage: Int
      ): ProjectDefs

    updateTask(
      id: String,
      name : String,
      description: String,
      project_id : String,
      status : String,
      user_id : String,
    ) : TaskDefs

    updateUser(
      id: String,
      name: String,
      password: String,
      email: String,
      role: String,
      project_id : String,
    ) : UserDefs

    deleteTask(
      id: String,
    ) : [TaskDefs]

    deleteComment(
      id: String,
    ) : [CommentDefs]

    deleteProject(
      id: String
    ) : [ProjectDefs]
  }
`;

export default typeDefs;