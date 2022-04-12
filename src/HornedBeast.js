import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
      <h2>{this.props.name}</h2>
      <img src ={this.props.image_Url} alt={this.props.name} title={this.props.name}/>
      <p>{this.props.description}</p>
    </article>
    )
  }
}
export default HornedBeast;