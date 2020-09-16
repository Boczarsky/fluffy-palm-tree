import React from 'react';
import { useSelector } from 'react-redux';
import StarRating from './StarRating';


const MovieDetails = () => {
  const data = useSelector(state => state.movieDetails.data);
  const { coverUrl, title, summary, genre = [], rating = [] } = data || {};
  const genres = genre.map(({ name }) => name).join(', ');
  const countAvgRating = values => {
    if (values.length < 3) {
      return 0;
    }
    const { sum, count } = values.reduce((prev, curr) => {
      prev.count += 1;
      prev.sum += curr.score;
      return prev;
    }, { sum: 0, count: 0 });
    return count ? sum / count : 0;
  }
  const avgRating = countAvgRating(rating);
  return data && (
    <div className="top-pad-30">
      <div className="white-box divide">
        <div>
          <div className="w500">
            <img src={coverUrl}/>
          </div>
        </div>
        <div className="l-pad-50">
          <div className="header big-font">{title}</div>
          <div className="header">Summary</div>
          <div className="preline">{summary}</div>
          <div className="header">Genre</div>
          <div>{genres}</div>
          <div className="header">Rating</div>
          <div>
            <StarRating max={10} rating={avgRating}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MovieDetails;
