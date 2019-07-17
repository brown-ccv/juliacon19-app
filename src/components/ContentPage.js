import React, { Component } from 'react';
import ScheduleViz from './ScheduleViz';
import WordCloudViz from './WordCloudViz';

export default class ContentPage extends Component {
  render(){

    return(
      <div>
        <h1>What's Everyone Talking About at JuliaCon?</h1>

        <p>JuliaCon 2019 talks by time and location, or topic - hover over a point or word to explore!</p>

        <div className="my5">
          <ScheduleViz />
        </div>
        <br />
        <div className="my5">
          <WordCloudViz />
        </div>

        <div class="card">
          <h5 class="card-header">About</h5>
          <div class="card-body">
            <p class="card-text">
              This web app was developed for JuliaCon 2019 in Baltimore, MD as part of the lightning talk "Prototyping Visualizations for the Web with Vega and Julia" by <a href="https://github.com/mcmcgrath13">Mary McGrath</a>. Julia was used for web scraping, data wrangling, natural language processing, and designing visualizations (with the help of DataVoyager). Visualization specifications were then copied to this React App and interactions between the two figures added.
            </p>
            <h5 class="card-title">Resources</h5>
            <ul>
              <li><a href="https://github.com/brown-ccv/juliacon19-frontend">GitHub Repository</a></li>
              <li><a href="https://github.com/brown-ccv/react-app-starter">React Starter App</a> (based on Facebook's <a href="https://github.com/facebook/create-react-app">create-react-app</a>)</li>
              <li><a href="https://github.com/queryverse/VegaLite.jl">VegaLite.jl</a></li>
              <li><a href="https://github.com/queryverse/DataVoyager.jl">DataVoyager.jl</a></li>
              <li><a href="http://vega.github.io/">The Vega Ecosystem</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
