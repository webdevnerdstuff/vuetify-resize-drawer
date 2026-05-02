import { describe, it, expect } from 'vitest';
import {
	useDrawerStyles,
	useHandleContainerStyles,
	useHandleIconStyles
} from '../styles';
import vuetify from '../../../plugins/vuetify';

const theme = vuetify.theme;


describe('Styles Composable', () => {
	describe('useDrawerStyles', () => {
		it('should return styles with transition when isMouseDown is false', () => {
			const data = useDrawerStyles({
				isMouseDown: false,
				maxWidth: '50%',
				minWidth: '56',
				rail: false,
				railWidth: '8',
				resizedAmount: '300',
				snapBack: true,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "transitionDuration": ".2s",
				  "width": "300px",
				}
			`);
		});

		it('should return styles with no transition when isMouseDown is true', () => {
			const data = useDrawerStyles({
				isMouseDown: true,
				maxWidth: '500px',
				minWidth: '56px',
				rail: false,
				railWidth: '8px',
				resizedAmount: '256px',
				snapBack: false,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "transitionDuration": "0s",
				  "width": "256px",
				}
			`);
		});

		it('should return empty styles when rail is true', () => {
			const data = useDrawerStyles({
				isMouseDown: true,
				maxWidth: '500px',
				minWidth: '56px',
				rail: true,
				railWidth: '8px',
				resizedAmount: '300px',
				snapBack: false,
			});
			expect(data).toMatchInlineSnapshot(`{}`);
		});

		it('should clamp to maxWidth when snapBack is false and value exceeds max', () => {
			const data = useDrawerStyles({
				isMouseDown: false,
				maxWidth: '500px',
				minWidth: '56px',
				rail: false,
				railWidth: '8px',
				resizedAmount: '600',
				snapBack: false,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "transitionDuration": ".2s",
				  "width": "500px",
				}
			`);
		});

		it('should clamp to minWidth when snapBack is false and value is below min', () => {
			const data = useDrawerStyles({
				isMouseDown: false,
				maxWidth: '500px',
				minWidth: '56px',
				rail: false,
				railWidth: '8px',
				resizedAmount: '20',
				snapBack: false,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "transitionDuration": ".2s",
				  "width": "56px",
				}
			`);
		});

		it('should return height/width styles when location is top', () => {
			const data = useDrawerStyles({
				isMouseDown: false,
				location: 'top',
				maxWidth: '500px',
				minWidth: '56px',
				rail: false,
				railWidth: '8px',
				resizedAmount: '300',
				snapBack: true,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "maxHeight": "300px !important",
				  "minHeight": "300px !important",
				  "transitionDuration": ".2s",
				  "width": "100%",
				}
			`);
		});

		it('should return height/width styles when location is bottom', () => {
			const data = useDrawerStyles({
				isMouseDown: true,
				location: 'bottom',
				maxWidth: '500px',
				minWidth: '56px',
				rail: false,
				railWidth: '8px',
				resizedAmount: '200',
				snapBack: true,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "maxHeight": "200px !important",
				  "minHeight": "200px !important",
				  "transitionDuration": "0s",
				  "width": "100%",
				}
			`);
		});
	});


	describe('useHandleContainerStyles', () => {
		it('should return styles with background color when position is border and handleColor is primary', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'primary',
				iconSizeUnit: 16,
				position: 'border',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "hsl(207 90% 54%)",
				  "height": "100%",
				  "width": "8px",
				}
			`);
		});

		it('should return styles with background color when position is border and handleColor is success', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'success',
				iconSizeUnit: 16,
				position: 'border',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "hsl(122 39% 49%)",
				  "height": "100%",
				  "width": "8px",
				}
			`);
		});

		it('should return styles with background color using theme variable handleColor', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: '--v-theme-primary',
				iconSizeUnit: 16,
				position: 'border',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "rgb(var(--v-theme-primary))",
				  "height": "100%",
				  "width": "8px",
				}
			`);
		});

		it('should return styles with background color using color name handleColor', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'blue',
				iconSizeUnit: 16,
				position: 'border',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "hsl(240 100% 50%)",
				  "height": "100%",
				  "width": "8px",
				}
			`);
		});

		it('should return styles with transparent background when position is center', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'primary',
				iconSizeUnit: 16,
				position: 'center',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "transparent",
				  "height": "16px",
				  "transform": undefined,
				  "width": "16px",
				}
			`);
		});

		it('should include transform when location is top and position is center', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'primary',
				iconSizeUnit: 16,
				location: 'top',
				position: 'center',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "transparent",
				  "height": "16px",
				  "transform": "translateX(-50%) rotate(90deg)",
				  "width": "16px",
				}
			`);
		});

		it('should include transform when location is bottom and position is center', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'primary',
				iconSizeUnit: 16,
				location: 'bottom',
				position: 'center',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "transparent",
				  "height": "16px",
				  "transform": "translateX(-50%) rotate(-90deg)",
				  "width": "16px",
				}
			`);
		});

		it('should return border height from borderWidth when location is top and position is border', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'primary',
				iconSizeUnit: 16,
				location: 'top',
				position: 'border',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "hsl(207 90% 54%)",
				  "height": "8px",
				  "width": "16px",
				}
			`);
		});
	});

	describe('useHandleIconStyles', () => {
		it('should return icon color as HSL', () => {
			const data = useHandleIconStyles({
				color: 'primary',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "color": "hsl(207 90% 54%)",
				}
			`);
		});

		it('should return icon color using a hex value', () => {
			const data = useHandleIconStyles({
				color: '#ff0000',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "color": "hsl(0 100% 50%)",
				}
			`);
		});

		it('should return icon color using a theme variable', () => {
			const data = useHandleIconStyles({
				color: '--v-theme-primary',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "color": "rgb(var(--v-theme-primary))",
				}
			`);
		});
	});
});
