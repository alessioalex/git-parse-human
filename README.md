# git-parse-human2

Parse author and committer names from git commit data.

```javascript
var human = require('git-parse-human2');
var committer = 'Chris Dickinson <christopher.s.dickinson@gmail.com> 1363906748 -0700';

console.log(human(committer));
// outputs the following:
/*
{
  name: 'Chris Dickinson',
  email: 'christopher.s.dickinson@gmail.com',
  timestamp: 1363906748,
  timezone: '-0700'
}
*/
```

## API

#### human(str) -> result object | null

Parse a human, returning an object with their name,
their email, the commit timestamp in seconds and the commit
timezone offset.

## License

MIT
