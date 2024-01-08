import { describe, it, expect } from 'vitest';
import {
	useDrawerClasses,
	useHandleContainerClasses,
	useHandleIconClasses,
} from '../classes';


describe('Classes Composable', () => {
	describe('useDrawerClasses', () => {
		it('should return class object', () => {
			const classes = useDrawerClasses({
				absolute: false,
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'start',
				rail: false,
				railWidth: '8',
				temporary: undefined,
			});

			expect(classes).toMatchSnapshot();
		});
	});

	describe('useHandleContainerClasses', () => {
		it('should return class object', () => {
			const classes = useHandleContainerClasses({
				drawerLocation: 'start',
				handlePosition: 'center',
			});

			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useHandleContainerClasses({
				drawerLocation: 'left',
				handlePosition: 'top',
			});

			expect(classes).toMatchSnapshot();
		});
	});

	describe('useHandleIconClasses', () => {
		it('should return class object with fa classes as false', () => {
			const classes = useHandleIconClasses({
				drawerLocation: 'start',
				handlePosition: 'top',
				iconOptions: {
					defaultSet: 'mdi'
				},
				isUserIcon: false,
			});

			expect(classes).toMatchSnapshot();
		});

		it('should return class object with fa classes as true', () => {
			const classes = useHandleIconClasses({
				drawerLocation: 'left',
				handlePosition: 'center',
				iconOptions: {
					defaultSet: 'fa'
				},
				isUserIcon: false,
			});

			expect(classes).toMatchSnapshot();
		});
	});
});
