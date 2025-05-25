const client = {
  baseURL: "",
  withCredential: true,
};

const http = {
  get: client.get,
  delete: client.delete,
  post: client.post,
  put: client.put,
  patch: client.patch,
};


export default http