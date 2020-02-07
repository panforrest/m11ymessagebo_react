import constants from '../constants'

export default {

  messagesReceived: (messages) => {
  	return {
  	  type: constants.MESSAGES_RECEIVED,
  	  messages: messages
  	}
  }
}