import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_TASK, GET_TASKS } from '../../graphql/tasks'
import { useParams } from 'react-router-dom'
import { GET_PROJECT } from '../../graphql/projects'

const TaskForm = () => {
  const params = useParams()

  const [title, setTitle] = useState("")
  const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
    refetchQueries: [
      'getProject'
    ]
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      variables: {
        title: title,
        projectId: params.id
      }
    })
  }
  const handleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }
  // console.log(title)
  return (
    <div>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          required
          name="title"
          placeholder='title'
          onChange={handleChange}
        />
        <button
          disabled={!title || loading}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default TaskForm