export type pokecard = {
	id: number;
	name: string;
	type: string;
	base_experience: number;
};

export type shufflePokes = {
	shufflePokes: Array<pokecard>;
};
