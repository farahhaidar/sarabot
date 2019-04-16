/* @flow */

import { Router } from 'express';
import logger from './logger';
// import ConversationV1 from 'watson-developer-cloud';
const Watson = require('watson-developer-cloud');

const conversationSDK = new Watson.ConversationV1({
  username: 'MISSING VALUE',
  password: 'MISSING VALUE',
  workspace: 'MISSING VALUE',
  version_date: '2017-05-26',
});
logger.info(conversationSDK);

const router = new Router();

router.post('/conversation', (req, res) => {
  /*
  ==========================^^^=========================
                  ROUTING CODE GOES HERE
  ==========================vvv=========================
  */
  logger.info(req);
  logger.info(res);
});

export default router;
