import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import React, {Component} from 'react';

const data = [
    {name: 'Page A', uv: 2000},
    {name: 'Page B', uv: 2000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 2780},
    {name: 'Page E', uv: 1890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
    ];

export class LineChart extends Component{


	render () {
  	return (
    	<AreaChart width={300} height={200} data={data}
            margin={{top: 0, right: 0, left: -100, bottom: -103}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#5D47AA' fill='#8884d8' />
      </AreaChart>
    );
  }


}



const data2 = [
    {name: 'Page A', uv: 1000},
    {name: 'Page B', uv: 1500},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 1780},
    {name: 'Page E', uv: 2890},
    {name: 'Page F', uv: 1390},
    {name: 'Page G', uv: 1490},
    ];

export class LineChart2 extends Component{


	render () {
  	return (
    	<AreaChart width={300} height={200} data={data2}
            margin={{top: 0, right: 0, left: -100, bottom: -103}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#5ECCC0' fill='#5ECCC0' />
      </AreaChart>
    );
  }


}


const data3 = [
    {name: 'Page A', uv: 3000},
    {name: 'Page B', uv: 2000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 2780},
    {name: 'Page E', uv: 2890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
    ];

export class LineChart3 extends Component{


	render () {
  	return (
    	<AreaChart width={300} height={200} data={data3}
            margin={{top: 0, right: 0, left: -100, bottom: -103}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#F5238C' fill='#F5238C' />
      </AreaChart>
    );
  }


}

