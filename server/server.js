const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Employee = require("./models/employee");
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//dbconnection

const mongodbUrl = "mongodb://localhost:27017/AngularApp";
mongoose
    .connect(mongodbUrl)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

//-------------------------------------------------------------

app.post('/api/addemp', async (req, res) => {
    console.log("i am here")
    try {
        const { firstname, lastname, age, salary } = req.body;
        console.log(req.body);
        const employee = new Employee({
            firstname,
            lastname,
            age,
            salary
        });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (err) {
        console.error("Error creating employee:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//------------------------------------------------------

app.get('/api/getallemps', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        console.error("Error fetching employees:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//-----------------------------------------------------------

app.listen(5000, () => {
    console.log("server running on port 5000");
});

