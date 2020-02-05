import React, { Component } from 'react'
import { APIManager } from '../utils'

class AddMessage extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  	  user: '',
  	  messageBody: ''
  	}

  	this.handleInputChange = this.handleInputChange.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event){
  	const target = event.target
  	const name = target.name
  	const value = target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    APIManager.post('https://mymessagebo-backend.herokuapp.com/api/message', this.state, (err, response) => {
      if (err) {
      	var msg = err.message || err
      	alert(msg)
      	return
      }

      console.log(JSON.stringify(response))
    })
  }

  render(){
  	return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label">USER:</label>
          <input 
            className="form-control"
            value={this.state.user}
            type="text"
            name="user"
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label">MESSAGE BODY:</label>
          <input 
            className="form-control"
            value={this.state.messageBody}
            type="text"
            name="messageBody"
            onChange={this.handleInputChange}
          />
        </div>

        <input type="submit" value="SUBMIT"/>

      </form>
  	)
  }
}

export default AddMessage