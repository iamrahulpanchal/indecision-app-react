"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.deleteAllOptions = _this.deleteAllOptions.bind(_assertThisInitialized(_this));
    _this.pickOption = _this.pickOption.bind(_assertThisInitialized(_this));
    _this.addOption = _this.addOption.bind(_assertThisInitialized(_this));
    _this.deleteOption = _this.deleteOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('indecision');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('indecision', json);
        console.log("Saving Data...");
      }
    }
  }, {
    key: "deleteAllOptions",
    value: function deleteAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "deleteOption",
    value: function deleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (opt) {
            return option.toLowerCase() !== opt.toLowerCase();
          })
        };
      });
    }
  }, {
    key: "pickOption",
    value: function pickOption() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      if (!option) {
        return 'Enter Valid Option';
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option Already Added!";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = 'Put Your Life in the Hands of a Computer!';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        pickOption: this.pickOption
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        deleteAllOptions: this.deleteAllOptions,
        deleteOption: this.deleteOption
      }), /*#__PURE__*/React.createElement(AddOption, {
        addOption: this.addOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subtitle && /*#__PURE__*/React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Indecision App'
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.pickOption,
    disabled: !props.hasOptions
  }, "What Should I Do?"));
};

var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.deleteAllOptions
  }, "Remove All"), props.options.length === 0 && /*#__PURE__*/React.createElement("p", null, "Please Add an Option to Get Started!"), props.options.map(function (opt) {
    return /*#__PURE__*/React.createElement(Option, {
      key: opt,
      option: opt,
      deleteOption: props.deleteOption
    });
  }));
};

var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, props.option), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      props.deleteOption(props.option);
    }
  }, "Remove"));
};

var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  var _super2 = _createSuper(AddOption);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _super2.call(this, props);
    _this2.addOption = _this2.addOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "addOption",
    value: function addOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.addOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option",
        required: true
      }), /*#__PURE__*/React.createElement("button", null, "Submit")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
