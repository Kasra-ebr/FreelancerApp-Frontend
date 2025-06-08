import http from "./httpServices";

export async function changeProposalStatusApi({ id, data }) {
  const { data } =  await http.patch(`/proposal/${id}`);
  return data;
}

export async function getproposalsApi () {
    const {data} = await http.patch(`/proposal/list`)
    return data
}