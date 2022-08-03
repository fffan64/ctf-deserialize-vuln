const express = require('express');
const cookieParser = require('cookie-parser');
const escape = require('escape-html');
const serialize = require('node-serialize');

const PORT = 8080;
const app = express();
app.disable('x-powered-by');
app.use(cookieParser())
app.get('/', function (req, res) {
  if (req.cookies.profile) {
    const str = Buffer.from(req.cookies.profile, 'base64').toString();
    console.log(str);
    const obj = serialize.unserialize(str);
    console.log(obj);
    if (obj.username) {
      return res.status(200).send("Hello " + escape(obj.username));
    }
  } else {
    const encoded = Buffer.from('{"username":"AXA Dev Summit 2021 beautiful user","from":"Tokyo","message":"The flag is in current dir :), use deserialization vuln !"}').toString('base64')
    res.cookie(
      'profile',
      encoded,
      { maxAge: 900000, httpOnly: true }
    );
  }
  return res.status(200).send("Hello World, come again :)");
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});