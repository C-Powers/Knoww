const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, /* IndexRoute,*/ hashHistory } = require('react-router')
const Schedule = require('./Schedule')
const MapView = require('./MapView')
//  import 'react-big-calendar/lib/css/react-big-calendar.css'

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Schedule} />
        <Route path='/map' component={MapView} />
      </Router>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
