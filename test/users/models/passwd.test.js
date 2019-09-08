/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const { expect } = require('chai');

const { Password } = require('../../../src/users/models');

describe('When creating a new Password model', () => {
  it('should be valid if everything is properly set', (done) => {
    const passwd = new Password({ password: '12345678' });

    passwd.validate((err) => {
      expect(err).to.not.exist;
      done();
    });
  });

  it('should be invalid if password is empty', (done) => {
    const passwd = new Password();

    passwd.validate((err) => {
      expect(err.errors.password.message).to.be.equal('Password is required');
      done();
    });
  });

  it('should return error if password is lower than six characters', (done) => {
    const passwd = new Password({ password: '12345' });

    passwd.validate((err) => {
      expect(err.errors.password.message).to.be.equal('Password must be six characters longer');
      done();
    });
  });
});
