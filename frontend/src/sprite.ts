import { ImageMap } from './lib';

export default interface Sprite {
	drawAt(x: number, y: number, images: ImageMap, ctx: CanvasRenderingContext2D): void;
}
