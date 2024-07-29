import bucketUtils from '../bucket.utils';
describe('bucket utils specifications', () => {
  test('gcp should return a number', () => {
    const testing = bucketUtils.gcd(1, 3);
    expect(testing).toBeDefined();
  });
});
