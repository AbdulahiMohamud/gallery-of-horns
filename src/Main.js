import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';




class Main extends React.Component {
  render() {
    return (
      <main>
      {data.map((element,index) => (

        <HornedBeast
        title={element.title}
        image_Url={element.image_url}
        description={element.description}
        key = {index}
        />
      ))}
      </main>
  
    )
  }
}

export default Main;
