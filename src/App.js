import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import SelectedBeast from './SelectedBeast';
import Forms from './Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: data,
      selectedBeast: data[0]
    }
  }

  openModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast

    });
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  }
  handleFormSubmit = (e) => {
    let num = e.target.value;
    let newdata = data.filter((element)=> element.horns ===  parseInt(num));
    this.setState ({
      beast: newdata
    })
    
  }

  render() {
    return (
      <>
      <Header/>

      <Forms
        handleFormSubmit={this.handleFormSubmit}

      />

      <Main
        beast ={this.state.beast}
        data = {data} 
        openModal={this.openModal}
      />

      <SelectedBeast
        beast={this.state.selectedBeast}
        hideModal={this.hideModal}
        showModal={this.state.showModal}
      />



    
      <Footer/>
      
      </>
    )

  }

}

export default App;