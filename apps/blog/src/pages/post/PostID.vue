<script setup>
import PostItem from "../../components/PostItem.vue";
import Coment from '../../components/Coment.vue'
import { useRoute } from "vue-router";
import useFetch from "../../common/composable/useFetch";
import { blogService } from "../../common/service/blog.service";
import { commentsService } from "../../common/service/comments.service";
import { watch } from "vue";
const { params } = useRoute();
const { id } = params;
const { data, error, loading } = useFetch({
  fetchService: blogService.getPostWithUser(id),
});

const {
  data: comments,
  error: errorComment,
  loading: loadingComments,
  fetchData: getComents,
} = useFetch({
  fetchService: commentsService.getCommentsByPost(id),
  startCall: false,
});

watch(
  () => data.value,
  () => {
    getComents();
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
<template>
  <div
    class="container w-full h-full p-10 pt-20 mx-auto border gray-blue-500 hover:gray-blue-700 md:max-w-3xl"
  >
    <PostItem v-if="data" v-bind="data" />
    <div v-if="comments">
      <Coment v-for="(coment,c) of comments" v-bind="coment" :key="c" />
    </div>
  </div>
</template>