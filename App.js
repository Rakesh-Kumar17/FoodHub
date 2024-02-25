/*
<div id="parent">
<div id="child">
<h1> Heading 1 Created using React </h1>
<h2> Heading 2 Created using React </h2>
</div>
</div>



*/

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Heading 1 Created using React"),React.createElement("h2",{},"Heading 2 Created using React")]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
/*
const heading=React.createElement("h1",{id:"heading"},"Hello World using React!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/