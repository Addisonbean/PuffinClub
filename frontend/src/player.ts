import Sprite from './sprite';
import { ImageMap, Point } from './lib';
import { Collidable, CollisionBox } from './collisions';

export default class Player implements Sprite, Collidable {
	speed = 7;
	x: number;
	y: number;
	width: number;
	height: number;

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	moveBy(dists: Point) {
		this.x += dists.x;
		this.y += dists.y;
	}

	draw(images: ImageMap, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	collisionBox(): CollisionBox {
		return new CollisionBox(this.x, this.y, this.width, this.height);
	}
}
