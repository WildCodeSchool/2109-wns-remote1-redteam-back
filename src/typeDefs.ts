import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type comment {
    content : String
  }

  type project {
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    tasks : [task]
  }

  type task {
    name: String,
    description: String,
    project_id: String,
    status: String,
    user_id: String
  }

  type user {
    name: String,
    email: String,
    password: String,
    role: String,
    project_id : String
  }

  type Query {
    users: [user]
    comments : [comment]
    projects: [project]
    tasks: [task]
  }
  type Mutation {
    createComment(content : String) : [comment] 

    createProject(
      name: String,
      description: String,
      status: String
    ) : [project]

    createUser(
      name: String,
      password: String,
      email: String,
      role: String,
      project_id: String
    ) : [user]

    updateProject(id: String) : project
  }
`;

export default typeDefs;