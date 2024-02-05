import { API_URL } from "./constants";

async function httpPost(endpoint: string, data: any) {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  };

  const url = `${API_URL}/${endpoint}`;

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
}

export { httpPost };
