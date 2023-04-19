var express = require('express');
var router = express.Router();
var sqlPool = require('../util/db');
var $sql = require('../util/sqlMap');
var result = require('../util/result');

// 登录接口
router.post('/login', (req, res, next) => {
    const requestBody = req.body;
    const sel_email_sql = $sql.user.select + " where email = ?";
    const sqlArr = [requestBody.email];
    const callBack = (err, results) => {
        if (err) {
            throw err;
        }
        console.log("结果是：" + JSON.stringify(results));
        if (results[0] === undefined) {
            res.json(result(-1, '查询不到，用户不存在，即邮箱填写错误~~~', []));
        } else {
            if (results[0].email === requestBody.email && results[0].password === requestBody.password) {
                var resultData = {'name': results[0].name, 'email':results[0].email}
                res.json(result(0, '用户存在并且邮箱密码正确~~~', resultData));
            } else {
                res.json(result(1, '用户存在，但密码不正确~~~', []));
            }
        }
    }

    sqlPool.connect(sel_email_sql, sqlArr, callBack);
});

// 注册接口
router.post('/add', (req, res) => {
    const requestBody = req.body;
    const sel_sql = $sql.user.select + " where email = ?";
    const sel_sql_arr = [requestBody.email];
    const add_sql = $sql.user.add;
    const add_sql_arr = [requestBody.name, requestBody.email, requestBody.password];
    console.log(sel_sql);

    const add_call_back = (err, results) => {
        if (err) {
            console.log(err);
        } else{
            console.log("添加结果是：" + JSON.stringify(results));
            res.json(result(0, '用户创建成功~~~', []));
        }
    }

    const sel_call_back = (err, results) => {
        if(err) {
            console.log(err);
        }
        if (results.length !== 0 && requestBody.email === results[0].email) {
            res.json(result(-1, '用户名已经存在~~~', []));
        } else {
            sqlPool.connect(add_sql, add_sql_arr, add_call_back);
        }
    }

    sqlPool.connect(sel_sql, sel_sql_arr, sel_call_back);
});

module.exports = router;
