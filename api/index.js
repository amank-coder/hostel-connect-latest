const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require("swagger-jsdoc")

const express= require('express')
const connectDB = require('./config/db')
const dotenv= require("dotenv")
const cors = require('cors')
const morgan = require("morgan")


const authRoute= require('./routes/authRoute')
const userRoute= require('./routes/userRoute')
const staffRoute= require('./routes/staffRoute')
const complaintRoute= require('./routes/complaintRoute')
const route= require('./routes/route')

const PORT = process.env.PORT || 3001;

const app= express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'))

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))
require("dotenv").config();
// app.use(cors({ origin: [`https://hostel-frontend-iota.vercel.app`, 'http://localhost:5173'], credentials: true }));


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hostel Connect",
      description: "Node.js Express.js Hostel Management System"
    },
    servers: [
      {
        url: "http://localhost:8000" // Local development server
      },
      {
        url: "http://localhost:3001"
 
      }
    ]
  },
  apis: ["./routes/*.js"]
};


const spec= swaggerDoc(options)

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/', complaintRoute)
app.use('/api/staff', staffRoute)
app.use("/", route);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec))


app.use((err,req,res,next)=>{
  const errStatus= err.status || 500
  const errMessage = err.message || "Something went wrong !"

  return res.status(errStatus).send(errMessage)
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running in ${process.env.DEV_MODE} mode at http://localhost:${PORT}/`);
});
