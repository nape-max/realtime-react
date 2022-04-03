import React from 'react'

// CSS
import './MessengerMessageView.css'

interface Message {
  id: number
  messageText: string
}

const Message = (props: Message) => {
  return (
    <div className='message'>
      <p>id: {props.id}</p>
      <p>messageText: {props.messageText}</p>
    </div>
  )
}

export default Message
