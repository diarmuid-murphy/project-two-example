var expect = require("chai").expect;
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
// var assert = require("chai").assert;

describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(true).to.be.true;
  });
});
