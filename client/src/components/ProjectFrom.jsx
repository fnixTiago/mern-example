import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects'

const ProjectFrom = () => {
  const [datos, setDatos] = useState({
    name: "",
    description: ""
  })
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },'getProjects'
    ],
  })
  //refetchQueries:  que se van a solicitar una vez obetindo los datos, 'GetProjects' solo es un nombre 
// existen 2 formas de usar refetchQueries, ver TaskForm.jsx  
  const handlechange = (e) => {
    const { name, value } = e.target
    setDatos({
      ...datos,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createProject({
      variables: {
        name: datos.name,
        description: datos.description
      }
    })
  }
  return (
    <div>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name="name"
          placeholder='Name project'
          onChange={handlechange}
          required
        />
        <textarea
          name="description"
          cols="30"
          rows="3"
          placeholder="Description project"
          onChange={handlechange}
          required
        />
        <button
          disabled={!datos.name || !datos.description || loading}
        >Save</button>
      </form>

    </div>
  )
}

export default ProjectFrom