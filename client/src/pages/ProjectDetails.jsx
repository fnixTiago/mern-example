import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_PROJECT, GET_PROJECT } from '../graphql/projects'
import TasksList from '../components/tasks/TasksList'
import TaskForm from '../components/tasks/TaskForm'

const ProjectDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { id } = params
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id
    },
    skip: !params.id
  })
  const [deleteProject, { loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_PROJECT,{
    refetchQueries:['getProjects']
  })


  const handleDelete = async () => {
    await deleteProject({
      variables: {
        id: id
      }
    }).then((res) => {
      navigate("/")

    }).catch(err => {
      console.log(error)
    })
  }


  //  skip:!params.id : espera que exista id 
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  // console.log(data)
  return (
    <div>
      {errorDelete && (
				<p>{errorDelete.message}</p>
			)}
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button
        onClick={() => handleDelete()}
      >
        {
          loadingDelete? "Deleting...":"Delete"
        }
      </button>
      <TaskForm />
      <TasksList tasks={data?.project?.tasks} />
    </div>
  )
}


export default ProjectDetails