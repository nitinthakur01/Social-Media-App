import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User is not authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token, "poiuytrewqasdfghjklz");
    if (!decode) {
      return res.status(401).json({
        message: "Invalid",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default isAuthenticated;
