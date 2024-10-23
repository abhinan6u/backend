const express = require("express");
const router = express.Router();

const auth = function(req, res, next) {
    console.log("I am inside the auth middleware");

    // Dummy userID
    req.user = { userId: 1, role: "student" };
    if (req.user) {
        next();
    } else {
        res.json({
            success: false,
            message: "Not a valid user"
        });
    }
};

const isStudent = function(req, res, next) {
    console.log("I am inside the student middleware");

    if (req.user.role === "student") {
        next();
    } else {
        res.json({
            success: false,
            message: "This page is only for students"
        });
    }
}; 

const isAdmin = function(req, res, next) {
    console.log("I am inside the admin middleware");

    if (req.user.role === "admin") {
        next();
    } else {
        res.json({
            success: false,
            message: "Access denied, this page is only for admins"
        });
    }
};

// Route for student-specific page
router.get("/student", auth, isStudent, (req, res, next) => {
    console.log("I am inside the student page");
    res.send("Student specific page");
});

// Route for admin-specific page
router.get("/admin", auth, isAdmin, (req, res, next) => {
    console.log("I am inside the admin page");
    res.send("Admin specific page");
});

module.exports = router;
