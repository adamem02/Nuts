const router = require('express').Router();
const {
  addReaction,
  removeReaction
} = require('../controllers/reaction-controller');

// Set up POST and DELETE at /api/reactions
router
  .route('/')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
