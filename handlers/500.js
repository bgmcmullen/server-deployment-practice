'use strict';

function serverError (error, req, res, next) {
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR: ${error.message}`
  })
}

module.exports = serverError;