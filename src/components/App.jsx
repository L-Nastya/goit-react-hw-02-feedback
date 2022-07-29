import React, { Component, Fragment } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
    clickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  clickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  clickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.ceil(good / countTotalFeedback * 100)
    return (
      <Fragment>
        <Section title="Please leave feedback 🙏">
          <FeedbackOptions
            onGood={this.clickGood}
            onNeutral={this.clickNeutral}
            onBad={this.clickBad}
          />
        </Section>
        <Section title="Statistics">
          { countTotalFeedback === 0 ? (<Notification
            message="There is no feedback 🤷‍♀️" /> ):( <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
            visible={false}
          />)}
        </Section>
      </Fragment>
    )
  }
}

export default App;
