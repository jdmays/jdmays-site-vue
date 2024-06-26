<template>
  <div id="wrapper" class="flex flex-row min-h-screen">
    <div class="h-full w-2/5 bg-purple-100 text-black">
      <Sidebar/>
    </div>
    <div class="h-full w-3/5 bg-purple-100 text-black">
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
export default {
  name: 'Layout',
  components: {
    Sidebar,
  }
}

</script>
<style>


</style>