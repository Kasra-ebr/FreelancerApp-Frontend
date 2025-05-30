import http from "./httpServices";

// Get all projects owned by the user
export async function getOwnerProjectApi() {
  const { data } = await http.get("/project/owner-projects");
  return data;
}

// Delete a project by ID
export async function removeProjectApi(id) {
  const { data } = await http.delete(`/project/${id}`);
  return data;
}

// Get all categories
export async function getCategoryApi() {
  const { data } = await http.get("/category/list");
  return data;
}

// Create a new project
export async function createProjectApi(projectData) {
  const { data } = await http.post("/project/add", projectData);
  return data;
}

// Edit an existing project
export async function editProjectApi({ id, editProject }) {
  const { data } = await http.patch(`/project/update/${id}`, editProject);
  return data;
}

// Toggle project status (OPEN/CLOSED)
export async function toggleProjectStatusApi({ id, data: statusData }) {
  const { data } = await http.patch(`/project/update/${id}`, statusData);
  return data;
}

// Get a specific project by ID
export async function getProjectApi(id) {
  const { data } = await http.get(`/project/${id}`);
  return data;
}

// Change status of a proposal
export async function ChangeProposalStatusApi({ id, data }) {
  const { data: result } = await http.patch(`/proposal/${id}`, data);
  return result;
}
