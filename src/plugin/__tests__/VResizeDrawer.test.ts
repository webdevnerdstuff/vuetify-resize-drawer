import {
	describe,
	it,
	expect,
	beforeEach,
	vi,
} from 'vitest';
import { defineComponent, h } from 'vue';

// jsdom does not include ResizeObserver; Vuetify's VNavigationDrawer requires it
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	unobserve: vi.fn(),
}));
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import { VApp } from 'vuetify/components';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import VResizeDrawer from '../VResizeDrawer.vue';


const vuetify = createVuetify({
	components,
	directives,
	icons: {
		aliases,
		defaultSet: 'mdi',
		sets: { mdi },
	},
});

const mountDrawer = (props: Record<string, unknown> = {}, slots: Record<string, unknown> = {}) => {
	const wrapper = mount(
		defineComponent({
			setup() {
				return () => h(VApp, () => h(VResizeDrawer, props, slots));
			},
		}),
		{ global: { plugins: [vuetify] } },
	);

	return wrapper;
};


describe('VResizeDrawer Component', () => {
	beforeEach(() => {
		window.localStorage.clear();
		window.sessionStorage.clear();
	});

	describe('mounting', () => {
		it('should mount without throwing', () => {
			expect(() => mountDrawer()).not.toThrow();
		});

		it('should render a v-navigation-drawer element', () => {
			const wrapper = mountDrawer();
			expect(wrapper.find('.v-navigation-drawer').exists()).toBe(true);
		});
	});

	describe('handle visibility', () => {
		it('should show the handle by default', () => {
			const wrapper = mountDrawer({ resizable: true });
			expect(wrapper.find('.v-resize-drawer--handle-container').exists()).toBe(true);
		});

		it('should hide the handle when resizable is false', () => {
			const wrapper = mountDrawer({ resizable: false });
			expect(wrapper.find('.v-resize-drawer--handle-container').exists()).toBe(false);
		});

		it('should hide the handle when rail is true', () => {
			const wrapper = mountDrawer({ rail: true });
			expect(wrapper.find('.v-resize-drawer--handle-container').exists()).toBe(false);
		});
	});

	describe('slots', () => {
		it('should render default slot content', () => {
			const wrapper = mountDrawer({}, {
				default: () => h('div', { class: 'test-content' }, 'Hello'),
			});
			expect(wrapper.find('.test-content').exists()).toBe(true);
			expect(wrapper.find('.test-content').text()).toBe('Hello');
		});

		it('should render handle slot content inside handle-slot wrapper', () => {
			const wrapper = mountDrawer({}, {
				handle: () => h('div', { class: 'custom-handle' }, 'drag me'),
			});
			expect(wrapper.find('.v-resize-drawer--handle-slot').exists()).toBe(true);
			expect(wrapper.find('.custom-handle').exists()).toBe(true);
		});

		it('should render prepend slot content', () => {
			const wrapper = mountDrawer({}, {
				prepend: () => h('div', { class: 'prepend-content' }, 'Prepend'),
			});
			expect(wrapper.find('.v-navigation-drawer__prepend').exists()).toBe(true);
			expect(wrapper.find('.prepend-content').exists()).toBe(true);
		});

		it('should render append slot content', () => {
			const wrapper = mountDrawer({}, {
				append: () => h('div', { class: 'append-content' }, 'Append'),
			});
			expect(wrapper.find('.v-navigation-drawer__append').exists()).toBe(true);
			expect(wrapper.find('.append-content').exists()).toBe(true);
		});

		it('should render default slot content inside the content wrapper', () => {
			const wrapper = mountDrawer({}, {
				default: () => h('span', { class: 'inner' }, 'Content'),
			});
			const content = wrapper.find('.v-navigation-drawer__content');
			expect(content.exists()).toBe(true);
			expect(content.find('.inner').exists()).toBe(true);
		});
	});

	describe('drawer events', () => {
		it('should emit drawer:mouseenter when mouse enters the drawer', async () => {
			const wrapper = mountDrawer();
			const drawerEl = wrapper.findComponent(VResizeDrawer);
			await drawerEl.find('.v-navigation-drawer').trigger('mouseenter');
			expect(drawerEl.emitted('drawer:mouseenter')).toBeTruthy();
		});

		it('should emit drawer:mouseleave when mouse leaves the drawer', async () => {
			const wrapper = mountDrawer();
			const drawerEl = wrapper.findComponent(VResizeDrawer);
			await drawerEl.find('.v-navigation-drawer').trigger('mouseleave');
			expect(drawerEl.emitted('drawer:mouseleave')).toBeTruthy();
		});
	});

	describe('handle events', () => {
		it('should emit handle:click when handle is clicked', async () => {
			const wrapper = mountDrawer({ resizable: true });
			const drawerEl = wrapper.findComponent(VResizeDrawer);
			await wrapper.find('.v-resize-drawer--handle-container').trigger('click');
			expect(drawerEl.emitted('handle:click')).toBeTruthy();
		});

		it('should emit handle:dblclick when handle is double-clicked', async () => {
			const wrapper = mountDrawer({ resizable: true });
			const drawerEl = wrapper.findComponent(VResizeDrawer);
			await wrapper.find('.v-resize-drawer--handle-container').trigger('dblclick');
			expect(drawerEl.emitted('handle:dblclick')).toBeTruthy();
		});
	});

	describe('drawer classes', () => {
		it('should include v-resize-drawer class', () => {
			const wrapper = mountDrawer();
			expect(wrapper.find('.v-resize-drawer').exists()).toBe(true);
		});

		it('should include left class for start location', () => {
			const wrapper = mountDrawer({ location: 'start' });
			expect(wrapper.find('.v-navigation-drawer--left').exists()).toBe(true);
		});

		it('should include right class for end location', () => {
			const wrapper = mountDrawer({ location: 'end' });
			expect(wrapper.find('.v-navigation-drawer--right').exists()).toBe(true);
		});
	});

	describe('props', () => {
		it('should throw when bottom location is combined with bottom handle position', () => {
			expect(() => mountDrawer({ location: 'bottom', handlePosition: 'bottom' })).toThrow();
		});

		it('should throw when top location is combined with top handle position', () => {
			expect(() => mountDrawer({ location: 'top', handlePosition: 'top' })).toThrow();
		});
	});
});
