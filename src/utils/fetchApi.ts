const BASE_URL = 'http://localhost:5000';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = async (url: string, method: string, headers = {}) => {
  let res;
  let data;
  switch (method) {
    case 'GET':
      res = await fetch(BASE_URL + url, { headers });
      if (res.status !== 200 && res.status !== 201) throw new Error('ERROR');
      data = await res.json();
      return data;
  }
};
