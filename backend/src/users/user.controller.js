const UserService = require("./user.service");


const signup = async (req, res) => {
  const user = await UserService.registerUser(req.body);
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
}


const login = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
  
    const { token, user } = await UserService.loginUser({ email, password });
  
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  };



module.exports = { signup,login}
