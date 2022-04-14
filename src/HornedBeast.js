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
    this.props.openModal(this.props.beast);
  }
  


  render() {
    return (
      <Card className="cards">

      <Card.Img variant="top" onClick={this.handelFavs}style={{cursor:'pointer'}} src ={this.props.beast.image_url} alt={this.props.beast.name} title={this.props.beast.name}/>
      <Card.Body>

      <Card.Title>
        {this.props.beast.name}
        </Card.Title>

      <Card.Text>
        {this.state.favs}💖
        </Card.Text>

      <Card.Text>
        {this.props.beast.description}
        </Card.Text>

      </Card.Body>
      </Card>
    )
  }
}
export default HornedBeast;