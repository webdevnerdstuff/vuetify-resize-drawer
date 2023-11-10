import { componentName } from '../utils/globals';
import {
	UseDrawerClasses,
	UseHandleContainerClasses,
	UseHandleIconClasses,
} from '@/types';


export const useDrawerClasses: UseDrawerClasses = (options) => {
	const { absolute = false, expandOnHover, floating, isMouseover, location, rail, railWidth, temporary } = options;

	return {
		[`${componentName}`]: true,
		'v-navigation-drawer--absolute': absolute ?? false,
		'v-navigation-drawer--custom-rail': Number(railWidth) !== 56,
		'v-navigation-drawer--fixed': !absolute,
		'v-navigation-drawer--floating': floating,
		'v-navigation-drawer--is-mouseover': unref(isMouseover),
		'v-navigation-drawer--left': location === 'left' || location === 'start' || typeof location === 'undefined',
		'v-navigation-drawer--open-on-hover': expandOnHover,
		'v-navigation-drawer--rail': rail ?? false,
		'v-navigation-drawer--right': location === 'right' || location === 'end',
		'v-navigation-drawer--temporary': temporary,
	};
};


export const useHandleContainerClasses: UseHandleContainerClasses = (options) => {
	const { drawerLocation, handlePosition } = options;

	const classes = {
		[`${componentName}--handle-container`]: true,
		[`${componentName}--handle-container-position-${handlePosition}`]: true,
		[`${componentName}--handle-container-parent-${drawerLocation}`]: true,
	};

	return classes;
};

export const useHandleIconClasses: UseHandleIconClasses = (options) => {
	const { drawerLocation, handlePosition, iconOptions, isUserIcon } = options;

	const classes = {
		[`${componentName}--handle-container-icon`]: true,
		[`${componentName}--handle-container-icon-${handlePosition}-${drawerLocation}`]: true,
		[`${componentName}--handle-container-icon-user-icon`]: isUserIcon,
		[`${componentName}--handle-container-icon-fa`]: iconOptions?.defaultSet === 'fa',
		[`${componentName}--handle-container-icon-fa-${handlePosition}`]: iconOptions?.defaultSet === 'fa',
	};

	return classes;
};
