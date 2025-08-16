import { useState } from 'react';

type Params = {
  text?: string;
  maxLength?: number;
};

const ReadMore = ({ text = '', maxLength = 100 }: Params) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText =
    text.length > maxLength && !isExpanded
      ? text.substring(0, maxLength) + '...'
      : text;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
