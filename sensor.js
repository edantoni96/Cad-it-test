import groupData from "./group_data.js";
const body = document.querySelector("body")

body.innerHTML = "<div></div>"

async function showChart() {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const charts = [config,config,config];
  var n = 0;
  for(const count of charts) {
    var canvas = 
    `
      <div>
        <canvas id=myChart${n}></canvas>
      </div>
    `
    body.innerHTML += canvas;
    ++n;
  }
  n = 0;
  for(const chart of charts) {
    console.log(n)
    const myCHart0 = new Chart(document.getElementById(`myChart${n}`), config);
    ++n;
  }
  //const myCHart0 = new Chart(document.getElementById('myChart0'), config);
  //const myCHart2 = new Chart(document.getElementById('myChart2'), config);
}

groupData();
showChart();