function errorhandlers(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        messege : err.messege,
        status : "failed"
    })
}

module.exports = errorhandlers