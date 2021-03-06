
var data = [{ id: 1, author: "Pete Hunt", text: "This is one comment" }, { id: 2, author: "Jordan Walke", text: "This is *another* comment" }, { id: 3, author: "fdsf asd ", text: "This is *another* comment" }, { id: 4, author: "dfsaf sa ds", text: "This is *another* comment" }];

var CommentList_old = React.createClass({
  displayName: "CommentList_old",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentList" },
      React.createElement(
        Comment,
        { author: "Pete Hunt" },
        "This is ",
        React.createElement(
          "b",
          null,
          "one"
        ),
        " comment"
      ),
      React.createElement(
        Comment,
        { author: "Jordan Walke" },
        "This is *another* ",
        React.createElement(
          "i",
          null,
          "comment"
        )
      )
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author, key: comment.id },
        comment.text
      );
    });
    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  getInitialState: function () {
    return { author: '', text: '' };
  },
  handleAuthorChange: function (e) {
    this.setState({ author: e.target.value });
  },
  handleTextChange: function (e) {
    this.setState({ text: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }

    console.log("commit sono nel form");
    this.props.onCommentSubmit({ author: author, text: text });

    this.setState({ author: '', text: '' });
  },

  render: function () {
    return React.createElement(
      "form",
      { className: "commentForm", onSubmit: this.handleSubmit },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.author,
        onChange: this.handleAuthorChange
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Say something...",
        value: this.state.text,
        onChange: this.handleTextChange
      }),
      React.createElement("input", { type: "submit", value: "Post" })
    );
  }
});

var Comment = React.createClass({
  displayName: "Comment",

  render: function () {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      this.props.children
    );
  }
});

// -------------------------------

var CommentBox = React.createClass({
  displayName: "CommentBox",

  handleCommentSubmit: function (comment) {
    console.log("ok aggiorno la lista in quanto invocato evento");

    var comments = this.state.data;
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({ data: newComments });
  },

  getInitialState: function () {
    return { data: [] };
  },

  loadCommentsFromServer: function () {

    this.setState({ data: [{ id: 1, author: "Pete Hunt", text: "This is one comment" }, { id: 2, author: "Jordan Walke", text: "This is *another* comment" }, { id: 3, author: "fdsf asd ", text: "This is *another* comment" }, { id: 4, author: "dfsaf sa ds", text: "This is *another* comment" }, { id: 5, author: "davide", text: "pppppppppppppppppp" }] });

    console.log("polling from server");
  },

  componentDidMount: function () {

    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        "Nuovo messaggio"
      ),
      React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit }),
      React.createElement(
        "h1",
        null,
        "Comments"
      ),
      React.createElement(CommentList, { data: this.state.data })
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, { url: "/api/test.json", pollInterval: 2000, xxxdata: data }), document.getElementById('content'));