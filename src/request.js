const host = () => 'https://api-iovjewqvro.now.sh';

export const get = (router, params = {}) => fetch(`${host()}${router}`, { ...params });

export const post = (router, body) => fetch(`${host()}${router}`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

export const put = (router, body) => fetch(`${host()}${router}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});
