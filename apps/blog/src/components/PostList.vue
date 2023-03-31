<script setup>
const props = defineProps({
  userId: Number,
  id: Number,
  title: String,
  body: String,
  user: {},
});

const vTrimText = {
  beforeMount: (el,binding) => {
    console.log(binding.value);
    const payload = binding.value
    const {maxLength, last = '....'} = payload
    const text = el.innerText;
    el.innerText = text.length > maxLength ? text.slice(0, maxLength) + last : text;
  }
}
</script>
<template>
  <div class="h-56 max-w-sm p-1 overflow-hidden rounded shadow-lg border-neutral-800 ">
    <div class="px-6 py-4">
      <div v-trim-text="{maxLength:20,last:''}" class="mb-2 text-xl font-bold">
        {{ title }}
      </div>
      <p v-trim-text="{maxLength:60,}" class="text-base text-gray-700">
        {{ body }}
      </p>
      <p class="text-base text-gray-700">
        {{ user.name }}
      </p>
        <a :href="`#/post/${id}`"><button type="button" class="btn btn-outline-success">Read More</button></a>
    </div>
   </div>
</template>