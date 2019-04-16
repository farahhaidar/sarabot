module.exports = {
  // Server values
  port: process.env.PORT || 3000,
  host: process.env.VCAP_APP_HOST || 'localhost',

  // App values

  // Watson values
  watson: {
    opt_out_logging: process.env.WATSON_OPT_OUT_LOGGING || false,
    conversation: {
      username: process.env.WATSON_CONVERSATION_USERNAME,
      password: process.env.WATSON_CONVERSATION_PASSWORD,
      workspace: process.env.WATSON_CONVERSATION_WORKSPACE,
      version_date: '2017-05-26',
    },
    discovery: {
      username: process.env.WATSON_DISCOVERY_USERNAME,
      password: process.env.WATSON_DISCOVERY_PASSWORD,
      url: 'https://gateway.watsonplatform.net/discovery/api',
      collection: 'news',
      environment: 'system',
      version_date: '2017-11-07',
    },
    speech_to_text: {
      username: process.env.WATSON_STT_USERNAME,
      password: process.env.WATSON_STT_PASSWORD,
      url: 'https://stream.watsonplatform.net/speech-to-text/api',
    },
  },
};
