<script>
  import { Pie, mixins } from 'vue-chartjs'

  export default {
    name: 'ChartPie',
    mixins: [Pie, mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        default() {
          return{
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                label: 'Significant Data',
                backgroundColor: [
                  'rgba(87,145,30,0.73)',
                  'rgba(145,31,0,0.73)',
                  'rgba(143,145,0,0.73)',
                  'rgba(0,144,145,0.73)',

                ],
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [10, 20, 30, 40]
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
                  beginAtZero: false
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
            cutoutPercentage: 50,
          }
        }
      },
    },
    mounted () {
      this.renderChart(this.chartData, this.chartOptions)
    }
  }
</script>
