 var myChart = echarts.init(document.getElementById('pie'));

var option = {
    backgroundColor: '#FFF',

    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '50%',
            center: ['50%', '50%'],
            data:[
                {
                    value:100, 
                    name:'Javascript',
                    itemStyle:{
                        normal:{
                            color:'#FAC552'
                        }
                        
                    }
                },
                {
                    value:85, 
                    name:'HTML 5 & CSS 3',
                    itemStyle:{
                        normal:{
                            color:'#E54D26'
                        }
                        
                    }
                },{
                    value:75, 
                    name:'Vue.js',
                    itemStyle:{
                        normal:{
                            color:'#41B883'
                        }
                        
                    }
                },{
                    value:65, 
                    name:'React.js',
                    itemStyle:{
                        normal:{
                            color:'#00BDFF'
                        }
                        
                    }
                },{
                    value:55, 
                    name:'Node.js',
                    itemStyle:{
                        normal:{
                            color:'#8BC34A'
                        }
                        
                    }
                },{
                    value:50, 
                    name:'PS & AI',
                    itemStyle:{
                        normal:{
                            color:'#00448C'
                        }
                        
                    }
                }
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 150,
                    shadowColor: 'rgba(0, 0, 0, 0.15)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

myChart.setOption(option);
