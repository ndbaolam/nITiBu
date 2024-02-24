const Course = require('../../models/course.model');
const User = require('../../models/user.model');

const paginationHelper = require("../../helpers/pagination.helper");

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

    // Pagination
    const countProducts = await Course.countDocuments(find);
    const objectPagination = paginationHelper(6, req.query, countProducts);
    // End Pagination

    const courses = await Course.find(find)
        .limit(objectPagination.limitItems)
        .skip(objectPagination.skip);

    res.render("client/pages/home/index", {
        pageTitle: "Danh sách khoá học",
        courses: courses,
        pagination: objectPagination
    });
}

//[GET] /detail/:slug
module.exports.detail = async (req, res) => {
    const user = await User.findOne({
        tokenUser: req.cookies.tokenUser
    });
        
    const course = await Course.findOne({
        slug: req.params.slug
    });

    res.render("client/pages/home/detail", {
        pageTitle: "Chi tiết khoá học",
        course: course
    });
}

//[GET] /watch/:slug
module.exports.watch = async (req, res) => {
    const course = await Course.findOne({
        slug: req.params.slug
    });

    console.log(course);

    res.render("client/pages/home/watch", {
        pageTitle: course.title,
        course: course
    });
}