import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Education from '@/pages/Education.vue';
import Skills from '@/pages/Skills.vue';
import Experience from '@/pages/Experience.vue';
import Resume from '@/pages/Resume.vue';
import Layout from '@/layouts/Layout.vue';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            { path: '', name: 'Home', component: Home },
            { path: 'education', name: 'Education', component: Education },
            { path: 'skills', name: 'Skills', component: Skills },
            { path: 'experience', name: 'Experience', component: Experience },
            { path: 'resume', name: 'Resume', component: Resume }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
