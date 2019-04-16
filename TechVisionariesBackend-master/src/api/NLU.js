import logger from '../logger';

const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  username: '42855eef-74ae-4064-8a13-9f4fdfaf424f',
  password: 'Pdp6peE5vPLs',
  version_date: '2017-02-27',
});

const parameters = {
  text:
    'Leonardo DiCaprio won Best Actor in a Leading Role for his performance. Max Thorpe was awarded the fastest award',
  features: {
    entities: {
      emotion: true,
      sentiment: true,
      limit: 2,
    },
    keywords: {
      emotion: true,
      sentiment: true,
      limit: 2,
    },
    relations: {},
  },
};

naturalLanguageUnderstanding.analyze(parameters, (err, response) => {
  if (err) logger.info('error:', err);
  else logger.info(JSON.stringify(response, null, 2));
});
