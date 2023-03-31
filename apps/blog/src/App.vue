<script setup lang="ts">
import { Toolbar } from "ui";
</script>

<template>
  <Toolbar>
    <a href="#" class="flex items-center">
      <img src="../src/assets/vue.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >Blog</span
      >
    </a>
   
    <div
      class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul
        class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Home</a
          >
        </li>
    
     
      </ul>
    </div>
  </Toolbar>
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
        <a href="https://recreando.dev" class="hover:underline">Recreando By Amir Marin</a>.
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
