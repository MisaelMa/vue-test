<script setup lang="ts">
import { Button, Toolbar } from "ui";
import PostList from "../components/PostList.vue";
import usePost  from '../common/composable/usePost'
const { blogs, error, loading } = usePost()
</script>
<template>

  <p v-if="loading">Cargando...</p>
  <p v-if="error">Error: {{ error }}</p>
  <div v-if="blogs" >
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
    <PostList v-for="(blog,i) of blogs" :key="i" v-bind="blog" />
  </div>
</div>
</template>