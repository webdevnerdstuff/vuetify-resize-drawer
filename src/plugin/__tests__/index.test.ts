import { describe, it, expect } from 'vitest';
import { createApp } from 'vue';
import { createVResizeDrawer, default as VResizeDrawer } from '../';


describe('Plugin Index', () => {
	describe('createVResizeDrawer', () => {
		it('should return an install function', () => {
			const plugin = createVResizeDrawer();
			expect('install' in plugin).toBe(true);
			expect(typeof plugin.install).toBe('function');
		});

		it('should install without throwing when registered with a Vue app', () => {
			const app = createApp({});
			const plugin = createVResizeDrawer();
			expect(() => app.use(plugin)).not.toThrow();
		});

		it('should accept global options', () => {
			const plugin = createVResizeDrawer({ handlePosition: 'border', resizable: false });
			expect('install' in plugin).toBe(true);
		});
	});

	describe('default export', () => {
		it('should export VResizeDrawer component', () => {
			expect(VResizeDrawer).toBeDefined();
		});

		it('should be an object (Vue component)', () => {
			expect(typeof VResizeDrawer).toBe('object');
		});
	});
});
