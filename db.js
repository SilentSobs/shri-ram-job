const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://adhikariresume:THrUIU0gNnoxDduJ@shri-ram.vjyle.mongodb.net/?retryWrites=true&w=majority&appName=shri-ram' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose