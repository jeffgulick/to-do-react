import  { Component } from 'react'
import { nanoid } from 'nanoid'


export default class TodoInput extends Component{
    constructor(props){
        super(props)
        //sets initial state of input or text value
        this.state = {
          text: ""
        }
      }

     //this updates the text state with current input
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
        // this.setState({text: event.target.value})//another way to do it
    }

    //creates an object to pass back and save in todo array. this is the to do
    handleSubmit = (event) => {
        event.preventDefault();//prevents page from reloading

        //object to run through addItem function prop. this object gets added to the toDoItems array
        this.props.onSubmit({
            id: nanoid(6),
            text: this.state.text,
            complete: false
        });

        //this clears the text from input after submission
        this.setState({
            text: ""
        });
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    name = "text" 
                    value = {this.state.text} 
                    onChange = {this.handleChange} 
                    placeholder = "Enter To Do....." />
                </form>
                <button  onClick = {this.handleSubmit}>Submit</button>

            </div>
        )  
    }
}