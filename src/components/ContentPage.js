import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../reducer';
import * as actions from '../actions'
import Spinner from './Spinner';

export class ContentPage extends Component {

  constructor(props) {
    super(props);

    if (this.props.array.length === 0) this.props.fetchData();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.changeError(event.target.value);

    event.preventDefault();
  }

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

function mapStateToProps(state) {
  return {
    array: selectors.getData(state),
    error: selectors.getError(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeError: (val) => dispatch(actions.changeError(val)),
    fetchData: data => dispatch({ type: 'FETCH_DATA', payload:'' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
