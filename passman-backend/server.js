const express = require('express')
require('dotenv').config();
const app = express().router;
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
            console.log("Connected to DB");
            // const loginCollection = client.db("Passwords").collection("login");
            // const assetCollection = client.db("Passwords").collection("Passman");

            //handel Login
            // app.post('Passman/login',function(req,res) {
            //     handelLogin(req.body,res,loginCollection);
            // });

            app.post('/Passman/register',function(req,res){
                handelRegister(req.body,res);
            });

            // app.post('Passman/getData',function(req,res) {
            //     handelGetPasswords(req.body,res,assetCollection);
            // });
        }
    });
}

app.listen(3000,function(){
    console.log("Listening on port 3000");
    initialize();
});

//functions 
function handelRegister(credentials,res) {
    let query = {
        "First_Name": credentials.First_Name,
        "Last_Name": credentials.Last_Name,
        "User_Name": credentials.User_Name,
        "Mail_ID": credentials.Mail_ID,
        "Login_Password": credentials.Login_Password,
        "Phone_Number": credentials.Phone_Number
    }
    registerCollection.insertOne(query)
    res.json({"response_desc":"Registered Successfully"});
}