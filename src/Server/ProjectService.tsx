import http from "./httpServices";

export async function getOwnerProjectApi() {
  const { data } = await http.get("/project/owner-projects");
  return data;
}

export async function removeProjectApi(id) {
  const { data } = await http.delete(`/project/${id}`);
  return data;
}

export async function getCategoryApi() {
  const { data } = await http.get("/category/list");
  return data;
}

export async function createProjectApi(projectData) {
  const { data } = await http.post("/project/add", projectData);
  return data;
}

export async function editProjectApi({ id, data }) {
  const { data: responseData } = await http.patch(`/project/update/${id}`, data);
  return responseData;
}

export async function toggleProjectStatusApi({ id, data }) {
  const { data: responseData } = await http.patch(`/project/update/${id}`, data);
  return responseData;
}

export async function getProjectApi(id) {
  const { data } = await http.get(`/project/${id}`);
  return data;
}

export async function changeProposalStatusApi({ id, data }) {
  const { data: result } = await http.patch(`/proposal/${id}`, data);
  return result;
}

export async function logoutApi() {
  const { data } = await http.post("/user/logout");
  return data;
}
