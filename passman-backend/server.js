const express = require('express')
require('dotenv').config();
const app = express();
var server;
const bodyParser = require('body-parser');

const mongoClient = require('mongodb').MongoClient

function initialize () {
    const uri = process.env.MONGO_URI;
    const client = new mongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    client.connect(err => {
        if (err) {
            console.log("error", err);
            client.close();
        } else {
            console.log("Connected to DB");
            app.use(express.static('pages'));
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());
            const registerCollection = client.db("Passwords").collection("Register");
            const loginCollection = client.db("Passwords").collection("login");
            const assetCollection = client.db("Passwords").collection("Passman");

            //handel Login
            app.post('Passman/login',function(req,res) {
                handelLogin(req.body,res,loginCollection);
            });

            app.post('Passman/register',function(req,res){
                handelRegister(req.body,res,registerCollection);
            });

            app.post('Passman/getData',function(req,res) {
                handelGetPasswords(req.body,res,assetCollection);
            });
        }
    });
}

app.listen(8080,function(){
    console.log("Listening on port 8080");
    initialize();
});

//functions 
function handelRegister(credentials,res,registerCollection) {
    var userObj = JSON.parse(Object.keys(credentials)[0]);
    var query = {
        "First_Name": userObj.First_Name,
        "Last_Name": userObj.Last_Name,
        "User_Name": userObj.User_Name,
        "Mail_ID": userObj.Mail_ID,
        "Login_Password": userObj.Login_Password,
        "Phone_Number": userObj.Phone_Number
    }
    db.registerCollection.insert(query)
}