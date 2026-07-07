const { findAllUsers, findUserById } = require("../data/users");
const HttpError = require("../utils/HttpError");

function isValidUserId(id) {
  return /^\d+$/.test(id);
}

function getUsers(req, res, next) {
  try {
    const { search = "" } = req.query;

    if (typeof search !== "string") {
      throw new HttpError(400, "Search must be a text value.");
    }

    if (search.length > 100) {
      throw new HttpError(400, "Search must be 100 characters or fewer.");
    }

    return res.status(200).json(findAllUsers(search));
  } catch (error) {
    return next(error);
  }
}

function getUserById(req, res, next) {
  try {
    const { id } = req.params;

    if (!isValidUserId(id)) {
      throw new HttpError(400, "User id must be a positive number.");
    }

    const user = findUserById(id);

    if (!user) {
      throw new HttpError(404, `User with id ${id} was not found.`);
    }

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUserById,
  getUsers,
};
