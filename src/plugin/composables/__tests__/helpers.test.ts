import { describe, it, expect } from 'vitest';
import {
	useConvertToNumber,
	useConvertToUnit,
	useUnitToPx,
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

		it('should return undefined for empty string', () => {
			const unit = useConvertToUnit({ value: '' });
			expect(unit).toBeUndefined();
		});

		it('should pass through non-numeric strings unchanged', () => {
			const unit = useConvertToUnit({ value: 'auto' });
			expect(unit).toBe('auto');
		});

		it('should pass through strings that already have a unit', () => {
			const unit = useConvertToUnit({ value: '10px' });
			expect(unit).toBe('10px');
		});

		it('should return "0" for value 0 without unit', () => {
			const unit = useConvertToUnit({ value: 0 });
			expect(unit).toBe('0');
		});
	});

	describe('useConvertToNumber', () => {
		it('should return a number from a string with px unit', () => {
			const result = useConvertToNumber('300px');
			expect(result).toBe(300);
		});

		it('should return a number from a plain numeric string', () => {
			const result = useConvertToNumber('256');
			expect(result).toBe(256);
		});

		it('should return the same number when passed a number', () => {
			const result = useConvertToNumber(256);
			expect(result).toBe(256);
		});

		it('should strip non-numeric characters from a string', () => {
			const result = useConvertToNumber('200em');
			expect(result).toBe(200);
		});

		it('should handle decimal values by rounding', () => {
			const result = useConvertToNumber('100.7px');
			expect(result).toBe(101);
		});

		it('should convert percentage string relative to window.innerWidth', () => {
			Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1000 });
			const result = useConvertToNumber('50%');
			expect(result).toBe(500);
		});
	});

	describe('useUnitToPx', () => {
		it('should return 0 for undefined', () => {
			const result = useUnitToPx(undefined);
			expect(result).toBe(0);
		});

		it('should return the number directly when passed a number', () => {
			const result = useUnitToPx(24);
			expect(result).toBe(24);
		});

		it('should return 0 for 0', () => {
			const result = useUnitToPx(0);
			expect(result).toBe(0);
		});
	});
});
