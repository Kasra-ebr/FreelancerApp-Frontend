import http from "./httpServices";

export async function changeProposalStatusApi({ id, data }) {
  const { data: response } = await http.patch(`/proposal/${id}`, data);
  return response;
}

export async function getproposalsApi() {
  const { data: response } = await http.get(`/proposal/list`);
  return response;
}