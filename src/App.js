import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js'
import Header from './components/header.js'
import Good from './components/good.js'
import Bad from './components/bad.js'
import Kanye from './components/kanye.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      update: '',
      input: ''
    }
  }

  goodBot(update) {
    this.setState({update: update})
  }

  render() {
    return (
      <div>
        <Header />
        <Form update={this.state.update} goodBot={this.goodBot.bind(this)}/>
        <h2>Good Bot</h2>
        <Good update={this.state.update}/>
        <h2>Bad Bot</h2>
        <Bad input={this.state.input} />
        <h2>Kanye 5000</h2>
        <Kanye update={this.state.update}/>
      </div>
    );
  }
}

export default App;
