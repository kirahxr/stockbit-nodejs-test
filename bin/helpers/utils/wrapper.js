const data = (data, description = '', totalData = 0, dateTime, code = 200) => ( { err: null, message: description, data, totalData, dateTime, code });
const error = (err, description, code = 500) => ({ err, code, data: '', message: description });

module.exports = {
  data,
  error
};