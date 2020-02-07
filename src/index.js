import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './components/MessageBox';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import store from './redux/store'
import { Provider } from 'react-redux'

class App extends Component {
  render(){
  	return(
  	  <Provider store={store.configureStore()}>
        <MessageBox />
  	  </Provider>
  	)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
