function checkRole(...permittedMembers) {
	return (req, res, next) => {
		if (permittedMembers.includes(req.user.role)) {
			next();
		}else{
			res.json('You dont have permission')
		}
	}
}
module.exports = checkRole
