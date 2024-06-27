<template>
  <div>
    <h3 class="text-2xl mx-8 px-8 sm:px-4 sm:mx-4 font-bold text-black">Education</h3>
    <div class="border-t border-purple-900 my-4"></div>
    <p class="text-block text-left">
      My degrees are obviously not in Computer Science or a related field.  I've been asked why I didn't pursue computer science
      right after high school. In 1982, it was a totally different field than it is now and the type of jobs I would ultimately have
      hadn't been invented yet. How many people can say they used an Apple II or owned a Commodore 64 with the 128K expansion module?
    </p>
    <div class="border-t border-purple-900 my-4"></div>
    <EducationList />
  </div>
</template>

<script>
import EducationList from '../components/EducationList.vue';
export default {
  name: 'Education',
  components: {
    EducationList
  }
}
</script>
