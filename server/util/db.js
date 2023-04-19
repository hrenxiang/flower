const mysql = require('mysql');

module.exports = {
    // 数据库配置
    config: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'huangrx-common-test'
    },
    // 连接数据库
    connect: function (sql, sqlArr, callBack) {
        var pool = mysql.createPool(this.config);
        pool.getConnection((err, connection) => {
            console.log("数据库获取连接~~~")
            if (err) {
                console.log("连接数据库失败~~~");
                return;
            }
            // 执行SQL并注册回调
            connection.query(sql, sqlArr, callBack);
            // 释放连接,提高性能
            connection.release();
        })
    }
}

