import React, { Component } from 'react';
import Body from './components/Body';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/App.css';

import data from './data/data.json';

const posts = data.posts;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Body posts={posts} />
      </div>
    );
  }
}

export default App;
