const {Schema, model} = require("mongoose");


const userSchema  = new Schema ({
    realName : {
        type : String,
        required : true,
        trim : true
    },
    timeZone : {
        type : String,
        required : true
    },
    activityPeriods : [{
        type : Schema.Types.ObjectId,
        ref: "activityPeriods"
    }]
})

const User = model("user", userSchema);

module.exports = User;