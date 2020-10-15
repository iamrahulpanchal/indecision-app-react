"use strict";

console.log("Running");
var app = {
  title: 'Indecision App',
  subtitle: 'Test',
  options: ['One', 'Two', 'Three']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle && app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here Are Your Options' : 'No Options'), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item 1"), /*#__PURE__*/React.createElement("li", null, "Item 2"), /*#__PURE__*/React.createElement("li", null, "Item 3")));
var appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
