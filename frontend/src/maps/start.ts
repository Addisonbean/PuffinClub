import Prop from '../prop';
import GameMap from '../game_map';

function makeStartMap(): GameMap {
	const p = new Prop(250, 250, 189, 100, 'img/puffin.jpg');
	return new GameMap([p], [p]);
}

export { makeStartMap };
