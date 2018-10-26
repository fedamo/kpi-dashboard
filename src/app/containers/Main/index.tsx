import * as React from "react";
import { Grid, Responsive, Tab, Container, Table } from "semantic-ui-react";
import Plot from "react-plotly.js";
import data_conv_rate from "./data_conv_rate.json";
import data_conversions from "./data_conversions.json";
import data_cost from "./data_cost.json";
import data_impressions from "./data_impressions.json";
import data_clicks from "./data_clicks.json";
import data_cost_conv from "./data_cost_conv.json";
import data_sales from "./data_sales.json";
import data_units from "./data_units.json";
import data_orders from "./data_orders.json";


var selectorOptions = {
  buttons: [
    {
      step: "month",
      stepmode: "backward",
      count: 1,
      label: "1m"
    },
    {
      step: "month",
      stepmode: "backward",
      count: 6,
      label: "6m"
    },
    {
      step: "year",
      stepmode: "todate",
      count: 1,
      label: "YTD"
    },
    {
      step: "year",
      stepmode: "backward",
      count: 1,
      label: "1y"
    },
    {
      step: "all"
    }
  ]
};


var updatemenus = [
{active: 0,
 
  buttons: [
        {
      "args": ["visible", [true, false,"legendonly", false,"legendonly", false,"legendonly", false,"legendonly", false,"legendonly", false,"legendonly", false]], 
      "label": "Daily", 
      "method": "restyle"
    }, 
    {
      "args": ["visible", [false, true,false, "legendonly",false, "legendonly",false, "legendonly",false, "legendonly",false, "legendonly",false, "legendonly"]], 
      "label": "Monthly", 
      "method": "restyle"
    }
    ],
    direction: "down", 
    
  yanchor: "top",
    x: 0.57,
    y: 1.05,
    bgcolor: '#FFFAFA',
    showactive: true,
    visible: true
}]



const TabMapper = [
  {
    title: "Sales: Revenue ($)",
    data: data_sales,
    x: 'Date',
    y: 'Dollars ($)'
    
  },
  {
    title: "Sales: Units",
    data: data_units,
    x:'Date',
    y: ' Units'
  },
 
  {
    title: "Sales: Orders",
    data: data_orders,
    x:'Date',
    y: 'Orders'
  },
  
  {
    title: "Clicks",
    data: data_clicks,
    x:'Date',
    y: 'Clicks'
  },
 
  {
    title: "Impressions",
    data: data_impressions,
    x:'Date',
    y: 'Clicks'
  },

  {
    title: "Conversions",
    data: data_conversions,
    x:'Date',
    y: 'Clicks'
  },
  {
    title: "Conversion Rate (%)",
    data: data_conv_rate,
    x:'Date',
    y: 'Clicks'
  },
  {
    title: "Cost",
    data: data_cost,
    x:'Date',
    y: 'Clicks'
  },
  {
    title: "Cost per Conversions",
    data: data_cost_conv,
    x:'Date',
    y: 'Clicks'
  }


  
];


var legend_annotations = [
  {
      x:1.067,
      y:1.035,
      align:"right",
      valign:"top",
      text:'Affiliate Code Groups',
      showarrow:false,
      xref:"paper",
      yref:"paper",
      xanchor:"center",
      yanchor:"top",
      font: {"size":14}
  }  ];




const panes = TabMapper.map(dataset => {
  return {
    menuItem: dataset.title,
    render: () => (
      <Tab.Pane>
        <Plot
          style={{ width: "100%", height: "100vh" }}
          data={dataset.data}
          layout={{autosize: true,
            title: dataset.title,
            annotations: legend_annotations,
            legend:{bordercolor:'#b2b2b2'},
            titlefont: {size: 26, color: '#7f7f7f'},
            updatemenus: updatemenus,
            xaxis: { rangeselector: selectorOptions,
                      rangeslider: {},
            
            
              //title: dataset.x|| "X Axis Default",
              titlefont: {
                family: "Courier New, monospace",
                size: 18,
                color: "#7f7f7f"
              }
            },
          
            yaxis: {
            
              titlefont: {
                family: "Courier New, monospace",
                size: 18,
                color: "#7f7f7f"
              },
            rangeslider: {
                visible : true},
            },
          
            
            }
        }
      
          useResizeHandler={true}
        />
      </Tab.Pane>
      
    )
  };
});




const TestTabs = () => <Tab panes={panes} />;
export class Main extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Grid verticalAlign="top">
        <Grid.Row columns={1} align="center">
          <Grid.Column align="top">
            <TestTabs />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
