const content = require("./content.js");
require("!style-loader!css-loader!./style.css");
document.write(require("./content.js"));
console.log('Hello');

export default { content }
