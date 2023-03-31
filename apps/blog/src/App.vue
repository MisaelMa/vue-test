<script setup lang="ts">
import { Toolbar } from "ui";
</script>

<template>
  <Toolbar />
  <main class="container w-full h-full pt-20 mx-auto">
    <router-view v-slot="{ Component }">
      <suspense>
        <component :is="Component" />
      </suspense>
    </router-view>
  </main>

  <footer class="m-4 bg-white dark:bg-gray-800">
    <div
      class="container w-full p-4 mx-auto md:p-6 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>.
        All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="/privacy-policy" class="mr-4 hover:underline md:mr-6"
            >Politica de Privacidad</a
          >
        </li>
        <li>
          <a href="/terms-and-conditions" class="mr-4 hover:underline md:mr-6"
            >Terminos Y condiciones
          </a>
        </li>
        <li>
          <a href="/contact" class="hover:underline">Contacto</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
