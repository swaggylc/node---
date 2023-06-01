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





// 启动服务器
app.listen(3000, () => {
    console.log('服务器启动成功');
});