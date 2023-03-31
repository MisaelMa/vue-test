<script setup lang="ts">
import { ref, watch } from 'vue'
import UserDetails from "./UserDetails.vue"
const props = defineProps({
  userId: Number,
  id: Number,
  title: String,
  body: String,
  user: {},
});



</script>
<template>
    <h2 class="text-4xl capitalize dark:text-white">
        {{title}}
    </h2>
    <UserDetails class="mt-5" v-bind="user"/>
    <img class="mt-5" src="https://random.imagecdn.app/800/550">
    <div class="mt-5">
         {{body}}
    </div>
    <hr class="mt-5"/>
     <h3 class="text-2xl capitalize dark:text-white">
        Comentarios
    </h3>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
