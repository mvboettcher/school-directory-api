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

// @desc    Create a user
// @route   POST /api/v1/users
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body)

    res.status(201).json({
      success: true,
      data: user,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
    })
  }
}

// @desc    Get single user
// @route   GET /api/v1/users/:id
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(400).json({
        success: false,
      })
    }
    res.status(200).json({
      success: true,
      data: user,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
    })
  }
}

// @desc    Update user
// @route   PUT /api/v1/users/:id
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!user) {
      return res.status(400).json({
        success: false,
      })
    }
    res.status(200).json({
      success: true,
      data: user,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
    })
  }
}

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({
      success: true,
      data: {},
    })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
