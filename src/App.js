import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import ChatRoom from './components/chat/ChatRoom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/content/Main';
import About from './components/content/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/content.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <div className="container">
          <Route path="/" exact component={Main} />
          <Route path="/chat" component={ChatRoom} />
          <Route path="/about" component={About} />
        </div>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;