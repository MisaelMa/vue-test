<script setup lang="ts">
import { Button, Toolbar } from "ui";
import PostList from "../components/PostList.vue";
import {blogService} from "../common/service/blog.service"
const blogs = await blogService.getPostWithUser()
</script>
<template>
<div class="grid grid-cols-2 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
  <div v-for="(blog,i) of blogs" :key="i">
    <PostList v-bind="blog" />
  </div>
</div>
</template>