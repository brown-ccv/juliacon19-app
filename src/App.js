import React, { Component } from 'react';
import Navbar from 'react-brownccv/dist/components/Navbar';
import BrownFooter from 'react-brownccv/dist/components/BrownFooter';

// import components
import AboutPage from './components/AboutPage';
import ContentPage from './components/ContentPage';

class App extends Component {
  render() {
    console.log("Public URL");
    console.log(`${process.env.PUBLIC_URL}`);
    return (
      <div className="App">
        <Navbar />
        <div className="main-content">
          <ContentPage />
        </div>
        <BrownFooter />
      </div>
    );
  }
}

export default App;
