import React from 'react';
import { render } from 'react-dom';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      data: []
    }
    this.setStateHandler = this.setStateHandler.bind(this);
  };

  setStateHandler(){
    var item = "setState.."
    var myArray = this.state.data.slice();
        myArray.push(item);
    this.setState({
        data: myArray
    })
  }
  
  render(){
    return(
      <div>
        <button onClick={this.setStateHandler}>Set state</button>
        <h4>State Array: {this.state.data}</h4>
      </div>
    )
  }
}








render(<App  />, document.getElementById('root'));
