import { describe, it, expect } from 'vitest';
import { useGetIcon } from '../icons';


const iconOptions = {
	defaultSet: 'mdi'
};

describe('Icon Composable', () => {
	describe('useGetIcon', () => {
		it('should return supplied icon value', () => {

			const unit = useGetIcon({
				icon: 'mdi:mdi-cog',
				iconOptions,
				name: 'top',
			});

			expect(unit).toMatchInlineSnapshot(`"mdi:mdi-cog"`);
		});

		it('should return icon value using name', () => {
			const unit = useGetIcon({
				icon: undefined,
				iconOptions,
				name: 'center',
			});

			expect(unit).toMatchInlineSnapshot(`"mdi:mdi-chevron-double-right"`);
		});

		it('throws error if vuetify defaultSet is not supplied', () => {
			expect(() => useGetIcon({
				icon: undefined,
				iconOptions: {},
				name: 'top',
			})).toThrowError('[VResizeDrawer]: No default undefined icon set found.');
		});

		it('throws error if supplied name not found', () => {
			expect(() => useGetIcon({
				icon: undefined,
				iconOptions,
				name: 'foobar',
			})).toThrowError('[VResizeDrawer]: No foobar icon found.');
		});
	});
});
