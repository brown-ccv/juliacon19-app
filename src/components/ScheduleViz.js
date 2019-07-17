import React, { Component } from 'react';
import { connect } from 'react-redux';
import vegaEmbed from 'vega-embed';
import * as vega from 'vega';
import spec from '../vega/schedule';
import { getWordCloudHover } from '../reducer';

export class ScheduleViz extends Component {

  constructor(props) {
    super(props);
    this.view = null;
  }

  updateView(v) {
    this.view = v
  }

  componentDidMount() {


    spec.signals.push({"name": "hoverIDs", "value": []})
    spec.marks[4].marks[0].encode.update.fillOpacity.unshift({"test": "indexof(hoverIDs, datum.index) >= 0", "value": 1.0})

    console.log(spec);

    vegaEmbed('#schedule', spec, { "mode": "vega", "actions": false, "renderer": "svg", "loader": { "target": "_blank" } })
      .then((res) => {
        try {
          res.view
            .runAsync()
              .then( (view) => {
                this.updateView(view)
                console.log(view)
                // update the global state with the current mouseover
                view.addEventListener("mouseover", (name, value) => {
                  if (value && value.datum.index) {
                    this.props.setHover(value.datum.index)
                  } else {
                    this.props.setHover(null)
                  }
                })

                view.addEventListener("mouseout", (name, value) => {
                  this.props.setHover(null)
                })
              })
        } catch(error) {
          console.log("OH NO - The Schedule Viz Broke!")
          console.log(error)
        }
      })
  }

  componentDidUpdate() {
    var update = this.props.wcHover ? this.props.wcHover : []
    this.view
      .signal("hoverIDs", update)
      .run()

  }

  render() {
    return(
      <div id="schedule"></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wcHover: getWordCloudHover(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHover: id => dispatch({type: 'CHANGE_SCHEDULE_HOVER', data: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleViz);
