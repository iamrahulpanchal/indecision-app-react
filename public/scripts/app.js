"use strict";

console.log("Running");
var app = {
  title: 'Indecision App',
  subtitle: 'Test',
  options: ['One', 'Two', 'Three']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle && app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here Are Your Options' : 'No Options'), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item 1"), /*#__PURE__*/React.createElement("li", null, "Item 2"), /*#__PURE__*/React.createElement("li", null, "Item 3")));
var count = 0;

var addOne = function addOne() {
  console.log("Add One");
};

var subOne = function subOne() {
  console.log("Sub One");
};

var reset = function reset() {
  console.log("Reset");
};

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count : ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: subOne
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset
}, "Reset"));
var appRoot = document.querySelector('#app');
ReactDOM.render(templateTwo, appRoot);
