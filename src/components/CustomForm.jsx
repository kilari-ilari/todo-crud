import { useState } from 'react'

// ikonit
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

    return (
        <form
            className="todo"
            // plussaa/add nappulaa painamalla tämä toteutuu eli lisää
            onSubmit= {handleFormSubmit}
            >
            <div className="wrapper">
                <input 
                type="text"
                id="task"
                className="input" 
                value={task}
                onInput={(e) => setTask(e.target.value)}
                required
                autoFocus
                maxLength={90}
                placeholder="Enter Task"
                />
                <label 
                htmlFor="task"
                className="label"
                >Enter Task</label>

            </div>
            <button className="btn"
            aria-label="Add Task"
            type="submit"
            >
            <PlusIcon />
            </button>

        </form>
    )
}

export default CustomForm