import logger from './logger';

const watson = require('watson-developer-cloud');

const conversation = watson.conversation({
  username: '5ddce1ff-8260-4211-8add-35162f36e385',
  password: 'GXo0UTq4wNOx',
  version: 'v1',
  version_date: '2017-05-26',
});

conversation.message(
  {
    workspace_id: '22bdd246-5bbb-4746-b9cc-845ac12bd779',
    input: { text: 'Hello' },
  },
  (err, response) => {
    if (err) logger.info('error:', err);
    else logger.info(JSON.stringify(response, null, 2));
  },
);
