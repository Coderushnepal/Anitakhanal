import * as beerService from "../services/beer";

export const FETECH_BEERS = "FETECH_BEERS";
export const FETECH_BEERS_PENDING = "FETECH_BEERS_PENDING";
export const FETECH_BEERS_REJECTED = "FETECH_BEERS_REJECTED";
export const FETECH_BEERS_FULFILLED = " FETECH_BEERS_FULFILLED";

export default function fetechBeers(dispatch){
dispatch(FETECH_BEERS_PENDING);
}

function fetechBeersFulfilled(beers){
    return {
        type: FETECH_BEERS_FULFILLED,
        payload:beers,
    };
}
function fetechBeersRejected(err) {
    return {
      type: FETECH_BEERS_REJECTED,
      payload: err,
    };
  }

async function fetechBeersPending(dispatch) {
      try {
          const data = await beerService.fetechBeers();

          dispatch(fetechBeersFulfilled(data));

      }catch (err) {
          dispatch(fetechBeersRejected(err));
      }
}