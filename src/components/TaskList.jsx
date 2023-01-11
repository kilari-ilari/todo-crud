// komponentti import
import TaskItem from './TaskItem';

// tyylit
import styles from './TaskList.module.css';

// TaskList = propsit jotka otetaan "mukaan" app.jsx:stä
// task sort lajittelee taskit aikajärjestykseen
// id:n luontiajan mukaan, uusin ylös
const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
    return (
        <ul className={styles.tasks}>
            {tasks.sort((a, b) => b.id - a.id).map(task => (
                <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
                />
            ))
            }
        </ul>
    )
}

export default TaskList