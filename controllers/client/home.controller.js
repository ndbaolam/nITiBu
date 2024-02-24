const Course = require('../../models/course.model');

//[GET]
module.exports.index = async (req, res) => {
    const find = {
        deleted: false
    }
    
    if(req.query.status) {
        find.status = req.query.status;
    }
    
    // Search
    if(req.query.keyword) {
        const regex = new RegExp(req.query.keyword, "i");
        find.title = regex;
    }
    // End Search

    const courses = await Course.find(find);

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