import * as bookCategoryServices from "../services/bookCategory.js";

export function getBooksCategory(req, res, next) {
    bookCategoryServices
    .getBooksCategory()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}