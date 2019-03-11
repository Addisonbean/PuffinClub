import Sprite from './sprite';
import { ImageMap, Direction } from './lib';

export default class Player implements Sprite {
	speed = 7;
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	moveTowardDirection(directions: Direction[]) {
		for (let d of directions) {
			if (d === Direction.Up) {
				this.y -= this.speed;
			} else if (d === Direction.Down) {
				this.y += this.speed;
			} else if (d === Direction.Left) {
				this.x -= this.speed;
			} else if (d === Direction.Right) {
				this.x += this.speed;
			}
		}
	}

	draw(images: ImageMap, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, 100, 100);
	}
}
