import { UseSetStorage } from '@/types';


export function useGetStorage(storageType: string, storageName: string): string | null {
	if (storageType === 'local') {
		return localStorage.getItem(storageName);
	}

	if (storageType === 'session') {
		return sessionStorage.getItem(storageName);
	}

	return '';
}


export const useSetStorage: UseSetStorage = (options) => {
	const { action = 'update', resizedWidth, storageType, storageName, saveWidth, rail } = options;

	if (!saveWidth || rail) {
		return;
	}

	let width = resizedWidth;
	width = width ?? undefined;

	if (action === 'set') {
		width = useGetStorage(storageType as string, storageName as string) ?? '';
		width = width || resizedWidth;
	}

	if (storageType === 'local') {
		localStorage.setItem(storageName as string, String(width));
	}

	if (storageType === 'session') {
		sessionStorage.setItem(storageName as string, String(width));
	}

	return;
};
