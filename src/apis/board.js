import axios from "axios";

async function getBoardList(pageNo = 1) {
  let response = null;
  try {
    response = await axios.get("/board/list", {
      params: {
        // 쿼리스트링으로 어떤 페이지 요청하는지 정보 넘기기
        pageNo: pageNo,
      },
    });
  } catch (error) {
    console.log(error);
  }
  console.log(response.data);
  return response ? response.data : null;
}
async function createBoard(board) {
  const response = await axios.post("/board/", board);
  console.log(response.data);
}
async function readBoard(bno) {
  const response = await axios.get(`/board/${bno}`);
  console.log(response.data);
}
async function deleteBoard(bno) {
  const response = await axios.delete(`/board/${bno}`);
  console.log(response.data);
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  deleteBoard,
};
