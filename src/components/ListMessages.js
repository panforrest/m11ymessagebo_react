import React, { Component } from 'react'
import { APIManager } from '../utils'

class ListMessages extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  	  messages: []
  	}
  }

  componentDidMount(){
  	APIManager.get('https://mymessagebo-backend.herokuapp.com/api/message', null, (err, response) => {
  	  if (err) {
  	  	const msg = err.message || err
  	  	alert(msg)
  	  	return
  	  }

  	  console.log('componentDidMount: '+JSON.stringify(response))
  	  var results = response.results
  	  this.setState({
  	  	messages: results
  	  })
  	})
  }

  render(){
  	return(
      <ul className="group-list">
        {
          this.state.messages.map((message, index) => {
          	return (
              <li key={index} className="group-list-item">
                {message.user}: {message.messageBody}
                <span className="offset-2"></span> 
              </li>
                          
          	)
          })          
        }
      </ul>
  	)
  }
}

export default ListMessages