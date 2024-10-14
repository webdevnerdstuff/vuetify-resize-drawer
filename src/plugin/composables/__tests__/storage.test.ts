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
	describe('localStorage', () => {
		test('useSetStorage - action update', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage - action set', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage & useGetStorage - action update', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();

			useGetStorage('local', storageName);

			expect(window.localStorage.getItem).toHaveBeenCalled();
			expect(window.localStorage.getItem(storageName)).toMatchInlineSnapshot(`"undefined"`);
		});

		test('useSetStorage & useGetStorage - action set', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'local',
			});

			expect(window.localStorage.setItem).toHaveBeenCalled();

			useGetStorage('local', storageName);

			expect(window.localStorage.getItem).toHaveBeenCalled();
			expect(window.localStorage.getItem(storageName)).toMatchInlineSnapshot(`"undefined"`);
		});

		test('useGetStorage that has not been set, and return null value', () => {
			useGetStorage('local', storageName);

			expect(window.localStorage.getItem).toHaveBeenCalled();
			expect(window.localStorage.getItem(storageName)).toMatchInlineSnapshot(`null`);
		});
	});

	describe('sessionStorage', () => {
		test('useSetStorage - action update', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage - action set', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();
		});

		test('useSetStorage & useGetStorage - action update', () => {
			useSetStorage({
				action: 'update',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();

			useGetStorage('session', storageName);

			expect(window.sessionStorage.getItem).toHaveBeenCalled();
			expect(window.sessionStorage.getItem(storageName)).toMatchInlineSnapshot(`"undefined"`);
		});

		test('useSetStorage & useGetStorage - action set', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'session',
			});

			expect(window.sessionStorage.setItem).toHaveBeenCalled();

			useGetStorage('session', storageName);

			expect(window.sessionStorage.getItem).toHaveBeenCalled();
			expect(window.sessionStorage.getItem(storageName)).toMatchInlineSnapshot(`"undefined"`);
		});

		test('useGetStorage that has not been set, and return null value', () => {
			useGetStorage('session', storageName);

			expect(window.sessionStorage.getItem).toHaveBeenCalled();
			expect(window.sessionStorage.getItem(storageName)).toMatchInlineSnapshot(`null`);
		});

		test('useSetStorage to set supplied value, and return supplied value', () => {
			useSetStorage({
				action: 'set',
				rail: false,
				resizedWidth: '100px',
				saveWidth: true,
				storageName,
				storageType: 'session',
			});

			useGetStorage('session', storageName);

			expect(window.sessionStorage.getItem).toHaveBeenCalled();
			expect(window.sessionStorage.getItem(storageName)).toMatchInlineSnapshot(`"undefined"`);
		});
	});
});
