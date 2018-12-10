const host = () => {
  return 'https://api-iovjewqvro.now.sh';
}

export const get = (router, params = {}) => {
    return fetch(`${host()}${router}`, {...params}); 
};

export const post = (router, body) => {
  return fetch(`${host()}${router}`, {
    method: "POST",
  });
};

