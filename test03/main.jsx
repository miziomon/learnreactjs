

var App = React.createClass({

    render: function() {
        return (

            
            <div className="ft-section">
            <Page >Section 1 / Page 1</Page>
            <Page >Section 1 / Page 2</Page>
            </div>
           
  
        );
    }
});

var Page = React.createClass({

    componentDidMount: function() {

        console.log("update");
        Flowtime.updateNavigation();
    },
  

    render: function() {
        return (

            <div className="ft-page">{this.props.children}</div>

        );
    }
});


ReactDOM.render(
  <App  />,
  document.getElementById('content')
);


//Flowtime.showProgress(true);
Flowtime.start();