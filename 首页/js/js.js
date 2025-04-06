 $(window).load(function(){$(".loading").fadeOut()})
$(function () {
	var myChart4 = echarts.init(document.getElementById('fb04'));
option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        orient: 'vertical',
		top:'center',
		right:'8%',
       itemWidth: 10,
        itemHeight: 10,
        data:['零销类','服务类','销售类','软件类','硬件类','其它类'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'业务分类',
            type:'pie',
			center: ['40%', '50%'],
            radius: ['40%', '50%'],
			color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:10, name:'零销类'},
                {value:20, name:'服务类'},
                {value:30, name:'销售类'},
                {value:40, name:'软件类'},
                {value:50, name:'硬件类'},
                {value:60, name:'其它类'},
            ]
        }
    ]
};
        myChart4.setOption(option4);
        window.addEventListener("resize",function(){
            myChart4.resize();
        });

})


















