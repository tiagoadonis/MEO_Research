Grafico()

function Grafico() {
	Highcharts.chart('container', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		title: {
			text: ''
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				}
			}
		},
		series: [{
			name: 'Quota',
			colorByPoint: true,
			data: [{
				name: 'Vodafone',
				y: 16.4,
				color: "#D52D1F"
			}, {
				name: 'MEO',
				y: 39.2,
				sliced: true,
				color: "#409CB8"
			}, {
				name: 'NOS',
				y: 39.4,
				color: "#000000"
			}, {
				name: 'Nowo',
				y: 5,
				color: "#D95A2A"
			}]
		}]
	});
}
