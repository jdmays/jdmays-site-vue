<template>
  <div>
    <h3 class="text-2xl mx-8 px-8 sm:px-4 sm:mx-4 font-bold text-black">Experience</h3>
    <div class="border-t border-purple-900 my-4"></div>
    <p class="text-block text-left">
      I've had two successful careers involving a great deal of responsibility and domain specific knowledge.
    </p>
    <p class="text-block text-left">
      (This is an abridged version of my resume.  The full resume may be downloaded from the sidebar.)
    </p>
    <div class="border-t border-purple-900 my-4"></div>
    <JobsList />
  </div>
</template>

<script>
import JobsList from '../components/JobsList.vue';
export default {
  name: 'Experience',
  components: {
    JobsList
  }
}
</script>
