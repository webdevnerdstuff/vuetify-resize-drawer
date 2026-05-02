import {
	beforeEach,
	describe,
	expect,
	test,
	vi,
} from 'vitest';
import {
	useGetStorage,
	useSetStorage,
} from '../storage';


const storageName = 'vuetify-resize-drawer';

vi.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
vi.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
vi.spyOn(Object.getPrototypeOf(window.sessionStorage), 'getItem');
vi.spyOn(Object.getPrototypeOf(window.sessionStorage), 'setItem');

beforeEach(() => {
	window.localStorage.clear();
	window.sessionStorage.clear();
});

describe('Storage Composable', () => {
	describe('useGetStorage', () => {
		test('returns null from localStorage when nothing set', () => {
			const result = useGetStorage('local', storageName);
			expect(result).toBeNull();
		});

		test('returns null from sessionStorage when nothing set', () => {
			const result = useGetStorage('session', storageName);
			expect(result).toBeNull();
		});

		test('returns empty string for unknown storageType', () => {
			const result = useGetStorage('unknown', storageName);
			expect(result).toBe('');
		});
	});

	describe('localStorage', () => {
		test('useSetStorage - action update calls setItem', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage - action set calls setItem', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage action update stores and useGetStorage retrieves the value', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();

			useGetStorage('local', storageName);

			expect(window.localStorage.getItem).toHaveBeenCalled();
			expect(window.localStorage.getItem(storageName)).toMatchInlineSnapshot(`"100px"`);
		});

		test('useSetStorage action set stores and useGetStorage retrieves the value', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();

			useGetStorage('local', storageName);

			expect(window.localStorage.getItem).toHaveBeenCalled();
			expect(window.localStorage.getItem(storageName)).toMatchInlineSnapshot(`"100px"`);
		});

		test('useGetStorage returns null when nothing has been set', () => {
			useGetStorage('local', storageName);

			expect(window.localStorage.getItem).toHaveBeenCalled();
			expect(window.localStorage.getItem(storageName)).toMatchInlineSnapshot(`null`);
		});

		test('useSetStorage does not call setItem when rail is true and saveAmount is false', () => {
			const setItemSpy = vi.spyOn(window.localStorage, 'setItem');
			setItemSpy.mockClear();

			useSetStorage({
				action: 'update',
				rail: true,
				resizedAmount: '100px',
				saveAmount: false,
				storageName,
				storageType: 'local',
			});

			expect(setItemSpy).not.toHaveBeenCalled();
		});
	});

	describe('sessionStorage', () => {
		test('useSetStorage - action update calls setItem', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage - action set calls setItem', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage action update stores and useGetStorage retrieves the value', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();

			useGetStorage('session', storageName);

			expect(window.sessionStorage.getItem).toHaveBeenCalled();
			expect(window.sessionStorage.getItem(storageName)).toMatchInlineSnapshot(`"100px"`);
		});

		test('useSetStorage action set stores and useGetStorage retrieves the value', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedAmount: '100px',
				saveAmount: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();

			useGetStorage('session', storageName);

			expect(window.sessionStorage.getItem).toHaveBeenCalled();
			expect(window.sessionStorage.getItem(storageName)).toMatchInlineSnapshot(`"100px"`);
		});

		test('useGetStorage returns null when nothing has been set', () => {
			useGetStorage('session', storageName);

			expect(window.sessionStorage.getItem).toHaveBeenCalled();
			expect(window.sessionStorage.getItem(storageName)).toMatchInlineSnapshot(`null`);
		});

		test('useSetStorage does not call setItem when rail is true and saveAmount is false', () => {
			const setItemSpy = vi.spyOn(window.sessionStorage, 'setItem');
			setItemSpy.mockClear();

			useSetStorage({
				action: 'update',
				rail: true,
				resizedAmount: '100px',
				saveAmount: false,
				storageName,
				storageType: 'session',
			});

			expect(setItemSpy).not.toHaveBeenCalled();
		});
	});
});
