//khai báo module sử dụng
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
require('./api/models/task')

//thiết lập connection
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,  
    useCreateIndex: true,   
    useUnifiedTopology: true,
    
})
//thiết lập phân tích các request tới server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//truy cập tới các tệp tin trong route
var route = require('./api/routes/tasks')
route(app);

// lắng nghe các kết nối trên máy chủ và cổng được chỉ định
app.listen(8080, ()=> {
    console.log("connected to port 8080")
})
