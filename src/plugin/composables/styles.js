/* eslint-disable radix */
import { useConvertToUnit } from './helpers';
import { useGetColor } from './colors';

const iconSizes = {
	default: '1.5em',
	large: '1.75em',
	small: '1.25em',
	'x-large': '2em',
	'x-small': '1em',
};

// -------------------------------------------------- Drawer //
export const useDrawerStyles = (options) => {
	const {
		height,
		isMiniVariant,
		isMouseDown,
		maxWidth,
		minWidth,
		miniVariantWidth,
		resizedWidth,
		top,
		transform,
		widthSnapBack,
		windowHeight,
	} = options;

	if (isMiniVariant) {
		return {};
	}

	let widthValue = isMiniVariant ? miniVariantWidth : resizedWidth;

	if (!widthSnapBack) {
		if (parseInt(widthValue) >= parseInt(maxWidth)) {
			widthValue = maxWidth;
		}

		if (parseInt(widthValue) <= parseInt(minWidth)) {
			widthValue = minWidth;
		}
	}

	let drawerHeight = useConvertToUnit({ str: height });

	if (drawerHeight === '100vh' || drawerHeight === '100%') {
		drawerHeight = useConvertToUnit({ str: windowHeight - top });
	}

	return {
		height: drawerHeight,
		transitionDuration: isMouseDown ? '0s' : '.2s',
		top: useConvertToUnit({ str: top }),
		transform,
		width: useConvertToUnit({ str: widthValue }),
	};
};

// -------------------------------------------------- Handle //
export const useHandleContainerStyles = (options) => {
	const { borderWidth, handleColor, iconSize, position, theme } = options;

	if (position === 'border') {
		return {
			backgroundColor: useGetColor(handleColor, theme),
			height: '100%',
			width: useConvertToUnit({ str: borderWidth }),
		};
	}

	const dimensions = iconSizes[iconSize];

	return {
		backgroundColor: 'transparent',
		height: dimensions,
		width: dimensions,
	};
};

export const useHandleIconStyles = (options) => {
	const { color, theme } = options;

	const handleColor = useGetColor(color, theme);

	const styles = {
		color: handleColor,
	};

	return styles;
};
