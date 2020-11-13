import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TodoInput from './TodoInput';
import ToDoElement from './TodoElement'

export default class App extends Component{
  constructor(props){
    super(props)
    //state values must be on the top of the tree
    this.state = {
      toDoItems: [],
      showItem: "all"
    }
  }
  
//adds new todo item to array of toDoItems. gets passed as prop onSubmit to 
//todoform and returns with object created there
  addItem = item => {
    this.setState({
      toDoItems : [...this.state.toDoItems, item]
    })
  }

  changeShowItem = (something) => {
    this.setState({
      showItem: something
    });
  }

//passed as prop.checks for which todo is clicked and changes state to complete
  changeComplete = (id) => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if(item.id === id){
          return {
            id: item.id,
            text: item.text,
            // ...item,
            complete: !item.complete
          }
        }else {
          return item;
        }
      })
    })

  }

  onDelete = (id) => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => item.id !== id)
    })
  }

  render(){
    //storing my state array into a variable so that i can show active/complete/all
    let todoList = [];

    if(this.state.showItem === "all"){
      todoList = this.state.toDoItems;
    }
    else if(this.state.showItem === "active"){
      todoList = this.state.toDoItems.filter(item => item.complete !== true)
    }
    else if(this.state.showItem === "complete"){
      todoList = this.state.toDoItems.filter(item => item.complete)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoInput onSubmit = {this.addItem} />

          <div>Todos Remaning {this.state.toDoItems.filter(item => item.complete !== true).length} </div>
          
          <div style = {{display: "flex", justifyContent: "center", padding: "10pt"}}>
            <button onClick = {() => this.changeShowItem("all")}>All</button>
            <button onClick = {() => this.changeShowItem("complete")} >Complete</button>
            <button onClick = {() => this.changeShowItem("active")}>Pending</button>
          </div>
          {todoList.map(item => (
            <ToDoElement 
              key = {item.id} //key
              toDo = {item} //the entire object. so i can do things with it in element component
              changeComplete = {()=> this.changeComplete(item.id)} 
              onDelete = {() => this.onDelete(item.id)} /> //this is what changes to complete/notcomplete
          ))}

          {/* {JSON.stringify(this.state.toDoItems)} */}
        </header>
      </div>
    );
  
  }
}
