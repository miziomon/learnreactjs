

var Component = React.createClass({
  displayName: 'Component',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Component'
      )
    );
  }
});

ReactDOM.render(React.createElement(Component, null), document.getElementById('content'));