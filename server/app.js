const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');

const app = express();

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 解析 application/json
app.use(bodyParser.json());

// 修改启动项
const http = require('http');
// 创建http服务.
const server = http.createServer(app);
// 设置服务端口
server.listen(3000, () => {
  console.log("服务端启动了，访问地址：http://127.0.0.1:3000");
});

app.use(cors());
app.use('/api/users', usersRouter);

//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


