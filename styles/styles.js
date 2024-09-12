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

/*
const H1Text = styled.Text `
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`

const TaskItemView = styled.View `
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #666;
  border-radius: 4px;
`

const TaskItemText = styled.Text `
  flex: auto;
  margin-right: 8px;
  color: #fff;
`

const CompletedTaskText = styled.Text `
  text-decoration: line-through;
`
const DeleteButton = styled.TouchableOpacity `
  background-color: #ff6347;
  color: #fff;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
`

const WhiteText = styled.Text `
  color: #fff;
`
*/

export { TaskItemStyle, DarkThemeStyle };