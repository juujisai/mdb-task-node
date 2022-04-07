const http = require('http');
const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



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



app.get('/', cors(), (req, res) => {
  res.send('welcome to api')
})

app.get('/api/pcparts', cors(), (req, res) => {
  res.json(dataToSimulateDatabase)
})

app.post('/api/pcparts', cors(), (req, res) => {
  console.log(req.body, req, res)
  dataToSimulateDatabase = [...dataToSimulateDatabase, req.body]
  console.log(dataToSimulateDatabase)
})

app.post('/', cors(), (req, res) => {
  console.log(req.body, req, res)

})

app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`))


