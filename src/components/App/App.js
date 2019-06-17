import React from 'react';
import Axios from 'axios';
import uuid from 'node-uuid';
import './App.css';
import Line from '../line/line';
import Form from '../Form/Form';

class App extends React.Component {
  state = {
    todos: [],
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  getLayout() {
    return (
      this.state.todos.map((todo) => {
        return <Line {...todo} key={uuid.v1()}/>
      })
    )
  }
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos/').then((res) => {
      console.log(res.data);
      this.setState({
        todos: res.data
      })
      })
    };
  render() {
    return (
      <div>
        {this.getLayout()}
        <Form />
      </div>
    );
  }
}

export default App;
