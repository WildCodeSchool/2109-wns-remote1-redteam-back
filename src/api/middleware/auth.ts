import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../../settings"

const checkAuth = async ({req, res}) => {
  try {
    // A utiliser dans le cas de l'authentication via app mobile
    // const token = req.headers.authorization?.split(" ")[1];
    
    const token = req.cookies.token;
    if(!token) return { isAuth: false } 

    const decodedToken = await jwt.verify(token, JWT_SECRET)
    req.user = decodedToken; 
    return { isAuth: true, userId: decodedToken.id, role: decodedToken.role }
  } catch(e) {
    console.log(e);
    return { isAuth: false }
  }
}

export default checkAuth;