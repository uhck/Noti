import React, { useState } from 'react';
import { Animated, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import TaskItem from './TaskItem';

import { DarkThemeStyle } from './../styles/styles.js';

function TaskList() {
    // State Hooks
    // TODO: Change completed to status: 0 = queue, 1 = ongoing, 2 = completed
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Build basic Noti task list', status: 2, repeat: false },
      { id: 2, text: 'Migrate from styled components to React Stylesheet', status: 2, repeat: false },
      { id: 3, text: 'Design Noti Logo and display in app', status: 2, repeat: false },
      { id: 4, text: 'Add Swipe Left/Right functionality to update task status list view', status: 1, repeat: false },
      { id: 5, text: 'Add Push Noti to set Ongoing Class and display Currently Noti', status: 0, repeat: false },
      { id: 6, text: 'Leetcode blitz', status: 1, repeat: false },
      { id: 7, text: 'Sign up for mailbox at UPS', status: 0, repeat: false },
      { id: 8, text: 'Route my mail to UPS mailbox', status: 0, repeat: false },
      { id: 9, text: '9/25 Renew auto insurance', status: 0, repeat: false },
      { id: 10, text: 'Design 3 POD sweaters: overthinker, toxica, favorite child', status: 0, repeat: false },
      { id: 11, text: 'Run ads for POD products', status: 0, repeat: false },
      { id: 12, text: 'Pick up laundry and charger from storage', status: 0, repeat: false },
    ]);

    const [text, setText] = useState('');

    // Function to Add Task
    function addTask() {
      const newTask = { id: Date.now(), text, status: 0, repeat: false };
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
        <Image source={require('./../media/NotiLogo-Dark.png')} style={DarkThemeStyle.image}/>
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
