const React = require('react')
const fetch = require('isomorphic-fetch')
const Key = require('../secrets')

const MapView = React.createClass({
  propTypes: {
  },
  getInitialState () {
    return {
      position: "It'll take a moment to find where you are... but we will",
      shops: [],
      err: ''
    }
  },
  fetchData () {
    let lat = this.state.position.latitude
    let lon = this.state.position.longitude
    let latlon = String(lat) + ',' + String(lon)

    console.log('latlon,  ', latlon)
    const parameters = {
      ll: latlon,
      key: Key.key
    }

    const Url = 'https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=San+Diego,CA&key=' + parameters.key
    /*
      Here is where we fetch the yelp data by passing our
      keys into the requestYelp function.
      It deals with Yelp's oauth,
      and creates the right callback url.
    */
    fetch(Url)
      .then(response => response.json())
      .then(json => console.log('parsed json, ', json))
      .catch(e => {
        console.log('error: ', e)
      })
  },
  componentDidMount () {
    /*
    Grab the user's coordinates to pass into our
    fetchData() function. After coordinates are aquired,
    we then call fetchData()
    */
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position: position.coords})
        console.log(position.coords)
        this.fetchData()
      },
      (error) => {
        this.setState({err: 'We could not find your position. Error: ' + error.message})
        console.log(error)
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  },
  render () {
    return (
      <div>
        This is my MapView
      </div>
    )
  }
})

module.exports = MapView
