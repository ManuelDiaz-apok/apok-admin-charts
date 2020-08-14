<script>
  import { Line, mixins } from 'vue-chartjs'

  export default {
    name: 'ChartLine',
    mixins: [Line, mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        default() {
          return{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                label: 'Primary Data',
                backgroundColor: 'rgba(0,254,255,0.19)',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [60, 40, 51, 30, 12, 28]
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
            showLine: true,
          }
        }
      },
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
