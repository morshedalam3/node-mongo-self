const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();
app.use(cors());
app.use(bodyParser.json())

 const users = ["abdul hamid" , "adil" , "sohana", "susmita", "sabed"]
app.get('/', (req, res) => {
    const adnanFriend = {name: "adnan", age: 13}
    res.send(adnanFriend);
})

app.get('/fruit/apple', (req, res) => {
    res.send({name: "apple", price:12, quantity:34});
})
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId]
    res.send({userId, name});
})

app.post('/addUser', (req, res) => {
    const  user = req.body;
    user.id = 55
    res.send(user);
})

app.listen(3000, () => console.log('port 3000'))