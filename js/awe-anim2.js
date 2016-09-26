$(document).ready(function(){

	

function animate_2() {

	var s = Snap("#workLaptop");

	var telephone = s.select("#telephone");
	var mouse = s.select("#mouse");
	var coffee_3 = s.select("#coffee_3");
	var coffee_1 = s.select("#coffee_1");
	var info_data_1 = s.select("#info-data_1");
	var info_data_2 = s.select("#info-data_2");
	var note = s.select("#note");

	telephone.attr({transform : "t-150,0"});
	mouse.attr({transform : "t350,0"});
	info_data_1.attr({transform : "t350,0"});
	info_data_2.attr({transform : "t-250,0"});
	note.attr({transform : "t0,250"});
	coffee_1.attr({transform : "t0,-250"});
	coffee_3.attr({transform : "t0,250"});


	setTimeout(function() {
		info_data_2.animate({
			transform : "t0,0"
		},200,mina.easein);
	},300);

	setTimeout(function() {
		info_data_1.animate({
			transform: "t0,0"
		},200,mina.easein);
	},600);

	setTimeout(function() {
		telephone.animate({
			transform : "t0,0"
		},200,mina.easein);
	},900);

	setTimeout(function() {
		mouse.animate({
			transform : "t0,0"
		},200,mina.easein);
	},1200);

	setTimeout(function() {
		note.animate({
			transform : "t0,0"
		},200,mina.easein);
	},1500);

	setTimeout(function() {
		coffee_1.animate({
			transform : "t0,0"
		},200,mina.easein);
	},1800);

	setTimeout(function() {
		coffee_3.animate({
			transform : "t0,0"
		},200,mina.easein);
	},2100);

	setTimeout(function() {
		animate_2();
	},3000);
}
	
animate_2();


});



