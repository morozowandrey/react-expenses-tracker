import { useEffect } from 'react'

import Section from '../UI/Section'
import TaskForm from './TaskForm'
import useHttpRequest from '../hooks/use-http'

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttpRequest()

  const createTask = (taskText, data) => {
    const generatedId = data.name // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText }

    props.onAddTask(createdTask)
  }

  const enterTaskHandler = (taskText) => {
    sendRequest(
      {
        url: 'https://react-http-f112f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
      createTask.bind(null, taskText)
    )
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  )
}

export default NewTask
