const User = require('../models/User')

// @desc    Get all users
// @route   GET /api/users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find()

    res.status(200).json({
      success: true,
      data: users,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
    })
  }
}
