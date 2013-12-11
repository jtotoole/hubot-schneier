// Generated by CoffeeScript 1.3.3
(function() {
  var chai, expect, sinon;

  chai = require('chai');

  sinon = require('sinon');

  chai.use(require('sinon-chai'));

  expect = chai.expect;

  describe('schneier', function() {
    beforeEach(function() {
      this.robot = {
        respond: sinon.spy(),
        hear: sinon.spy()
      };
      return require('../src/schneier')(this.robot);
    });
    return it('registers a hear listener', function() {
      return expect(this.robot.hear).to.have.been.calledWith(/schneier|bruce/i);
    });
  });

}).call(this);
