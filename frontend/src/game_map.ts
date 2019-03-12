import Sprite from './sprite';
import { Collidable } from './collisions';

export default class GameMap {
	sprites: [Sprite];
	collidables: [Collidable];

	constructor(sprites: [Sprite], collidables: [Collidable]) {
		this.sprites = sprites;
		this.collidables = collidables;
	}
}
