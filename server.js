const express= require('express')
const app= express()
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("working")
})

app.post('/login',(req,res)=>{
  const {email , password} = req.body()
  
  if(!email){
    return res.status(400).json({error: "email cannot be empty"})
  }
  if(!password){
    return res.status(400).json({error: "Password cannot be empty"})
  }

  return res.status(201).json({message: "login succesfull"})
})

app.listen(3000,()=>{
  console.log(`port running on http://localhost:3000`)
})