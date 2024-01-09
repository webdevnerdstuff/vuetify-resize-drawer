import { describe, it, expect } from 'vitest';
import {
	useConvertToUnit,
} from '../helpers';


describe('Helpers Composable', () => {
	describe('useConvertToUnit', () => {
		it('should return string with a default px unit', () => {
			const unit = useConvertToUnit({ value: '10' });
			expect(unit).toBe('10px');
		});

		it('should return number with a default px unit', () => {
			const unit = useConvertToUnit({ value: 10 });
			expect(unit).toBe('10px');
		});

		it('should return string with a supplied unit', () => {
			const unit = useConvertToUnit({ unit: 'em', value: '10' });
			expect(unit).toBe('10em');
		});

		it('should return number with a supplied unit', () => {
			const unit = useConvertToUnit({ unit: 'em', value: 10 });
			expect(unit).toBe('10em');
		});
	});
});
