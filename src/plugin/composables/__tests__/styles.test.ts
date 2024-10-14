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
		it('should return styles with transition if isMouseDown is false.', () => {
			const data = useDrawerStyles({
				isMouseDown: false,
				maxWidth: '50%',
				minWidth: '56',
				rail: false,
				railWidth: '8',
				resizedWidth: '300',
				widthSnapBack: true,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "transitionDuration": ".2s",
				  "width": undefined,
				}
			`);
		});

		it('should return styles with no transition if isMouseDown is true', () => {
			const data = useDrawerStyles({
				isMouseDown: true,
				maxWidth: '500px',
				minWidth: '56px',
				rail: false,
				railWidth: '8px',
				resizedWidth: '256px',
				widthSnapBack: false,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "transitionDuration": "0s",
				  "width": undefined,
				}
			`);
		});

		it('should return no styles if rail is true', () => {
			const data = useDrawerStyles({
				isMouseDown: true,
				maxWidth: '500px',
				minWidth: '56px',
				rail: true,
				railWidth: '8px',
				resizedWidth: '300px',
				widthSnapBack: false,
			});
			expect(data).toMatchInlineSnapshot(`{}`);
		});
	});


	describe('useHandleContainerStyles', () => {
		it('should return styles with a background color if position is border.', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'primary',
				iconSize: 'x-small',
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

		it('should return styles with a background color if position is border.', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'success',
				iconSize: 'x-small',
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
				iconSize: 'x-small',
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
				iconSize: 'x-small',
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

		it('should return styles with a transparent background color if position is not border.', () => {
			const data = useHandleContainerStyles({
				borderWidth: '8',
				handleColor: 'primary',
				iconSize: 'x-small',
				position: 'center',
				theme,
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "transparent",
				  "height": "undefinedpx",
				  "transform": undefined,
				  "width": "undefinedpx",
				}
			`);
		});
	});

	describe('useHandleIconStyles', () => {
		it('should return ...', () => {
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
	});
});
