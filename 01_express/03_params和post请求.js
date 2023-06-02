const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 配置静态资源路径(默认找index.html)
app.use(express.static('./public'))

// 配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))







app.post('/login', (req, res) => {
    // 通过req.body获取请求体中的参数（post）
    // 默认情况下express不支持解析请求体中的参数，需要借助第三方中间件body-parser
    console.log(req.body);
    if (req.body.name === 'swaggylc' && req.body.password === '111') {
        res.send('<h1> login success </h1>')
    } else {
        res.send('<h1> login fail </h1>')
    }
})

// get请求发送参数的第二种方式
// /user/:id 表示当用户访问/user/xxx时，此路由会触发，xxx会被当做id的值
// 在路径中以冒号命名的部分我们称为params参数，在get请求中它可以被解析为请求参数
// 例如：/user/123 会被解析为 {id:123}
// 可以通过req.params获取到请求参数
// params一般不会传特别特别复杂的参数，一般都是一些id之类的
app.get('/user/:id', (req, res) => {
    // 约定优于配置
    res.send('get success')
})





app.listen(3000, () => {
    console.log('server is running at port 3000   ' + 'http://localhost:3000')
}
)