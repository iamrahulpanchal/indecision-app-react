"use strict";

console.log("Running");
var title = 'Indecision App';
var user = {
  name: 'Rahul',
  age: 24,
  location: 'Bhayandar'
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "".concat(title).toUpperCase()), /*#__PURE__*/React.createElement("p", null, user.name), /*#__PURE__*/React.createElement("p", null, user.age), /*#__PURE__*/React.createElement("p", null, user.location), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item 1"), /*#__PURE__*/React.createElement("li", null, "Item 2"), /*#__PURE__*/React.createElement("li", null, "Item 3")));
var appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
