

var App = React.createClass({
    displayName: "App",

    render: function () {
        return React.createElement(
            "div",
            { className: "ft-section" },
            React.createElement(
                Page,
                null,
                "Section 1 / Page 1"
            ),
            React.createElement(
                Page,
                null,
                "Section 1 / Page 2"
            )
        );
    }
});

var Page = React.createClass({
    displayName: "Page",

    componentDidMount: function () {

        console.log("update");
        Flowtime.updateNavigation();
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "ft-page" },
            this.props.children
        );
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));

//Flowtime.showProgress(true);
Flowtime.start();