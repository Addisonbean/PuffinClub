import { Point } from './lib';

class CollisionBox {
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

	collidesWith(other: CollisionBox): boolean {
		return (
			this.x < other.x + other.width &&
			this.x + this.width > other.x &&
			this.y < other.y + other.height && 
			this.y + this.height > other.y
		);
	}

	fixChangeIfConflict(other: CollisionBox, change: Point): Point | undefined {
		const tmpBox = new CollisionBox(this.x + change.x, this.y, this.width, this.height);
		let noCollisions = true;
		if (tmpBox.collidesWith(other)) {
			if (change.x > 0) {
				tmpBox.x = other.x - this.width;
			} else {
				tmpBox.x = other.x + other.width;
			}
			noCollisions = false;
		}

		tmpBox.y += change.y;
		if (tmpBox.collidesWith(other)) {
			if (change.y > 0) {
				tmpBox.y = other.y - this.height;
			} else {
				tmpBox.y = other.y + other.height;
			}
			noCollisions = false;
		}

		if (noCollisions) {
			return undefined;
		} else {
			return { x: tmpBox.x - this.x, y: tmpBox.y - this.y };
		}
	}
}

interface Collidable {
	// This could easily be modified to return an array
	// of instances of CollisionBox later on if necessary.
	collisionBox(): CollisionBox;
}

export { Collidable, CollisionBox };
