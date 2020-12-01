var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var config = require("./config"); // config.js
var app = express();

// bodyParser�� �̵�����̱� ������ ����� ���� �׻� ���� �ֵ��� �ؾ���
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Mysql DB pool ����
var pool = mysql.createPool({
            // config.js�� �ִ� ������ �������� ����
            host: config.mysql.host,
            port: config.mysql.port,
            user: config.mysql.username,
            password: config.mysql.password,
            database: config.mysql.db,
            connectionLimit:20,
            waitForConnections:false
        });

// Main
app.listen(config.port, function() {
    console.log("Server listening on port %d", config.port);
});

// Router
// �⺻���� index.js�� ã�� ������
// require("./routes/index.js")��� ��������� �ʾ���
var routes = require("./routes")(app, pool);
