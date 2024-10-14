import {
	Props,
	UseConvertToUnit,
} from '@/plugin/types';


/*
* Converts a string to a number with a unit.
*/
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { unit = 'px', value } = options;

	if (value == null || value === '') {
		return undefined;
	}

	if (!+value) {
		return String(value);
	}

	return `${Number(value)}${unit}`;
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


/*
* Converts a unit to px.
*/
export const useUnitToPx = (valueWithUnit: Props['handleIconSize']): number => {
	if (!valueWithUnit) return 0;

	// Create a temporary element for calculating the value
	const tempElement = document.createElement('div');
	tempElement.style.position = 'absolute';
	tempElement.style.visibility = 'hidden';
	tempElement.style.width = valueWithUnit as string;

	// Append the temporary element to the specified parent or body
	const targetParent = document.body;
	targetParent.appendChild(tempElement);

	// Get the computed width in px
	const computedValue = getComputedStyle(tempElement).width;

	// Remove the temporary element after calculation
	targetParent.removeChild(tempElement);

	// Return the numeric px value
	return parseFloat(computedValue);
};
