import React from 'react';
import { RingLoader } from 'react-spinners';

export default class Spinner extends React.Component {

  render() {
    return (
      <div className="sweet-loading row justify-content-md-center">
        <div className="col-md-auto my-4">
          <RingLoader
            color={"#3B5B8C"}
            loading={this.props.loading}
            size={this.props.size || 50}
          />
        </div>
      </div>
    )
  }
}
