// ------------ box ------------- //
var ComponentBox = React.createClass({

    handleComponentClick: function( component ) {
        this.refs['overlay'].active();
    },

    render: function() {
        return (
            <div>
            <Component class="red" onComponentClick={this.handleComponentClick}/>
            <Component class="green" onComponentClick={this.handleComponentClick} />
            <Overlay ref="overlay" class="overlay" />
            </div>
        );
      }
});




// ------------ component  ------------- //

var Component = React.createClass({

    getInitialState: function() {
        return {
            class: this.props.class,
            text: ""
            };
      },

    handleClick: function(e) {
        e.preventDefault();
        this.props.onComponentClick( this.state.class );
        console.log( "click " + this.state.class );
      },


    handleChange: function(e) {
        this.setState({text: e.target.value });
    },

      render: function() {
        return (
          <div className ={ this.state.class }>
            <h1 >Component</h1>
            <input type="text" onChange={this.handleChange} />
            <p>{this.state.text}</p>
            <a onClick={this.handleClick}>active</a>
          </div>
        );
      }
});


// ------------ overlay  ------------- //

var Overlay = React.createClass({

    getInitialState: function() {
        return {
            class: this.props.class,
            text: "",
            content: ""
            };
      },

    active: function(){
        console.log("partito");
        this.setState({class: "overlay active"});
        this.setState({content: "Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, "});
    },

    handleClose: function( e ){
        e.preventDefault();
        if ( e.target.className == "overlay active" || e.target.parentNode.className  == "overlay-close" ) {
            this.setState({class: "overlay"});
            this.setState({content: ""});
        }
    },

    render: function() {
        return (
        <div className={ this.state.class } onClick={this.handleClose}>
            <div className="overlay-content" >{this.state.content}</div>
            <a  className="overlay-close" onClick={this.handleClose}>
                <i className="fa fa-times"></i> Close</a>        

        </div>
        );
      }
});

ReactDOM.render(
  <ComponentBox />,
  document.getElementById('content_a')
);



