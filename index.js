
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public/', express.static("public"));

app.use((req, res, next) => {
  const startTime = Date.now();
  req.on("end", () => {
    const endTime = Date.now();
    const vals = {
      method: req.method,
      path: req.path,
      time: endTime - startTime,
    };
    console.log(req.method + " " + req.path + " " + res.statusCode + " " + endTime - startTime + "ms");
  });
  next();
})

require('./Config')(app);


server.listen(3001, (err) => {
  if (!err) console.log('Server is started');
  else console.log(err);
})
