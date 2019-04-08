let connection = require('../../confiig/db');
let massage = require('../../confiig/massage');
let initialize = require('../../confiig/initialize');
let userSql = require('../../models/users');
let md5 = require('md5');
let uuid = require('uuid');
let moment = require("moment");

module.exports = {
    userQuery: function(req, res){
        connection.query(userSql.queryAll,function(err,doc){
            if(err){
                res.json(new massage("ERRER").error);
            } else {
                res.json(new massage("SUCCESS",doc).success);
            }
        });
    },
    userQueryPage: function(req, res){
        connection.query(userSql.queryPage(req.body.truename,req.body.pageNum,req.body.pageSize),function(err,doc){
            if(err){
                res.json(new massage("ERRER").error);
            } else {
                res.json(new massage("SUCCESS",doc).success);
            }
        });
    },
    userQueryOne: function(req, res){
        if(!req.body.uuid){
            res.json(new massage("UUID_ERR").error);
        } else {
            connection.query(userSql.queryOne,[req.body.uuid],function(err,doc){
                if(err){
                    res.json(new massage("ERRER").error);
                } else {
                    res.json(new massage("SUCCESS",doc).success);
                }
            });
        }
    },
    userLogin: function(req, res){
        if(req.body.phone==''){
            res.json(new massage("USERNAME_REQ").error);
        } else if(req.body.phone.length!=11){
            res.json(new massage("USERNAME_LENGTH_ERR").error);
        } else if(req.body.password==''){
            res.json(new massage("PASSWORD_ERR").error);
        } else {
            connection.query(userSql.queryLogin,[req.body.phone,md5(req.body.password)],function(err,doc){
                if(err){
                    res.json(new massage("ERRER").error);
                } else {
                    if(doc.length==0){
                        res.json(new massage("GETUSER_ERROR",doc).error);
                    } else {
                        res.json(new massage("SUCCESS",doc).success);
                    }
                }
            });
        }
    },
    userAdd: function(req, res){
        let param = req.body || req.params;
        connection.query(userSql.queryAll,function(err,doc){
            let isTrue = false;
            if(doc){
                for (let i=0;i<doc.length;i++) {
                    if(doc[i].phone == param.phone) {
                        isTrue = true;
                    }
                }
            }
            if(isTrue) {
                res.json(new massage("USER_REPEAT_ERR").error);
            } else {
                let createtime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                let updatetime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                let password = md5(initialize.passwordContent);
                let data = [uuid(),param.truename,param.nickname,param.age,param.birthday,param.location,param.description,password,param.phone,createtime,updatetime]
                connection.query(userSql.insert,data,function(err,doc){
                    if(err){
                        res.json(new massage("ERRER").error);
                    } else {
                        res.json(new massage("SUCCESS",doc).success);
                    }
                });
            }
        });
    },
    userUpdate: function(req, res){
        let param = req.body || req.params;
        let updatetime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        let password;
        if(!param.password){
            password = md5(initialize.passwordContent);
        } else {
            password = md5(param.password);
        }
        connection.query(userSql.update(param.uuid,param.truename,param.nickname,param.age,param.birthday,param.location,param.description,password,param.phone,updatetime),function(err,doc){
            console.log(err)
            if(err){
                res.json(new massage("ERRER").error);
            } else {
                res.json(new massage("SUCCESS",doc).success);
            }
        });
    }
}
