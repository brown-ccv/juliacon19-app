import React, { Component } from 'react';
import { connect } from 'react-redux';
import vegaEmbed from 'vega-embed';
import spec from '../vega/wordCloud';
import { getScheduleHover } from '../reducer';

export class WordCloudViz extends Component {

  constructor(props) {
    super(props);

    this.view = null;
  }

  updateView(v) {
    this.view = v
  }

  componentDidMount() {
    console.log(spec);

    vegaEmbed('#wordcloud', spec, { "mode": "vega", "actions": false, "renderer": "svg"})
      .then( (res)  => {
        try {
          res.view
            .runAsync()
              .then( (view) => {
                console.log(view)
                this.updateView(view)
                // update the global state with the current mouseover
                view.addEventListener("mouseover", (name, value) => {
                  if (value && value.datum.talks) {
                    this.props.setHover(value.datum.talks)
                  } else {
                    this.props.setHover(null)
                  }
                })
              })
        } catch(error) {
          console.log("OH NO - The Word Cloud Viz Broke!")
          console.log(error)
        }
      })
  }

  componentDidUpdate() {
    console.log("schedHover ", this.props.schedHover)
    this.view
      .signal("hoverID", this.props.schedHover)
      .run()

  }

  render() {
    return(
      <div id="wordcloud"></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    schedHover: getScheduleHover(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHover: id => dispatch({type: 'CHANGE_WORD_CLOUD_HOVER', data: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordCloudViz);
