var models = require('../models');

module.exports = {
  get: (req, res) => {
    const { questionId } = req.params;
    models.answers.getAll(questionId, function(err, results) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },


  post: (req, res) => {
    const answer = req.body;
    models.answers.postAnswer(answer, (err) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send('Answer created successfully!');
      }
    });
  },

  updateHelpful: (req, res) => {
    const { answerId } = req.params;
    models.answers.incrementHelpful(answerId, (err) => {
      if (err) {
        res.status(400).send(err);
      } else {
         res.status(204).send('Answer Helpfulness Updated!');
      }
    });
  },

  // putReport: (req, res) => {
  //   models.answers.incrementReport() => {
  //     if (err) {

  //     } else {
  //       res.status(204).send('Incremented Answer Report!');
  //     }
  //   }
  // }
}