
const Note = require('../../models/note');

module.exports = {
  create,
};



async function create(req, res) {
  try {

    req.body.user = req.user._id;
    await Note.create(req.body);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}
