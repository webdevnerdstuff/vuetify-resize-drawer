import { UseSetStorage } from '@/plugin/types';


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
	const { action = 'update', rail, resizedAmount, saveAmount, storageName, storageType } = options;

	if (rail && !saveAmount) {
		return;
	}

	let amount = resizedAmount;
	amount = amount ?? undefined;

	if (action === 'set') {
		amount = useGetStorage(storageType as string, storageName as string) ?? '';
		amount = amount || resizedAmount;
	}

	if (storageType === 'local') {
		localStorage.setItem(storageName as string, String(amount));
	}

	if (storageType === 'session') {
		sessionStorage.setItem(storageName as string, String(amount));
	}

	return;
};
