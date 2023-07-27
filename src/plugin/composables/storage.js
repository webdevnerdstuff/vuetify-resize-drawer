/* eslint-disable no-useless-return */
export function useGetStorage(storageType, storageName) {
	if (storageType === 'local') {
		return localStorage.getItem(storageName);
	}

	if (storageType === 'session') {
		return sessionStorage.getItem(storageName);
	}

	return '';
}

export const useSetStorage = (options) => {
	const { action = 'update', resizedWidth, storageType, storageName, saveWidth, rail } = options;

	if (!saveWidth || rail) {
		return;
	}

	let width = resizedWidth;
	width = width ?? undefined;

	if (action === 'set') {
		width = useGetStorage(storageType, storageName) ?? '';
		width = width || resizedWidth;
	}

	if (storageType === 'local') {
		localStorage.setItem(storageName, String(width));
	}

	if (storageType === 'session') {
		sessionStorage.setItem(storageName, String(width));
	}

	return;
};
