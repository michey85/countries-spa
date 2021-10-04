const BASE_URL = 'https://restcountries.com/v2/';
const API_KEY = process.env.REACT_APP_API_KEY;


export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';
export const searchByCountry = (name) => BASE_URL + 'name/' + name + '?access_key=' + API_KEY;
export const filterByRegion = (region) => BASE_URL + 'region/' + region + '?access_key=' + API_KEY;
