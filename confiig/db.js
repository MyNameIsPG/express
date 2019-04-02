let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'tb_demo',
    charset: 'UTF8_GENERAL_CI'
});
connection.connect(function(err){
    if(err){
        console.log("数据库连接失败！")
    } else {
        console.log("数据库连接成功！")
    }
});
module.exports = connection;
