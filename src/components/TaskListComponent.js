// TaskListComponent.js
import React from 'react';
import styles from './TaskListStyles.module.css';
import globalStyles from '../styles/globalStyles.css';

const TaskListComponent = ({ tasks }) => {
    return (
        <div className={`${globalStyles.container} ${styles.taskList}`}>
            <h2>Task List</h2>
            <ul className={styles.list}>
                {tasks.map((task) => (
                    <li key={task.id} className={styles.item}>
                        <span>{task.title}</span>
                        {/* Render other task details if needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskListComponent;
