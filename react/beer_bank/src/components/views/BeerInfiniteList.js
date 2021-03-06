import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import * as beerService from "../../services/beer";

function BeerInfiniteList() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetechBeers() {
      try {
        setIsLoading(true);
        const data = await beerService.fetechBeers();

        setBeers(data);
        console.log(data);
      } catch(err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetechBeers();
  }, []);

  return (
    <div>
      <div className="header">
        <h3 className="header__heading">The Beer Bank</h3>
        <p className="header__description">Find Your favorite beer here</p>
        <input className="header__input" type="search" placeholder="Search here.." />
      </div>

      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div  className="container">
          {beers.map((beer) => (
            <div key={beer.id}  className="card">
                  <Link to={`/beers/${beer.id}`}></Link>
               <h1 className="card__heading">{beer.name}</h1>
              <p>{beer.tagline}</p>
              <div
                className="card__img-container"
                style={{ backgroundImage: `url(${beer.image_url})` }}
              />
              <p>{beer.tagline}</p>
            </div>
           
          ))}
        </div>
      )}
    </div>
  );
}

export default BeerInfiniteList;


