const root = 'MOVIE_DETAILS'
export const SET_DATA = `${root}/SET_DATA`;
export const SET_FETCHING = `${root}/SET_FETCHING`
export const SET_ERROR = `${root}/SET_ERROR`

const initialState = {
  fetching: false,
  data: null,
  error: null,
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case SET_DATA:
      return { ...state, data: payload };
    case SET_FETCHING:
      return { ...state, fetching: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}