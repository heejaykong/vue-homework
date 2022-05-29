<template>
  <div class="card">
    <div class="card-header">List</div>
    <div class="card-body">
      <div v-if="page">
        <div class="mb-3">
          <router-link to="/menu07/board/writeform" class="btn btn-info btn-sm">Board 생성</router-link>
        </div>

        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="width: 70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width: 90px">글쓴이</th>
              <th class="text-center" style="width: 120px">날짜</th>
              <th class="text-center" style="width: 70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board of page.boards" :key="board.bno">
              <td class="text-center">{{ board.bno }}</td>
              <td>
                <router-link to="#">
                  {{ board.btitle }}
                </router-link>
              </td>
              <td class="text-center">{{ board.mid }}</td>
              <td class="text-center">{{ new Date(board.bdate).toLocaleDateString() }}</td>
              <td class="text-center">{{ board.bhitcount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiBoard from "@/apis/board";
const route = useRoute();
const router = useRouter();

const page = ref(null);

async function getBoardList(pageNo) {
  page.value = await apiBoard.getBoardList(pageNo);
  console.log(page.value.boards);
}
getBoardList(1);

</script>

<style scoped></style>
