
import {validate} from '../src/client/js/validateURL';

test('checks if url fits regex pattern', () => {
    expect(validate('https://www.google.com')).toBe(true);
});

test('checks if url fits regex pattern', () => {
    expect(validate('google.com')).toBe(false);
});

test('checks if url fits regex pattern', () => {
    expect(validate('dhowhoa')).toBe(false);
});

test('checks if url fits regex pattern', () => {
    expect(validate('hwwp://www.google.com')).toBe(false);
});