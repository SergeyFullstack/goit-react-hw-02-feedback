import { Component } from 'react';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Stattistics } from 'components/Stattistics/Stattistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />

        {this.countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Stattistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            PositivePercentage={this.countPositiveFeedbackPercentage(
              this.countTotalFeedback()
            )}
          />
        )}
      </Section>
    );
  }
}
