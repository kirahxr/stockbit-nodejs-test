const Joi = require('joi');
const validateJoi = require('validate.js');
const wrapper = require('../../../../helpers/utils/wrapper')

const validate = (param, schema) => {
    const { value, error } = Joi.validate(param, schema)
    if (!validateJoi.isEmpty(error)) {
        return {
            err: true,
            data: wrapper.responseCode(400, { reason: error.details[0].message }).result
        }
    }
    return { err: false, data: value }
};

module.exports = {
    validate
}
