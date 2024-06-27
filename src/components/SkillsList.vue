<template>
  <div id="skills-list" class="container mx_auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(skill, idx ) in skills" :key="idx">
        <div class="flex flex-row space-x-4">
          <div class="bg-white p-4 rounded-lg shadow-md w-3/4 h-3/4">
            <h2 class="font-semibold text-xl">{{ skill.title }}</h2>
            <h3 class="italic text-md text-left">Competency Level: {{ skill.competency }}</h3>
            <p class="text-md italic text-left">Years: {{ skill.years }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SkillsList',
  data() {
    return {
      skills: [
        {
          title: 'Bash',
          competency: 3,
          years: '10+',
        },
        {
          title: 'Bootstrap',
          competency: 4,
          years: '8',
        },
        {
          title: 'C#',
          competency: 1,
          years: '1',
        },
        {
          title: 'Docker',
          competency: 3,
          years: 4,
        },
        {
          title: 'Git',
          competency: 3,
          years: 5,
        },
        {
          title: 'HTML/CSS',
          competency: 5,
          years: '10+',
        },
        {
          title: 'Javascript',
          competency: 3,
          years: '10+',
        },
        {
          title: 'JMeter Load Testing',
          competency: 3,
          years: '1',
        },
        {
          title: 'JQuery',
          competency: 4,
          years: '10+',
        },
        {
          title: 'Laravel',
          competency: 5,
          years: '10+',
        },
        {
          title: 'MySql',
          competency: 4,
          years: '10+',
        },
        {
          title: 'MSSql',
          competency: 3,
          years: '8',
        },
        {
          title: 'PHP',
          competency: 4,
          years: '10+',
        },
        {
          title: 'Python',
          competency: 2,
          years: 2,
        },
        {
          title: 'Perl',
          competency: 3,
          years: '5',
        },
        {
          title: 'React',
          competency: 2,
          years: '2',
        },
        {
          title: 'React Native',
          competency: 2,
          years: '1',
        },
        {
          title: 'SQLite',
          competency: 4,
          years: '4',
        },
        {
          title: 'Tailwind CSS',
          competency: 3,
          years: '1',
        },
        {
          title: 'Vue',
          competency: 3,
          years: '3',
        },
        {
          title: 'Wordpress',
          competency: 3,
          years: '10+',
        },
      ],
    };
  },
}

</script>
<style>


</style>