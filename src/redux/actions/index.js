import constants from '../constants'

export default {

  messagesReceived: (messages) => {
  	return {
  	  type: constants.MESSAGES_RECEIVED,
  	  messages: messages
  	}
  },

  messageCreated: (message) => {
  	return {
  	  type: constants.MESSAGE_CREATED,
  	  message: message
  	}
  }
}