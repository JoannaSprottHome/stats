
import { returnMargin } from "../margins/margins";

// MARGIN ////////////////////////////////
const marginData = {  
    top: 2.5, 
    right: 5, 
    bottom: 15, 
    left: 100, 
    width: 350,
    height: 175
};
const { width, height, top, left } = returnMargin(marginData);

// AXIS ////////////////////////////////
const xAxisParam = {
    transform: "translate(" + (left) + "," + (height + 3) + ")  "
};

const yAxisParam = {
    transform: "translate(" + left + "," + (top) + ")"
};

const yAxisTextParam = {
    transform: "rotate(-90)",
    x: 0 - (height /2),
    y: 0 + 50,
    text_anchor: "middle",
    text: "Value"    
};

const xAxisTextParam = {
    transform: "translate(" + (width/2 + 90) + "," + (height + top + 47.5) + ")", 
    text_anchor: "middle", 
    text: "Date"
};

// LINE ////////////////////////////////
const lineParam = {
    strokeColors: ["#0B575B", "#d9534f", "#82BEC0"]
};

export { 
    xAxisTextParam, 
    yAxisTextParam, 
    marginData, 
    xAxisParam, 
    yAxisParam,
    lineParam 
};