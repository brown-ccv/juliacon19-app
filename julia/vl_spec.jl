vl"""{
  "data": {
    "name": "source"
  },
  "mark": "point",
  "encoding": {
    "x": {
      "timeUnit": "hours",
      "field": "start_datetime",
      "type": "temporal",
      "scale": {}
    },
    "y": {
      "field": "location",
      "type": "nominal"
    },
    "column": {
      "timeUnit": "day",
      "field": "start_datetime",
      "type": "temporal"
    },
    "size": {
      "field": "duration",
      "type": "quantitative"
    },
    "color": {
      "field": "duration",
      "type": "quantitative"
    }
  },
  "config": {
    "overlay": {
      "line": true
    },
    "scale": {
      "useUnaggregatedDomain": true
    }
  }
}"""(data)
