import logger from '../utils/logger.js';
import BookCategory from '../models/bookCategory.js';

export async function getBooksCategory(){
    logger.info('Feteching list of Book Categories');

    const data = await new BookCategory().getAll();

    return {
        data,
        message:'lists of Book Categories'
    };
}