const prisma = require("./prismassert.js");
const assert = require("assert");

assert.equal(prisma.equal(1, 1), true);
assert.equal(prisma.equal(1, 2), false);
assert.equal(prisma.equal(1, "1"), true);
assert.equal(prisma.equal(true, "true"), false);

assert.equal(prisma.deepEqual(1, 1), true);
assert.equal(prisma.deepEqual(1, "1"), false);

console.log("All tests passed");
return 0;
