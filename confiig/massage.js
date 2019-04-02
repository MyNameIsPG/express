let status = require('./status');
module.exports = function(key, result){
    this.key = key
    this.result = result
    this.error = {
        status: status[this.key].code,
        massage: status[this.key].msg
    }
    if(result!=undefined){
        this.success = {
            status: status[this.key].code,
            massage: status[this.key].msg,
            data: {
                count: this.result.length,
                data: this.result
            }
        }
    }
};
