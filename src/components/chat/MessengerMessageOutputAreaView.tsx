import React from 'react'
import MessengerMessageView from './MessengerMessageView'

// CSS
import './MessengerMessageOutputAreaView.css'

const MessengerMessageOutputAreaView = () => {
  return (
    <div>
      <MessengerMessageView id={5} messageText="Hello, I'm fine!" />
    </div>
  )
}

export default MessengerMessageOutputAreaView
