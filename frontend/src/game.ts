import { objectSize } from './util';
import { ImageMap } from './lib';
import Player from './player';

function loadImages(callback: (images: ImageMap) => void) {
	const allImages: ImageMap = {
		'img/puffin.jpg': new Image(),
	};
	let numImagesRemaining = objectSize(allImages);
	for (let url in allImages) {
		allImages[url].addEventListener('load', function() {
			numImagesRemaining -= 1;
			if (numImagesRemaining === 0) {
				callback(allImages);
			}
		});
		allImages[url].src = url;
	}
}

const canvas = <HTMLCanvasElement>document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 1000;

loadImages(function(images) {
	const p = new Player();
	p.drawAt(0, 0, images, ctx);
});
