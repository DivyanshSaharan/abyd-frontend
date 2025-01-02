import React from 'react'
import Chatbox from './Chatbox';
import Sidebar from './Sidebar';
import "./Chatbot.css";
function Chatbot() {
    return (
        <div className="App" style={{ display: 'flex', width: '100vw', height: '100vh' }}>
          <div id="Navbar">
            <Sidebar />
          </div>
          <div id="chat-container">
            <Chatbox />
          </div>
        </div>
      )
}

export default Chatbot