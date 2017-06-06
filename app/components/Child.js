// Include React
var React = require("react");

// Here we include all of the sub-components
var GrandChild = require("./Grandchild");

// Create the Child Component
var Child = React.createClass({

  // Child has a state that has an array of articles
  getInitialState: function() {
    return {
      articles : []
    };
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            This is where the articles will appear eventually
          */}
          <h1>{this.state.article}</h1>

          {/*
            this is for when an article is saved
          */}
          <GrandChild savedArticle={this.state.savedArticle} />

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
