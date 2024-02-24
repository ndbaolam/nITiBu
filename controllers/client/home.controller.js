const Course = require('../../models/course.model');

//[GET]
module.exports.index = async (req, res) => {
    const courses = await Course.find({
        status: "active",
        deleted: false
    });

    console.log(courses);

    for (const item of courses) {
        item.priceNew = item.price * (1 - item.discountPercentage/100);
        item.priceNew = item.priceNew.toFixed(0);
    }

    res.render("client/pages/home/index", {
        pageTitle: "Danh sách khoá học",
        courses: courses
    });
}