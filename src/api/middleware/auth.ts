import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../../settings"

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, JWT_SECRET)
    if(!decodedToken.id){
      return res.send({message:"forbidden access"}).status(403);
    }
    req.user = decodedToken; 
    return next();
  } catch(e) {
    return res.send({message: "unauthorized request"}).status(401);
  }
}

export default checkAuth;