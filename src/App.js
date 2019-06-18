import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
      <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Navbar />
        <div className="App">
          <div className="topContent">
            <div className="main-content">
              <Route path="/about" component={AboutPage} />
              <Route exact path="/" component={ContentPage} />
            </div>
          </div>
          <BrownFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
