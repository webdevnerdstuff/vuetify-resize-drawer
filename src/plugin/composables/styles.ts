import {
	UseDrawerStyles,
	UseHandleContainerStyles,
	UseHandleIconStyles,
} from '@/types';
import { useConvertToUnit } from '@/plugin/composables/helpers';
import { useGetColor } from '@/plugin/composables/colors';


const iconSizes = {
	default: '1.5em',
	large: '1.75em',
	small: '1.25em',
	'x-large': '2em',
	'x-small': '1em',
};


// -------------------------------------------------- Drawer //
export const useDrawerStyles: UseDrawerStyles = (options) => {
	const { isMouseDown, maxWidth, minWidth, rail, railWidth, resizedWidth, widthSnapBack } = options;

	if (rail) {
		return {};
	}

	let widthValue = rail ? railWidth : unref(resizedWidth);

	if (!widthSnapBack) {
		if (parseInt(widthValue as string) >= parseInt(maxWidth as string)) {
			widthValue = parseInt(maxWidth as string);
		}

		if (parseInt(widthValue as string) <= parseInt(minWidth as string)) {
			widthValue = parseInt(minWidth as string);
		}
	}

	return {
		transitionDuration: unref(isMouseDown) ? '0s' : '.2s',
		width: useConvertToUnit({ str: widthValue as string }) as string,
	};
};


// -------------------------------------------------- Handle //
export const useHandleContainerStyles: UseHandleContainerStyles = (options) => {
	const { borderWidth, handleColor, iconSize, position, theme } = options;

	if (position === 'border') {
		return {
			backgroundColor: useGetColor(handleColor as string, theme),
			height: '100%',
			width: useConvertToUnit({ str: borderWidth as string }) as string,
		};
	}

	const dimensions = iconSizes[iconSize as string];

	return {
		backgroundColor: 'transparent',
		height: dimensions,
		width: dimensions,
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

