import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { getPostComments,createComment } from '../controllers/comment.controller.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId',getPostComments);

export default router;