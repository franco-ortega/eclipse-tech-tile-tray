const { NEXT_PUBLIC_API_URL } = process.env;
const METHODS_WITHOUT_BODY = ['GET', 'DELETE'];

const request = async (method, path, data) => {
  console.log({ method });
  console.log({ path });
  console.log({ data });
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

  console.log({ response });

  return response;
};

export const getData = (path) => request('GET', path);
export const postData = (path, data) => request('POST', path, data);
export const putData = (path, data) => request('PUT', path, data);
export const deleteData = (path) => request('DELETE', path);
