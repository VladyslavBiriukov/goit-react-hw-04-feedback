import React, { useState} from "react";

import Section from "../Section";
import FeedbackOption from "../FeedbackOption";
import Notification from "../Notification";
import Statistics from "../Statistics";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

  const handleFeedbackChange = feedback => {
      switch (feedback) {
          case 'good':
              setGood(prevState => prevState + 1);
              break;
          
          case 'neutral':
              setNeutral(prevState => prevState + 1);
              break;
          
          case 'bad':
              setBad(prevState => prevState + 1);
              break;
          
          default: break;           
      }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };
    
const feedbacks = ['good', 'neutral', 'bad'];

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={feedbacks}
            onBtnClick={handleFeedbackChange}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
};

export default App;


