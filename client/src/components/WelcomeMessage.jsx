import { Component } from "react";

class WelcomeMessage extends Component {
  render() {
    return (
      <div className="welcome-box">
        <div className="welcome-icon">💪</div>

        <div>
          <h3>Stay Consistent!</h3>
          <p>
            Every workout counts. Track your training and keep
            pushing toward your fitness goals.
          </p>
        </div>
      </div>
    );
  }
}

export default WelcomeMessage;