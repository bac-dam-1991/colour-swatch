export default class InvalidRangeError extends Error {
	constructor(min: number, max: number) {
		super(
			`Minimum value (${min}) cannot equal to greater than maximum value (${max}).`
		);
	}
}
