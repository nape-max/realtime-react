import React from 'react'
import MessengerMessageOutputAreaView from '../chat/MessengerMessageOutputAreaView'
import MessengerMessageInputAreaView from '../chat/MessengerMessageInputAreaView'

// CSS
import './Messenger.css'

const Messenger = () => {
  return (
    <div className='chat'>
      <MessengerMessageOutputAreaView />
      <MessengerMessageInputAreaView />
    </div>
  )
}

export default Messenger
