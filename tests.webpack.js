const context = require.context('./app/tests', true, /(.test.js$|.test\.jsx$)/);
context.keys().forEach(context);
