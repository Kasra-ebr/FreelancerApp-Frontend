import http from "./httpServices";

export async function changeProposalStatusApi({ proposalId, ...rest }) {
  const { data: response } = await http.patch(`/proposal/${proposalId}`, rest);
  return response;
}

export async function getproposalsApi() {
  const { data: response } = await http.get(`/proposal/list`);
  return response;
}

export async function createProposalApi(data) {
  const { data: response } = await http.post(`/proposal/add`, data);
  return response;
}
