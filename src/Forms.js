import React from "react";
import { Form } from "react-bootstrap";

class Forms extends React.Component {

 
  render () {
    return (
      <Form>
      <Form.Group>
        <Form.Label>filter by number of horns</Form.Label>
        <Form.Select onChange={this.props.handleFormSubmit}>
          <option value='0'>choose a horn</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
      </Form.Group>
    </Form>



    )

  
  }
}

export default Forms;