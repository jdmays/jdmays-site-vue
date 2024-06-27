<template>
<div id="education-list">
  <div v-for="(info, idx ) in degrees" :key="idx">
    <div class="flex flex-row space-x-4">
      <div class="flex flex-col text-left p-3">
        <h2 class="font-semibold text-2xl">{{info.degree}}</h2>
        <h3 class="font-semibold text-xl">{{info.school}} | {{info.year}}</h3>
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'EducationList',
  data() {
    return {
      degrees: [
        {
          school: 'Trinity International University',
          degree: 'M.A. Counseling Psychology',
          link: 'https://tiu.edu',
          year: 1988,
        },
        {
          school: 'Trinity International University',
          degree: 'B.A. Psychology',
          link: 'https://tiu.edu',
          year: 1986,
        },
      ],
    };
  },
}

</script>
<style>


</style>