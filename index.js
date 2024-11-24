const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json()); 


let data=[
    {id:1,name:"shakaet",email:"abdshakaet@gmail.com"},
    {id:2,name:"rafe",email:"rafe@gmail.com"},
    {id:3,name:"habib",email:"habib@gmail.com"},
    {id:4,name:"tanmoy",email:"tanmoy@gmail.com"}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get("/user",(req,res)=>{
    res.send(data)
})

app.post("/user",(req,res)=>{
     
    let newUser=(req.body)

    newUser.id=data.length+1
    data.push(newUser)
    res.send(newUser)


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})