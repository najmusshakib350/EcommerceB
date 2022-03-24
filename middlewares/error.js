module.exports = (err, req, res, next) => {
  console.log("Hello i am global error");
  console.log(err);
  console.log("Hello global error message");
  console.log(err.message);
  //return res.status(500).send("Something Failed!!!!");
  return res.status(500).json({
    err,
    errorMessage: err.message,
  });
};
