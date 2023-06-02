const express = require('express');
const app = express();

// 设置static中间件后，浏览器访问时会自动去public目录下寻找是否有匹配的静态资源
app.use(express.static('public'))

app.get('/', (req, res) => {
    /**
     * 希望给用户返回一个页面
     *      服务器中的代码对外部而言都是不可见的，所以我们写的html页面
     *      服务器无法直接访问
     *      如果希望浏览器能够访问，则需要将页面所在目录设置为公共目录
     * 
     * 
     * 
     * 
     */
    res.send();
});


// app.get('/login', (req, res) => {
//     // 希望能获取到用户提交的用户名和密码
//     // req.query 表示查询字符串中的请求参数
//     console.log(req.query);
// })



app.post('/login', (req, res) => {
    // 希望能获取到用户提交的用户名和密码
    // req.query 表示查询字符串中的请求参数
    console.log(req.query);
})








app.listen(3000, () => {
    console.log('服务器启动成功' + 'http://localhost:3000');
}
);