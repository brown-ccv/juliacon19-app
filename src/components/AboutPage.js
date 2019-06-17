import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../reducer';
import * as actions from '../actions';

export class AboutPage extends Component{

  render(){
    return(
      <div className="container text-left">
        <h2>YOUR APP</h2>

        <p>YOUR APP is a tool to do something.</p>

        <h4>About The Project</h4>

        <p>YOUR APP was developed by the Brown Center for Biomedical Informatics as a tool for doing things.</p>

        <p>It might have some caveats and acknowledgments.</p>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    data: selectors.getData(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: 'FETCH_DATA', payload:'' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
