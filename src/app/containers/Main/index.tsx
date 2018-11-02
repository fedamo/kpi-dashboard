import * as React from "react";
import { Grid, Tab, Dropdown } from "semantic-ui-react";
import Plot from "react-plotly.js";

import Config from "../../config/uiconfig.js";

const panes = Config.tabData.map((dataset, index) => {
  return {
    menuItem: { icon: "chart line", name: dataset.title },
    render: () => (
      <Tab.Pane key={index}>
        <Plot
          style={{ width: "100%", height: "90vh" }}
          data={dataset.data}
          layout={{
            autosize: true,
            title: dataset.title,
            legend: { bordercolor: "#b2b2b2" },
            titlefont: { size: 26, color: "#7f7f7f" },
            updatemenus: Config.updateMenus,
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

const panes1 = Config.tabData2.map((dataset, index) => {
  return {
    menuItem: { icon: "chart line", name: dataset.title },
    render: () => (
      <Tab.Pane key={index}>
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

const TabsArray = [
  <Tab
    renderActiveOnly={true}
    menu={{
      secondary: true,
      attached: true,
      tabular: true,
      pointing: true
    }}
    menuPosition="left"
    panes={panes}
  />,
  <Tab
    renderActiveOnly={true}
    menu={{
      secondary: true,
      attached: true,
      tabular: true,
      pointing: true
    }}
    menuPosition="left"
    panes={panes1}
  />,
  <Tab
    renderActiveOnly={true}
    menu={{ tabular: true, pointing: true }}
    menuPosition="left"
    panes={panes1}
  />
];
const dropdownTitles = [
  "KPI Trends",
  "Product Attribution",
  "Customer Insight"
];

export class Main extends React.Component {
  state = {
    selectedIndex: 0
  };

  componentDidMount() {}
  render() {
    return (
      <Grid columns="equal">
        <Grid.Column>
          <Dropdown placeholder="Select Metrics" fluid>
            <Dropdown.Menu>
              <Dropdown.Header icon="tags" content="Select Metrics" />
              {dropdownTitles.map((title, index = 0) => (
                <Dropdown.Item
                  text={title}
                  key={index}
                  onClick={() => this.setState({ selectedIndex: index })}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {TabsArray[this.state.selectedIndex]}
        </Grid.Column>
      </Grid>
    );
  }
}
