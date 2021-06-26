import { generateIntBetween } from "./number.utilities";
import InvalidRangeError from "./errors/InvalidRangeError";
const ARRAY_SIZE = 1000;
const MAX = 60;
const MIN = 50;
describe("Fn: generateIntBetween", () => {
	it("Should generate random integer with inclusive min and max", () => {
		const numbers = [];
		for (let i = 0; i < ARRAY_SIZE; i++) {
			const int = generateIntBetween(MIN, MAX);
			numbers.push(int);
		}
		const result = numbers.filter((int) => int < MIN || int > MAX);
		expect(result).toHaveLength(0);
	});
	it("Should generate random integer with inclusive min only", () => {
		const numbers = [];
		for (let i = 0; i < ARRAY_SIZE; i++) {
			const int = generateIntBetween(MIN, MAX, "[)");
			numbers.push(int);
		}
		const result = numbers.filter((int) => int < MIN || int >= MAX);
		expect(result).toHaveLength(0);
	});
	it("Should generate random integer with inclusive max only", () => {
		const numbers = [];
		for (let i = 0; i < ARRAY_SIZE; i++) {
			const int = generateIntBetween(MIN, MAX, "(]");
			numbers.push(int);
		}
		const result = numbers.filter((int) => int <= MIN || int > MAX);
		expect(result).toHaveLength(0);
	});
	it("Should generate random integer with exclusive max and min", () => {
		const numbers = [];
		for (let i = 0; i < ARRAY_SIZE; i++) {
			const int = generateIntBetween(MIN, MAX, "()");
			numbers.push(int);
		}
		const result = numbers.filter((int) => int <= MIN || int >= MAX);
		expect(result).toHaveLength(0);
	});
	it("Should throw error because min is greater than max", () => {
		const fn = () => {
			generateIntBetween(MAX, MIN);
		};
		expect(fn).toThrowError(InvalidRangeError);
	});
});

export {};
