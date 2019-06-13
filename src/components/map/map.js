import React, { Component } from 'react';
import '../../App.css';
import * as d3 from 'd3';


function getData() {
    let numItems = 20 + Math.floor(20 * Math.random())
    let data = []
    for(let i=0; i<numItems; i++) {
        let xRand = Math.random()
        let yRand = Math.random()
        let rRand = Math.random()
        data.push({
           x: xRand,
           y: yRand,
           r: rRand,
           color: 0
        })
        data.push({
           x: xRand,
           y: yRand,
           r: (rRand*.66),
           color: 1
        })    
        data.push({
           x: xRand,
           y: yRand,
           r: (rRand*.36),
           color: 0
        })             
    }
    return data
}

let colors = ['#cc0000', '#ffffff']

class Map extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: getData()
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            data: getData()
        })
    }

    render() {
        let maxRadius = 40
        let xScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.width])
        let yScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.height])
        let rScale = d3.scaleLinear().domain([0, 1]).range([0, maxRadius])

        let points = this.state.data.map(d => <circle cx={xScale(d.x)} cy={yScale(d.y)} r={rScale(d.r)} fill={colors[d.color]} />)

        return <div>
            <svg width={this.props.width} height={this.props.height}>{points}</svg>
            <div><button onClick={this.handleClick}>Update</button></div>
        </div>
    }
}

export default Map;
