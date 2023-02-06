import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "first name is required",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "last name is required",
  }),
  telephone: Joi.string()
    .length(10)
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "telephone number is required",
      "string.length": "telephone number must have 10 characters",
    }),
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({ "string.empty": "email is required" }),
  password: Joi.string().alphanum().min(8).required().messages({
    "string.empty": "password is required",
    "string.alphanum": "password must contain number or alphabet",
    "string.min": "password must have at least 8 characters",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "please match with the password",
    "string.empty": "confirm password is required",
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
