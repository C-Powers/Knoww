const React = require('react')

export class Map extends React.Component {
  componentDidMount () {
    this.loadMap()
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap()
    }
  }
  loadMap () {
  // ...
  }
  render () {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}
