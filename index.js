import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks : ['laundry', 'cook food'],
      currTask : '',
      completedTasks : []
    };
    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.addCompletedTasks = this.addCompletedTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  onChange(e){
    this.setState({
      currTask : e.target.value
    })
  }

  addTask(){
    event.preventDefault();
    if(this.state.currTask){
      this.setState({
        tasks : [...this.state.tasks,this.state.currTask],
        currTask : ''
      })
    }
    else alert('Invalid task!')
  }

  cancelAdd(){
    this.setState({
      currTask : ''
    })
  }

  addCompletedTasks(index,e){
    let completedTask = this.state.tasks[index];
    this.setState({
      completedTasks : [...this.state.completedTasks,completedTask],
      tasks : this.state.tasks.filter((item) => item !== completedTask)
    })
  }

  deleteTask(index,e){
    let taskToDelete = this.state.tasks[index];
    this.setState({
      tasks : this.state.tasks.filter(item => item !== taskToDelete)
    })
  }

  render() {
    return (
      <div>
        <ul>Active task list
        {this.state.tasks.length > 0 ? this.state.tasks.map((item,index) => 
              <li key={index}>{item}  
                <button onClick={(e) => this.addCompletedTasks(index,e)}>Completed</button>
                <button onClick={e => this.deleteTask(index,e)}>Delete</button>
              </li>
        ) : null}
        </ul>
        <ul>Completed task list
          {this.state.completedTasks.length > 0 ? this.state.completedTasks.map((item,index)=> <li key={index}>{item}</li>) : null}
        </ul>
        <form onSubmit={this.addTask}>
        <label>Add your task: </label>
        <input placeholder="your task name" value={this.state.currTask} onChange={this.onChange}></input>
          <button type="submit">Submit</button>
          <button type="cancel" onClick={this.cancelAdd}>Cancel</button>
        </form>
        </div>

    );
  }
}

render(<App />, document.getElementById('root'));
