import { describe, it, expect } from 'vitest';
import { useGetIcon } from '../icons';


const mdiOptions = { defaultSet: 'mdi' };
const faOptions = { defaultSet: 'fa' };
const fasvgOptions = { defaultSet: 'fasvg' };

describe('Icon Composable', () => {
	describe('useGetIcon', () => {
		it('should return the supplied icon value when icon prop is set', () => {
			const icon = useGetIcon({
				icon: 'mdi:mdi-cog',
				iconOptions: mdiOptions,
				name: 'top',
			});
			expect(icon).toMatchInlineSnapshot(`"mdi:mdi-cog"`);
		});

		it('should return undefined when name is border', () => {
			const icon = useGetIcon({
				icon: undefined,
				iconOptions: mdiOptions,
				name: 'border',
			});
			expect(icon).toBeUndefined();
		});

		it('throws when no defaultSet is supplied', () => {
			expect(() => useGetIcon({
				icon: undefined,
				iconOptions: {},
				name: 'top',
			})).toThrowError('[VResizeDrawer]: No default undefined icon set found.');
		});

		it('throws when name is not found in the icon set', () => {
			expect(() => useGetIcon({
				icon: undefined,
				iconOptions: mdiOptions,
				name: 'foobar',
			})).toThrowError('[VResizeDrawer]: No foobar icon found.');
		});

		describe('mdi icon set', () => {
			it('should return center icon', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: mdiOptions, name: 'center' });
				expect(icon).toMatchInlineSnapshot(`"mdi:mdi-chevron-double-right"`);
			});

			it('should return top icon', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: mdiOptions, name: 'top' });
				expect(icon).toMatchInlineSnapshot(`"mdi:mdi-dots-grid"`);
			});

			it('should return bottom icon', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: mdiOptions, name: 'bottom' });
				expect(icon).toMatchInlineSnapshot(`"mdi:mdi-dots-grid"`);
			});
		});

		describe('fa icon set', () => {
			it('should return center icon', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: faOptions, name: 'center' });
				expect(icon).toMatchInlineSnapshot(`"fas fa-angles-right"`);
			});

			it('should return top icon', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: faOptions, name: 'top' });
				expect(icon).toMatchInlineSnapshot(`"fas fa-grip"`);
			});

			it('should return bottom icon', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: faOptions, name: 'bottom' });
				expect(icon).toMatchInlineSnapshot(`"fas fa-grip"`);
			});
		});

		describe('fasvg icon set (maps to fa)', () => {
			it('should return center icon using fasvg defaultSet', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: fasvgOptions, name: 'center' });
				expect(icon).toMatchInlineSnapshot(`"fas fa-angles-right"`);
			});

			it('should return top icon using fasvg defaultSet', () => {
				const icon = useGetIcon({ icon: undefined, iconOptions: fasvgOptions, name: 'top' });
				expect(icon).toMatchInlineSnapshot(`"fas fa-grip"`);
			});
		});
	});
});
