class bucketUtils {
  /**
   * @function gcd
   * @description function to determine the greatest common divisor
   * @param a number
   * @param b number
   * @returns {number}
   */
  public gcd(a: number, b: number): number {
    if (b == 0) return a;
    return this.gcd(b, a % b);
  }
}
export default new bucketUtils();
