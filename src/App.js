import React, { Component } from 'react';

// import components
import Navbar from 'react-brownccv/dist/components/Navbar';
import BrownFooter from 'react-brownccv/dist/components/BrownFooter';
import ContentPage from './components/ContentPage';

class App extends Component {
  render() {
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
