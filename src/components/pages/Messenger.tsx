import React from 'react'
import MessageOutputArea from './../chat/MessageOutputArea'
import MessageInputArea from './../chat/MessageInputArea'

// CSS
import './Messenger.css'

const Messenger = () => {
  return (
    <div className='chat'>
      <MessageOutputArea />
      <MessageInputArea />
    </div>
  )
}

export default Messenger
