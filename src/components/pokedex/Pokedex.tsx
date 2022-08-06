import React, { FC } from "react";
import pokecard from "../../types/pokecard";
import Pokecard from "../pokecard/Pokecard";

interface Props {
	shufflePokes: pokecard[];
	score: number;
	isWin: boolean;
}

const Pokedex: FC<Props> = ({ shufflePokes, score, isWin }) => {
	return (
		<>
			{shufflePokes.map((item: pokecard) => {
				return (
					<Pokecard
						key={item.id}
						id={item.id}
						type={item.type}
						base_experience={item.base_experience}
						name={item.name}
					/>
				);
			})}

			<div className="score">
				<h4 className={isWin ? "win" : "lose"}>Score: {score}</h4>
			</div>
		</>
	);
};

export default Pokedex;
