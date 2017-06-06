// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

// Create the Parent Component
var Parent = React.createClass({

  // Here we set a generic state 
  getInitialState: function() {
    return {
      topic: "",
      start: "",
      end: ""
    };
  },

  // these will grab the value from the input
  handleTermChange: function(e) {
    this.setState({term: e.target.value});
  },
  handleStartYearChange: function(e){
    this.setState({startyear: e.target.value})
  },
  handleEndYearChange: function(e){
    this.setState({endyear: e.target.value})
  },
  // This will save the search states
  handleSearch: function() {
    var topic = this.state.topic.trim()
    var start = this.state.start.trim()
    var end = this.state.end.trim()
    return;
    console.log(topic);
    this.props.callbackParent(term, startyear, endyear)
  },

 

  // Here we render the function
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>New York Times Search</h2>
            <hr />
            <p>
              Search for and annotate articles of interest
            </p>
            <p>
              
             
            </p>
          </div>
          {/* This represents the "Parent" */}
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <label>
                     Topic: 

                  <input type="text" value= {this.state.topic} onChange={this.handleTopicChange} name="topic" />
                    </label>

                

                
                  <label>
                     Start Year: 

                  <input type="text" value= {this.state.start} onChange={this.handleStartChange} name="start" />
                    </label>
                

                
                  <label>
                     End Year:

                  <input type="text" value= {this.state.end} onChange={this.handEndChange} name="end" />
                    </label>
                </form>

                <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={this.handleSearch}
              >
                SEARCH
              </button>

                
                {/*
                  Here we'll deploy the child component.
                  We'll pass it the parent's click counter as a "state"
                */}
                <Child articles={this.state.articles} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
