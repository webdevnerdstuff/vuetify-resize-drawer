const defaultIcons = {
	fa: {
		bottom: 'fas fa-grip',
		center: 'fas fa-angles-right',
		top: 'fas fa-grip',
	},
	mdi: {
		bottom: 'mdi mdi-dots-grid',
		center: 'mdi mdi-chevron-double-right',
		top: 'mdi mdi-dots-grid',
	},
};

export const useGetIcon = (options) => {
	const { icon, iconfont, position } = options;

	if (icon) {
		return icon;
	}

	let iconAbbv = iconfont.toLowerCase();
	iconAbbv = iconAbbv === 'fa' || iconAbbv === 'fasvg' ? 'fa' : iconAbbv;

	const iconSet = defaultIcons[iconAbbv];

	if (!iconSet) {
		throw new Error(`VResizeDrawer: No default ${iconAbbv} icon set found. Please set the icon prop.`);
	}

	const newIcon = iconSet[position];

	if (!newIcon) {
		throw new Error('VResizeDrawer: No icon found. Please set the icon prop, or set the default icon set to "mdi" or "fa"');
	}

	return newIcon;
};

export default useGetIcon;
