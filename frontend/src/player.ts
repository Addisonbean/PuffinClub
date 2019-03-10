import Sprite from './sprite';
import { ImageMap } from './lib';

export default class Player implements Sprite {
	drawAt(x: number, y: number, images: ImageMap, ctx: CanvasRenderingContext2D) {
		ctx.drawImage(images['img/puffin.jpg'], 0, 0);
	}
}
