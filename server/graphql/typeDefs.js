import { gql } from "graphql-tag"

export const typeDefs = gql`
    type Query{
        hello: String
        projects: [Project]
        project(_id:ID!): Project
        task(_id:ID!): Task
        tasks: [Task]
    }

    type Mutation{
        createdProject(name:String, description:String): Project
        updateProject(_id: ID!, name: String!, description: String): Project
        deleteProject(_id:ID!): Project
        createdTask(title:String, projectId: ID): Task
        updateTask(_id: ID!, title: String!, projectId: ID!): Task
        deleteTask(_id: ID!): Task
    }
    type Project{
        _id: ID!
        name: String!
        description: String!
        createdAt: String
        updatedAt: String
        tasks:[Task]
    }
    type Task{
        _id: ID!
        title: String!
        project: Project
        createdAt: String
        updatedAt: String    
    }

`
// El type Task son los datos que se mostrará al cliente pero internamente el projectId esta guardado en el models