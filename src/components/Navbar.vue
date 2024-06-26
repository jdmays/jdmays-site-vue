<template>
  <header class="fixed top-0 left-0 w-full bg-opacity-75 z-50">
    <nav class="mx-auto px-6 py-3 bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-md shadow-md">
      <div class="flex justify-between items-center">
        <div class="text-white text-2xl font-bold mr-4">
          <router-link to="/">Jim Mays</router-link>
        </div>
        <div class="hidden md:flex space-x-4">
          <router-link class="font-semibold text-white-800 hover:text-indigo-900 hover:bg-purple-100 px-3 py-2 rounded" to="/education">Education
          </router-link>
          <router-link class="font-semibold text-white-800 hover:text-indigo-900 hover:bg-purple-100 px-3 py-2 rounded" to="/experience">Experience
          </router-link>
          <router-link class="font-semibold text-white-800 hover:text-indigo-900 hover:bg-purple-100 px-3 py-2 rounded" to="/skills">Skills</router-link>
          <router-link class="font-semibold text-white-800 hover:text-indigo-900 hover:bg-purple-100 px-3 py-2 rounded" to="/resume">Resume</router-link>
        </div>
      </div>
    </nav>

    <div class="md:hidden bg-purple-100">
      <button @click="toggleMenu"
              class="flex rounded-md text-white text-2xl font-bold px-6 py-3 bg-gradient-to-r from-purple-900 to-indigo-900">
        &#9776;
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden flex flex-row space-y-4 mt-4 bg-purple-100 w-2/5">
      <ul class="w-full">
        <li @click="closeMenu"
            class="text-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 rounded">
          <router-link
              class="font-semibold text-white-800 hover:text-white px-1 py-2 rounded"
              to="/education">Education
          </router-link>
        </li>
        <li @click="closeMenu"
            class="text-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 rounded">
          <router-link
              class="font-semibold text-white-800 hover:text-white px-1 py-2 rounded"
              to="/experience">Experience
          </router-link>
        </li>
        <li @click="closeMenu"
            class="text-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 rounded">
          <router-link
              class="font-semibold text-white-800 hover:text-white px-1 py-2 rounded"
              to="/skills">Skills
          </router-link>
        </li>
        <li @click="closeMenu"
            class="text-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 rounded">
          <router-link
              class="font-semibold text-white-800 hover:text-white px-1 py-2 rounded"
              to="/resume">Resume
          </router-link>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>

</style>
