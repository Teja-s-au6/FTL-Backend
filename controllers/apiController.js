const User = require('../models/User');
const ActivityPeriods = require('../models/ActivityPeriods');

module.exports = {
    //Create User
	createUser: async (req, res) => {
		try {
			const createUser = await User.create({ ...req.body });
			const foundUser = await User.find({}).populate("activityPeriods");
			res.status(200).json({ data: foundUser });
		} catch (err) {
			console.log(err.message);
			res.status(404).json({ error: 'server error' });
		}
    },
    
    // create ActivityPeriod
	createActivityPeriod: async (req, res) => {
		try {
			const user = req.user;
			const createActivityPeriod = await ActivityPeriods.create({ ...req.body, user: user._id });
			user.activityPeriods.push(createActivityPeriod);
			await user.save();
			const foundUser = await User.find({}).populate("activityPeriods");
			res.status(200).json({ data: foundUser });
		} catch (err) {
			console.log(err.message);
			res.status(404).json({ error: 'server error' });
		}
    },
    
    // Get All Users
	getAllUsers: async (req, res) => {
		try {
			const foundUser = await User.find({}).populate("activityPeriods");
			res.status(200).json({ data: foundUser });
		} catch (err) {
			console.log(err.message);
			res.status(404).json({ error: 'server error' });
		}
	},

    // Delete the User
	deleteUser: async (req, res) => {
		try {
			const user = req.user;
			const userDelete = await User.findByIdAndDelete({ _id: user._id });
			const foundUser = await User.find({}).populate("activityPeriods");
			res.status(200).json({ data: foundUser });
		} catch (err) {
			console.log(err.message);
			res.status(404).json({ error: 'server error' });
		}
	}
};
