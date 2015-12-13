

var Component = React.createClass({


getInitialState: function() {
    return {class: this.props.class};
  },

handleClick: function(e) {
    e.preventDefault();
    
    
    
    
    this.setState({class: "active"});
    console.log( "click " + this.state.class );
  },


  render: function() {
    return (
      <div className ={ this.state.class }>
           
        <h1 >Component</h1>
       
        <a onClick={this.handleClick}>active</a>
        
      </div>
    );
  }
});

ReactDOM.render(
  <Component class="red" />,
  document.getElementById('content_a')
);


ReactDOM.render(
  <Component class="green" />,
  document.getElementById('content_b')
);