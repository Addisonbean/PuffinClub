import Sprite from './sprite';

export default class GameMap {
	sprites: [Sprite];

	constructor(sprites: [Sprite]) {
		this.sprites = sprites;
	}
}
