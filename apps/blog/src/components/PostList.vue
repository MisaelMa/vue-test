<script setup>
import { TrimText as vTrimText} from '../common/directives/TrimText'
const props = defineProps({
  userId: Number,
  id: Number,
  title: String,
  body: String,
  user: {},
});


</script>
<template>
  <div
    class="max-w-sm p-1 overflow-hidden rounded shadow-lg hover:text-white h-60 hover:bg-green-600 border-neutral-800"
  >
    <a :href="`#/post/${id}`">
      <div class="px-6 py-4">
        <div
          v-trim-text="{ maxLength: 20, last: '...' }"
          class="mb-2 text-xl font-bold capitalize"
        >
          {{ title }}
        </div>
        <p v-trim-text="{ maxLength: 60 }" class="text-base">
          {{ body }}
        </p>
        <p class="text-base">
          {{ user.name }}
        </p>
      </div>
    </a>
  </div>
</template>