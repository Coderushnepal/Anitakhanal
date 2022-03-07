import DBModel from './DBmodel.js';
import getAllBookQuery from '../db/queries/getAllBook.js';
import getBookDetailQuery from '../db/queries/getBookDetail.js';

class Book extends DBModel {
    constructor() {
        super('books');
    }
    getAllBook() {
        return this.query(getAllBookQuery);
    }

    async getBookDetails(bookId) {
        const [details] = await this.query(getBookDetailQuery, { bookId });
        return details || null;
    }
}


export default Book;