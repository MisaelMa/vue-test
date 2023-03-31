<script setup>
const props = defineProps({
  userId: Number,
  id: Number,
  title: String,
  body: String,
  user: {},
});

const vTrimText = {
  beforeMount: (el, binding) => {
    console.log(binding.value);
    const payload = binding.value;
    const { maxLength, last = "...." } = payload;
    const text = el.innerText;
    el.innerText =
      text.length > maxLength ? text.slice(0, maxLength) + last : text;
  },
};
</script>
<template>
  <div
    class="max-w-sm p-1 overflow-hidden rounded shadow-lg hover:text-white h-60 hover:bg-green-600 border-neutral-800"
  >
    <a :href="`#/post/${id}`">
      <div class="px-6 py-4">
        <div
          v-trim-text="{ maxLength: 20, last: '' }"
          class="mb-2 text-xl font-bold"
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