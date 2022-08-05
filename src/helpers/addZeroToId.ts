export const addZeroToId = (id: number): string | number =>
	id <= 999 ? `00${id}`.slice(-3) : id;
