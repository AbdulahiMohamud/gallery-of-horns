import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json';
import './Main.css';




class Main extends React.Component {
  
  render() {
    return (
      <main>
      {this.props.beast.map((element,index) => (

        <HornedBeast
        beast={element}
        key = {index}
        openModal={this.props.openModal}
        />
      ))}


      </main>
  
    )
  }
}

export default Main;
