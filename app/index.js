var React = require('react')
var PropTypes = React.PropTypes
var ReactDom = require('react-dom')

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>Hello</div>
    )
  }
})

ReactDom.render(<HelloWorld />, document.getElementById('app'))