import { objectSize } from "./util";

interface ImageMap {
	[key: string]: HTMLImageElement;
}

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

interface Sprite {
	drawAt(x: number, y: number, images: ImageMap, ctx: CanvasRenderingContext2D): void;
}

class Player implements Sprite {
	drawAt(x: number, y: number, images: ImageMap, ctx: CanvasRenderingContext2D) {
		ctx.drawImage(images['img/puffin.jpg'], 0, 0);
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
