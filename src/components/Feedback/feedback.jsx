import React, { Component, Fragment } from "react";

class Feedback extends Component {
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
      <h2>Please leave feedback</h2> 
          <div>
      <button onClick = {this.clickGood}>Good</button>
      <button onClick = {this.clickNeutral}>Neutral</button>
     <button onClick = {this.clickBad}>Bad</button>
     </div>    
          <div>
             <h2>Statistics</h2>  
             <p>Good : {good}</p>    
             <p>Neutral : {neutral}</p>     
             <p>Bad : {bad}</p>          
          </div>
          <p>Total: { countTotalFeedback}</p>
          <p>Positive feedback:{good > 0 ? countPositiveFeedbackPercentage : 0}% </p>
        </Fragment>
      )
    
  }
}

export default Feedback;