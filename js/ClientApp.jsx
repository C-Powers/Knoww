const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const Other = require('./Other')
const Schedule = require('./Schedule')
//import 'react-big-calendar/lib/css/react-big-calendar.css'

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Schedule} />
      </Router>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
