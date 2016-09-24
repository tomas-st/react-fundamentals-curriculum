var React = require('react');

function Forecast (props) {
  console.log(props)
  return props.isLoading === true
    ? <div> Loading </div>
    :
    <div>
      <h1>{props.city}</h1>
      <div></div>
    </div>
}

module.exports = Forecast;