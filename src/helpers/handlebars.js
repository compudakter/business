const Handlebars = require("handlebars/runtime");
// Handlebars.registerHelper("iter", function (context, options) {
//   var ret = "";

//   for (var i = 0; i < context; i++) {
//     ret = ret + options.fn(i);
//   }

//   return ret;
// });
// Handlebars.registerHelper("lt", function (v1, v2, options) {
//   "use strict";
//   console.log("v1=====", v1, v2);
//   if (v1 < v2) {
//     return options.fn(this);
//   }
//   return options.inverse(this);
// });
module.exports = Handlebars;
