import React from 'react'
import LoadingGif from '../img/Process.gif'

class Loading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Loading',
    }
  }
  componentDidMount() {
    const stopper = this.state.text + '...'

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: 'Loading' }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }))
    }, 300)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval)
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <img style={{ height: 300 }} src={LoadingGif} alt='Loading gif' />
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default Loading
