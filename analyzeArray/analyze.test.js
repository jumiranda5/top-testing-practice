import { analyzeArray } from "./analyze";

test('analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
    expect(analyzeArray([1,8,3,4,2,6]))
        .toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    expect(() => analyzeArray([1, 2, "text"])).toThrow();
});