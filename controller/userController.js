const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json({
      status: "success",
      allUsers: allUsers,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const registerUser = async (req, res) => {
  const { name, city } = req.body;

  try {
    const newUser = await User.create({
      name,
      city,
    });

    res.json({
      status: "success",
      newUser: newUser,
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.json({
        status: "Failure",
        message: "user not found",
      });
    }

    res.json({
      status: "success",
      message: "User deleted",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.json({
        status: "Failure",
        message: "user not found",
      });
    }

    res.json({
      status: "success",
      message: "User updated",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    res.json({
      status: "success",
      user: user,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  registerUser,
  deleteUser,
  updateUser,
  getSingleUser,
}; //exportinggg
