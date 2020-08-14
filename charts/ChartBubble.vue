<script>
  import { Bubble, mixins } from 'vue-chartjs'

  export default {
    name: 'ChartBubble',
    mixins: [Bubble, mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        default() {
          return{
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                label: 'Primary Data',
                backgroundColor: 'rgba(172,0,3,0.78)',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [
                  {x: 60, y: 40, r: 5},
                  {x: 50, y: 75, r: 10},
                  {x: 22, y: 34, r: 8},
                ]
              },
              {
                label: 'Secondary Data',
                backgroundColor: 'rgba(0,172,22,0.78)',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [
                  {x: 40, y: 60, r: 15},
                  {x: 25, y: 30, r: 7},
                  {x: 38, y: 55, r: 8},
                ]
              },
              {
                label: 'Tertiary Data',
                backgroundColor: 'rgba(0,7,172,0.78)',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [
                  {x: 18, y: 25, r: 20},
                  {x: 33, y: 59, r: 28},
                  {x: 3, y: 90, r: 12},
                ]
              },


            ]
          }
        },
      },
      chartOptions: {
        type: Object,
        default() {
          return {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: true
                }
              }],
              xAxes: [ {
                gridLines: {
                  display: false
                }
              }]
            },
            legend: {
              display: true
            },
            responsive: true,
            maintainAspectRatio: false,
            radius: 50,
          }
        }
      },
    },
    mounted () {
      this.renderChart(this.chartData, this.chartOptions)
    }
  }
</script>
