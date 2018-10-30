module.exports = {
  'Page load test': function (client) {
    client
      .url('http://www.google.com')
      .assert.containsText('body', 'About Store')
      .end();
  }
};