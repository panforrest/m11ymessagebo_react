import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class MessageRow extends Component {
  render(){
    const {
      message,
      index	
    } = this.props

    return(
      <View key={message.id}
        style={[
          styles.row
          {backgroundColor: index % 2 === 0 ? 'white': '#F3f3F7'}
          ]}	
      >
        <Text style={styles.messageText}>{message.user}: {message.messageBody}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
  	flexDirection: 'row'
  },
  messageText: {
    color: 'grey',
    fontWeight: '100'
  }
})

export default MessageRow