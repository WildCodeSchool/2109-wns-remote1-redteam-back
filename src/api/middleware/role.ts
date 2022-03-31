
const checkRole = (...permittedRoles: string[]) => {
    return (req, res, next) => {
        try {
            const user = req.user;
            console.log(user);
            if(user && permittedRoles.includes(user.role)) {
                return next();
            }
            return res.send({message: 'Forbidden'}).status(403);
        } catch (e) {
            console.log(e);
            return next(e);
        }
    }
}

export default checkRole;