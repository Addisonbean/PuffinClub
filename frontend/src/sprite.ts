import { ImageMap } from './lib';

export default interface Sprite {
	draw(images: ImageMap, ctx: CanvasRenderingContext2D): void;
}
