const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require ("../models/review.js");
const Listing = require ("../models/listing.js");
const {validteReview, isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewControler = require("../controllers/reviews.js");

//post review route
router.post("/", isLoggedIn ,validteReview,wrapAsync( reviewControler.createReview));

//Delete review route
router.delete("/:reviewId", isLoggedIn, wrapAsync(reviewControler.destroyReview));

module.exports = router;