import React, { Component } from 'react';
import Spinner from './Spinner';

export default class ContentPage extends Component {
  render(){

    return(
      <div>
        <p>I am your app</p>

        <p>I am loading forever</p>

        <Spinner loading={true} className="spinner" size={100} />
      </div>
    );
  }

}
