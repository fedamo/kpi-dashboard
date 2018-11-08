import * as React from "react";
import { Grid, Tab, Dropdown, Icon, Divider, Image, Segment, Container,Rail, Header, Button } from "semantic-ui-react";
import Plot from "react-plotly.js";
import mainlogo from "../../data/nfpa logo.png"

import Config from "../../config/uiconfig.js";
import { color } from "d3";

const panes = Config.tabData.map((dataset, index) => {
  return {
    menuItem: { icon: "chart line", name: dataset.title },
    render: () => (
      <Tab.Pane key={index}>
        <Plot
          style={{ width: "100%", height: "83vh" }}
          data={dataset.data}
          layout={{
            autosize: true,
            title: dataset.title,
            
            legend: { bordercolor: "#b2b2b2", font:{size:14} },
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
  if(dataset.title =='Product Group Share (%)') {
  return {
    menuItem: { icon: "chart bar outline", name: dataset.title },
    render: () => (
      <Tab.Pane key={index}>
        <Plot
          style={{ width: "100%", height: "83vh" }}
          data={dataset.data}
          layout={{
            barmode: 'stack',
            autosize: true,
            updatemenus: [{active:0}],
            title: dataset.title,
            legend: { bordercolor: "#b2b2b2", x:0.3, y:1.03, orientation:'h', font:{size:14} },
            yaxis:  {side:'left',
                    tickformat: ',.0%'
                    }
                }}
          useResizeHandler={true}
        />
      </Tab.Pane>
    )
  };}
  return {
    menuItem: { icon: "chart bar outline", name: dataset.title },
    render: () => (
      <Tab.Pane key={index}>
        <Plot
          style={{ width: "100%", height: "85vh" }}
          data={dataset.data}
          layout={{
            barmode: 'stack',
            autosize: true,
            title: dataset.title,
            legend: { bordercolor: "#b2b2b2", x:0.3, y:1.03, orientation:'h', font:{size:14} },
            yaxis:  {side:'left',
                    tickformat: ',.0'
                    }
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
      pointing: true,
    
    }}
    menuPosition="right"
    panes={panes}
    color = 'blue'
  />,
  <Tab
    renderActiveOnly={true}
    menu={{
      secondary: true,
      attached: true,
      tabular: true,
      pointing: true
    }}
    menuPosition="right"
    panes={panes1}
  />,
  <Tab
    renderActiveOnly={true}
    menu={{
      secondary: true,
      attached: true,
      tabular: true,
      pointing: true
    }}
  />
];

const dropdownTitles = [
  "KPI Trends",
  "Product Attribution"
  // ,  "Customer Insight"
];

const dropdownDesc = ['Daily and Monthly Trends of key variabes',
'Revenue by product groups'
// ,'Type of customers'
];



export class Main extends React.Component {
  state = {
    selectedIndex: 0
  };


componentDidMount() {}
render() {
  return (

   
  
 

    <Grid.Column style={{ maxWidth: '100%' }}> 
     
     <Segment attached>
     <Header color = 'red' textAlign = 'left' as = 'h2'>
     <Image square src={mainlogo} size='medium' centered /> 
     <Header.Content >Business Analytics</Header.Content>
     <Header.Subheader >PPC Dashboard</Header.Subheader>
     </Header>
     
     </Segment >
   
     
    
   
        <Dropdown  floating  placeholder ="Select Charts..."  className = 'icon' >
          <Dropdown.Menu >
          
            <Dropdown.Header content = 'Select Charts...' />
            {dropdownTitles.map((title, index = 0) => (
              <Dropdown.Item
                text={title}
                key={index}
                description = {dropdownDesc[index]}
                onClick={() => this.setState({ selectedIndex: index})}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
    
      
        
        

        {TabsArray[this.state.selectedIndex]}
       
        </Grid.Column> 
      
 
    
  
  );
}
}