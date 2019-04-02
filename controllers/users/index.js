let connection = require('../../confiig/db');
let massage = require('../../confiig/massage');
let md5 = require('md5');

module.exports = {
    userQuery: function(req, res){
        let sql = 'SELECT * FROM tb_user';
        connection.query(sql,function(err,doc){
            if(err){
                res.json(new massage("ERRER").error);
            } else {
                res.json(new massage("SUCCESS",doc).success);
            }
        });
    },
    userLogin: function(req, res){
        if(req.body.phone==''){
            res.json(new massage("USERNAME_REQ").error);
        } else if(req.body.phone.length!=11){
            res.json(new massage("USERNAME_LENGTH_ERR").error);
        } else if(req.body.password==''){
            res.json(new massage("PASSWORD_ERR").error);
        } else {
            let sql = 'SELECT * from tb_user WHERE phone = "'+req.body.phone+'" and password = "'+md5(req.body.password)+'"';
            connection.query(sql,function(err,doc){
                if(err){
                    res.json(new massage("ERRER").error);
                } else {
                    res.json(new massage("SUCCESS",doc).success);
                }
            });
        }
    }
}
