import React from 'react';
import {chartUtil} from '../../utils/chart_util';


class Chart extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    //d3 code

  }

  componentDidUpdate(){
    let tempData = chartUtil(this.props.weather.list);
    console.log(tempData);
    console.log('hi')


    let svg = d3.select('#chart')
      .append('svg')
      .attr('width', 800)
      .attr('height', 400);

    //
    svg.selectAll('circle')
      .data(tempData)
      .enter()
      .append('circle')
      .attr('cx', function(d){
        return d[0]*18;
      })
      .attr('cy',function(d){
        return d[1] * 3;
      })
      .attr('r','2px')
      .attr('fill','black')
  }

  render(){
    if(!this.props.weather.list) return null;

    // let tempData = chartUtil(this.props.weather.list);
    // console.log(tempData);
    // console.log('hi')
    //
    // let svg = d3.select('#chart')
    //   .append('svg')
    //   .attr('width', 800)
    //   .attr('height', 400);
    // //
    // svg.selectAll('circle')
    //   .data(tempData)
    //   .enter()
    //   .append('circle')
    //   .attr('cx', function(d){
    //     return d[0];
    //   })
    //   .attr('cy',function(d){
    //     return d[1]
    //   })
    //   .attr('fill','black')

    return(
      <div id='chart'></div>
    )
  }
}

export default Chart;
