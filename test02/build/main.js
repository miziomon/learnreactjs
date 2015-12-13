

var Component = React.createClass({
  displayName: "Component",

  getInitialState: function () {
    return { class: this.props.class };
  },

  handleClick: function (e) {
    e.preventDefault();

    console.log("click " + this.state.class);

    this.setState({ class: "active" });
  },

  render: function () {
    return React.createElement(
      "div",
      { className: this.state.class },
      React.createElement(
        "h1",
        null,
        "Component"
      ),
      React.createElement(
        "a",
        { onClick: this.handleClick },
        "active"
      )
    );
  }
});

ReactDOM.render(React.createElement(Component, { "class": "red" }), document.getElementById('content_a'));

ReactDOM.render(React.createElement(Component, { "class": "green" }), document.getElementById('content_b'));