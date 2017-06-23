const context = require.context('./tests', true, /(.test\.js$|.test\.jsx$)/);
context.keys().forEach(context);
