import {
	UseConvertToUnit,
} from '@/types';


/*
* Converts a string to a number with a unit.
*/
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { str, unit = 'px' } = options;

	if (str == null || str === '') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
};


/*
 * Converts a string | number to a whole number founded.
*/
function roundToWhole(input: string | number): string | number {
	if (typeof input === 'string') {
		const regex = /(\d+(\.\d+)?)(\s*([a-zA-Z]+))?/;
		const match = input.match(regex);

		if (!match) {
			return input;
		}

		const numberPart = parseFloat(match[1] as string);
		const unitPart = match[4];

		if (!isNaN(numberPart)) {
			const roundedNumber = Math.round(numberPart);
			const result = unitPart ? `${roundedNumber} ${unitPart}` : `${roundedNumber}`;
			return result;
		}

		return input;

	}
	else if (typeof input === 'number') {
		return Math.round(input);
	}

	return input;
}


/*
* Converts a string to a number.
*/
export const useConvertToNumber = (val: string | number): number => {
	const windowsWidth = window.innerWidth;
	const drawerWidth = roundToWhole(val);

	if (typeof val === 'string' && val.includes('%')) {
		return Number(val.replace('%', '')) / 100 * windowsWidth;
	}

	if (typeof drawerWidth === 'string') {
		return Number(drawerWidth.replace(/\D/g, ''));
	}

	return drawerWidth;
};
