var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"preet"
});

con.connect(function(err){
    if(err)throw(err);
    console.log("connected!");
    con.query("create table cust (name varchar(255),age int,place varchar(255))",function(err,result){
        if(err) throw(err);
        console.log("Table Created!");
    })
})