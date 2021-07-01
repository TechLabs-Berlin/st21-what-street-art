import { stringifyUrl } from "query-string";
import { URL, URLEndpoint } from "../config";

export const getNearYou = async (lat: number, lng: number) => {
  const baseUrl = `${URL.base}/${URLEndpoint.nearYou}`;
  const url = stringifyUrl({ url: baseUrl, query: { lat, lng } });

  const rawResponse = await fetch(url);
  const response = rawResponse.json();

  return response;
};
