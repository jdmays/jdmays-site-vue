<template>
    <h3 class="text-2xl mx-8 px-8 sm:px-4 sm:mx-4 font-bold text-black">Jim Mays</h3>
    <section class="mx-8 px-8 sm:px-4 sm:mx-4 md:px-4 md:mx-4 space-y-4">
      <div class="text-md tracking-wider">JDMays@gmail.com</div>

      <div class="border-t border-purple-900 my-4"></div>

      <h4 class="text-xl font-bold">About Me</h4>
      <p class="text-black text-left">I'm Jim Mays.</p>
      <p class="text-block text-left">
        I'm a web application developer that really enjoys Making The Magic.
        I've been developing web applications since the days of Perl CGI
        scripts and I've worked with a variety of technologies over the years,
        but I'm always looking for new challenges.
      </p>

      <p class="text-block pb-8 text-left">
      This site is a little different than just my resume. After all, why
      would you need to visit if there wasn't something more? I think
      of this as my amplified resume. It's a little more information than
      what you might get off a job application or pdf. I hope you enjoy it.
      </p>

      <div class="w-1/3">
      <a href="/jim_mays_resume.pdf"
         class="text-white bg-gradient-to-r from-purple-900 to-indigo-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        <font-awesome-icon icon="fa-solid fa-file-pdf" size="lg"/>
        <span class="hidden sm:inline pl-2">Download Resume</span>
      </a>
      </div>

      <ul class="flex flex-wrap justify-center md:justify-start space-x-4 py-2 pt-8">
        <li class="text-gray-600">
          <a href="https://www.linkedin.com/in/jdmays/" aria-label="LinkedIn">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
          </a>
        </li>
        <li class="text-gray-600">
          <a href="https://github.com/jdmays" aria-label="Github/jdmays">
            <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
          </a>
        </li>
        <li class="text-gray-600">
          <a href="mailto:jdmays@gmail.com" aria-label="jdmays@gmail.com">
            <font-awesome-icon icon="fa-solid fa-envelope" size="2x"/>
          </a>
        </li>
        <li class="text-gray-600 flex items-center">
          <font-awesome-icon icon="fa-brands fa-vuejs" size="2x"/>
        </li>
      </ul>


      <div class="border-t border-purple-900 my-4"></div>
    </section>


</template>
<script>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  Name: 'Sidebar',
}


</script>
<style>

</style>