import { Router } from 'express';

import loginSchema from './schemas/login.js';
import addUserSchema from './schemas/addUser.js';
import addBookSchema from './schemas/addBook.js';
import * as apiController from './controllers/api.js';
import updateBookSchema from './schemas/updateBook.js';
import * as bookController from './controllers/book.js';
import * as userController from './controllers/user.js';
import authenticate from './middlewares/authenticate.js';
import getBookQuerySchema from './schemas/getBookQuery.js';
import * as bookCategoryController from './controllers/bookcategory.js';
import { validateBody , validateQueryParams } from './middlewares/validation.js';

const router = Router();

router.get('/' , apiController.getAPIDetails);

router.get('/bookCategory', bookCategoryController.getBooksCategory);

router.get('/books', validateQueryParams(getBookQuerySchema) ,bookController.getBooks);

router.get('/books/:bookIdentifier', bookController.getBook);

router.post('/books', authenticate, validateBody(addBookSchema), bookController.saveBook);

router.put('/books/:bookIdentifier',  authenticate, validateBody(updateBookSchema), bookController.updateBook);

router.delete('/books/:bookIdentifier', authenticate, bookController.removeBook);

router.post('/users', validateBody(addUserSchema), userController.addUser);

router.post('/login', authenticate, validateBody(loginSchema), userController.login);

export default router;