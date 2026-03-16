const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.post("/send-email", async (req, res) => {

const {name,email,message} = req.body

try{

const transporter = nodemailer.createTransport({

service: "gmail",

auth: {
user: "faaezabdsalam@gmail.com",
pass: "jpyp cjtk awkk bjqg"
}

})

await transporter.sendMail({

from: email,

to: "faaezabdsalam@gmail.com",

subject: `Portfolio Message from ${name}`,

text: message

})

res.send({success:true})

}catch(err){

console.log(err)
res.send({success:false})

}

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})