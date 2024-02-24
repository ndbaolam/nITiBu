const User = require("../../models/user.model");
const Course = require("../../models/course.model");

module.exports.infoUser = async (req, res, next) => {
  if(req.cookies.tokenUser) {
    const user = await User.findOne({
      tokenUser: req.cookies.tokenUser
    }).select("-password");

    if(user) {
      res.locals.user = user;

      const courses = [];

      for (const slug of user.courses) {
        const course = await Course.findOne({
          slug: slug
        });
        courses.push(course)
      }

      for (const item of courses) {
        item.status = "active"
      }

      res.locals.courses = courses;
    }
  }
  
  next();
}