import {
	componentName,
	vNavDrawerName,
} from '../utils/globals';

export const useDrawerClasses = (options) => {
	const {
		absolute,
		app,
		bottom,
		clipped,
		expandOnHover,
		fixed,
		floating,
		isActive,
		isMiniVariant,
		isMobile,
		isMouseOver,
		miniVariantWidth,
		right,
		temporary,
	} = options;

	return {
		[`${componentName}`]: true,
		[`${vNavDrawerName}--absolute`]: absolute,
		[`${vNavDrawerName}--bottom`]: bottom,
		[`${vNavDrawerName}--clipped`]: clipped,
		[`${vNavDrawerName}--close`]: !isActive,
		[`${vNavDrawerName}--fixed`]: !absolute && (app || fixed),
		[`${vNavDrawerName}--floating`]: floating,
		[`${vNavDrawerName}--is-mobile`]: isMobile,
		[`${vNavDrawerName}--is-mouseover`]: isMouseOver,
		[`${vNavDrawerName}--mini-variant`]: isMiniVariant,
		[`${vNavDrawerName}--custom-mini-variant`]: Number(miniVariantWidth) !== 56,
		[`${vNavDrawerName}--open-on-hover`]: expandOnHover,
		[`${vNavDrawerName}--right`]: right,
		[`${vNavDrawerName}--temporary`]: temporary,
	};
};

export const useHandleContainerClasses = (options) => {
	const { handlePosition, isHandleSlot, parentPosition } = options;

	const classes = {
		[`${componentName}--handle-container`]: true,
		[`${componentName}--handle-container-position-${handlePosition}`]: true,
		[`${componentName}--handle-container-parent-${parentPosition}`]: true,
		[`${componentName}--handle-container-slot`]: isHandleSlot,
	};

	return classes;
};

export const useHandleIconClasses = (options) => {
	const { handlePosition, iconfont, isUserIcon, parentPosition } = options;

	let iconAbbv = iconfont.toLowerCase();
	iconAbbv = iconAbbv === 'fa' || iconAbbv === 'fasvg' ? 'fa' : iconAbbv;

	const classes = {
		[`${componentName}--handle-container-icon`]: true,
		[`${componentName}--handle-container-icon-${handlePosition}-${parentPosition}`]: true,
		[`${componentName}--handle-container-icon-user-icon`]: isUserIcon,
		[`${componentName}--handle-container-icon-fa`]: iconAbbv === 'fa',
		[`${componentName}--handle-container-icon-fa-${handlePosition}`]: iconAbbv === 'fa',
	};

	return classes;
};
