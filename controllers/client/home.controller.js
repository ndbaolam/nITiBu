const Course = require('../../models/course.model');

//[GET]
module.exports.index = async (req, res) => {
    const courses = await Course.find({
        status: "active",
        deleted: false
    });

    console.log(courses);

    res.render("client/pages/home/index", {
        pageTitle: "Danh sách khoá học",
        courses: courses
    });
}

//[GET] /detail/:slug
module.exports.detail = async (req, res) => {
    const course = await Course.findOne({
        slug: req.params.slug
    });

    console.log(course);

    res.render("client/pages/home/detail", {
        pageTitle: "Chi tiết khoá học",
        course: course
    });
}