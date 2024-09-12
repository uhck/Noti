import styled from 'styled-components/native';

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
  background-color: #ff6347; /* Tomato color */
  color: #fff;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
`

const WhiteText = styled.Text `
  color: #fff;
`

export { H1Text, TaskItemView, TaskItemText, CompletedTaskText, DeleteButton, WhiteText };