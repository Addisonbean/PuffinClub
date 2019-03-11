import Prop from '../prop';
import GameMap from '../game_map';

function makeStartMap(): GameMap {
	return new GameMap([
		new Prop(250, 250, 189, 100, 'img/puffin.jpg'),
	]);
}

export { makeStartMap };
