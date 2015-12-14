// ------------ box ------------- //
var ComponentBox = React.createClass({
    displayName: "ComponentBox",

    handleComponentClick: function (component) {
        console.log("componet click ");
        console.log(component);

        this.refs['overlay'].active();
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(Component, { "class": "red", onComponentClick: this.handleComponentClick }),
            React.createElement(Component, { "class": "green", onComponentClick: this.handleComponentClick }),
            React.createElement(Overlay, { ref: "overlay", "class": "overlay" })
        );
    }
});

// ------------ component  ------------- //

var Component = React.createClass({
    displayName: "Component",

    getInitialState: function () {
        return {
            class: this.props.class,
            text: ""
        };
    },

    handleClick: function (e) {
        e.preventDefault();

        //this.setState({class: "active"});

        this.props.onComponentClick(this.state.class);

        console.log("click " + this.state.class);
    },

    handleChange: function (e) {
        this.setState({ text: e.target.value });
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
            React.createElement("input", { type: "text", onChange: this.handleChange }),
            React.createElement(
                "p",
                null,
                this.state.text
            ),
            React.createElement(
                "a",
                { onClick: this.handleClick },
                "active"
            )
        );
    }
});

// ------------ overlay  ------------- //

var Overlay = React.createClass({
    displayName: "Overlay",

    getInitialState: function () {
        return {
            class: this.props.class,
            text: "",
            content: ""
        };
    },

    active: function () {
        console.log("partito");
        this.setState({ class: "overlay active" });
        this.setState({ content: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, " });
    },

    handleClose: function (e) {

        e.preventDefault();

        if (e.target.className == "overlay active" || e.target.parentNode.className == "overlay-close") {
            this.setState({ class: "overlay" });
            this.setState({ content: "" });
        }
    },

    render: function () {
        return React.createElement(
            "div",
            { className: this.state.class, onClick: this.handleClose },
            React.createElement(
                "div",
                { className: "overlay-content" },
                this.state.content
            ),
            React.createElement(
                "a",
                { className: "overlay-close", onClick: this.handleClose },
                React.createElement("i", { className: "fa fa-times" }),
                " Close"
            )
        );
    }
});

ReactDOM.render(React.createElement(ComponentBox, null), document.getElementById('content_a'));