const express = require("express");
const AuthorData = require('./src/model/Customerdata');
const UserData = require('./src/model/Userdata');
const bcrypt = require('bcryptjs');
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
//const app = express();
var  app = new express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// username = "admin";
// password = "1234";

app.post('/login' , function(req,res){
    // let userData = req.body;
    console.log("login");
    let logemail = req.body.email;
    let logpassword = req.body.paswd;

    UserData.findOne({email : logemail})
    .then(function(user){
        if(user.paswd == logpassword){
            let payload = {subject: logemail + logpassword};
            let token = jwt.sign(payload,'secretKey');
            console.log(token);
            res.status(200).send({token});
        }
        else{
            res.status(401).send("Invalid Password");
        }
        
    })
    .catch(function(){
        res.status(401).send("Invalid Email");
    })
})


function verifyToken(req,res,next){
    res.header("Access-control-Allow-Origin" , "*");
    res.header("Access-control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
    if(!req.headers.authorization){       
        return res.status(401).send('Unauthorized request');
    }
    
    let token = req.headers.authorization.split(' ')[1];  
    if(token == "null"){
        return res.status(401).send('Unauthorized request');
    }
    
    let payload = jwt.verify(token , 'secretKey');
    console.log(payload);
    if(!payload){
        return res.status(401).send("Unauthorized request");
    }
    req.userId = payload.subject;
    next();   //if correct user request 

}


app.post('/adduser' , function (req,res){
    console.log("add user");
    res.header("Access-control-Allow-Origin" , "*");
    res.header("Access-control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log("insert");
    console.log(req.body);

    // var password = req.body.user.paswd;
    // const hashedPsw =  bcrypt.hash(password,12);

    var user = {
        fname : req.body.user.fname.trim(),
        lname : req.body.user.lname.trim(),
        email : req.body.user.email.trim(),
        phno : req.body.user.phno.trim(),
        username : req.body.user.username.trim(),
        paswd : req.body.user.paswd
    }

    var user = new UserData(user);
     user.save();
});


app.get('/customers' , function (req,res){
    res.header("Access-control-Allow-Origin" , "*");
    res.header("Access-control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");

    CustomerData.find()
    .then(function(Customers){ 
        res.send(Customers);
    });
});

app.get('/customer/:id' , (req,res)=>{
    console.log("customerItem");

    const id = req.params.id; 
    
    CustomerData.findOne({"_id":id})
    .then((customer)=>{
        res.send(customer);
    })
})

app.post('/insertcustomer' ,verifyToken, function (req,res){
    res.header("Access-control-Allow-Origin" , "*");
    res.header("Access-control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log("insert");
    console.log(req.body);

    var customer = {
        name : req.body.author.name,
        description : req.body.author.description,
        genre : req.body.author.genre,
        about : req.body.author.about,
        image : req.body.author.image
    }

    var customer = new AuthorData(customer);
    author.save();
});

app.put('/updatecustomer' ,verifyToken, function(req,res){
    console.log(req.body);
    id = req.body._id,

    name_ = req.body.name,
    description = req.body.description,
    genre = req.body.genre,
    about = req.body.about,
    image = req.body.image

    CustomerData.findByIdAndUpdate({"_id" : id },
                                  {$set : {
                                      "name" : name_,
                                      "description" : description,
                                      "genre" : genre,
                                      "about" : about,
                                      "image" : image                                  
                                  }})
    .then(function(){
        res.send();
    })                                  
})

app.delete('/removecustomer/:id' ,verifyToken, function(req,res){
    id = req.params.id;
    CustomerData.findByIdAndDelete({ "_id" : id })
    .then(()=>{
        console.log('success');
        res.send();
    })
})

app.listen(port,()=>{console.log("Server Ready at "+port)});