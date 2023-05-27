const mongoose = require("mongoose")

const uri = REACT_APP_DATABASE_URI

// mongoose.connect(string, json)  // async 
const connectDB = async () => {
    try {
        await mongoose.connect(
            uri, {
                useUnifiedTopology: true,
                useNewUrlParser : true
            }
        )
        console.log("mongdb has successfully connected");
    } catch(error) {
        console.log(error);
    }
}


module.exports = connectDB;