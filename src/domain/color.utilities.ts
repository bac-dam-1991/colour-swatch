import IHSV from "./interfaces/IHSV";
import IRGB from "./interfaces/IRGB";
import { generateIntBetween } from "./number.utilities";

export const generateRandomHSV = (): IHSV => {
	const hue = generateIntBetween(0, 360);
	const saturation = generateIntBetween(0, 100) / 100;
	const value = generateIntBetween(0, 100) / 100;
	return { hue, saturation, value };
};

export const convertHSVToRGB = (hsv: IHSV, tint?: IRGB): IRGB => {
	const { hue, saturation, value } = hsv;
	const chroma = value * saturation;
	const huePrime = hue / 60;
	const intermediateX = chroma * (1 - Math.abs((huePrime % 2) - 1));
	let redPrime = 0;
	let greenPrime = 0;
	let bluePrime = 0;
	if (0 <= huePrime && huePrime <= 1) {
		redPrime = chroma;
		greenPrime = intermediateX;
	} else if (1 < huePrime && huePrime <= 2) {
		redPrime = intermediateX;
		greenPrime = chroma;
	} else if (2 < huePrime && huePrime <= 3) {
		greenPrime = chroma;
		bluePrime = intermediateX;
	} else if (3 < huePrime && huePrime <= 4) {
		greenPrime = intermediateX;
		bluePrime = chroma;
	} else if (4 < huePrime && huePrime <= 5) {
		redPrime = intermediateX;
		bluePrime = chroma;
	} else if (5 < huePrime && huePrime <= 6) {
		redPrime = chroma;
		bluePrime = intermediateX;
	}
	const matchValue = value - chroma;
	const red = Math.round((redPrime + matchValue) * 255);
	const green = Math.round((greenPrime + matchValue) * 255);
	const blue = Math.round((bluePrime + matchValue) * 255);
	return tintRGB({ red, green, blue }, tint);
};

export const tintRGB = (color: IRGB, tint?: IRGB): IRGB => {
	const { red, green, blue } = color;
	if (!tint) {
		return color;
	}
	const { red: tintRed, green: tintGreen, blue: tintBlue } = tint;
	return {
		red: (red + tintRed) / 2,
		green: (green + tintGreen) / 2,
		blue: (blue + tintBlue) / 2,
	};
};

export const generateCssRgb = (rgb: IRGB): string => {
	const { red, green, blue } = rgb;
	return `rgb(${red}, ${green}, ${blue})`;
};
