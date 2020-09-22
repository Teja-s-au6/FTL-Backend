const User = require('../models/User');

//Middleware to authenticate the user
module.exports = async (req, res, next) => {
	try {
        const userId = req.params.userId;
        const user = await User.findOne({ _id: userId });
        if(!user) return res.status(404).send("User not found")
		req.user = user;
		next();
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: 'Server Error' });
	}
};
