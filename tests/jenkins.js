module.exports = {
  'YouTube test': function (client) {
    client
      .url('https://www.youtube.com/')
      .setValue('input[id="search"]', 'monkeys')
      .click('button[id="search-icon-legacy"]')
      .assert.containsText('body', 'SIGN IN')
      .end();
  }
};