export default class MathUtils {
  static round(n) {
    if (!n) {
      return 0;
    }
    return Math.round(n * 100) / 100;
  }

  static arraySum(array) {
    return array.reduce((a, b) => a + b, 0);
  }

  static arrayMean(array) {
    return MathUtils.arraySum(array) / array.length;
  }

  static derivate(array, interval) {
    const delta = array.map((v, i, a) => v - (a[i - 1] || 0));
    return delta.map(value => value / interval).slice(1);
  }

  static integrate(array, interval) {
    const bases = array.map((v, i, a) => (v + (a[i - 1] || 0)) / 2);
    return bases.map(value => value * interval).slice(1);
  }
}
