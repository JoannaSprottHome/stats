import React, { Component } from 'react';
import * as shape from 'd3-shape';
import { select } from 'd3';
import { returnMargin } from "../margins/margins";
import { getcolors } from "./pieChartColorMappings";
import { addLegend } from "../legend/addLegend";
import { marginData, colorArray } from "./parameters";

const { width, height } = returnMargin(marginData);

export default class PieChart extends Component {

  constructor(props) {
    super(props);
    this.createGraph = this.createGraph.bind(this);
  }

  componentDidMount() {
    this.createGraph([ 8, 5, 13 ], this.props.svgProps.id);
  };

  createGraph(data, id) {
    const node = this.node;
    select(node).append("g");    

    let svg = select(`#${id}`),
        radius = Math.min(width, height) / 3,
        g = svg.append("g").attr("transform", "translate(" + width / 1.33 + "," + height / 1.8 + ")"),
        legendG = svg.append("g").attr("transform", "translate(" + width / 1.25 + "," + height / 1.8 + ")"); 
        const { colorMapping, colors } = getcolors(data, colorArray);

    let pie = shape.pie();
    
    let arc = shape.arc()
        .innerRadius(0)
        .outerRadius(radius);

    let arcs = g.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

    arcs.append("path")
        .attr("fill", function(d, i) {return colors(i);})
        .attr("d", arc);  
        
    addLegend(
      legendG,
      colorMapping    
    );   
  }

  render() {
    const { svgProps } = this.props;
      return (
      <div className="center">
        <h1 className="margin-top-medium">Pie Chart</h1>
        <div>
          <svg 
            ref={node => this.node = node} 
            width={svgProps.width} 
            height={svgProps.height}  
            id={svgProps.id} ></svg> 
        </div>            
      </div>
    );
  }
}
