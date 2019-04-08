let connection = require('../../confiig/db');
module.exports = {
    queryAll: 'SELECT * FROM tb_users',
    queryPage: function(truename,pageNum,pageSize){
        let sql = "SELECT * FROM tb_users";
        if(truename!=undefined){
            sql+= " where truename like '%"+truename+"%'"
        }
        if(pageNum!=undefined && pageSize!=undefined){
            sql+= ' limit '+pageNum+','+pageSize+''
        }
        return sql
    },
    queryOne: 'SELECT * FROM tb_users where uuid = ?',
    insert: 'INSERT INTO tb_users(uuid,truename,nickname,age,birthday,location,description,password,phone,create_time,update_time) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
    queryLogin: 'SELECT * FROM tb_users WHERE phone = ? and password = ? ',
    update: function(uuid,truename,nickname,age,birthday,location,description,password,phone,updatetime){
        let sql = "UPDATE tb_users SET "
        if(truename!=undefined && truename!= ''){
            sql += "truename = \"" +truename+ "\""
        }
        if(nickname!=undefined && nickname!= ''){
            sql += ",nickname = \"" +nickname+ "\""
        }
        if(age!=undefined && age!= ''){
            sql += ",age = \"" +age+ "\""
        }
        if(birthday!=undefined && birthday!= ''){
            sql += ",birthday = \"" +birthday+ "\""
        }
        if(location!=undefined && location!= ''){
            sql += ",location = \"" +location+ "\""
        }
        if(description!=undefined && description!= ''){
            sql += ",description = \"" +description+ "\""
        }
        if(password!=undefined &&password!= ''){
            sql += ",password = \"" +password+ "\""
        }
        if(phone!=undefined &&phone!= ''){
            sql += ",phone = \"" +phone+ "\""
        }
        if(updatetime!=undefined && updatetime!= ''){
            sql += ",update_time = \"" +updatetime+ "\""
        }
        sql+=" where uuid = \"" +uuid+ "\""
        console.log(sql)
        return sql;
    }
}
