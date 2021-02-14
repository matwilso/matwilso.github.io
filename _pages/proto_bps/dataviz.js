let margin = { top: 20, right: 20, bottom: 30, left: 30 },
    width = 1200 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

let tooltip = d3.select("#dataviz")
    .append("div")
    .style("opacity", 1.0)
    .attr("class", "tooltip")
    .style('position', 'absolute')
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("left", "100px")
    .style("top", "100px")
    .style("display", "none")
    .style("pointer-events", "none")


let svg = d3.select("#dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");



//let uri = "https://gist.githubusercontent.com/matwilso/1512a85578425ba36566617b27ddd7e2/raw/b9668285c710eec982c8503d89e6c660be45a629/test.json"
//let uri = "https://gist.githubusercontent.com/matwilso/1512a85578425ba36566617b27ddd7e2/raw/f02442ed8b23546fd327254c2f2c7b5fcd3df25b/test.json"
let uri = "https://gist.githubusercontent.com/matwilso/1512a85578425ba36566617b27ddd7e2/raw/d168761e3759826f2aceb9a6da60480fac57f9ed/test.json"


d3.json(uri).then(function (data) {
    console.log(data)
    var datapoints = [];
    for (var key in data.datapoints) {
        datapoints.push(data.datapoints[key])
    }
    var runs = [];
    for (var key in data.runs) {
        runs.push(key)
    }
    console.log(datapoints)

    // Create data = list of groups
    // Initialize the button
    var dropdownButton = d3.select("#dataviz")
        .append('select')

    // add the options to the button
    dropdownButton // Add a button
        .selectAll('myOptions') // Next 4 lines add 6 options = 6 colors
        .data(runs)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button


    let x = d3.scaleLinear()
        .range([0, width])
        .nice();

    let y = d3.scaleLinear()
        .range([height, 0])
        .nice();

    let xAxis = d3.axisBottom(x).ticks(8),
        yAxis = d3.axisLeft(y).ticks(8 * height / width);

    let brush = d3.brush().extent([[0, 0], [width, height]]).on("end", brushended),
        idleTimeout,
        idleDelay = 350;


    var mouseover = function (mouse, datapoint) {
        console.log(datapoint)
        let img_html = datapoint.timestep + datapoint.weight_path + "<br><img src='" + datapoint.img_path + "'></img>"

        tooltip
            .html(img_html)
            //.html(datapoint.weight_path)
            .style("left", (mouse.x + 20) + "px")
            .style("top", (mouse.y - 200) + "px")
            .transition()
            .duration(200)
            .style("display", "inline-block")
    }

    /* on mouse leave we expect to stop seeing the info */
    var mouseleave = function (d) {
        tooltip
            .transition()
            .duration(200)
            .style("display", "none")
    }

    let clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

    let xExtent = d3.extent(datapoints, function (d) { return d.x; });
    let yExtent = d3.extent(datapoints, function (d) { return d.y; });
    x.domain(d3.extent(datapoints, function (d) { return d.x; })).nice();
    y.domain(d3.extent(datapoints, function (d) { return d.y; })).nice();

    let scatter = svg.append("g")
        .attr("id", "scatterplot")
        .attr("clip-path", "url(#clip)");

    // x axis
    svg.append("g")
        .attr("class", "x axis")
        .attr('id', "axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("text")
        .style("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 8)
        .text("X Label");

    // y axis
    svg.append("g")
        .attr("class", "y axis")
        .attr('id', "axis--y")
        .call(yAxis);

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "1em")
        .style("text-anchor", "end")
        .text("Y Label");

    scatter.append("g")
        .attr("class", "brush")
        .call(brush);

    scatter.selectAll(".dot")
        .data(datapoints)
        .enter()
        .append("circle")
        .attr("class", function (d) { return "dot " + d.parent_run.slice(25).replaceAll("/", "-") })
        .attr("r", 10)
        .attr("cx", function (d) { return x(d.x); })
        .attr("cy", function (d) { return y(d.y); })
        .attr("opacity", 1)
        .attr("stroke-width", 1)
        .attr("stroke", "#000000AA")
        //.style("fill", d3.interpolateRdYlGn(-0.9))
        .style("fill", function (d) { return d3.interpolateRdYlGn(d.eval / 300.0) })
        //.style("fill", "#61a3a9")
        .on("mouseover", mouseover)
        .on("mouseout", mouseleave);

    function updateChart(option) {
        scatter.selectAll(".dot")
            .attr("opacity", 0.2)
            .attr("pointer-events", "none")

        svg.selectAll(".myline").remove()

        scatter.selectAll("." + option.replaceAll("/", "-"))
            .attr("opacity", 1.0)
            .attr("pointer-events", "all")

        var dps = data.runs[option].datapoints
        console.log(dps.length)
        for (var i = 1; i < dps.length; i++) {
            var last = data.datapoints[dps[i - 1]]
            var dp = data.datapoints[dps[i]]
            console.log('i', i, x(last.x), dp.x)
            svg.append('line')
                .style("stroke", "black")
                .style("stroke-width", 5)
                .attr("class", "myline")
                //.attr("x1", 0)
                //.attr("y1", 0)
                //.attr("x2", 200)
                //.attr("y2", 200);
                .attr("x1", x(last.x))
                .attr("y1", y(last.y))
                .attr("x2", x(dp.x))
                .attr("y2", y(dp.y));

        }
    }

    // When the button is changed, run the updateChart function
    dropdownButton.on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        console.log('update')
        updateChart(selectedOption)
    })


    function brushended({ selection }) {
        let s = selection;
        if (!s) {
            if (!idleTimeout) return idleTimeout = setTimeout(idled, idleDelay);
            x.domain(d3.extent(datapoints, function (d) { return d.x; })).nice();
            y.domain(d3.extent(datapoints, function (d) { return d.y; })).nice();
        } else {

            x.domain([s[0][0], s[1][0]].map(x.invert, x));
            y.domain([s[1][1], s[0][1]].map(y.invert, y));
            scatter.select(".brush").call(brush.move, null);
        }
        zoom();
    }

    function idled() {
        idleTimeout = null;
    }

    function zoom() {
        let t = scatter.transition().duration(750);
        svg.select("#axis--x").transition().call(xAxis);
        svg.select("#axis--y").transition().call(yAxis);
        scatter.selectAll("circle").transition()
            .attr("cx", function (d) { return x(d.x); })
            .attr("cy", function (d) { return y(d.y); });
    }

})
