import { cipher } from "./cipher";

test('cipher', () => {
    expect(cipher('z', 1)).toBe('a');
    expect(cipher('Z', 1)).toBe('A');
    expect(cipher('Hello', 1)).toBe('Ifmmp');
    expect(cipher('Hello!', 1)).toBe('Ifmmp!');
});