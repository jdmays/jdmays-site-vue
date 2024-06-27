<template>
  <div>
    <h3 class="text-2xl mx-8 px-8 sm:px-4 sm:mx-4 font-bold text-black">Skills</h3>
    <div class="border-t border-purple-900 my-4"></div>
    <p class="text-block text-left">
      I've done a lot of different things throughout the years. When I first started the World Wide Web was becoming
      a huge thing. This allowed me to take on challenges like setting up web servers and mail servers with Linux, writing Perl scripts to
      parse text and make web pages interactive and dynamic, and writing programs with Visual Basic
      (V3.0). The last several years I've worked a lot with Laravel/PHP, MySql, and Jquery or Javascript.
    </p>
    <p class="text-block text-left my-4">
      I've included a self-assessment of my competency level. It's on a scale of 1-5 with 5 being the highest level. I've done a
      lot over the past several years, but if I haven't used a specific skill in the last 5 years or so, I don't want to portray myself as an
      expert at that thing.
    </p>
    <div class="border-t border-purple-900 my-4"></div>
    <SkillsList />

  </div>
</template>

<script>
import SkillsList from '../components/SkillsList.vue';
export default {
  name: 'Skills',
  components: {
    SkillsList
  }
}
</script>
