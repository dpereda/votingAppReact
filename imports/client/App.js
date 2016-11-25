import React, { Component } from 'react';

let hello = 'Dan,';

// let headingClick = function(){
//   console.log('hello');
// }

export default class App extends Component {
  headingClick(){
    console.log('hello');
  }

  render(){
    return(
      <h1 onClick={this.headingClick}>Hello {hello} Would you like to play a game?</h1>
    );
  }
}
