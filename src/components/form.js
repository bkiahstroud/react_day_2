import React, { Component } from 'react';

class Form extends Component {

  handleChange(e){
    this.props.goodBot(e.target.value)
    console.log(e.target.value)
  }

  render() {
    return (
      <form>
        <input value={this.props.update} onChange={this.handleChange.bind(this)}/>
      </form>

    );
  }
}

export default Form;
