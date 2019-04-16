const router = require("express").Router();
const profileRoutes = require("./profiles");

// Book routes
router.use("/profiles", profileRoutes);

module.exports = router;
