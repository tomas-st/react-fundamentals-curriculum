/**
 * Created by tom on 24.09.16.
 */

var React = require('react')
var PropTypes = React.PropTypes
var ReactDom = require('react-dom')

var HelloWorld = React.createClass({
  getInitialState: function () {
    return {
    }
  },
  render: function() {
    return (
        <div>Hello World!!!</div>
    );
  }
});

ReactDom.render(<HelloWorld />, document.getElementById('app'))