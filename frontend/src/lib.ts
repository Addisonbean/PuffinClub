interface ImageMap {
	[key: string]: HTMLImageElement;
}

interface KeyMap {
	[key: number]: boolean | undefined;
}

interface Point {
	x: number;
	y: number;
}

enum KeyCode {
	Left = 37,
	Up = 38,
	Right = 39,
	Down = 40,
}

export { ImageMap, KeyMap, Point, KeyCode };
