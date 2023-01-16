function createChart() {
    var r1 = document.getElementById("r1").value;
    var r2 = document.getElementById("r2").value;
    var r3 = document.getElementById("r3").value;

    r1 = r1.split(",");
    r2 = r2.split(",");
    r3 = r3.split(",");

    r1.push(r1[0]);
    r2.push(r2[0]);
    r3.push(r3[0]);

    // Data for first scatter polar chart
    var data1 = {
        type: "scatterpolar",
        name: "Chart 1",
        r: r1,
        theta: ["a", "b", "c", "d", "e", "a"],
        fill: "toself"
    };

    // Data for second scatter polar chart
    var data2 = {
        type: "scatterpolar",
        name: "Chart 2",
        r: r2,
        theta: ["a", "b", "c", "d", "e", "a"],
        fill: "toself"
    };

    // Data for third scatter polar chart
    var data3 = {
        type: "scatterpolar",
        name: "Chart 3",
        r: r3,
        theta: ["a", "b", "c", "d", "e", "a"],
        fill: "toself"
    };

    var data = [data1, data2, data3];

    var layout = {
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 5],
                angle: 45
            },
            angularaxis: {
                direction: "clockwise",
                period: 5
            }
        },
        showlegend: true
    };

    Plotly.newPlot("scatter-polar-chart", data, layout);
}