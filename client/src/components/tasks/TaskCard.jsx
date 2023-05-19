import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_TASK } from '../../graphql/tasks'
import { GET_PROJECTS } from '../../graphql/projects'

const TaskCard = ({ task }) => {
  // console.log(task)
  const [deleteTask, { loading, error }] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject'],
  })
  const deleted = () => {
    deleteTask({
      variables: {
        id: task._id
      }
    })
  }

  return (
    <div>
      {error && <p>{error.message}</p>}
      <h1>{task.title}</h1>
      <button
        disabled={loading}
        onClick={() => deleted()}>delete</button>
    </div>
  )
}

export default TaskCard