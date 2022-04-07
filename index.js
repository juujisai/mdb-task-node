const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


let dataToSimulateDatabase = [
  {
    id: 'f0ff18e1-1923-45b9-b30a-fb3fc54bc161',
    name: "monitor",
    company: "asus",
    model: "VG279Q1R",
    price: 1000,
    category: "urządzenia peryferyjne"
  },
  {
    id: 'ab5185bc-ebd8-460b-9c11-8c1d3ed9cf52',
    name: "myszka",
    company: "steelseries",
    model: "rival100",
    price: 150,
    category: "urządzenia peryferyjne"
  },
  {
    id: 'd88826e3-66c9-4d9b-94a6-cbe488fde869',
    name: "system operacyjny",
    company: "windows",
    model: "xp",
    price: 100,
    category: "oprogramowanie"
  },
  {
    id: 'ab5185bc-ebd8-4d9b-94a6-cbe488fde869',
    name: "karta graficzna",
    company: "nvidia",
    model: "rtx 2070",
    price: 3000,
    category: "podzespoły komputerowe"
  },
];

const app = express()
const PORT = process.env.PORT || 5000;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.use(cors())



app.get('/', cors(), (req, res) => {
  res.send('welcome to api')
})

app.get('/api/pcparts', cors(), (req, res) => {
  res.json(dataToSimulateDatabase)
})

app.post('/api/pcparts', cors(), (req, res) => {
  dataToSimulateDatabase = [...dataToSimulateDatabase, req.body]
  res.send(dataToSimulateDatabase)

})

app.put('/api/pcparts', cors(), (req, res) => {
  dataToSimulateDatabase = [...req.body]
  res.send(dataToSimulateDatabase)

})

app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`))


