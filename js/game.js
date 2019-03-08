;(function (){
	'use strict';

	const canvas = document.getElementById('game');
	const ctx = canvas.getContext('2d');

	canvas.width = 1000;
	canvas.height = 1000;

	const puffin = new Image();
	puffin.addEventListener('load', function() {
		console.log(this);
		ctx.drawImage(this, 0, 0);
	});
	puffin.src = 'img/puffin.jpg';
}());
