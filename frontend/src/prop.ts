import Sprite from './sprite';
import { ImageMap } from './lib';
import { Collidable, CollisionBox } from './collisions';

export default class Prop implements Sprite, Collidable {
	x: number;
	y: number;
	width: number;
	height: number;
	imageName: string;

	constructor(x: number, y: number, width: number, height: number, imageName: string) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.imageName = imageName;
	}

	draw(images: ImageMap, ctx: CanvasRenderingContext2D) {
		ctx.drawImage(images[this.imageName], this.x, this.y, this.width, this.height);
	}

	collisionBox(): CollisionBox {
		return new CollisionBox(this.x, this.y, this.width, this.height);
	}
}
