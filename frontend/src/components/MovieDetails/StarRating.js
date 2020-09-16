import { Star } from '@material-ui/icons';
import React from 'react';

const StarRating = (props) => {
  const { max, rating } = props;
  const totalWidth = max*30;
  const diff = totalWidth - rating*30;
  if (rating === 0) {
    return (
      <div className="h-align-center relative" style={{ width: totalWidth }}>
        <span>No rating</span>
      </div>
    )
  }
  return (
    <div className="h-align-center relative" style={{ width: totalWidth }}>
      {new Array(max).fill(<div><Star style={{ width: 30, height: 30 }}/></div>)}
      <div className="veil" style={{ width: diff }}/>
    </div>
  );
};

export default StarRating;
