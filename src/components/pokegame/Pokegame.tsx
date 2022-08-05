import React, { FC } from "react";
import data from "../../data/data";
import Pokedex from "../pokedex/Pokedex";
import { pokecard } from "../../types/pokecard";

const Pokegame: FC = () => {
	const shuffle = () => {
		const shufflePokes = [];
		for (let index = 0; index < 4; index++) {
			shufflePokes.push(data[Math.floor(Math.random() * 7)]);
		}
		return shufflePokes;
	};

	const firstHand: Array<pokecard> = shuffle();
	const secondHand: Array<pokecard> = shuffle();
	const firstHandScore: number = firstHand
		.map((item) => item.base_experience)
		.reduce((prev, curr) => prev + curr, 0);
	const secondHandScore: number = secondHand
		.map((item) => item.base_experience)
		.reduce((prev, curr) => prev + curr, 0);

	return (
		<>
			<Pokedex
				score={firstHandScore}
				shufflePokes={firstHand}
				isWin={firstHandScore > secondHandScore}
			/>
			<Pokedex
				score={secondHandScore}
				shufflePokes={secondHand}
				isWin={firstHandScore < secondHandScore}
			/>
		</>
	);
};

export default Pokegame;
