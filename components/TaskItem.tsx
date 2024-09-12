import React from 'react';

import { TaskItemView, TaskItemText, CompletedTaskText, DeleteButton, WhiteText } from './../styles/styles.js';

function TaskItem({ task, deleteTask }) {

  return (
    <TaskItemView>
      <TaskItemText>
        {task.text}
      </TaskItemText>
      <DeleteButton
        onPress={() => deleteTask(task.id)}
        >
        <WhiteText>Delete</WhiteText>
      </DeleteButton>
    </TaskItemView>
  );
}

export default TaskItem;
