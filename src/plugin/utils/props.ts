import { Props } from '@/plugin/types';
import { componentName } from './globals';


export const AllProps: Props = {
	handleBorderWidth: 8,
	handleColor: 'primary',
	handleIcon: undefined,
	handleIconSize: 'x-small' as const,
	handlePosition: 'center',
	height: 256,
	location: 'start',
	maxHeight: window.innerHeight,
	maxWidth: window.innerWidth,
	minHeight: 56,
	minWidth: 56,
	name: undefined,
	rail: false,
	railWidth: 8,
	resizable: true,
	saveWidth: true,
	snapBack: true,
	storageName: `${componentName}-width`,
	storageType: 'local',
	tag: 'nav',
	theme: undefined,
	touchless: false,
	width: 256,
};
