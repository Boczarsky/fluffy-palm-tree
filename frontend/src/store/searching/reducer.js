const root = 'SEARCHING'
export const SET_PHRASE = `${root}/SET_PHRASE`;
export const SET_RESULT = `${root}/SET_RESULT`;
export const SET_FETCHING = `${root}/SET_FETCHING`
export const SET_ERROR = `${root}/SET_ERROR`;

const initialState = {
  phrase: '',
  fetching: false,
  result: [],
  error: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case SET_PHRASE:
      return { ...state, phrase: payload };
    case SET_RESULT:
      return { ...state, result: payload };
    case SET_FETCHING:
      return { ...state, fetching: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}