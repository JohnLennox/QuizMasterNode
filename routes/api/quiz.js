const express = require("express");
const router = express.Router();
const axios = require("axios");
const { check, validationResult } = require("express-validator");

/**
 * @route   get /api/quiz/test
 * @desc    test
 * @access  Public
 */
 router.get("/test", async (req, res) => {
      return res.status(200).send("test completed");
  })
  
  module.exports = router;
