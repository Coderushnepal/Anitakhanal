import Boom from '@hapi/boom';
import Book from '../models/Book.js';
import logger from '../utils/logger.js';

export function getAllBooks() {
    logger.info("Feteching all List of Books");

    const books = new Book().getAll();

    return {
        data: books,
        message:"List of books"
    }
}

export function getBook(id) {
    logger.info(`Feteching a book by bookId ${id}`);
    
    const book = new Book().getByID(id);

    if(!book){
        logger.error(`cannot find book with bookid ${id}`);

        throw new Boom.notFound(`cannot find book with bookid ${id}`);
    }

    return {
        data : book,
        message : `details of bookid ${id}`
    }

}

export function addBook(params){
    logger.info('checking if similar book already exit');
    const existingData = new Book().getByParams(params);

    if(existingData) {
        logger.error('data with the same payload already exit');
        throw new Boom.badRequest('Data with the same payload already exists');
    }

    logger.info('saving the book');

    const data = new Book().save(params);

    return {
        data,
        message : "Added Sucessfully"
    };
}

export function updateBook(id, params) {
    logger.info(`checking the info of book with id ${id}`)

    const book = new Book().getByID(id);

    if(!book) {
        logger.error(`cannot find book with bookid ${id}`);

        throw new Boom.notFound(`cannot find book with bookid ${id}`);

    }

    logger.info(`updating data with bookid ${id}`);

    new Book().updateById(id , params);

    logger.info(`Fetching the updated data for bookid ${id}`);

    const updatedData = new Book().getById(id);

    return {
        data: updatedData,
        message: ' updated sucessfully'
    };

}

export function removeBook(id){
    logger.info(`checking the data is exits with bookid ${id}`);

    const book =  new Book().getByID();

    if(!book) {
        logger.error(`cannot delete bookid ${id} because it doesnot exit`);

        throw new Boom.notFound(`cannot delete bookid ${id} because it doesnot exit`);

    }

    new Book().removeById(id);
    
    return {
        message : 'Record Delete sucessfully '
    };
}
