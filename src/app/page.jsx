import React from "react";
const api_key = process.env.API_KEY;

export default async function Home() {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/getnew",
    params: {
      region: "IN",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };
   try {
     const response = await axios.request(options);
     console.log(response.data);
   } catch (error) {
     console.error(error);
   }

  return <div></div>;
}
