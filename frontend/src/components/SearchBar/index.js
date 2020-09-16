import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../store/movieDetails/actions';
import { search } from '../../store/searching/actions';
import debounce from '../../utils/debounce';
import { Search } from '@material-ui/icons';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(state => state.searching.result);
  const [phrase, setPhrase] = useState('');
  const [enableHints, setEnableHints] = useState(false);
  const selectedMovie = useSelector(state => state.movieDetails.data);
  const debouncedSearch = useCallback(debounce(val => dispatch(search(val)), 300), []);
  const handleChange = (e) => {
    const { value } = e.target;
    debouncedSearch(value);
    setPhrase(value);
    if (!enableHints) {
      setEnableHints(true);
    }
  }
  const handleHintClick = (id, title) => () => {
    setPhrase(title);
    setEnableHints(false);
    if (!selectedMovie || selectedMovie._id !== id) {
      dispatch(fetchMovie(id));
    }
  }
  return (
    <div className="v-align-center top-pad-30">
      <div className="relative full-width">
        <div className="h-align-center white-underline">
          <Search className="search-icon"/>
          <input className="common-input" value={phrase} onChange={handleChange} placeholder="Search movie title..."/>
        </div>
        {enableHints && Boolean(searchResult.length) && (
          <div className="hint-box">
            {searchResult.map(({ _id: id, title }) => (
              <div key={`search-hints-${id}`} className="hint" onClick={handleHintClick(id, title)}>
                {title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar;
