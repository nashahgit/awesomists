$(document).ready(function(){

	

function animate_1() {

	var s = Snap("#mobilePhone");
	
	// var myMatrix = new Snap.Matrix();
	// myMatrix.scale(2,2);

	var cloud = s.select("#cloud");
	var computer = s.select("#computer");
	var camera = s.select("#camera");
	var data = s.select("#data");
	var map = s.select("#map");
	var headPhone = s.select("#headPhone");
	var game = s.select("#game");
	var ring = s.select("#ring");


	cloud.attr({opacity : 0,  transform: "s0.5,0.5"});
	computer.attr({opacity : 0,  transform: "s0.5,0.5"});
	camera.attr({opacity : 0,  transform: "s0.5,0.5"});
	data.attr({opacity : 0,  transform: "s0.5,0.5"});
	map.attr({opacity : 0,  transform: "s0.5,0.5"});
	headPhone.attr({opacity : 0,  transform: "s0.5,0.5"});
	game.attr({opacity : 0,  transform: "s0.5,0.5"});
	ring.attr({opacity :0});

	
	
	 // if($('#first-image').hasClass('active')) {

		cloud.animate({
			opacity : 1,	
			transform: "s1.5,1.5"
		},100, mina.easein, function () {
			cloud.animate({
				opacity : 1,	
				transform: "s1.2,1.2"
			},100, mina.easein);
		});

		// console.log("after Snap");


		setTimeout(function() {
			map.animate({
				opacity : 1,	
				transform: "s1.5,1.5"
			},100, mina.easein, function () {
				map.animate({
					opacity : 1,	
					transform: "s1.2,1.2"
				},100, mina.easein);
			});
		}, 200);

		setTimeout(function() {
			camera.animate({
				opacity : 1,	
				transform: "s1.5,1.5"
			},100, mina.easein, function () {
				camera.animate({
					opacity : 1,	
					transform: "s1.2,1.2"
				},100, mina.easein);
			});
		}, 300);

		setTimeout(function() {
			game.animate({
				opacity : 1,	
				transform: "s1.5,1.5"
			},100, mina.easein, function () {
				game.animate({
					opacity : 1,	
					transform: "s1.2,1.2"
				},100, mina.easein);
			});
		}, 400);

		setTimeout(function() {
			computer.animate({
				opacity : 1,	
				transform: "s1.5,1.5"
			},100, mina.easein, function () {
				computer.animate({
					opacity : 1,	
					transform: "s1.2,1.2"
				},100, mina.easein);
			});
		}, 500);

		setTimeout(function() {
			data.animate({
				opacity : 1,	
				transform: "s1.5,1.5"
			},100, mina.easein, function () {
				data.animate({
					opacity : 1,	
					transform: "s1.2,1.2"
				},100, mina.easein);
			});
		}, 600);

		setTimeout(function() {
			headPhone.animate({
				opacity : 1,	
				transform: "s1.5,1.5"
			},100, mina.easein, function () {
				headPhone.animate({
					opacity : 1,	
					transform: "s1.2,1.2"
				},100, mina.easein);
			});
		}, 700);

		setTimeout(function() {
			ring.animate({
				opacity : 1	
			},100, mina.easein);
		}, 800);

		setTimeout(function() {
			animate_1();
		},3000);
}

	// setTimeout(function() { 
	// 	console.log("Hello");
	// 	if($('#first-image').hasClass('active')) {
			animate_1();
	// 	}
	// },3000);

});



