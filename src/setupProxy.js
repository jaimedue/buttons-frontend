const proxy = require("http-proxy-middleware")

module.exports = app => {
    app.use(proxy("/*", { target: "https://buttons-backend.herokuapp.com/"}))
}