import axios from "axios";
import pinterpolate from "pinterpolate";

import config from "../config";

export const fetechBeers = async()=>{
    const url = `${config.apiUrl}${config.endpoints.beers}`;
    const { data } = await axios.get(url);
  
    return data;
};

export const fetechBeersById = async (id)=>{
    const url = `${config.apiUrl}${config.endpoints.beer}`;

    const { data } = await axios.get(pinterpolate(url, { id }));
    return data[0];

};