const http = require('http');
const request = require('request');

const hostname = '127.0.0.1';
const port = 8010;

// 创建一个API代理服务
const apiServer = http.createServer((req, res) => {
  // 指向代理服务或后端服务IP:端口
  const url = 'http://117.174.130.209:8888' + req.url;
  const options = {
    url: url
  };

  function callback(error, response, body) {
    if(!error && response.statusCode === 200) {
      // 设置编码类型，否则中文显示为乱码
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      // 设置所有域允许跨域
      res.setHeader('Access-Control-Allow-Origin', '*');
      // 返回代理后的内容
      res.end(body);
    }
  }

  request.get(options, callback);
})

// 监听端口
apiServer.listen(port, hostname, () => {
  console.log(`接口代理运行在 http://${hostname}:${port}/`);
})

//在终端使用Node启动代理服务：node proxy.js