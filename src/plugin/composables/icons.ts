import { UseGetIcon } from '@/types';

const defaultIcons = {
	fa: {
		bottom: 'fas fa-grip',
		center: 'fas fa-angles-right',
		top: 'fas fa-grip',
	},
	mdi: {
		bottom: 'mdi:mdi-dots-grid',
		center: 'mdi:mdi-chevron-double-right',
		top: 'mdi:mdi-dots-grid',
	},
};

export const useGetIcon: UseGetIcon = (options) => {
	const { icon, iconOptions, position } = options;

	if (icon) {
		return icon;
	}

	const defaultSet = iconOptions?.defaultSet as string;
	let iconAbbv = defaultSet.toLowerCase();

	iconAbbv = iconAbbv === 'fa' || iconAbbv === 'fasvg' ? 'fa' : iconAbbv;

	const iconSet = defaultIcons[iconAbbv];

	if (!iconSet) {
		throw new Error(`VResizeDrawer: No default ${iconOptions?.defaultSet} icon set found. Please set the icon prop.`);
	}

	const newIcon = iconSet[position as string];

	if (!newIcon) {
		throw new Error(`VResizeDrawer: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
	}

	return newIcon;
};
