
var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var labels1Fifty = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

//飞扬研发历年代码行增量
var canvas2 = {
	labels : ["2019","2010","2011","2012","2013","2014"],
	datasets : [
		{
			label: "飞扬研发历年代码行增量/万行",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			scaleShowGridLines : true,
			scaleShowLabels : true,
			data : [23,27,35,43,44,73]
		}
	]
}

var canvas3 = {
	labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov","Dec"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data : [55,44,32,65,48,21,16,98,65,91,68,21]
		}
	]
}


//各语言所占比例
var canvas5 = [
		{
			value: 300,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "Red"
		},
		{
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		},
		{
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		},
		{
			value: 40,
			color: "#949FB1",
			highlight: "#A8B3C5",
			label: "Grey"
		},
		{
			value: 120,
			color: "#4D5360",
			highlight: "#616774",
			label: "Dark Grey"
		}

	];

var canvas6 = [
		{
			value: 300,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "Red"
		},
		{
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		},
		{
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		},
		{
			value: 40,
			color: "#949FB1",
			highlight: "#A8B3C5",
			label: "Grey"
		},
		{
			value: 120,
			color: "#4D5360",
			highlight: "#616774",
			label: "Dark Grey"
		}

	];




$(document).ready(function() {
	var clientWidth = document.body.clientWidth;
	var clientHeight = document.body.clientHeight;
	console.log(document.body.clientWidth);
	console.log(document.body.clientHeight);
	$.fn.fullpage({
		slidesColor: ['#232830','#7BAABE', '#4BBFC3', '#1bbc9b', '#f90', '#ef820','#1bbc9b', '#4BBFC3'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6', 'page7', 'page8'],
		resize: true, //字体是否随着窗口缩放而缩放
		scrollingSpeed: 700,  //滚动速度，单位为毫秒
		easing: 'easeInQuart',	//滚动动画方式
		navigation:	false, //	是否显示项目导航
		navigationPosition:	'right',	//项目导航的位置，可选 left 或 right
		navigationColor: '#000',//项目导航的颜色
		continuousVertical:true,	//布尔值	false	是否循环滚动，与 loopTop 及 loopBottom 不兼容

		afterRender: function(){
			$('.s1').find('h1').fadeIn(1000);
			$('.s1').find('p').delay(100).fadeIn(1200);
			$('.s1').find('.down').fadeIn(1).animate({bottom:'10%'}, 1500);
			var ctx = document.getElementById("canvas1").getContext("2d");
			window.myBar = new Chart(ctx).Bar({labels : labels1Fifty,
				datasets : [
					{	
						fillColor : "rgba(91, 144, 191, 0.3)",
						strokeColor : "rgba(91, 144, 191, 3)",
						highlightFill: "rgba(91, 144, 191, 0.3)",
						highlightStroke: "rgba(91, 144, 191, 0.3)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
				]}, {
					responsive: true,
					scaleShowGridLines : false,
					scaleShowLabels : false,
					scaleFontSize : 0,
					barValueSpacing : 1,
					scaleLineColor : "rgba(0,0,0,0)",
					barShowStroke : false
				});	
			$('#canvas1').attr('style', 'width:' + clientWidth + 'px;' + 'height:' + clientHeight + 'px');
		},

		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.s1').find('h1').fadeIn(1000);
				$('.s1').find('p').fadeIn(2000);
				$('.s1').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				var ctx = document.getElementById("canvas1").getContext("2d");
				window.myBar = new Chart(ctx).Bar({labels : labels1Fifty,
					datasets : [
					{	
						//scaleOverlay : false,
						fillColor : "rgba(91, 144, 191, 0.3)",
						strokeColor : "rgba(91, 144, 191, 3)",
						highlightFill: "rgba(91, 144, 191, 0.3)",
						highlightStroke: "rgba(91, 144, 191, 0.3)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
				]}, {
					responsive: true,
					scaleShowGridLines : false,
					scaleShowLabels : false,
					scaleFontSize : 0,
					barValueSpacing : 1,
					scaleLineColor : "rgba(0,0,0,0)",
					barShowStroke : false
				});	
			$('#canvas1').attr('style', 'width:' + clientWidth + 'px;' + 'height:' + clientHeight + 'px');
			}

			// else if(index == 2){
			// 	$('.s2').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
			// 	$('.s2').find('h1').fadeIn(1000);
			// 	if(clientWidth > 480 && clientWidth < 769) {
			// 		$('.s2').find('p').animate({left:'12%'}, 1000);
			// 	}else{
			// 		$('.s2').find('p').animate({left:'4%'}, 1000);
			// 	}
			// 	var ctx = document.getElementById("canvas2").getContext("2d");
			// 		window.myLine = new Chart(ctx).Line(canvas2, {
			// 			responsive: true,
			// 			scaleShowGridLines : false,
			// 			bezierCurve : false,
			// 			scaleLineColor : "rgba(255,255,255,.5)",
			// 			scaleFontColor : "rgba(255,255,255,.5)",
			// 	});
			// 		$('#canvas2').attr('style', 'width:' + clientWidth + 'px;' + 'height:' + clientHeight + 'px');
			// 	// if(clientWidth < 768) {
			// 	// 	$('#canvas2').attr('style', 'width:' + clientWidth * 0.9 + 'px');
			// 	// }	

			// }

			// else if(index == 3){
			// 	$('.s3').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
			// 	$('.s3').find('h1').fadeIn(1000);
			// 	$('.s3').find('p').animate({right:'1%'}, 1000);
			// 	var ctx = document.getElementById("canvas3").getContext("2d");
			// 	window.myBar = new Chart(ctx).Bar(canvas3, {
			// 			responsive : true,
			// 			scaleShowGridLines : false,
			// 			bezierCurve : false,
			// 			scaleLineColor : "rgba(255,255,255,.5)",
			// 			scaleFontColor : "rgba(255,255,255,.5)",
			// 	});
			// 	//var width = clientWidth * 0.9;
			// 	//$('#canvas3').attr('style', 'width:' + width + 'px;');
			// }

			// else if(index == 4){
			// 	$('.s4').find('.content').animate({bottom:'15%'}, 1000);
			// 	$('.s4').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
			// 	$('.s4').find('.title').fadeIn(1000);
			// }

			// else if(index == 5){
			// 	$('.s5').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
			// 	$('.s5').find('h1').fadeIn(1000);
			// 	$('.s5').find('p').animate({left:'4%'}, 1000);
			// 	var ctx = document.getElementById("canvas5").getContext("2d");
			// 	window.myPie = new Chart(ctx).Pie(canvas5);
			// }
			// else if(index == 6){
			// 	$('.s6').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
			// 	$('.s6').find('h1').fadeIn(1000);
			// 	$('.s6').find('p').animate({right:'1%'}, 1000);
			// 	var ctx = document.getElementById("canvas6").getContext("2d");
			// 	window.myDoughnut = new Chart(ctx).Doughnut(canvas6);
			// 	//$('#canvas6').attr('style', 'width:' + clientWidth + 'px;' + 'height:' + clientHeight + 'px');
			// }
			// else if(index ==7){
			// 	$('.s7').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
			// }
		},

		onLeave: function(index, direction){
			if(index == 1){
				$('.s1').find('h1').fadeOut(2000);
				$('.s1').find('p').fadeOut(1000);
				$('.s1').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			}
			// else if(index ==2){
			// 	$('.s2').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			// 	$('.s2').find('h1').fadeOut(1000);
			// 	$('.s2').find('p').animate({left:'-50%'}, 1000);
			// }
			// else if(index == 3){
			// 	$('.s3').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			// 	$('.s3').find('h1').fadeOut(1000);
			// 	$('.s3').find('p').animate({right:'-50%'}, 1000);
			// }
			// else if(index == 4){
			// 	$('.s4').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			// 	$('.s4').find('.content').animate({bottom:'-15%'}, 1500);
			// 	$('.s4').find('.title').fadeOut(1000);
			// }
			// else if(index == 5){

			// 	$('.s5').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			// 	$('.s5').find('h1').fadeOut(1000);
			// 	$('.s5').find('p').animate({left:'-50%'}, 1000);
			// }
			// else if(index ==6){
			// 	$('.s6').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			// 	$('.s6').find('h1').fadeOut(1000);
			// 	$('.s6').find('p').animate({right:'-50%'}, 1000);
			// }
			// else if(index ==7){
			// 	$('.s7').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			// }
			// else if(index == 8){
			// 	//$('.s8').find('.down').animate({bottom:'0'}, 1000).fadeOut(1).animate({bottom:'-50%'}, 1);
			// }
		}

	});
});