import React from "react";
import {Card} from "react-bootstrap";
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: 0

    };

  }
  handelFavs = () => {
    this.setState({
      favs: this.state.favs + 1
    })
  }

  render() {
    return (
      <Card className="cards">

      <Card.Img variant="top" onClick={this.handelFavs}style={{cursor:'pointer'}} src ={this.props.image_Url} alt={this.props.name} title={this.props.name}/>
      <Card.Body>

      <Card.Title>
        {this.props.name}
        </Card.Title>

      <Card.Text>
        {this.state.favs}💖
        </Card.Text>

      <Card.Text>
        {this.props.description}
        </Card.Text>

      </Card.Body>
      </Card>
    )
  }
}
export default HornedBeast;