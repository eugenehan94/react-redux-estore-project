import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
const EmailSubscription = () => {
  return (
    <div className="emailSubscription-container">
      <h1>Join our newsletter and get 10% off</h1>
      <div className="emailSubscription-wrapper">
        <div>
          <LoremIpsum avgWordsPerSentence={7} avgSentencesPerParagraph={3} />
        </div>
        <div className="emailSubscription-form-wrapper">
          <input type="text" placeholder="Enter email here..." />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
