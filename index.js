module.exports = function(str) {
  var rex = /(.*) <([^>]+)> (\d+) ([+-]{1}\d{4})/;
  var match = rex.exec(str);

  if (!match) {
    return null;
  }

  return {
    name: match[1].replace(/(^\s+|\s+$)/, ''),
    email: match[2],
    timestamp: parseInt(match[3], 10),
    timezone: match[4]
  }
};
