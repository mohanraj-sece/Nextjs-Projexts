import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const option={
  chart: {
      type: 'areaspline',
      styleMode:true,
      backgroundColor: 'transparent',
      chartWidth:200,
      chartHeight:20
  },
  title: {
      text:'',
  },

  xAxis: {
      categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
      title:{text:"years",},
      labels:{
        step:1,
      },
      gridLineWidth:1,
      gridZIndex:2,
  },
  yAxis:{
    enabled:false,
    title:{
      text:"",
    },
    labels:{
      enabled:false,
    },
    gridLineColor:'white',
  },
  plotOptions:{
    series:{
      pointStart:2023,
      fillColor:{
        linearGradient:{x1:0,x2:0,y1:0,y2:1},
        stops:[
          [0,'rgba(0,221,111,0.65)'],
          [1,'rgba(204,255,230,0.2)']
        ]
      }
    },
    areaspline:{
      color:'#00DD6F',
    },
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