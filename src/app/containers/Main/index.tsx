import * as React from "react";
import { Component } from "react";
import {
  Grid,
  Responsive,
  Tab,
  Container,
  Table,
  Icon,
  Menu,
  Header,
  Divider,
  Image,
  Dropdown,
  Sidebar,
  Segment,
  DropdownItem
} from "semantic-ui-react";
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
import data_ntf from "./data_ntf.json";
import { select } from "d3";
import mylogo from "./nfpa logo.png";
import data_bar from "./data_bar.json";

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
  {
    active: 0,

    buttons: [
      {
        args: [
          "visible",
          [
            true,
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly",
            false
          ]
        ],
        label: "Daily",
        method: "restyle"
      },
      {
        args: [
          "visible",
          [
            false,
            true,
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly",
            false,
            "legendonly"
          ]
        ],
        label: "Monthly",
        method: "restyle"
      }
    ],
    direction: "down",

    yanchor: "top",
    x: 0.056,
    y: 1.13,
    bgcolor: "#FFFAFA",
    font: { size: 12, align: "left" },
    showactive: true,
    visible: true
  }
];

const TabMapper = [
  {
    title: "Sales: Revenue ($)",
    data: data_sales,
    x: "Date",
    y: "Dollars ($)"
  },
  {
    title: "Sales: Units",
    data: data_units,
    x: "Date",
    y: " Units"
  },

  {
    title: "Sales: Orders",
    data: data_orders,
    x: "Date",
    y: "Orders"
  },

  {
    title: "Clicks",
    data: data_clicks,
    x: "Date",
    y: "Clicks"
  },

  {
    title: "Impressions",
    data: data_impressions,
    x: "Date",
    y: "Clicks"
  },

  {
    title: "Conversions",
    data: data_conversions,
    x: "Date",
    y: "Clicks"
  },
  {
    title: "Conversion Rate (%)",
    data: data_conv_rate,
    x: "Date",
    y: "Clicks"
  },
  {
    title: "Cost",
    data: data_cost,
    x: "Date",
    y: "Clicks"
  },
  {
    title: "Cost per Conversions",
    data: data_cost_conv,
    x: "Date",
    y: "Clicks"
  },
  {
    title: "New to File",
    data: data_ntf,
    x: "Date",
    y: "New to File"
  }
];

var legend_annotations = [
  {
    x: 1.007,
    y: 1.035,
    align: "right",
    valign: "top",
    text: "Affiliate Code Groups",
    showarrow: false,
    xref: "paper",
    yref: "paper",
    xanchor: "center",
    yanchor: "top",
    font: { size: 12 }
  }
];

const TabMapper2 = [
  {
    title: "Product Groups",
    data: data_bar,
    x: "Sales ($)",
    y: "Product Groups"
  }
];

var legend_annotations = [
  {
    x: 1.007,
    y: 1.035,
    align: "right",
    valign: "top",
    text: "Affiliate Code Groups",
    showarrow: false,
    xref: "paper",
    yref: "paper",
    xanchor: "center",
    yanchor: "top",
    font: { size: 12 }
  }
];

const panes = TabMapper.map(dataset => {
  return {
    menuItem: { icon: "chart line", name: dataset.title },
    render: () => (
      <Tab.Pane>
        <Plot
          style={{ width: "100%", height: "90vh" }}
          data={dataset.data}
          layout={{
            autosize: true,
            title: dataset.title,
            legend: { bordercolor: "#b2b2b2" },
            titlefont: { size: 26, color: "#7f7f7f" },
            updatemenus: updatemenus,
            xaxis: {
              rangeselector: {
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
              },
              rangeslider: {
                visible: true
              },
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
              }
            }
          }}
          useResizeHandler={true}
        />
      </Tab.Pane>
    )
  };
});

const panes1 = TabMapper2.map(dataset => {
  return {
    menuItem: { icon: "chart line", name: dataset.title },
    render: () => (
      <Tab.Pane>
        <Plot
          style={{ width: "100%", height: "90vh" }}
          data={dataset.data}
          layout={{
            autosize: true,
            title: dataset.title,
            legend: { bordercolor: "#b2b2b2" },
            barmode: "group"
          }}
          useResizeHandler={true}
        />
      </Tab.Pane>
    )
  };
});

const TestTabs = () => (
  <Tab
    renderActiveOnly={true}
    menu={{ secondary: true, attached: true, tabular: true, pointing: true }}
    menuPosition="left"
    panes={panes}
  />
);
const TestTabs1 = () => (
  <Tab
    renderActiveOnly={true}
    menu={{ secondary: true, attached: true, tabular: true, pointing: true }}
    menuPosition="left"
    panes={panes1}
  />
);
const TestTabs2 = () => (
  <Tab
    renderActiveOnly={true}
    menu={{ tabular: true, pointing: true }}
    menuPosition="left"
    panes={panes1}
  />
);

const SelectedTab = ({ index }) => {
  switch (index) {
    case 0:
      return <TestTabs />;
    case 1:
      return <TestTabs1 />;
    case 2:
      return <TestTabs2 />;
  }
};
const options = [
  { key: 1, text: "KPI Trends", value: 1 },
  { key: 2, text: "Product Attribution", value: 2 },
  { key: 3, text: "Customer Insight", value: 3 }
];

export class Main extends React.Component {
  // add component state
  state = {
    selectedIndex: 0
  };

  componentDidMount() {}
  render() {
    return (
      <Grid columns="equal">
        <Grid.Column>
          <Dropdown
            placeholder="Select Metrics"
            fluid
            selection
            options={options}
            onClick={() => this.setState({ selectedIndex: options.value })}
          >
            {/* <Dropdown.Menu   > */}
            {/* <Dropdown.Header icon='tags' content='Select Metrics' /> */}
            {/* <Dropdown.Item text = 'KPI Trends'  onClick={()=>this.setState({selectedIndex: 0})}></Dropdown.Item> */}
            {/* <Dropdown.Item text = 'Product Attribution' onClick={()=>this.setState({selectedIndex: 1})}></Dropdown.Item> */}
            {/* <Dropdown.Item text = 'Customer Insight' onClick={()=>this.setState({selectedIndex: 2})}></Dropdown.Item> */}
            {/* </Dropdown.Menu> */}
          </Dropdown>

          <SelectedTab index={this.state.selectedIndex} />
        </Grid.Column>
      </Grid>
    );
  }
}
