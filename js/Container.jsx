const React = require('react')
import GoogleApiComponent from './GoogleApiComponent'
import key from '../secrets'

export class Container extends React.Component {
  render () {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: key
})(Container)
