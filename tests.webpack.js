var context = require.context('./src/test/js', true, /-test\.js$/);
context.keys().forEach(context);
