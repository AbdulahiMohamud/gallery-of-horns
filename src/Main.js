import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json';
import './Main.css';




class Main extends React.Component {
  
  render() {
    return (
      <main>
      {this.props.data.map((element,index) => (

        <HornedBeast
        title={element.title}
        img_url={element.image_url}
        description={element.description}
        key = {index}
        openModal={this.props.openModal}
        />
      ))}


      </main>
  
    )
  }
}

export default Main;
