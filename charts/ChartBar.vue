<script>
  import { Bar, mixins } from 'vue-chartjs'

  export default {
    name: 'ChartBar',
    mixins: [Bar, mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        default() {
          return{
            labels: ['January', 'February', 'March', 'April', 'May', 'June',],
            datasets: [
              {
                label: 'Significant Data',
                backgroundColor: [
                  'rgba(0,12,162,0.85)',
                  'rgba(162,158,0,0.85)',
                  'rgba(0,162,15,0.85)',
                  'rgba(162,2,0,0.85)',
                  'rgba(161,93,162,0.85)',
                  'rgba(41,131,162,0.85)',
                ],
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [4215, 5312, 6251, 7841, 9821, 14984],
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
                  min: 0,
                  max: 15000,
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
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
