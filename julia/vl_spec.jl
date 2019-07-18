spec = vl"""{
  "height": 150,
  "width": 300,
  "data": {
    "vaues": []
  },
  "selection": {
    "paintbrush": {
      "type": "multi",
      "on": "mouseover", "empty": "none"
    }
  },
  "mark": {
      "type": "rect",
      "filled": true,
      "opacity": 1.0,
      "strokeWidth": 1,
      "stroke": "white"
  },
  "encoding": {
    "column": {
      "field": "start_datetime",
      "title": null,
      "type": "ordinal",
      "timeUnit": "day"
    },
    "x": {
      "field": "start_datetime",
      "title": null,
      "type": "temporal",
      "timeUnit": "hoursminutes",
      "axis": {
        "orient": "bottom"
      }
    },
    "x2": {
    "field": "end_datetime",
      "title": null,
      "type": "temporal",
      "timeUnit": "hoursminutes"
    },
    "y": {
      "field": "location",
      "title": null,
      "type": "nominal",
      "scale": { "type": "band", "paddingInner": 0.5 }
    },
    "href": { "field": "url" },
    "color": {
      "field": "duration",
      "type": "nominal",
      "legend": null
    },
    "fillOpacity": {
      "condition": {
        "selection": "paintbrush", "value": 1.0
      },
      "value": 0.4
    },
    "tooltip": [
      {"field": "title", "type": "nominal"},
      {"field": "speaker", "title": "Speaker", "type": "nominal"},
      {"field": "location", "title": "Location", "type": "nominal"},
      {"field": "start_datetime", "title": "Date & Time", "type": "temporal", "timeUnit": "yearmonthdatehoursminutes"},
      {"field": "duration", "title": "Duration (min)", "type": "quantitative"}
    ]
  },
  "config": {
    "overlay": {
      "line": true
    },
    "scale": {
      "useUnaggregatedDomain": true
    },
    "axis": {
      "gridOpacity": 0,
      "labelFontSize": 12,
      "titleFontSize": 12
    },
    "header": {
      "labelFontSize": 15
    },
    "view": {
      "strokeOpacity": 0
    }
  }
}"""(data)
