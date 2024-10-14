import {
	UseDrawerStyles,
	UseHandleContainerStyles,
	UseHandleIconStyles,
} from '@/plugin/types';
import { useConvertToUnit } from '@composables/helpers';
import { useGetColor } from '@composables/colors';


export const iconSizes = {
	default: '1.5em',
	large: '1.75em',
	small: '1.25em',
	'x-large': '2em',
	'x-small': '1em',
};


// -------------------------------------------------- Drawer //
export const useDrawerStyles: UseDrawerStyles = (options) => {
	const { isMouseDown, location, maxWidth, minWidth, rail, railWidth, resizedAmount, widthSnapBack } = options;

	if (rail) {
		return {};
	}

	let mountValue = rail ? railWidth : unref(resizedAmount);

	if (!widthSnapBack) {
		if (parseInt(mountValue as string) >= parseInt(maxWidth as string)) {
			mountValue = parseInt(maxWidth as string);
		}

		if (parseInt(mountValue as string) <= parseInt(minWidth as string)) {
			mountValue = parseInt(minWidth as string);
		}
	}

	let response = {};

	if (location === 'top' || location === 'bottom') {
		response = {
			minHeight: `${useConvertToUnit({ value: mountValue as string }) as string} !important`,
			transitionDuration: unref(isMouseDown) ? '0s' : '.2s',
			width: '100%',
		};
	}
	else {
		response = {
			transitionDuration: unref(isMouseDown) ? '0s' : '.2s',
			width: useConvertToUnit({ value: mountValue as string }) as string,
		};
	}

	return response;
};


// -------------------------------------------------- Handle //
export const useHandleContainerStyles: UseHandleContainerStyles = (options) => {
	const { borderWidth, handleColor, iconSizeUnit, location, position, theme } = options;

	const transform = `translateX(-50%) ${location === 'top' ? 'rotate(90deg)' : 'rotate(-90deg)'}`;
	let height = '100%';
	let width = '100%';

	if (location === 'bottom' || location === 'top') {
		height = `${iconSizeUnit}px`;

		if (position === 'border') {
			height = useConvertToUnit({ value: borderWidth as string }) as string;
		}
	}
	else {
		width = useConvertToUnit({ value: borderWidth as string }) as string;
	}


	if (position === 'border') {
		return {
			backgroundColor: useGetColor(handleColor as string, theme),
			height,
			width,
		};
	}

	return {
		backgroundColor: 'transparent',
		height: height,
		transform: location === 'top' || location === 'bottom' ? transform : undefined,
		width: `${iconSizeUnit}px`,
	};
};


export const useHandleIconStyles: UseHandleIconStyles = (options) => {
	const { color, theme } = options;

	const handleColor = useGetColor(color as string, theme);

	const styles = {
		color: handleColor as string,
	};

	return styles;
};

