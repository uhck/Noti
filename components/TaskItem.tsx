import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { TaskItemStyle, DarkThemeStyle } from './../styles/styles.js';

function TaskItem({ task, deleteTask }) {

  return (
    <View style={TaskItemStyle.view}>
      <Text style={TaskItemStyle.text}>
        {task.text}
      </Text>
      <TouchableOpacity style={DarkThemeStyle.deleteButton}
        onPress={() => deleteTask(task.id)}
        >
        <Text style={DarkThemeStyle.Text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TaskItem;
