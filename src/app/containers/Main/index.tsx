import * as React from "react";
import { Grid, Responsive, Tab, Container } from "semantic-ui-react";

import Plot from "react-plotly.js";

const panes = [
  { menuItem: "Conversion Rate", render: () => <Tab.Pane>Chart</Tab.Pane> },
  {
    menuItem: "Tab 2",
    render: () => (
      <Tab.Pane>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+points",
              marker: { color: "red" }
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
          ]}
          layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
        />
      </Tab.Pane>
    )
  },
  { menuItem: "Cost/Conversion", render: () => <Tab.Pane>Chart</Tab.Pane> },
  { menuItem: "Clicks", render: () => <Tab.Pane>Chart</Tab.Pane> },
  { menuItem: "Impressions", render: () => <Tab.Pane>Chart</Tab.Pane> },
  { menuItem: "Cost", render: () => <Tab.Pane>Chart</Tab.Pane> },
  { menuItem: "Conversions", render: () => <Tab.Pane>Chart</Tab.Pane> },
  { menuItem: "Sales Unit", render: () => <Tab.Pane>Chart</Tab.Pane> },
  { menuItem: "Sales Revenue", render: () => <Tab.Pane>Chart</Tab.Pane> },
  { menuItem: "Sales Orders", render: () => <Tab.Pane>Chart</Tab.Pane> }
];
const TestTabs = () => <Tab panes={panes} />;
export class Main extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Grid style={{ height: "100vh" }} verticalAlign="top">
        <Grid.Row columns={1} align="center" height="100vh">
          <Grid.Column align="top">
            <Container>
              <TestTabs />
            </Container>
          </Grid.Column>
          {/* RIGHT Side  */}
          <Responsive as={Grid.Column} {...Responsive.onlyComputer}>
            <Grid.Row>{""}</Grid.Row>
          </Responsive>
        </Grid.Row>
      </Grid>
    );
  }
}
