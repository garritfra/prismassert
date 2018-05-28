const prisma = require("./prismassert.js");
const assert = require("assert");

assert.equal(prisma.equal(1, 1), true);
assert.equal(prisma.equal(1, 2), false);
assert.equal(prisma.equal(1, "1"), true);
assert.equal(prisma.equal(true, "true"), false);

assert.equal(prisma.deepEqual(1, 1), true);
assert.equal(prisma.deepEqual(1, "1"), false);

assert.equal(prisma.isTruthy(true), true);
assert.equal(prisma.isTruthy(false), false);
assert.equal(prisma.isTruthy(prisma.isFalsy(false)), true);

assert.equal(prisma.isFalsy(false), true);
assert.equal(prisma.isFalsy(true), false);
assert.equal(prisma.isFalsy(prisma.isTruthy(false)), true);

console.log("All tests passed");
return 0;
