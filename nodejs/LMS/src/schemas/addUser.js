import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(50).required(),
  email: Joi.string().email().max(50).required(),
  password: Joi.string().min(8).max(20).required(),
  is_admin:Joi.boolean()
});

export default schema;