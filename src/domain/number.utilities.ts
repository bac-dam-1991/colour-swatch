import InvalidRangeError from "./errors/InvalidRangeError";
import ExclusivityType from "./types/ExclusivityType";

export const generateIntBetween = (
	min: number,
	max: number,
	exclusivity: ExclusivityType = "[]"
) => {
	if (min >= max) {
		throw new InvalidRangeError(min, max);
	}
	let maxOffset = 0;
	let minOffset = 0;
	if (exclusivity === "[)") {
		maxOffset = 1;
	}
	if (exclusivity === "(]") {
		minOffset = 1;
	}
	if (exclusivity === "()") {
		maxOffset = 1;
		minOffset = 1;
	}
	return (
		Math.floor(Math.random() * (max - maxOffset - min)) + min + minOffset
	);
};
