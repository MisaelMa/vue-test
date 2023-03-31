<script setup>
import { computed } from "vue";

const props = defineProps({
  id: Number,
  name: String,
  email: String,
});
const getAvatarURl = computed(()=>`https://ui-avatars.com/api/?name=${props.name}`)
</script>
<template>
  <div class="flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img
        class="w-8 h-8 rounded-full"
        :src="getAvatarURl"
        alt="Neil image"
      />
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
        {{ name }}
      </p>
      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        {{ email }}
      </p>
    </div>
    <div
      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
    >
    
    </div>
  </div>
</template>