import diskDb from 'diskdb';

class Book {
    constructor() {
        this.filename = 'books';
        this.db = diskDb.connect('src/db', [this.filename])
    }

    getAll() {
        return this.db[this.filename].find();
    }

    getByID(id) {
        return this.db[this.filename].findOne({ _id:id });
    }
    
    getByParams(params){
        return this.db[this.filename].findOne(params);
    }

    save(data) {
        return this.db[this.filename].save(data);  
    }

    updateById(id, data) {
        return this.db[this.filename].update({ _id:id }, data);
    }

    removeById(id) {
        return this.db[this.filename].remove({ _id:id });
    }
}
export default Book;