import {
	describe,
	it,
	expect,
	vi,
} from 'vitest';
import {
	useGetColor,
} from '../colors';
import vuetify from '../../../plugins/vuetify';

const theme = vuetify.theme;


describe('Colors Composable', () => {
	describe('useGetColor', () => {
		it('should return color name as HSL', () => {
			const color = useGetColor('red', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return hex value as HSL', () => {
			const color = useGetColor('#f00', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return RGB value as HSL', () => {
			const color = useGetColor('rgb(255,0,0)', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return HSL value as HSL', () => {
			const color = useGetColor('hsl(0 100% 50%)', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return theme variable as an RGB', () => {
			const color = useGetColor('--v-theme-error', theme);
			expect(color).toMatchInlineSnapshot(`"rgb(var(--v-theme-error))"`);
		});

		it('should return a non theme color option as default HSL color value', () => {
			const color = useGetColor('foobar', theme);

			expect(color).toMatchInlineSnapshot(`"hsl(0 0% 100% / 12%)"`);
		});

		it('should return a non theme variable as default HSL color value', () => {
			const color = useGetColor('--v-foobar', theme);

			expect(color).toMatchInlineSnapshot(`"hsl(0 0% 100% / 12%)"`);
		});

		// console.warn tests //
		const logSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

		it('should console warn when color prop "foobar" doesn\'t exist in colors', () => {
			logSpy.mockReset();

			useGetColor('foobar', theme);

			expect(logSpy).toHaveBeenCalled();
			expect(logSpy).toHaveBeenCalledTimes(1);
		});

		it('should console warn when color prop "--v-foobar" doesn\'t exist in colors', () => {
			logSpy.mockReset();

			useGetColor('--v-foobar', theme);

			expect(logSpy).toHaveBeenCalled();
			expect(logSpy).toHaveBeenCalledTimes(1);
		});
	});
});
