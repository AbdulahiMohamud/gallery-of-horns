import React from "react";
import  Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import  Image  from "react-bootstrap/Image";

class SelectedBeast extends React.Component {
  render() {
    return(
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Image src={this.props.beast.image_url} alt={this.props.beast.title}/>
        <Modal.Body>{this.props.beast.description}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>CLOSE</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  }
export default SelectedBeast;