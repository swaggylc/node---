/**
 * express 是node中的服务器框架
 * 使用步骤：
 *  1. 创建并初始化项目
 *      npm init -y
 *  2. 安装express
 *     npm install express
 *  3. 创建index.js，并编写代码
 *  
 */
// 引入express
const express = require('express');
// 获取express实例(对象)
const app = express();
/**
 * 如果希望服务器正常访问，则需要为服务器设置路由
 *      路由可以根据不同的请求方式和请求地址来处理用户的请求
 * app.get()  处理get请求
 * app.post() 处理post请求
 * app.all()  处理所有请求
 * 
 * 中间件：在express中，中间件是一个函数，可以接收到请求对象和响应对象
 *      在express中我们使用aap.use()来定义中间件
 *      中间件的作用和路由很像，用法也很像
 *      但中间件不区分请求方式
 * 
 * 
 * 
 * 
 */
// app.get('/', (req, res) => {
//     // 在路由中应该做两件事
//     // 获取用户的请求(request)
//     // 根据用户的请求返回响应(response)
//     res.send('Hello Express');
// });

app.use('/', (req, res, next) => {
    // next不能在响应完毕后使用
});


// 启动服务器
app.listen(3000, () => {
    console.log('服务器启动成功' + 'http://localhost:3000');
});