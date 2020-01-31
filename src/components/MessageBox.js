import React, { Component } from 'react'
import ListMessages from './ListMessages'

class MessageBox extends Component {
  render(){
  	return(
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="card">
              <div className="card-header">
                <h2>My Message Board</h2>                  
              </div>
              <div className="card-body">

              </div>
              <div className="card-footer">
                <ListMessages />
              </div>
            </div>

          </div>

        </div>
      </div>     
  	)
  }
}

export default MessageBox