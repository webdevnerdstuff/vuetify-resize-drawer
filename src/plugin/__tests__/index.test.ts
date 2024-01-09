import { describe, it, expect } from 'vitest';
import { createVResizeDrawer } from '../';


describe('Plugin Index', () => {
	describe('install', () => {
		it('should return install function', () => {
			const VResizeDrawer = createVResizeDrawer();

			expect('install' in VResizeDrawer).toBe(true);
		});
	});
});
