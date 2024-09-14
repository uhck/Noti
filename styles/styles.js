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
    flex: 2,
    fontSize: 16,
    color: '#fff',
    maxWidth: '70%',
  },
  textCompleted: {
    textDecoration: 'lineThrough',
  },
});

const DarkThemeStyle = StyleSheet.create({
  statusBubble: {
    flex: 1,
    width: 'undefined',
    height: 'undefined',
    resizeMode: 'contain',
  },
  statusBubbleContainer: {
    width: 20,
    marginLeft: 5,
  },
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
    backgroundColor: '#000',
    color: '#fff',
    padding: 4,
    borderRadius: 4,
    height: 30,
  }
})

export { TaskItemStyle, DarkThemeStyle };