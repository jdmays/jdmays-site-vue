<template>
<div id="jobs-list">
  <div v-for="(info, idx ) in jobs" :key="idx">
    <div class="flex flex-row space-x-4">
      <div class="flex flex-col text-left p-3">
        <h2 class="font-semibold text-xl">{{info.company}}</h2>
        <h3 class="font-semibold italic text-xl">{{info.position}} | {{info.startYear}} - {{info.endYear}}</h3>
        <p class="text-md italic">{{info.comment}}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'JobsList',
  data() {
    return {
      jobs: [
        {
          company: 'Informulate, LLC',
          position: 'Senior Software Engineer ',
          start: 'October 2021',
          end: 'June 2024',
          startYear: '2021',
          endYear: '2024',
          summary: `Informulate delivers measurable business impact through the innovative application of software`,
          comment: 'For this company, I spent the majority of my time writing code for a financial services client. The greatest challenge ' +
              'was learning the business rules unique to the financial services industry. Mostly I worked with Laravel and JQuery in Docker containers.',
          highlights: [
            'Provide programming for web applications, employing a comprehensive range of technologies to meet customer needs.',
            'Collaborate with cross-functional teams to design, develop, and implement solutions that enhance user experience and drive business growth.',
            'Continuously innovate and improve existing systems based on market demand and emerging technologies.',
          ],
        },
        {
          company: 'Lightning Step Technologies',
          position: 'Senior Developer (Vice President of Product Development)',
          start: 'December 2015',
          end: 'November 2020',
          startYear: '2015',
          endYear: '2020',
          summary: `Lightning Step Technologies provides software for behavioral health care throughout the US.`,
          comment: 'I helped found this startup.  For the first two years I was not just the lead programmer, but the only programmer.',
          highlights: [
            'Co-founded the company and spearheaded the development of an Electronic Medical Record Application, the flagship product of the organization.',
            'Managed the entire Software as a Service (SaaS) lifecycle during the initial two years, ensuring seamless delivery and customer satisfaction.',
            'Led product enhancements based on market research and customer feedback, contributing to the company\'s growth and success.',
          ],
        },
        {
          company: 'Kiva Recovery Center ',
          position: 'Director of Information Technology',
          start: 'January 2013',
          end: 'December 2015',
          startYear: '2013',
          endYear: '2015',
          summary: `Kiva Recovery provided Addiction Treatment Services in the Northern Suburbs of Chicago.`,
          comment: `I helped found this startup. Not only did I set up all of the computers and related equipment,
        but I also wrote the application they used to document their services. Unfortunately, the organization no longer exists.`,
          highlights: [
            'Established information technology infrastructure for company startup, including software development and network management.',
            'Developed software solutions for documentation of services provided, optimizing internal processes and improving data management.',
            'Provided training and ongoing support to users, ensuring smooth operation of IT systems.',
          ],
        },

        {
          company: 'Village of Stillman Valley',
          position: 'President/Mayor',
          start: 'March 2004',
          end: 'April 2013',
          startYear: '2004',
          endYear: '2013',
          summary: `The Village of Stillman Valley is located in Northern Illinois.`,
          comment: `We lived in Stillman Valley for 23 years.  I love the place and I was privileged to be able to be involved in charting its future.`,
          highlights: [
            'Elected to two consecutive terms, serving as the Chief Executive for the Village of Stillman Valley, Illinois.',
            'Implemented strategic initiatives to promote community development and enhance quality of life for residents.',
            'Improved financial reporting and practiced fiscal responsibility to result in a financial surplus.',
            'Led effort to build a multi-million dollar wastewater treatment plant.',
          ],
        },
        {
          company: 'Netsmart Technologies',
          position: 'Senior Solution Architect',
          start: 'August 2005',
          end: 'August 2012',
          startYear: '2005',
          endYear: '2012',
          summary: `Netsmart provides software for behavioral health organizations.`,
          comment: `I started as a Project Manager.  I traveled to Addiction Treatment Centers to collect their requirements and translate them into requirements for
        the programmers back at the office. Ultimately, I was able to write the code myself whenever necessary.`,
          highlights: [
            'Managed projects for new customer implementations, overseeing technical design requirements and providing consultation on industry best practices.',
            'Led a team of project managers in the development and implementation process for new customer organizations, ensuring successful project delivery.',
          ],
        },

        {
          company: 'Rosecrance Health Network',
          position: 'Vice-President of Administrative Services',
          start: 'January 1998',
          end: 'August 2005',
          startYear: '1998',
          endYear: '2005',
          summary: `Rosecrance Health Network provides Addiction Treatment in Northern Illinois.`,
          comment: `I started as the Director of the Employee Assistance Program and ultimately took on greater responsibility as a VP for the organization.`,
          highlights: [
            'Provided leadership to HealthNet Employee Assistance Program and staff. Including clinical decision making and communication with customers.',
            'Managed partnerships with various healthcare entities to enhance operational efficiency and collaboration.',
            'Chief Privacy Officer implementing HIPAA policies across the entire organization.',
            'Oversaw Information Technology Department including evaluation and development of clinical information systems.',
          ],
        },
      ],
    };
  },
}

</script>
<style>


</style>