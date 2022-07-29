import React, { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import styled from "styled-components";

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
      <Container>
        <Section title="Please leave feedback 🙏">
          <FeedbackOptions
            onGood={this.clickGood}
            onNeutral={this.clickNeutral}
            onBad={this.clickBad}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification
              message="There is no feedback 🤷‍♀️"
            />) :
            (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
            />)}
        </Section>
      </Container>
    )
  }
}

export default App;

const Container = styled.div`
  border-radius: 2px;
  box-sizing: border-box;
  padding: 15px;
  border: none;
  margin: 50px auto;
  width: 50%;
  background-color: #edc1ed;
  box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;;
`;