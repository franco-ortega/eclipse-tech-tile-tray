const { NEXT_PUBLIC_API_URL } = process.env;
const METHODS_WITHOUT_BODY = ['GET'];

const request = async (method, path, data) => {
  const headers = METHODS_WITHOUT_BODY.includes(method)
    ? {}
    : {
        'Content-Type': 'application/json'
      };

  const response = await fetch(`${NEXT_PUBLIC_API_URL}${path}`, {
    method,
    headers,
    body: JSON.stringify(data)
  }).then((res) => res.json());

  return response;
};

export const getData = (path) => request('GET', path);
export const postData = (path, data) => request('POST', path, data);
export const putData = (path, data) => request('PUT', path, data);
export const deleteData = (path, data) => request('DELETE', path, data);
