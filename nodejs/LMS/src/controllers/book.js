import * as bookServices from '../services/book.js';

export function getBooks(req, res, next){

    try{
        const data = bookServices.getAllBooks();

        res.json(data);
    } catch(err){
        next(err)

    }   
}
export function getBook(req, res, next) {
    const id = req.params.bookidentifier;
    try{
     const data = bookServices.getBook(id);

     res.json(data);
    } catch(err) {
        next(err)
    }

}

export function saveBook(req, res, next){
    try{
        const data = bookServices.addBook(req.body);
        res.json(data);
    } catch(err){
        next(err);
    }
}

export function updateBook(req, res, next) {
    const id = req.params.bookidentifier;
    const body =  req.body;
    
    try{
        const data = bookServices.updateBook(id, body);

        res.json(data);
    } catch(err) {
        next(err);
    }
}

export function removeBook(req, res, next) {

    try{
        const data = bookServices.removeBook(req.params.bookidentifier);

        res.json(data);
    } catch(err) {
        next(err);
    }
}