import axios from 'axios';
import React from 'react';
import NavbarComp from './component/NavbarComp';
import LandingPage from './pages/LandingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  getArtikel = () =>{
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-03-09&sortBy=publishedAt&apiKey=f96f8f4212914eef8166aecde21f3a4c')
            .then((res) => {
                // console.log(res.data)
                console.log(res.data.articles)
                this.props.ArtikelAction()
            })
            .catch((err) => console.log("err", err))
  }
  render() { 
    return (
      <>
      <NavbarComp />
      <LandingPage />
      </>
    );
  }
}

export default App;
