import { getChars, capitalize } from "./capitalize";

test('gets char list from string', () => {
    expect(getChars('hello world')).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
    expect(getChars('  hello world  ')).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
    expect(() => getChars('')).toThrow();
    expect(() => getChars(null)).toThrow();
    expect(() => getChars()).toThrow();
});


test('capitalize', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('hELLO world')).toBe('Hello world');
    expect(capitalize('HELLO world')).toBe('Hello world');
});
