import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import spec from '../vega/schedule';

export default class ScheduleViz extends Component {

  componentDidMount() {
    console.log(spec);

    vegaEmbed('#schedule', spec, { "mode": "vega", "actions": false, "renderer": "svg"})
      .then(function (res) {
        try {
          res.view
            .run()
        } catch(error) {
          console.log("OH NO - The Schedule Viz Broke!")
          console.log(error)
        }
      })
  }

  render() {
    return(
      <div id="schedule"></div>
    )
  }
}
