import joi from 'joi';

const schema = joi.object({
  bookcategory_id:joi.number().integer(),
  name: joi.string(),
  author: joi.string(),
  
 
});

export default schema;