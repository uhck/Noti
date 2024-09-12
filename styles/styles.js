import { StyleSheet } from 'react-native';

const TaskItemStyle = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  textCompleted: {
    textDecoration: 'lineThrough',
  },
});

const DarkThemeStyle = StyleSheet.create({
  h1: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    alignSelf: 'center',
    margin: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    color: '#fff',
    padding: 4,
    border: 'none',
    borderRadius: 4,
  }
})

export { TaskItemStyle, DarkThemeStyle };