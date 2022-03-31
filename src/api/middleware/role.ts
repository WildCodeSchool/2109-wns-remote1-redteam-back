
const checkRole = (...permittedRoles: string[]) => {
    return (req, res, next) => {
        try {
            const user = req.user;
            if(user && permittedRoles.includes(user.role)) {
                return next();
            }
            return res.send({message: 'Forbidden'}).status(403);
        } catch (e) {
            return next(e);
        }
    }
}

export default checkRole;