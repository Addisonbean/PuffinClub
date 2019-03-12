import { objectSize } from './util';
import { ImageMap, KeyMap, KeyCode } from './lib';
import Player from './player';
import { makeStartMap } from './maps/start';

const allImages: ImageMap = {
	'img/puffin.jpg': new Image(),
};

function loadImages(callback: (images: ImageMap) => void) {
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

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const p = new Player(0, 0, 100, 100);
const keysPressed: KeyMap = {};
const startMap = makeStartMap();

window.addEventListener('keydown', function(e) {
	keysPressed[e.keyCode] = true;
});

window.addEventListener('keyup', function(e) {
	keysPressed[e.keyCode] = false;
});

function isKeyDown(keyCode: number): boolean {
	return keysPressed[keyCode] === true;
}

function update() {
	const direction = { x: 0, y: 0 };

	if (isKeyDown(KeyCode.Left)) direction.x -= 1;
	if (isKeyDown(KeyCode.Up)) direction.y -= 1;
	if (isKeyDown(KeyCode.Right)) direction.x += 1;
	if (isKeyDown(KeyCode.Down)) direction.y += 1;

	let playerPositionChange = { x: direction.x * p.speed, y: direction.y * p.speed };
	const playerBox = p.collisionBox();
	for (let e of startMap.collidables) {
		const newChange = playerBox.fixChangeIfConflict(e.collisionBox(), playerPositionChange);
		if (newChange) {
			playerPositionChange = newChange;
			break;
		}
	}

	p.moveBy(playerPositionChange);
}

function draw() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	for (let e of startMap.sprites) {
		e.draw(allImages, ctx);
	}

	p.draw(allImages, ctx);
}

function gameLoop() {
	window.requestAnimationFrame(gameLoop);
	update();
	draw();
}

loadImages(function(images) {
	gameLoop();
});
