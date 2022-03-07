import * as bookServices from '../services/book.js';

export function getBooks(req, res, next){
    bookServices
    .getAllBooks(req.query)
    .then((data)=>res.json(data))
    .catch((err)=>next(err))

}
export function getBook(req, res, next) {
    // const id = req.params.bookidentifier;
    // try{
    //  const data = bookServices.getBook(id);

    //  res.json(data);
    // } catch(err) {
    //     next(err)
    // }
    bookServices
    .getBook(+req.params.bookIdentifier)
    .then((data)=>res.json(data))
    .catch((err)=>next(err))

}

export function saveBook(req, res, next){
   bookServices
   .addBook(req.body)
   .then((data)=>res.json(data))
   .catch((err)=>next(err))
}

export function updateBook(req, res, next) {
 bookServices
 .updateBook(+req.params.bookIdentifier, req.body)
 .then((data)=>res.json(data))
 .catch((err)=>next(err));
}

export function removeBook(req, res, next) {
  bookServices
  .removeBook(+req.params.bookIdentifier)
  .then((data)=>res.json(data))
  .catch((err)=>next(err));


}