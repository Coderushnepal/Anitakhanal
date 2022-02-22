import joi from 'joi';

const schema = joi.object({
  name: joi.string().max(20).required(),
  author: joi.string().max(20).required(),
  edition: joi.string().max(10).required(),
  semester: joi.number().integer().required(),
});

export default schema;