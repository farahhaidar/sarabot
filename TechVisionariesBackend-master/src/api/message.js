/* @flow */

import { $Request, $Response } from 'express';
import logger from '../logger';
import Conversation from '../lib/conversation';

const conversation = new Conversation();

/**
 * This function handles the logic for the chatbot endpoint.
 * It returns the Watson Conversation response to the client.
 * @param  {$Request} req
 * @param  {$Response} res
 */
const message = async (req: $Request, res: $Response) => {
  let response: Object = {};
  // logger.info(req);
  try {
    const { body: { input: { text } } } = req;
    const { body: { context } } = req;
    try {
      logger.debug(`Sending text:`, text, `and context\n`, context);
      response = await conversation.message(text, context);
      logger.debug(`Response received: \n`, response);
    } catch (error) {
      logger.error(
        `There was an error retrieving a response from Watson Conversation`,
        error,
      );
    }
  } catch (error) {
    logger.error(`There was an error parsing the request from client`, error);
  }
  res.send(response);
};

export default message;
