import joi from 'joi';

const schema = joi.object({
    bookCategoryId:joi.number().integer().optional(),
    name: joi.string().max(20).optional(),
    author: joi.string().max(20).optional(),
    edition: joi.string().max(10).optional()
});
export default schema;