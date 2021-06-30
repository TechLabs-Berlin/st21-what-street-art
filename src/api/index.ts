import { stringifyUrl } from "query-string";
import { URL, URLEndpoint } from "../config";

export const getNearYou = async (lat: number, lng: number) => {
  // TODO: Uncomment once Darine fixes API
  // const baseUrl = `${URL.base}/${URLEndpoint.nearYou}`;
  const baseUrl =
    "https://raw.githubusercontent.com/ythecombinator/wsa-server-mock/main/db.json";
  const url = stringifyUrl({ url: baseUrl, query: { lat, lng } });

  const rawResponse = await fetch(url);
  const response = rawResponse.json();

  return response;
};
