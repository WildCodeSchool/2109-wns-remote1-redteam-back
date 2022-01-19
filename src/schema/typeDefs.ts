import { gql } from 'apollo-server-express';
import * as Comment from "../api/comment/graphQl/schema"
import * as Project from "../api/project/graphQl/schema"
import * as Task from "../api/task/graphQl/schema"
import * as User from "../api/user/graphQl/schema"

const types: string[] = [];
const queries: string[] = [];
const mutations: string[] = [];

const schemas = [Comment, Project, Task, User];

schemas.forEach(schema => {
  types.push(schema.types);
  queries.push(schema.queries);
  mutations.push(schema.mutation)
})


const typeDefs = gql`
  
  ${types}

  type Query {
    ${queries}
  }
  type Mutation {
    ${mutations}
  }
`;

export default typeDefs;