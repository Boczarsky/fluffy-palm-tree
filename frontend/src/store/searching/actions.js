import Axios from "axios";
import { API_ROOT } from "../../config";
import { SET_ERROR, SET_FETCHING, SET_PHRASE, SET_RESULT } from "./reducer";

export function setSearchingPhrase(phrase) {
  return { type: SET_PHRASE, payload: phrase };
}
export function setSearchingResult(result) {
  return { type: SET_RESULT, payload: result };
}
export function setSearchingResultFetching(fetching) {
  return { type: SET_FETCHING, payload: fetching };
}
export function setSearchingError(error) {
  return { type: SET_ERROR, payload: error };
}

export function search(phrase) {
  return (dispatch) => {
    if (!phrase) {
      dispatch(setSearchingResult([]))
    } else {
      dispatch(setSearchingPhrase(phrase));
      dispatch(setSearchingResultFetching(true));
      Axios.get(`${API_ROOT}/movies?search=${phrase}`)
        .then(({ data }) => {
          dispatch(setSearchingResult(data));
        })
        .catch((err) => {
          dispatch(setSearchingError(err));
        })
        .finally(() => {
          dispatch(setSearchingResultFetching(false));
        });
    }
  }
}