<script>
  import { Radar, mixins } from 'vue-chartjs'

  export default {
    name: 'ChartRadar',
    mixins: [Radar, mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        default() {
          return{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                label: 'Significant Data',
                backgroundColor: 'rgba(0,52,255,0.55)',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [10, 20, 30, 40, 50, 60]
              },
              {
                label: 'Secondary Data',
                backgroundColor: 'rgba(153,255,49,0.36)',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [25, 73, 58, 37]
              }
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
            maintainAspectRatio: false
          }
        }
      },
    },
    mounted () {
      this.renderChart(this.chartData, this.chartOptions)
    }
  }
</script>
