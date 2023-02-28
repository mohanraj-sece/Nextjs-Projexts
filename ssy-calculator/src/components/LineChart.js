import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const option={
  chart: {
      type: 'line',
      styleMode:true,
      backgroundColor: 'transparent',
      chartWidth:20,
      chartHeight:20
  },
  title: {
      text:'',
  },

  xAxis: {
      categories: ['2015', '2016', '2017', '2018', '2019', '2020']
  },
  yAxis:{
    enabled:false,
  },
  tooltip:{
    borderColor:'#FFFFFF',
    borderRadius:20,
    style:{
      color: '#000000',
    },
    formatter(){
      return `Amount investmented <strong>$ ${this.x}</strong>`
    }
  },
  legend: {
      enabled:false,
  },
  series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
  }],
  credits:{
    enabled:false,
  }
};

function LineChart() {
  
  return (
    <div >
        <HighchartsReact highcharts={Highcharts} options={option}/>
    </div>
  )
}

export default LineChart