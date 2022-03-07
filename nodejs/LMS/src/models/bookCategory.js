import DBModel from "./DBmodel.js";

class BookCategory extends DBModel {
    constructor(){
        super('book_category');
    }
}
export default BookCategory;