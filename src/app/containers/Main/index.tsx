import * as React from "react";
import { Grid, Responsive, Tab, Container } from "semantic-ui-react";

import Plot from "react-plotly.js";
import data1 from "./data1.json";

const TabMapper = [
  {
    title: "Conversion Rate",
    data: data1
  },
  {
    title: "Cost/Conversion",
    data: data1
  },
  {
    title: "Clicks",
    data: data1
  },
  {
    title: "Impressions",
    data: data1
  },
  {
    title: "Cost",
    data: data1
  },
  {
    title: "Conversions",
    data: data1
  },
  {
    title: "Sales Unit",
    data: data1
  },
  {
    title: "Sales Revenue",
    data: data1
  }
];

const panes = TabMapper.map(dataset => {
  return {
    menuItem: dataset.title,
    render: () => (
      <Tab.Pane>
        <Plot
          style={{ width: "100%", height: "100vh" }}
          data={dataset.data}
          layout={{ autosize: true }}
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
