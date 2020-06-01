import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import store from './store';
import ChatRoom from './components/chat/ChatRoom';
import Header from './components/layout/Header';
// import socketIOClient from "socket.io-client";

// const ENDPOINT = "http://127.0.0.1:4000";
// let socket = socketIOClient(ENDPOINT);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <ChatRoom />
      </div>
    </Provider>
  );
}

export default App;