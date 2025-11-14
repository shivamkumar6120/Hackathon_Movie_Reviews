const jwt = require('jsonwebtoken')


const config = require('./config')

function authorization(req, res, next) {
  if (req.url == '/user/signup' || req.url == '/user/login') next()
  else {
    const token = req.headers.token
    if (token) {
      try {
        const payload = jwt.verify(token, config.secret)
        req.headers.userId = payload.userId
        req.userId = payload.userId
        next()
      } catch (e) {
        res.send("Invalid token")
      }
    } else res.send("Token is missing")
  }
}

module.exports = authorization
