import { Props } from '@/types';
import { componentName } from './globals';


export const AllProps: Props = {
	handleBorderWidth: 8,
	handleColor: 'primary',
	handleIcon: undefined,
	handleIconSize: 'x-small',
	handlePosition: 'center',
	height: undefined,
	location: 'start',
	maxWidth: window.innerWidth,
	minWidth: 56,
	modelValue: true,
	name: componentName,
	rail: false,
	railWidth: 8,
	resizable: true,
	saveWidth: true,
	storageName: `${componentName}-width`,
	storageType: 'local',
	tag: 'nav',
	theme: 'light',
	touchless: false,
	width: 256,
	widthSnapBack: true,
};
