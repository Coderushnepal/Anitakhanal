import { FETECH_BEERS_FULFILLED, FETECH_BEERS_REJECTED } from "../actions/beer";

function fetechBeers(state = [], action) {
  console.log(action);

  switch (action.type) {
    case FETECH_BEERS_FULFILLED:
      return [...state, ...action.payload];

    case FETECH_BEERS_REJECTED:
      return [];

    default:
      return state;
  }
}
export default fetechBeers;
