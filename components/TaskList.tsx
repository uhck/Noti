import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import TaskItem from './TaskItem';

import { H1Text } from './../styles/styles.js';

function TaskList() {
    // State Hooks
    // TODO: Change completed to status: 0 = queue, 1 = ongoing, 2 = completed
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Doctor Appointment', completed: false, repeat: false },
      { id: 2, text: 'Meeting at School', completed: false, repeat: false },
      { id: 3, text: 'More things to do', completed: false, repeat: false },
    ]);

    const [text, setText] = useState('');

    // Function to Add Task
    function addTask() {
      const newTask = { id: Date.now(), text, completed: false, repeat: false };
      setTasks([...tasks, newTask]);
      setText('');
    }

    // Function to Delete Task
    function deleteTask(id: number) {
      setTasks(tasks.filter(task => task.id !== id));
    }

    // Function to Toggle Task Completion
    //function toggleCompleted(id: number) {
    //  setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    //}

    // Render TaskList Component
    return (
      <View>
        <H1Text>Noti</H1Text>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
          />
        ))}
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="New Task"
        />
        <Button title="Add" onPress={addTask} />
      </View>
    );
  }

export default TaskList;
