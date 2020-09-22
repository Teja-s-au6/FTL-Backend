const {Schema, model} = require("mongoose");


const activityPeriodSchema  = new Schema ({
    startTime : {
        type : Date,
        required : true
    },
    endTime : {
        type : Date,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "user"
    }
})

const ActivityPeriods = model("activityPeriods", activityPeriodSchema);

module.exports = ActivityPeriods;