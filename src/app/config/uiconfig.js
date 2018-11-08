import data_conv_rate from '../data/data_conv_rate.json';
import data_conversions from '../data/data_conversions.json';
import data_cost from '../data/data_cost.json';
import data_impressions from '../data/data_impressions.json';
import data_clicks from '../data/data_clicks.json';
import data_cost_conv from '../data/data_cost_conv.json';
import data_sales from '../data/data_sales.json';
import data_units from '../data/data_units.json';
import data_orders from '../data/data_orders.json';
import data_ntf from '../data/data_ntf.json';
import data_bar from '../data/data_bar.json';
import data_bar_rev from '../data/data_bar_rev.json';

export default {
  updateMenus: [
    {
      active: 0,

      buttons: [
        {
          args: [
            'visible',
            [
              true,
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly',
              false
            ]
          ],
          label: 'Daily',
          method: 'restyle'
        },
        {
          args: [
            'visible',
            [
              false,
              true,
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly',
              false,
              'legendonly'
            ]
          ],
          label: 'Monthly',
          method: 'restyle'
        }
      ],
      direction: 'down',

      yanchor: 'top',
      x: 0.049,
      y: 1.13,
      bgcolor: '#FFFAFA',
      font: { size: 12, align: 'left' },
      showactive: true,
      visible: true
    }
  ],
  tabData2: [
    {
      title: 'Product Group Share (%)',
      data: data_bar,
      x: 'Sales (%)',
      y: 'Product Groups (%)'
    },{
      title: 'Product Group Revenue ($)',
      data: data_bar_rev,
      x: 'Sales ($)',
      y: 'Product Groups ($)'
    }
  ],
  tabData: [
    {
      title: 'Sales: Revenue ($)',
      data: data_sales,
      x: 'Date',
      y: 'Dollars ($)'
    },
    {
      title: 'Sales: Units',
      data: data_units,
      x: 'Date',
      y: ' Units'
    },

    {
      title: 'Sales: Orders',
      data: data_orders,
      x: 'Date',
      y: 'Orders'
    },

    {
      title: 'Clicks',
      data: data_clicks,
      x: 'Date',
      y: 'Clicks'
    },

    {
      title: 'Impressions',
      data: data_impressions,
      x: 'Date',
      y: 'Clicks'
    },

    {
      title: 'Conversions',
      data: data_conversions,
      x: 'Date',
      y: 'Clicks'
    },
    {
      title: 'Conversion Rate (%)',
      data: data_conv_rate,
      x: 'Date',
      y: 'Clicks'
    },
    {
      title: 'Cost',
      data: data_cost,
      x: 'Date',
      y: 'Clicks'
    },
    {
      title: 'Cost per Conversions',
      data: data_cost_conv,
      x: 'Date',
      y: 'Clicks'
    },
    {
      title: 'New to File',
      data: data_ntf,
      x: 'Date',
      y: 'New to File'
    }
  ]
};
