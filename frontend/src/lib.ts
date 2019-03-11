interface ImageMap {
	[key: string]: HTMLImageElement;
}

interface KeyMap {
	[key: number]: boolean | undefined;
}

enum Direction {
	Up,
	Down,
	Left,
	Right,
}

export { ImageMap, KeyMap, Direction };
