word_cloud_spec = """{
  "width": 900,
  "height": 350,
  "padding": 10,
  "signals": [
    {"name": "hoverID", "value": 0}
  ],

  "data": [
    {
      "name": "table",
      "values": $(word_data_json)
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "log",
      "domain": {"data": "table", "field": "count"},
      "range": {"scheme": "purpleblue"}
    }
  ],

  "marks": [
    {
      "type": "text",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "text": {"field": "text"},
          "align": {"value": "center"},
          "baseline": {"value": "alphabetic"},
          "fill": {"scale": "color", "field": "count"}
        },
        "update": {
          "fillOpacity": [
            {"test": "indexof(datum.talks, hoverID) > 0", "value": 1.0},
            {"value": 0.3}
          ]
        },
        "hover": {
          "fillOpacity": {"value": 1.0}
        }
      },
      "transform": [
        {
          "type": "wordcloud",
          "size": [{"signal": "width"}, {"signal": "height"}],
          "text": {"field": "text"},
          "font": "Helvetica Neue, Arial",
          "fontSize": {"field": "datum.count"},
          "fontSizeRange": [12, 56],
          "padding": 2
        }
      ]
    }
  ]
}"""

VegaLite.VGSpec(JSON.parse(word_cloud_spec))
