import React from "react";

class Main extends React.Component {
  render() {
    return (

      <article>
        <h2>{this.props.name}</h2>
        <img src ={this.props.image_url} alt={this.props.name} title={this.props.name}/>
        <p>{this.props.description}</p>
      </article>


    )
  }
}
export default Main;