import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import ChatRoom from './components/chat/ChatRoom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/content/Main';
import './styles/content.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Main />
        <ChatRoom />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;