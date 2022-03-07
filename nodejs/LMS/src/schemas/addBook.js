import joi from 'joi';

const schema = joi.object({
  bookcategory_id:joi.number().integer().required(),
  name: joi.string().max(20).required(),
  author: joi.string().max(20).required(),
  edition: joi.string().max(10).required(),
 
});

export default schema;