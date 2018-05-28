module.exports = class Prismassert {
  static equal(actual, expected) {
    return actual == expected;
  }

  static deepEqual(actual, expected) {
    return actual === expected;
  }

  static isTruthy(actual) {
    return actual == true;
  }

  static isFalsy(actual) {
    return actual == false;
  }
};
