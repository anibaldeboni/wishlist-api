/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const { expect } = require('chai');

const { User } = require('../../../src/users/models');

describe('When creating a new User model', () => {
  it('should be valid if everything is properly set', (done) => {
    const user = new User({ name: 'Maurício', email: 'mauricio@email.com.br' });

    user.validate((err) => {
      expect(err).to.not.exist;
      done();
    });
  });

  it('should be invalid if name is empty', (done) => {
    const user = new User();

    user.validate((err) => {
      expect(err.errors.name.message).to.be.equal('Username is required');
      done();
    });
  });

  it('should return error if no email is provided', (done) => {
    const user = new User({ name: 'Maurício' });

    user.validate((err) => {
      expect(err.errors.email.message).to.be.equal('Path `email` is required.');
      done();
    });
  });

  it('should return error if email format is invalid', (done) => {
    const user = new User({ name: 'Maurício', email: 'mauricio#email.com.br' });

    user.validate((err) => {
      expect(err.errors.email.message).to.be.equal('Please enter a valid e-mail address');
      done();
    });
  });
});
