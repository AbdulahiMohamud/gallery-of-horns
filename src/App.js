import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      img_url: '',
      description: '',

    }
  }

  openModal = (description,image,title) => {
    this.setState({
      showModal: true,
      title: title,
      img_url: image,
      description: description

    });
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <>
      <Header/>

      <Main
      data={data}
      showModal={this.state.showModal}
      openModal={this.openModal}
      hideModal={this.hideModal}
      title={this.state.title}
      img_url={this.state.img_url}
      description={this.state.description}
      />
      <SelectedBeast
      title={this.state.title}
      img_url={this.state.img_url}
      description={this.state.description}
      hideModal={this.hideModal}
      showModal={this.state.showModal}
      />


    
      <Footer/>
      
      </>
    )

  }

}

export default App;