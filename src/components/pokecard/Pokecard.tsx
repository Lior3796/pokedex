import { FC } from "react";
import pokecard from "../../types/pokecard";
import addZeroToId from "../../helpers/addZeroToId";

const Pokecard: FC<pokecard> = (pokecardData: pokecard) => {
	const { id, name, type, base_experience } = pokecardData;

	return (
		<div className="pokecard">
			<h4>{name} </h4>
			<img
				className="pokecard-img"
				src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeroToId(
					id
				)}.png`}
			/>
			<h5>type: {type}</h5>
			<h5>EXP: {base_experience}</h5>
		</div>
	);
};

export default Pokecard;
