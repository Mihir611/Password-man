const express = require('express')
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
let database
let registerCollection


const mongoClient = require('mongodb').MongoClient

function initialize () {
    const uri = process.env.MONGO_URI;
    const client = new mongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    database = client.db(process.env.DB_NAME); //database name
    client.connect(err => {
        if (err) {
            console.log("error", err);
            client.close();
        } else {
            app.use(express.static('pages'));
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());
            app.use(cors());
            registerCollection = database.collection("Register");
            passwordCollection = database.collection("PassmanCollection");
            console.log("Connected to DB");
            // const loginCollection = client.db("Passwords").collection("login");
            // const assetCollection = client.db("Passwords").collection("Passman");

            //handel Login
            app.post('/Passman/login',function(req,res) {
                handelLogin(req.body,res);
            });

            app.post('/Passman/register',function(req,res){
                handelRegister(req.body,res);
            });

            app.post('/Passman/list_Passwords',function(req,res) {
                handelGetPasswords(req.body,res);
            });
        }
    });
}

app.listen(3400,function(){
    console.log("Listening on port 3400");
    initialize();
});

//functions 
function handelRegister(credentials,res) {
    let inputData = {
        "First_Name": credentials.First_Name,
        "Last_Name": credentials.Last_Name,
        "User_Name": credentials.User_Name,
        "Mail_ID": credentials.Mail_ID,
        "Login_Password": credentials.Login_Password,
        "Phone_Number": credentials.Phone_Number
    }
    registerCollection.insertOne(inputData).then((result) => {
        res.json({"response_desc":"Registered Successfully"});
    }).catch((err) => {
        res.json({"response_desc":"Internal Server Error"});
    })
}

function handelLogin(credentials, res) {
    let query = {
        "Mail_ID":credentials.Mail_ID ,
    }
    registerCollection.find(query,{projection:{_id:0,First_Name:0,Last_Name:0,Phone_Number:0}}).toArray().then((result) => {
        if(result[0].Mail_ID === credentials.Mail_ID && result[0].Login_Password === credentials.Login_Password){
            res.json({"response_desc":"Login Success","response_code":"0"});
        } else {
            res.json({"response_desc":"Please check Mail Id and Password","response_code":"1"});
        }
    }).catch((err) => {
        res.json({"response_desc":"Internal Server Error"});
    })
}

function handelGetPasswords(credentials, res) {
    let query = {
        "UserId":credentials.UserId
    }
    passwordCollection.find(query,{projection:{_id:0}}).toArray().then((result) => {
        if(result.length > 0) {
            res.json({"response_desc":"Operation Success","response_code":"0","response_data":result[0].Data});
        } else {
            res.json({"response_desc":"The user id not found","response_code":"1","response_data":{}});
        }
    }).catch((err) => {
        res.json({"respose_desc":"Internal Server Error","response_data":err})
    })
}