"use server";

const MAX_LIMIT: number = 100;
const API_URL: string = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records";


export async function fetchSerchedData(value:string){
  const response = await fetch(
    `${API_URL}?where=ascii_name%20like%20%22${value}%22&limit=${MAX_LIMIT}`
  );

  var data = await response.json();
  data = data.results;
  
return data;

};
