
function errorLogs(err, req, res, next) {
    console.log("errorlogs")
    console.error(err)
    next(err)
}

function errorHandler(err, req, res, next) {
    console.log("errorHandler")
    res.status(501).json({
        error: err.message,
        stack: err.stack
    })
}

module.exports = {
    errorLogs,
    errorHandler
}