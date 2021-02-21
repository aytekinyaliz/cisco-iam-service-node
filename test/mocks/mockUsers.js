module.exports = {
  validUser: {
    'username': 'user',
    'password': 'password'
  },
  wrongPassword: {
    'username': 'user',
    'password': '----'
  },
  wrongUsername: {
    'username': '----',
    'password': 'password'
  },
  emptyUsername: {
    'username': '',
    'password': 'password'
  },
  emptyUsernameAndPassword: {
    'username': '',
    'password': ''
  },
  invalidUsernameAndPassword: {
    'username': 'ab',
    'password': 'ab'
  }
};
