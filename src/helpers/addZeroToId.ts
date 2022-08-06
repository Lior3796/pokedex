const addZeroToId: Function = (id: number): string | number =>
	id <= 999 ? `00${id}`.slice(-3) : id;

export default addZeroToId;
