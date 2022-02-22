import { Router } from 'express';

import addBookSchema from './schemas/addBook.js';
import * as bookController from './controllers/book.js';
import * as apiController from './controllers/api.js';
import { validateBody } from './middlewares/validation.js';

const router = Router();

router.get('/books', bookController.getBooks);

router.get('/books/:bookidentifier', bookController.getBook);

router.post('/books', validateBody(addBookSchema), bookController.saveBook);

router.put('/book/:bookidentifier', bookController.updateBook);

router.delete('/books/:bookidentifier', bookController.removeBook);
export default router;