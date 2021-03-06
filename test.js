var test = require('tape');
var human = require('./index');

test('things work as expected', function(assert) {
  var name = 'Chris Dickinson <christopher.s.dickinson@gmail.com> 1363906748 -0700';

  assert.deepEqual(human(name), {
    name: 'Chris Dickinson',
    email: 'christopher.s.dickinson@gmail.com',
    timestamp: 1363906748,
    timezone: '-0700'
  });

  assert.end()
});
