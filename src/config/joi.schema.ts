import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
    PORT: Joi.number().default(3000),
    MONGODB_URI: Joi.string().required(),
    DEFAULT_LIMIT: Joi.number().default(10),
});