import express from 'express'

import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion, getTaggedQuestion } from '../controllers/Questions.js' 
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/Ask',auth, AskQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id',auth, deleteQuestion );
router.patch('/vote/:id',auth, voteQuestion);
router.post('/tagged',getTaggedQuestion);

export default router