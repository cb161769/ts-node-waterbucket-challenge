import { solve } from '../math.utils';

describe('bucket utils specifications', () => {
  test('should return more than one path', () => {
    const paths = solve(2, 100, [0, 0], [0, 96]);
    expect(paths.length).toBeGreaterThan(1);
  });
  test('should not have paths', () => {
    const paths = solve(2, 4, [0, 0], [0, 10]);
    expect(paths.length).toBe(0);
  });
  test('should compute large numbers', () => {
    const paths = solve(2, 1000, [0, 0], [0, 960]);
    expect(paths.length).toBeGreaterThan(1);
  });
  test('should not have a solution with large numbers', () => {
    const paths = solve(2, 960, [0, 0], [0, 960]);
    expect(paths.length).toBeGreaterThan(1);
  });
});
