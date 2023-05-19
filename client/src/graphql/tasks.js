import { gql } from "@apollo/client"

export const GET_TASKS = gql`
    {
        tasks{
            _id
            title
            
        }
    }
`

export const CREATE_TASK = gql`
mutation($title: String, $projectId: ID){
  createdTask(
  title: $title
  projectId: $projectId
  ) {
    _id
    title
    createdAt
  }
}
`
export const DELETE_TASK = gql`
  mutation ($id: ID!){
    deleteTask(_id: $id) {
      _id
      title
    }
}
`
