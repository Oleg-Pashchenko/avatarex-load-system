// TaskListContainer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskListComponent from '../components/TaskListComponent';

const TaskListContainer = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://avatarex.tech/api/v1/monitoring-system/tasks-list?start_index=0&amount=10'
                );
                alert('yes');
                setTasks(response.data);
            } catch (error) {
                alert('error');
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);

    return <TaskListComponent tasks={tasks} />;
};

export default TaskListContainer;
