import React from 'react'
import TaskCard from './TaskCard'

const TasksList = ({ tasks }) => {
    // console.log("tasks", tasks)
    return (
        <div>
            {
                tasks.map(item => 
                    <TaskCard 
                    key={item._id} 
                    task={item} />
                )
            }

        </div>
    )
}

export default TasksList