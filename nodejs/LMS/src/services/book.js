import Boom from '@hapi/boom';
import Book from '../models/Book.js';
import logger from '../utils/logger.js';

export async function getAllBooks(query) {
    const bookCategoryId = query.bookCategoryId;
    const nameFilter = query.name ? query.name.split(',') : [];
   const authorFilter = query.author ? query.author.split(',') : [];
   const editionFilter = query.edition ? query.edition.split(',') : [];


    logger.info("Feteching all List of Books");

    const books = await new Book().getAll();

    let filteredBooks = books;

    if(bookCategoryId) {
        filteredBooks = books.filter((book)=> +bookCategoryId === book.bookCategoryId);
    }
  if (nameFilter.length) {
    filteredBooks = books.filter((book) => nameFilter.includes(book.name));
  }

  if (authorFilter.length) {
    filteredBooks = books.filter((book) => authorFilter.includes(book.author));
  }
  if (editionFilter.length) {
    filteredBooks = books.filter((book) => editionFilter.includes(book.edition));
  }
 
    return {
        data: filteredBooks,
        message:"List of books"
    }
}

export async function getBook(id) {
    logger.info(`Feteching a book by bookId ${id}`);
    
    const book = await new Book().getById(id);

    if(!book){
        logger.error(`cannot find book with bookid ${id}`);

        throw new Boom.notFound(`cannot find book with bookid ${id}`);
    }

    return {
        data : book,
        message : `details of bookid ${id}`
    }

}

export async function addBook(params){
    logger.debug('payload received, params');

    const bookTableInsertParams = {
        bookcategory_id: params.bookcategory_id,
        name: params.name,
        author: params.author,
        edition: params.edition
       
      };
      console.log(bookTableInsertParams)
    logger.info('checking if similar record already exits');
    const existingData = await new Book().findByParams(bookTableInsertParams);

    if(existingData) {
        logger.error('data with the same payload already exit');

        throw new Boom.badRequest('Data with the same payload already exists');
    }

    logger.info('saving the book');

    const data = await new Book().save(bookTableInsertParams);

    return {
        data,
        message : "Added Sucessfully"
    };
}

export async function updateBook(id, params) {
    logger.info(`checking the info of book with id ${id}`)

    const book = await new Book().getById(id);

    if(!book) {
        logger.error(`cannot find book with bookid ${id}`);

        throw new Boom.notFound(`cannot find book with bookid ${id}`);

    }

    logger.info(`updating data with bookid ${id}`);

    await new Book().updateById(id, {
        bookcategory_id:params.bookcategory_id,
        name:params.name,
        author: params.author,
        edition: params.edition

    })

    logger.info(`Fetching the updated data for bookid ${id}`);

    const updatedData = await new Book().getById(id);
        console.log(updatedData);
    return {
        data: updatedData,
        message: ' updated sucessfully'
    };

}

export async function removeBook(id){
    logger.info(`checking the data is exits with bookid ${id}`);

    const book = await new Book().getById(id);

    if(!book) {
        logger.error(`cannot delete bookid ${id} because it doesnot exit`);

        throw new Boom.notFound(`cannot delete bookid ${id} because it doesnot exit`);

    }

   await new Book().removeById(id);
    
    return {
        message : 'Record Delete sucessfully '
    };
}
