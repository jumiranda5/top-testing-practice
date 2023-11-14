import { calculator } from "./calculator";

test('calculate', () => {
    expect(calculator(1, 1)).toEqual({add: 2, subtract: 0, multiply: 1, divide: 1});
    expect(calculator(2, 1).add).toEqual(3);
    expect(calculator(2, 1).subtract).toBe(1);
    expect(calculator(2, 1).multiply).toBe(2);
    expect(calculator(2, 1).divide).toBe(2);
    expect(calculator(2, 0).divide).toBe("Impossible");
})