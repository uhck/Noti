import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { TaskItemStyle, DarkThemeStyle } from './../styles/styles.js';

function TaskItem({ task, deleteTask }) {
  return (
    <GestureHandlerRootView style={TaskItemStyle.view}>
        <View style={DarkThemeStyle.statusBubbleContainer}>
          {task.status === 0 && <Image source={require('./../media/Queue-Bubble.png')} style={DarkThemeStyle.statusBubble} />}
          {task.status === 1 && <Image source={require('./../media/Ongoing-Bubble.png')} style={DarkThemeStyle.statusBubble} />}
          {task.status === 2 && <Image source={require('./../media/Complete-Bubble.png')} style={DarkThemeStyle.statusBubble} />}
        </View>
        <Text style={TaskItemStyle.text}>
          {task.text}
        </Text>
        <TouchableOpacity style={DarkThemeStyle.deleteButton}
          onPress={() => deleteTask(task.id)}
          >
          <Text style={DarkThemeStyle.text}>Delete</Text>
        </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

export default TaskItem;
