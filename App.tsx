import React from 'react';
import { ScrollView } from 'react-native';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <ScrollView>
      <TaskList />
    </ScrollView>
  );
}
