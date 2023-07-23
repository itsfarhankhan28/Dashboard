function renderbarchat(){
  var options = {
    series: [{
    name: 'Employer: K 73,500',
    data: [10,20,30,40,50,60,70]
  }, {
    name: 'Employee: K 52,500',
    data: [20,40,60,80,100,120,140]
  }, {
    name: 'Total Interest: K 244,313',
    data: [30,60,90,120,150,180,210]
  }],
    chart: {
    type: 'bar',
    height: 250,
    stacked: true,
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'category',
    categories: [20,25,30,35,40,60,65]
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1,
    colors: ['#1D267D', '#5F85DB', '#90B8F8']
  },
  dataLabels: {
    style: {
      colors: ['#1D267D', '#5F85DB', '#90B8F8']
    }
  },
  colors:['#1D267D', '#5F85DB', '#90B8F8']
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

function renderradialchart(){
  var options = {
    series: [78],
    chart: {
    height: 130,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Average'],
  };

  var chart = new ApexCharts(document.querySelector("#radialchart1"), options);
  chart.render();
}

function renderradialchart2(){
  var options = {
    series: [95],
    chart: {
    height: 130,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Top'],
  };

  var chart = new ApexCharts(document.querySelector("#radialchart2"), options);
  chart.render();
}

function renderradialchart3(){
  var options = {
    series: [59],
    chart: {
    height: 130,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Me'],
  };

  var chart = new ApexCharts(document.querySelector("#radialchart3"), options);
  chart.render();
}

renderbarchat()
renderradialchart()
renderradialchart2()
renderradialchart3()