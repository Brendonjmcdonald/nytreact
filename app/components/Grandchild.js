// Include React
var React = require("react");

// Create the GrandChild Component
var GrandChild = React.createClass({

  // GrandChild has a state of saved articles
  getInitialState: function() {
    return {
      savedArticles : []
    };
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">

          {/* This is where the saved articles will eventually go */}
          <h1>{this.state.savedArticle}</h1>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GrandChild;
