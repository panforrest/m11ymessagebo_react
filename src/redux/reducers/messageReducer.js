import constants from '../constants'

var initialState = {
  list: []
}

export default (state=initialState, action) => {
  let updated=Object.assign([], state)
  switch(action.type){
  	case constants.MESSAGES_RECEIVED:
  	  console.log('MESSAGES_RECEIVED: '+JSON.stringify(action.messages))
  	  updated['list']=action.messages
  	  return updated

    default:
      return state
  }
}