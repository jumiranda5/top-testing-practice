import { getChars, reverse } from "./reverse";

test('gets char list from string', () => {
    expect(getChars('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    expect(getChars('  hello  ')).toEqual(['h', 'e', 'l', 'l', 'o']);
    expect(() => getChars('')).toThrow();
    expect(() => getChars(null)).toThrow();
    expect(() => getChars()).toThrow();
});

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
})