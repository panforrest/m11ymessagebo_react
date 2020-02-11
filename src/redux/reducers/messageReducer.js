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

    case constants.MESSAGE_CREATED:
      console.log('MESSAGE_CREATED: '+JSON.stringify(action.message))
      let updatedList = Object.assign([], updated.list)
      updatedList.push(action.message)
      updated['list'] = updatedList
      return updated

    default:
      return state
  }
}