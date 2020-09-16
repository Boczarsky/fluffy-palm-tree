import { SET_DATA, SET_ERROR, SET_FETCHING } from "./reducer";
import Axios from 'axios';
import { API_ROOT } from "../../config";

export function setMovieDetailsData(data) {
  return { type: SET_DATA, payload: data };
};
export function setMovieDetailsFetching(fetching) {
  return { type: SET_FETCHING, payload: fetching }; 
};
export function setMovieDetailsError(fetching) {
  return { type: SET_ERROR, payload: fetching }; 
};

export function fetchMovie(id) {
  return (dispatch) => {
    dispatch(setMovieDetailsFetching(true));
    Axios.get(`${API_ROOT}/movies?id=${id}`)
      .then(({ data }) => {
        dispatch(setMovieDetailsData(data));
      })
      .catch((err) => {
        dispatch(setMovieDetailsError(err));
      })
      .finally(() => {
        dispatch(setMovieDetailsFetching(false));
      });
  }
}