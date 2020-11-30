var async = require("async");
var mysql = require("mysql");
var fs = require("fs");

module.exports = function(app, pool) {

    app.post("/cart1", function(req, res) {
    var result = {};
	var field_values = null;
    var item01 = null;
    var item02 = null;
    var item03 = null;
    var item04 = null;
    var item05 = null;
    var item06 = null;
    var item07 = null;
    var item08 = null;
    var item09 = null;
    var item10 = null;
    var cart01 = null;
    var cart02 = null;
    var field_values2 = null;
    var jarray = null;
        async.waterfall([
        function(callback) {
        field_values = mysql.escape(req.body.field_values);
        field_values2 = req.body.field_values;
        jarray = field_values2.split("\r\n");
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
        jarray.push('1234');
            console.log(jarray);
        item01 = jarray[0].substr(0,4);
        item02 = jarray[1].substr(0,4);
        item03 = jarray[2].substr(0,4);
        item04 = jarray[3].substr(0,4);
        item05 = jarray[4].substr(0,4);
        item06 = jarray[5].substr(0,4);
        item07 = jarray[6].substr(0,4);
        item08 = jarray[7].substr(0,4);
        item09 = jarray[8].substr(0,4);
        item10 = jarray[9].substr(0,4);
        var test01 = jarray[0].indexOf('ca01');
        if (test01==0)
            {
                cart01='ca01';
            }
        var test02 = jarray[1].indexOf('ca01');
        if (test02==0)
            {
                cart01='ca01';
            }
        var test03 = jarray[2].indexOf('ca01');
            if (test03==0)
            {
                cart01='ca01';
            }
        var test04 = jarray[3].indexOf('ca01');
            if (test04==0)
            {
                cart01='ca01';
            }
        var test05 = jarray[4].indexOf('ca01');
            if (test05==0)
            {
                cart01='ca01';
            }
        var test06 = jarray[5].indexOf('ca01');
            if (test06==0)
            {
                cart01='ca01';
            }
        var test07 = jarray[6].indexOf('ca01');
            if (test07==0)
            {
                cart01='ca01';
            }
        var test08 = jarray[7].indexOf('ca01');
            if (test08==0)
            {
                cart01='ca01';
            }
        var test09 = jarray[8].indexOf('ca01');
            if (test09==0)
            {
                cart01='ca01';
            }
        var test10 = jarray[9].indexOf('ca01');
            if (test10==0)
            {
                cart01='ca01';
            }
        var test11 = jarray[0].indexOf('ca02');
        if (test11==0)
            {
                cart01='ca02';
            }
        var test12 = jarray[1].indexOf('ca02');
        if (test12==0)
            {
                cart01='ca02';
            }
        var test13 = jarray[2].indexOf('ca02');
            if (test13==0)
            {
                cart01='ca02';
            }
        var test14 = jarray[3].indexOf('ca02');
            if (test14==0)
            {
                cart01='ca02';
            }
        var test15 = jarray[4].indexOf('ca02');
            if (test15==0)
            {
                cart01='ca02';
            }
        var test16 = jarray[5].indexOf('ca02');
            if (test16==0)
            {
                cart01='ca02';
            }
        var test17 = jarray[6].indexOf('ca02');
            if (test17==0)
            {
                cart01='ca02';
            }
        var test18 = jarray[7].indexOf('ca02');
            if (test18==0)
            {
                cart01='ca02';
            }
        var test19 = jarray[8].indexOf('ca02');
            if (test19==0)
            {
                cart01='ca02';
            }
        var test20 = jarray[9].indexOf('ca02');
            if (test20==0)
            {
                cart01='ca02';
            }
        
            callback();
        },
        function(callback) {
        if (field_values == undefined) {
        callback(new Error("field_values is empty."));
	    }   else {
                // db에 연결하여 sql 수행
            let data = [
                        [item01],
                        [item02],
                        [item03],
                        [item04],
                        [item05],
                        [item06],
                        [item07],
                        [item08],
                        [item09],
                        [item10]
                    ];
                    let sql = '';
                    for(let user of data){
                pool.getConnection(function(err, conn) {
                    
                        sql= 'insert into '+cart01+' select * from goods where tag = '+ mysql.escape(user[0])+';';
                    // title 정보를 DB에 넣기 위한 SQL문 준비

                    console.log(req.body);
                    console.log(req.body.field_values);
                    console.log("SQL: " + sql);
                    conn.query(sql, function(err) {
                        if (err) {
                            // err가 떠도 conn은 release() 꼭 해주어야한다.
                            conn.release();
                            callback(err);
                        } else {
                            conn.release();

                        }
                    });

                });
                    }
            callback();
        }
        }],
        function(err) {
            result = returnResult(err, res)
            result.status = res.statusCode;
            res.send(result);
        });
    });

    app.get("/list/1", function(req, res) {
        var result = {};
	var id = req.params.id;
        // db에 연결하여 sql 수행
        pool.getConnection(function(err, conn) {
            var sql = "SELECT left(field_values,4) from cart order by num desc limit 1;";
	    //console.log("SQL: " + sql);
            conn.query(sql, function(err, rows) {
                var result = returnResult(err, res);
                if (rows) {
                    result = rows;
                }
                conn.release();
                //result.status = res.statusCode;
                res.send(result);
            });
        });
    });

    app.get("/conf/:id", function(req, res) {
        var result = {};
	var id = req.params.id;
        // db에 연결하여 sql 수행
        pool.getConnection(function(err, conn) {
            var sql = "SELECT relay ,relay1, relay2, relay3, relay4, relay5 from relay1 order by num desc limit 1;";
            conn.query(sql, function(err, rows) {
                var result = returnResult(err, res);
                if (rows) {
                    result = rows;
                }
                conn.release();
                res.send(result);
            });
        });
    });
}


var returnResult = function(err, res) {
    // 결과를 눈으로 보기 쉽게하기 위해 result 객체 생성
    var result = {};
    if (err) {
        res.status(400);
        result.message = err.stack;
    } else {
        res.status(200);
        result.message = "Success";
    }
    return result;
}
