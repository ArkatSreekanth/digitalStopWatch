import './index.css'
import {Component} from 'react'

class StopWatch extends Component {
  state = {minutes: 0, seconds: 0}

  startTimer = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTime = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  tick = () => {
    const {minutes, seconds} = this.state

    let changeMinutes = minutes
    if (seconds >= 59) {
      changeMinutes += 1
    }
    this.setState(prevState => ({
      seconds: prevState.seconds < 59 ? prevState.seconds + 1 : 0,
      minutes: prevState.minutes <= 59 ? changeMinutes : 0,
    }))
  }

  render() {
    const {minutes, seconds} = this.state

    return (
      <div className="stopwatch-bg-container">
        <h1>Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="stop-watch-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="time">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div>
            <button
              onClick={this.startTimer}
              className="start-btn"
              type="button"
            >
              start
            </button>
            <button className="stop-btn" type="button" onClick={this.stopTimer}>
              stop
            </button>
            <button
              className="reset-btn"
              type="button"
              onClick={this.resetTime}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
