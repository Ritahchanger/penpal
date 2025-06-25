const User = require("./user.model");

const bcrypt = require("bcrypt");

const CustomError = require("../utils/CustomError");

const registerUser = async (userData) => {
  const {
    firstName,
    lastName,
    email,
    phoneNo,
    password,
    educationLevel,
    qualifications,
  } = userData;

  const existingUser = await User.findOne({ $or: [{ email }, { phoneNo }] });
  if (existingUser) {
    throw new CustomError("Email or phone number already registered", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return {
    id: newUser._id,
    email: newUser.email,
    role: newUser.role,
  };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError("Invalid email or password", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new CustomError("Invalid email or password", 401);
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNo: user.phoneNo,
      role: user.role,
    },
  };
};

module.exports = { registerUser,loginUser };
