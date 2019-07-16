import React, { Component } from 'react';
import ScheduleViz from './ScheduleViz';
import WordCloudViz from './WordCloudViz';

export default class ContentPage extends Component {
  render(){

    return(
      <div>
        <h1>JuliaCon 2019 Talks</h1>

        <div className="my5">
          <ScheduleViz />
        </div>
        <br />
        <div className="my5">
          <WordCloudViz />
        </div>
      </div>
    );
  }

}
