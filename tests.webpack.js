var context = require.context('./src/test/js', true, /-test\.js$/);
var projectModuleIds = context.keys().map(module =>
    String(context.resolve(module)));
context.keys().forEach(context);

beforeEach(() => {
    // Remove our modules from the require cache before each test case.
    projectModuleIds.forEach(id => delete require.cache[id]);
});
