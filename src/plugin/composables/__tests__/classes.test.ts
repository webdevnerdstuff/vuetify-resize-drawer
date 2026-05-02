import { describe, it, expect } from 'vitest';
import {
	useDrawerClasses,
	useHandleContainerClasses,
	useHandleIconClasses,
} from '../classes';


describe('Classes Composable', () => {
	describe('useDrawerClasses', () => {
		it('should mark left classes for location start', () => {
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

		it('should mark left classes for location left', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'left',
				rail: false,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark right classes for location right', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'right',
				rail: false,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark right classes for location end', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'end',
				rail: false,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark top classes for location top', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'top',
				rail: false,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark bottom classes for location bottom', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'bottom',
				rail: false,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark rail class when rail is true', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'start',
				rail: true,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark expand-on-hover class when expandOnHover is true', () => {
			const classes = useDrawerClasses({
				expandOnHover: true,
				floating: null,
				isMouseover: false,
				location: 'start',
				rail: false,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark temporary class when temporary is true', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'start',
				rail: false,
				railWidth: '56',
				temporary: true,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark is-hovering class when isMouseover is true', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: true,
				location: 'start',
				rail: false,
				railWidth: '56',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should mark custom-rail class when railWidth differs from 56', () => {
			const classes = useDrawerClasses({
				expandOnHover: false,
				floating: null,
				isMouseover: false,
				location: 'start',
				rail: false,
				railWidth: '8',
				temporary: false,
			});
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useHandleContainerClasses', () => {
		it('should return class object for start location with center position', () => {
			const classes = useHandleContainerClasses({
				drawerLocation: 'start',
				handlePosition: 'center',
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object for left location with top position', () => {
			const classes = useHandleContainerClasses({
				drawerLocation: 'left',
				handlePosition: 'top',
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object for right location with center position', () => {
			const classes = useHandleContainerClasses({
				drawerLocation: 'right',
				handlePosition: 'center',
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object for top location with border position', () => {
			const classes = useHandleContainerClasses({
				drawerLocation: 'top',
				handlePosition: 'border',
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object for bottom location with bottom position', () => {
			const classes = useHandleContainerClasses({
				drawerLocation: 'bottom',
				handlePosition: 'bottom',
			});
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useHandleIconClasses', () => {
		it('should return class object with fa classes as false when defaultSet is mdi', () => {
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

		it('should return class object with fa classes as true when defaultSet is fa', () => {
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

		it('should mark user-icon class when isUserIcon is true', () => {
			const classes = useHandleIconClasses({
				drawerLocation: 'start',
				handlePosition: 'center',
				iconOptions: {
					defaultSet: 'mdi'
				},
				isUserIcon: true,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object for right location', () => {
			const classes = useHandleIconClasses({
				drawerLocation: 'right',
				handlePosition: 'center',
				iconOptions: {
					defaultSet: 'mdi'
				},
				isUserIcon: false,
			});
			expect(classes).toMatchSnapshot();
		});
	});
});
