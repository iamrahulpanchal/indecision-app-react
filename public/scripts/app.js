"use strict";

console.log("Running");
var app = {
  title: 'Indecision App',
  subtitle: 'Put Your Life in the Hands of a Computer!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  renderApp();
};

var appRoot = document.querySelector('#app');

var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle && app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here Are Your Options' : 'No Options'), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("button", {
    onClick: removeAllOptions
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item 1"), /*#__PURE__*/React.createElement("li", null, "Item 2"), /*#__PURE__*/React.createElement("li", null, "Item 3")), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderApp();
