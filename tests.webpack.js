const context = require.context('./app/tests', true, /(.test.js$|.test\.jsx$)/);
context.keys().forEach(context);

// Extract the module ids that Webpack uses to track modules.
const moduleIds = context.keys()
  .map(module => String(context.resolve(module)));

beforeEach(() => {
  // Remove our modules from the require cache before each test case.
  moduleIds.forEach(id => delete require.cache[id]);
});
