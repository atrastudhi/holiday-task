const Transaction = require('../models/transaction')

module.exports = {
  find: (req, res) => {
    Transaction.find()
    .then(transaction => {
      res.status(200).json({
        transaction: transaction
      })
    })
    .catch(err => {
      res.status(400).json({
        errors: err
      })
    })
  },
  create: (req, res) => {
    Transaction.create({
      
    })
  }
}