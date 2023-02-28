import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const option={
  chart: {
    type: 'pie',
    backgroundColor:'transparent',
    borderRadius: 50
  },
  title: {
    text:"",
  },
  legend:{
    enabled:false,
  },
  plotOptions: {
    pie: {
      innerSize: '50%',
      dataLabels:{
        enabled:false,
      }
    }
  },
  tooltip:{
    backgroundColor:'#FFFFFF',
    borderColor:'#FFFFFF',
    borderRadius:20,
    style:{
      color: '#000000',
    },
    formatter(){
      return `Amount investmented <strong>$ ${this.y}</strong>`
    }
  },
  series:[{
    data: [
        {
          name: '',
          y: 150000,
          color: '#0161FF',
          showInLegend: false,
        },
        {
          name: '',
          y: 75000,
          color: '#2ecc71',
          showInLegend: false,
        },
    ]
}],
credits:{
  enabled:false,
}
};

function DoughnutChart() {
  return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  )
}

export default DoughnutChart;